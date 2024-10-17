import { SignIn } from "@clerk/nextjs";
import { MessageSquare, Clock, Bot, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side with cool designs and info */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-white p-12 lg:flex lg:w-1/2">
        <div className="z-10 flex h-full flex-col">
          <div className="flex items-center">
            <Link href={"https://zaplineai.com"} className="flex flex-1">
              <Image
                src="/apple-touch-icon.png"
                alt="ZaplineAI Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="ml-3 text-2xl font-bold text-black">
                Zapline AI
              </span>
            </Link>
          </div>
          <div className="flex flex-grow flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Automate 60% of
              <br />
              your support
            </h1>
            <p className="mt-6 max-w-md text-xl text-gray-600">
              Elevate your CX with an Alexa-like Voicebot
            </p>
            <div className="mt-12 space-y-6">
              <FeatureItem
                icon={MessageSquare}
                text="Let customers simply talk to get instant help"
              />
              <FeatureItem
                icon={Clock}
                text="Complete resolutions in under a minute"
              />
              <FeatureItem
                icon={Bot}
                text="Faster than any traditional chatbot"
              />
            </div>
          </div>
        </div>
        {/* Cool background designs */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" fill="#b8ff29" />
            <path
              d="M20,50 Q50,20 80,50 T20,50"
              stroke="#b8ff29"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M20,60 Q50,30 80,60 T20,60"
              stroke="#b8ff29"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M20,70 Q50,40 80,70 T20,70"
              stroke="#b8ff29"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Right side with sign-in component */}
      <div className="flex w-full items-center justify-center rounded-l-3xl bg-black p-8 lg:w-1/2">
        <div className="flex min-h-[600px] w-full max-w-md flex-col items-center justify-between">
          <h2 className="mb-6 text-center text-3xl font-bold text-white">
            Sign In to Zapline AI
          </h2>
          <div className="flex w-full flex-grow items-center justify-center">
            <SignIn />
          </div>
          <div className="mt-6 text-center text-sm text-gray-400">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="text-[#b8ff29] hover:text-[#a1e023] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-[#b8ff29] hover:text-[#a1e023] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full bg-[#b8ff29] p-2">
        <Icon className="h-6 w-6 text-black" />
      </div>
      <span className="text-lg text-gray-800">{text}</span>
    </div>
  );
}
