"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { type RegisterInput, registerSchema } from "@/lib/validators/auth";

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      programSlug: searchParams.get("program") ?? undefined,
      plan: searchParams.get("plan") ?? undefined
    }
  });

  async function onSubmit(values: RegisterInput) {
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          full_name: values.fullName,
          program_slug: values.programSlug,
          plan: values.plan
        },
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    });

    if (error) {
      setServerError(error.message);
      return;
    }

    const checkoutResponse = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        programSlug: values.programSlug,
        plan: values.plan
      })
    });

    if (checkoutResponse.ok) {
      const payload = (await checkoutResponse.json()) as { url?: string };
      if (payload.url) {
        window.location.href = payload.url;
        return;
      }
    }

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Input placeholder="Full name" autoComplete="name" {...register("fullName")} />
        {errors.fullName ? <p className="mt-2 text-xs text-ember">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Email" type="email" autoComplete="email" {...register("email")} />
        {errors.email ? <p className="mt-2 text-xs text-ember">{errors.email.message}</p> : null}
      </div>
      <div>
        <Input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          {...register("password")}
        />
        {errors.password ? <p className="mt-2 text-xs text-ember">{errors.password.message}</p> : null}
      </div>
      <input type="hidden" {...register("programSlug")} />
      <input type="hidden" {...register("plan")} />
      {serverError ? <p className="text-sm text-ember">{serverError}</p> : null}
      <Button type="submit" variant="danger" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" size={17} /> : null}
        Create account
      </Button>
    </form>
  );
}
