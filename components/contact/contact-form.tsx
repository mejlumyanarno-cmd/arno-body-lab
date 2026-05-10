"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { type ContactInput, contactSchema } from "@/lib/validators/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Input placeholder="Name" autoComplete="name" {...register("name")} />
        {errors.name ? <p className="mt-2 text-xs text-ember">{errors.name.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Email" type="email" autoComplete="email" {...register("email")} />
        {errors.email ? <p className="mt-2 text-xs text-ember">{errors.email.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Goal: fat loss, muscle gain, coaching" {...register("goal")} />
        {errors.goal ? <p className="mt-2 text-xs text-ember">{errors.goal.message}</p> : null}
      </div>
      <div>
        <Textarea placeholder="Tell me your goal, timeline and current training level." {...register("message")} />
        {errors.message ? <p className="mt-2 text-xs text-ember">{errors.message.message}</p> : null}
      </div>
      {status === "sent" ? (
        <p className="text-sm text-white/65">Request sent. You will receive a coaching reply by email.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-ember">Message could not be sent. Check Resend config and try again.</p>
      ) : null}
      <Button type="submit" variant="danger" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" size={17} /> : <Send size={17} />}
        Send request
      </Button>
    </form>
  );
}
