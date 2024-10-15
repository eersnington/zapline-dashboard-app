import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "Advanced Analytics",
  "Team Collaboration",
  "Real-time Updates",
  "Custom Integrations",
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-purple-600">T3SaaS</h1>
        <div className="space-x-4">
          <Link href="/sign-in" className="text-gray-600 hover:text-purple-600">
            Login
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-6 text-5xl font-bold text-gray-800">
          Revolutionize Your Workflow
        </h2>
        <p className="mb-8 max-w-2xl text-xl text-gray-600">
          Our SaaS solution empowers teams to collaborate, analyze, and innovate
          like never before. Experience the future of productivity today.
        </p>
        <Link
          href="/dashboard"
          className="group flex items-center rounded-full bg-purple-600 px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-purple-600" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
