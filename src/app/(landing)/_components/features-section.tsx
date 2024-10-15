"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bug, Camera } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Camera className="h-6 w-6 text-violet-600" />,
    title: "Screenshot Capture",
    description:
      "Allow users to capture and annotate screenshots directly from your app, streamlining the feedback process.",
    video: "https://d3bs5f30s2su7d.cloudfront.net/fbt-vid1.mp4",
  },
  {
    icon: <Bug className="h-6 w-6 text-violet-600" />,
    title: "Feedbacks at a Glance",
    description:
      "View all feedbacks in one place, with detailed information from your users.",
    video: "https://d3bs5f30s2su7d.cloudfront.net/fbt-vid2.mp4",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-violet-600" />,
    title: "Search and Filter",
    description:
      "Easily search and filter feedbacks to find what you need. All at a single place.",
    video: "https://d3bs5f30s2su7d.cloudfront.net/fbt-vid3.mp4",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-violet-100 to-white py-12 md:py-24"
      id="features"
    >
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Key Features
        </h2>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2">
        <video
          className="w-full rounded-lg shadow-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={feature.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Card className="w-full bg-white/50 shadow-lg backdrop-blur-sm md:w-1/2">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-4">
            {feature.icon}
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-lg text-gray-600">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
