"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/app/i18n/client";

export function ContactForm({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("contact_page.form.validation.name_min")),
    email: z.string().email(t("contact_page.form.validation.email_invalid")),
    subject: z.string().min(5, t("contact_page.form.validation.subject_min")),
    message: z.string().min(10, t("contact_page.form.validation.message_min")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("contact_page.form.error"));
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      alert(t("contact_page.form.error"));
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSendAnother = () => {
    setIsSuccess(false);
    form.reset();
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
        <div className="w-16 h-16 bg-slate-800/50 border border-cyan-500/20 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {t("contact_page.form.success_title")}
          </h3>
          <p className="text-sm text-slate-400 max-w-sm">
            {t("contact_page.form.success_desc")}
          </p>
        </div>
        <Button
          onClick={handleSendAnother}
          variant="ghost"
          className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 mt-2"
        >
          {t("contact_page.form.back_to_form")}
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  {t("contact_page.form.name")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact_page.form.name_placeholder")}
                    className="bg-slate-800/50 border-slate-700 text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  {t("contact_page.form.email")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("contact_page.form.email_placeholder")}
                    className="bg-slate-800/50 border-slate-700 text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {t("contact_page.form.subject")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("contact_page.form.subject_placeholder")}
                  className="bg-slate-800/50 border-slate-700 text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {t("contact_page.form.message")}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact_page.form.message_placeholder")}
                  className="min-h-[120px] bg-slate-800/50 border-slate-700 text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("contact_page.form.sending")}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t("contact_page.form.submit")}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
