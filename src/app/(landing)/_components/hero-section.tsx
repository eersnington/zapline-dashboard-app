"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeedbackWidget from "./feedback-widget";
import { LightningBoltIcon, StarIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-violet-50 py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_650px] lg:gap-8 xl:grid-cols-[1fr_650px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-800"
              >
                New Feature Upcoming: Brand Customization
              </motion.div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Feedback Made Fast, <br />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Simple, and Powerful
                </span>
              </h1>
              <p className="max-w-[600px] leading-relaxed text-gray-600 md:text-xl">
                Let your users capture screenshots, report bugs, and share
                feedback effortlessly—all from a single button integrated into
                your web app.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2 min-[400px]:flex-row">
              <Button
                className="group relative overflow-hidden bg-violet-600 text-white hover:bg-violet-700"
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                asChild
              >
                <Link href="/sign-up">
                  Get Started for Free
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: isHovered ? 2 : 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center space-x-6 pt-2 text-sm text-gray-600"
            >
              <div className="flex items-center">
                <LightningBoltIcon className="mr-2 h-5 w-5 text-yellow-500" />
                <span>2-min setup</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="mr-2 h-5 w-5 text-violet-500" />
                <span>Free plan available</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative flex items-center justify-center lg:ml-32"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-indigo-200 opacity-30 blur-3xl" />
            <div className="relative h-full w-full">
              <FeedbackWidget projectId={"123"} />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-grid-violet-100/50 absolute inset-0 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
    </section>
  );
}
