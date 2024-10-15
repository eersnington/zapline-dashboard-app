import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface PricingTierProps {
  name: string;
  price: string | number;
  billed: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  features,
  billed,
  isPopular = false,
}) => {
  return (
    <Card
      className={`relative flex flex-col shadow-lg duration-200 hover:scale-105 ${isPopular ? "border-2 border-violet-500" : ""}`}
    >
      {isPopular && (
        <Badge className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform bg-violet-500">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">${price}</span>
          {price !== "Free" && <span className="text-gray-500">/{billed}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-violet-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className={
            isPopular ? "w-full bg-violet-600 hover:bg-violet-700" : "w-full"
          }
          asChild
        >
          <Link href={"/sign-up"}>Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingPage: React.FC = () => {
  const pricingTiers: PricingTierProps[] = [
    {
      name: "Free",
      price: 0,
      billed: "forever",
      features: [
        "2 domains",
        "20 feedback submissions/month",
        "FeedbackThing Branding",
      ],
    },
    {
      name: "Pro",
      price: 15,
      billed: "month",
      features: [
        "Unlimited domains",
        "Unlimited feedback submissions",
        "Custom branding",
      ],
      isPopular: true,
    },
    {
      name: "Pro (Yearly)",
      price: "150",
      billed: "year",
      features: [
        "All the Pro Plan features",
        "Billed annually",
        "2 months for free",
      ],
    },
  ];

  const faqs = [
    {
      question: "How does the Free tier work?",
      answer:
        "Our Free tier allows you to use add FeedbackThing widget onto 2 projects, and lets you collect 20 feedback submissions per month. It's a great way to get started and see how FeedbackThing can improve your product.",
    },
    {
      question: "Can I upgrade from Free to Pro at any time?",
      answer:
        "Absolutely! You can upgrade to our Pro plan whenever you need more features or higher usage limits. Your account will be instantly upgraded upon payment.",
    },
    {
      question: "What's the difference between monthly and yearly Pro plans?",
      answer:
        "Nothing really. Both Pro plans offer the same features, but the yearly plan gives you two months free. The monthly plan is billed monthly and can be cancelled anytime, while the yearly plan is billed annually for greater savings.",
    },
    {
      question: "What happens if I exceed my plan's monthly report limits?",
      answer:
        "If you reach your plan's limit, we'll notify you. You can then choose to upgrade your plan or wait until the next billing cycle when your limits reset. We don't automatically charge for overages.",
    },
    {
      question: "Is my data safe with FeedbackThing?",
      answer:
        "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We never share your data with third parties, and we comply with GDPR and other relevant data protection regulations.",
    },
    {
      question: "How does custom branding work on the Pro plan?",
      answer:
        "With the Pro plan, you can remove FeedbackThing branding and add your own logo and colors to the feedback widget. This creates a seamless experience for your users that matches your product's look and feel.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Worry about your app, <br />
            <span className="text-violet-500">not your bill.</span>
          </h1>
          <h2 className="text-xl text-gray-600 md:text-2xl">
            Choose the plan that fits your needs. No surprises, just results.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Not sure which plan is right for you?
          </h3>
          <p className="mb-6 text-gray-600">
            Our team is here to help. Contact us for a personalized
            recommendation.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700" asChild>
            <Link href="mailto:team@feedbackthing.pro">Talk to Sales</Link>
          </Button>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
