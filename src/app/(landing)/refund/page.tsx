import React from "react";

export default function RefundPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto flex-1 px-4 py-8 md:py-12">
        <h1 className="mb-6 text-3xl font-bold">Refund Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            At FeedbackThing, we strive to provide the best possible service to
            our customers. This Refund Policy outlines the terms and conditions
            for refunds on our Pro and Pro (Yearly) subscription tiers.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            1. Eligibility for Refunds
          </h2>
          <p className="mb-4">
            Refunds are available only for our Pro and Pro (Yearly) subscription
            tiers, subject to the following conditions:
          </p>
          <ul className="mb-4 list-disc pl-8">
            <li>
              Refund requests must be made within 7 days of the initial purchase
              or renewal date.
            </li>
            <li>
              The 7-day period begins on the day of purchase or renewal and ends
              at 11:59 PM UTC on the 7th day.
            </li>
            <li>
              Refunds are not available for any other products or services
              offered by FeedbackThing.
            </li>
          </ul>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            2. Refund Process
          </h2>
          <p className="mb-4">To request a refund:</p>
          <ol className="mb-4 list-decimal pl-8">
            <li>
              Contact our support team at support@feedbackthing.pro within the
              7-day refund period.
            </li>
            <li>
              Provide your account information and the reason for requesting a
              refund.
            </li>
            <li>
              Our team will review your request and process the refund if it
              meets our eligibility criteria.
            </li>
          </ol>
          <p className="mb-4">
            Approved refunds will be processed to the original payment method
            used for the purchase.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">3. Limitations</h2>
          <p className="mb-4">
            Please note the following limitations to our refund policy:
          </p>
          <ul className="mb-4 list-disc pl-8">
            <li>
              No refunds will be issued after the 7-day refund period has
              expired.
            </li>
            <li>
              Refunds are not available for partial use of services or for any
              reason other than dissatisfaction with the service.
            </li>
            <li>
              We reserve the right to deny refund requests if we suspect abuse
              of the refund policy or fraudulent activity.
            </li>
          </ul>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">4. Chargebacks</h2>
          <p className="mb-4">
            FeedbackThing strictly prohibits the use of chargebacks as a means
            of obtaining a refund. Please be aware of the following:
          </p>
          <ul className="mb-4 list-disc pl-8">
            <li>
              Any attempt to initiate a chargeback will result in the immediate
              and permanent suspension of all services associated with the
              account.
            </li>
            <li>
              The account holder will be permanently banned from using
              FeedbackThing services in the future.
            </li>
            <li>
              We reserve the right to take legal action to recover any losses
              incurred due to illegitimate chargebacks.
            </li>
          </ul>
          <p className="mb-4">
            If you have any issues with your subscription or charges, please
            contact our support team directly to resolve the matter before
            considering a chargeback.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">
            5. Changes to This Policy
          </h2>
          <p className="mb-4">
            FeedbackThing reserves the right to modify this Refund Policy at any
            time. Changes will be effective immediately upon posting to our
            website. It is your responsibility to review this policy
            periodically for updates.
          </p>

          <h2 className="mb-4 mt-6 text-2xl font-semibold">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Refund Policy or would like to
            request a refund, please contact us:
          </p>
          <p className="mb-4">By email: support@feedbackthing.pro</p>
          <p className="mb-4">
            FeedbackThing is represented by Sree Narayanan (x.com/eersnington).
          </p>

          <p className="mt-8">Last updated: September 10, 2024</p>
        </div>
      </main>
    </div>
  );
}
