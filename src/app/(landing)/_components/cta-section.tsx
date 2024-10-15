import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-violet-500 to-purple-600 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Understand Your Users, Fix Bugs and Boost Earnings
            </h2>
            <p className="mx-auto max-w-[600px] text-violet-100 md:text-xl">
              FeedbackThing offers an easy way to capture, organize, and act on
              user feedback. Start improving your product today.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              className="bg-yellow-500 text-white transition-colors hover:bg-violet-200"
              asChild
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white text-violet-600 transition-colors hover:bg-violet-400 hover:text-white"
              asChild
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
