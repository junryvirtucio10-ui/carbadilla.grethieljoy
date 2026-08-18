import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Grethiel Joy — WordPress, Web Design & Digital Content";
const description =
  "The portfolio of Grethiel Joy Carbadilla G., a WordPress developer, web designer, graphic designer, and digital creative based in Cebu, Philippines.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title,
    description,
    metadataBase: new URL(origin),
    openGraph: {
      type: "website",
      url: origin,
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1729,
          height: 910,
          alt: "Grethiel Joy — Built in cocoa. Signed in gold.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
