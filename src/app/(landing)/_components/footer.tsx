import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-4 py-6 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center space-x-2">
          <Image
            src="/apple-touch-icon.png"
            alt="ZaplineAI Logo"
            width={24}
            height={24}
          />
          <p className="text-sm text-gray-500">
            © 2024 Zapline AI. All rights reserved.
          </p>
        </div>
        <nav className="mt-4 flex gap-4 sm:gap-6 md:mt-0">
          <Link
            className="text-sm text-gray-500 hover:text-gray-900"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900"
            href="/refund"
          >
            Refund Policy
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900"
            href="mailto:support@zaplineai.com"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
