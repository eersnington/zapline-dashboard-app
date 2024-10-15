"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Mail } from "lucide-react";
import { env } from "@/env";
import { fetchSubscriptionData, fetchUsageData } from "@/actions/subscriptions";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

interface SubscriptionData {
  subscriptionId: string | null;
  plan: "Free" | "Pro";
  subscriptionNextBilledAt: Date | null;
}

interface UsageData {
  feedbackItems: number;
  feedbackLimit: string;
  projects: number;
  projectLimit: string;
  message: string;
  isPaid: boolean;
}

interface SubscriptionCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  onUpgrade: () => void;
  isCurrentPlan: boolean;
}

function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);

  useEffect(() => {
    const initPaddle = async () => {
      try {
        const paddleInstance = await initializePaddle({
          environment: env.NEXT_PUBLIC_PADDLE_ENVIRONMENT,
          token: env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        });

        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      } catch (error) {
        console.error("Failed to initialize Paddle:", error);
      }
    };

    void initPaddle();
  }, []);

  return paddle;
}

function SubscriptionSkeleton() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-1/2" />
        <Skeleton className="mb-4 h-4 w-2/3" />
        <Skeleton className="h-10 w-40" />
      </CardContent>
    </Card>
  );
}

const SubscriptionCard = ({
  title,
  price,
  features,
  buttonText,
  onUpgrade,
  isCurrentPlan,
}: SubscriptionCardProps) => (
  <Card className="flex h-full flex-col">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="mb-6 text-3xl font-bold text-purple-600">{price}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        className="w-full bg-purple-600 transition-colors hover:bg-purple-700"
        onClick={onUpgrade}
        disabled={isCurrentPlan}
      >
        {isCurrentPlan ? "Current Plan" : buttonText}
      </Button>
    </CardFooter>
  </Card>
);

export default function SubscriptionsPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const paddle = usePaddle();
  const [subscriptionData, setSubscriptionData] =
    useState<SubscriptionData | null>(null);
  const [usageData, setUsageData] = useState<UsageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      Promise.all([fetchSubscriptionData(), fetchUsageData()])
        .then(([subData, usage]) => {
          setSubscriptionData(subData);
          setUsageData(usage);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [isLoaded, isSignedIn]);

  const handleUpgrade = (priceId: string) => {
    if (!paddle || !user) return;

    paddle.Checkout.open({
      settings: {
        allowLogout: false,
      },
      items: [{ priceId, quantity: 1 }],
      customer: {
        email: user.emailAddresses[0]?.emailAddress ?? "customer@email.com",
      },
      customData: {
        userId: user.id,
      },
    });
  };

  const handleCancelRequest = () => {
    if (!user || !subscriptionData?.subscriptionId) return;

    window.location.href = `mailto:support@feedbackthing.com?subject=Cancel Subscription&body=User ID: ${user.id}%0D%0ASubscription ID: ${subscriptionData.subscriptionId}`;
  };

  if (!isLoaded || loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
        </div>
        <SubscriptionSkeleton />
        <div className="grid gap-8 md:grid-cols-2">
          <SubscriptionSkeleton />
          <SubscriptionSkeleton />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your subscription.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Current Plan:{" "}
            <span className="text-purple-500">
              {subscriptionData?.plan ?? "Free"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {subscriptionData?.subscriptionId ? (
            <>
              <p>
                Subscription ID:{" "}
                <span className="text-gray-500">
                  {subscriptionData.subscriptionId}
                </span>
              </p>
              <p>
                Next Billing Date:{" "}
                <span className="text-gray-500">
                  {subscriptionData.subscriptionNextBilledAt
                    ? new Date(
                        subscriptionData.subscriptionNextBilledAt,
                      ).toDateString()
                    : "N/A"}
                </span>
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Feedback Items</span>
                    <span>
                      {usageData?.feedbackItems} / {usageData?.feedbackLimit}
                    </span>
                  </div>
                  <Progress
                    value={
                      ((usageData?.feedbackItems ?? 0) /
                        (parseInt(usageData?.feedbackLimit ?? "50") || 1)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Projects</span>
                    <span>
                      {usageData?.projects} / {usageData?.projectLimit}
                    </span>
                  </div>
                  <Progress
                    value={
                      ((usageData?.projects ?? 0) /
                        (parseInt(usageData?.projectLimit ?? "1") || 1)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
              </div>
              <Button onClick={handleCancelRequest} className="mt-6">
                <Mail className="mr-2 h-4 w-4" /> Request Cancellation
              </Button>
            </>
          ) : (
            <>
              <p className="mb-4">Upgrade to access more features!</p>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Feedback Items</span>
                    <span>
                      {usageData?.feedbackItems} / {usageData?.feedbackLimit}
                    </span>
                  </div>
                  <Progress
                    value={
                      ((usageData?.feedbackItems ?? 0) /
                        (parseInt(usageData?.feedbackLimit ?? "50") || 1)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Projects</span>
                    <span>
                      {usageData?.projects} / {usageData?.projectLimit}
                    </span>
                  </div>
                  <Progress
                    value={
                      ((usageData?.projects ?? 0) /
                        (parseInt(usageData?.projectLimit ?? "1") || 1)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
              </div>
              {usageData?.message && (
                <p className="mt-4 text-sm text-gray-600">
                  {usageData.message}
                </p>
              )}
            </>
          )}
        </CardContent>
      </Card>
      <div className="grid gap-8 md:grid-cols-2">
        <SubscriptionCard
          title="Monthly Pro"
          price="$15/month"
          features={[
            "Unlimited Domains/Projects",
            "Unlimited Feedbacks",
            "Custom Branding (releasing Oct)",
          ]}
          buttonText="Upgrade"
          onUpgrade={() => handleUpgrade("pri_01j7e2pjpgmztxzxr7jc2m4vdj")} // prod price ID
          isCurrentPlan={subscriptionData?.plan === "Pro"}
        />
        <SubscriptionCard
          title="Yearly Pro"
          price="$150/year"
          features={[
            "All Monthly Pro features",
            "Billed annually",
            "2 months free",
            "Limits reset every month",
          ]}
          buttonText="Upgrade"
          onUpgrade={() => handleUpgrade("pri_01j7e2r225h8hwk50dmq5fryb5")} // prod price ID
          isCurrentPlan={subscriptionData?.plan === "Pro"}
        />
      </div>
    </div>
  );
}
