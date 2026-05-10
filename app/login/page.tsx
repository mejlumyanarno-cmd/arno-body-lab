import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your premium online coaching dashboard."
};

export default function LoginPage() {
  return (
    <section className="container-px mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-center pb-20 pt-32">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[.28em] text-ember">Client access</p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-bone">Log in</h1>
        <p className="mt-4 text-sm leading-6 text-white/58">
          Enter the account created during checkout to open your training dashboard.
        </p>
        <div className="mt-7">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
        <p className="mt-6 text-sm text-white/50">
          New client?{" "}
          <Link href="/register" className="font-semibold text-bone">
            Create account
          </Link>
        </p>
      </Card>
    </section>
  );
}
