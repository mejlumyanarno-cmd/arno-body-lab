import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/register-form";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your online coaching account and start your subscription."
};

export default function RegisterPage() {
  return (
    <section className="container-px mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center pb-20 pt-32">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Start coaching</p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-bone">Create account</h1>
        <p className="mt-4 text-sm leading-6 text-white/58">
          Create your account, complete payment and receive the program instructions by email.
        </p>
        <div className="mt-7">
          <Suspense>
            <RegisterForm />
          </Suspense>
        </div>
        <p className="mt-6 text-sm text-white/50">
          Already active?{" "}
          <Link href="/login" className="font-semibold text-bone">
            Log in
          </Link>
        </p>
      </Card>
    </section>
  );
}
