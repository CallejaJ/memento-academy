# Security Measures Strategy

This document outlines the security measures implemented and recommended to protect the Memento Academy registration flow from bot attacks.

## 1. Honeypot Field (Implemented)

We have added a **"Honeypot"** mechanism to the Authentication Modal.

### How it works

- A hidden input field named `fax` (labeled "Fax Number") is added to the form.
- This field is invisible to real users (CSS `opacity: 0`, `z-index: -1`) and hidden from screen readers (`aria-hidden="true"`).
- Bots that scan the HTML often blindly fill out all input fields they find.
- **Defense Logic**: If the `fax` field has ANY value upon submission, we treat the request as a bot attack. We block the API call but simulate a "success" state to the frontend to confuse the bot (making it think it succeeded).

## 2. Cloudflare Turnstile (Recommended)

Since the project uses Supabase for authentication, the most robust "production-grade" protection is integrating **Cloudflare Turnstile** or **hCaptcha** directly via the Supabase Dashboard.

### Implementation Steps

1.  **Create Cloudflare Turnstile Widget**:
    - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > Turnstile.
    - Create a new widget and get the `Site Key` and `Secret Key`.

2.  **Configure Supabase**:
    - Go to Supabase Dashboard > Authentication > Security > Bot Protection.
    - Enable "Turnstile".
    - Paste your `Site Key` and `Secret Key`.

3.  **Frontend Integration**:
    - Supabase's JS Client handles this largely automatically, but you may need to add the captcha token to the `signUp` call if requiring strict enforcement.
    - Refer to: [Supabase Captcha Guide](https://supabase.com/docs/guides/auth/auth-captcha)

## 3. Rate Limiting (Vercel)

Since the application is deployed on Vercel, you benefit from their edge network protection.

- **Vercel Firewall (Pro Plan)**: Allows setting custom rules to block high-frequency IP addresses.
- **Upstash Rate Limiting**: If you need code-level rate limiting for specific API routes, use `@upstash/ratelimit` in your Next.js Middleware.

### Recommendation

Start with the **Honeypot** (already implemented). If you still see bot signups, enable **Cloudflare Turnstile** in Supabase as it provides the best balance of security and user experience (often invisible to humans).
