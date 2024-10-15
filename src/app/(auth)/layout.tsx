import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-w-full flex-col items-center justify-center bg-gradient-to-b from-violet-200 to-white px-4 pb-16 pt-8">
      <span className="ml-4 text-2xl font-bold text-gray-800">
        feedback<span className="text-violet-500">thing</span>
      </span>
      <div>{children}</div>
      <div className="mt-4 text-center text-sm text-gray-600">
        By signing up, you agree to our{" "}
        <Link href="/terms" className="text-blue-500 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-blue-500 hover:underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
