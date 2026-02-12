# Origin Access Control for secure S3 access
resource "aws_cloudfront_origin_access_control" "assets" {
  name                              = "memento-academy-assets-oac"
  description                       = "OAC for Memento Academy S3 assets"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront distribution for static assets CDN
resource "aws_cloudfront_distribution" "assets" {
  origin {
    domain_name              = aws_s3_bucket.assets.bucket_regional_domain_name
    origin_id                = "S3-memento-assets"
    origin_access_control_id = aws_cloudfront_origin_access_control.assets.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Memento Academy static assets CDN"
  price_class         = "PriceClass_100" # US + Europe (cost-conscious)

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-memento-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    cache_policy_id            = aws_cloudfront_cache_policy.assets.id
    origin_request_policy_id   = aws_cloudfront_origin_request_policy.cors.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  custom_error_response {
    error_code            = 403
    response_code         = 404
    response_page_path    = ""
    error_caching_min_ttl = 300
  }
}

# Cache policy: long-lived for static assets
resource "aws_cloudfront_cache_policy" "assets" {
  name        = "memento-assets-cache-policy"
  min_ttl     = 86400    # 1 day minimum
  default_ttl = 604800   # 7 days default
  max_ttl     = 2592000  # 30 days maximum

  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true
  }
}

# Origin request policy: forward CORS headers
resource "aws_cloudfront_origin_request_policy" "cors" {
  name = "memento-cors-policy"

  cookies_config {
    cookie_behavior = "none"
  }

  headers_config {
    header_behavior = "whitelist"
    headers {
      items = ["Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers"]
    }
  }

  query_strings_config {
    query_string_behavior = "none"
  }
}

# Response headers policy: security headers
resource "aws_cloudfront_response_headers_policy" "security" {
  name = "memento-security-headers"

  security_headers_config {
    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }
  }

  cors_config {
    access_control_allow_credentials = false

    access_control_allow_headers {
      items = ["*"]
    }

    access_control_allow_methods {
      items = ["GET", "HEAD", "OPTIONS"]
    }

    access_control_allow_origins {
      items = concat(
        ["https://${var.domain_name}"],
        var.allowed_origins
      )
    }

    access_control_max_age_sec = 86400
    origin_override            = true
  }
}
