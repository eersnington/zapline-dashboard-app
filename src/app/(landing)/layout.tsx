import { Footer } from "./_components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
