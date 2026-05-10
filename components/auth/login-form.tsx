"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { type LoginInput, loginSchema } from "@/lib/validators/auth";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  async function onSubmit(values: LoginInput) {
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      setServerError(error.message);
      return;
    }

    router.replace(searchParams.get("next") ?? "/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Input placeholder="Email" type="email" autoComplete="email" {...register("email")} />
        {errors.email ? <p className="mt-2 text-xs text-ember">{errors.email.message}</p> : null}
      </div>
      <div>
        <Input
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password ? <p className="mt-2 text-xs text-ember">{errors.password.message}</p> : null}
      </div>
      {serverError ? <p className="text-sm text-ember">{serverError}</p> : null}
      <Button type="submit" variant="danger" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" size={17} /> : null}
        Log in
      </Button>
    </form>
  );
}
