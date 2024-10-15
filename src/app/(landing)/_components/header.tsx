"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between bg-white px-4 shadow-sm lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Image
          className="rounded-lg"
          src="/apple-touch-icon.png"
          alt="FeedbackThing Logo"
          width={32}
          height={32}
        />
        <span className="ml-2 text-xl font-bold text-gray-800">
          feedback<span className="text-violet-600">thing</span>
        </span>
      </Link>
      <nav className="hidden md:flex md:items-center md:gap-6">
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="/pricing"
        >
          Pricing
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" asChild className="hidden md:inline-flex">
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button
          className="hidden bg-violet-600 hover:bg-violet-700 md:inline-flex"
          asChild
        >
          <Link href="/sign-up">Sign Up</Link>
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="mt-12 flex flex-col gap-4">
              <Link
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                href="#features"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                href="/pricing"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Button
                variant="outline"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="/sign-in">Log In</Link>
              </Button>
              <Button
                className="bg-violet-600 hover:bg-violet-700"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
