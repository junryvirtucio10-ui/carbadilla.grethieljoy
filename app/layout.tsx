import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./portfolio-refresh.css";

const title = "Grethiel Joy — Digital Marketing & Web Development";
const description =
  "The portfolio of Grethiel Joy Carbadilla G., a Digital Marketing Specialist and Web Developer based in Cebu, Philippines. Explore websites, digital content, and creative work.";

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
    icons: {
      icon: [{ url: "/gj-favicon.png", type: "image/png" }],
      shortcut: "/gj-favicon.png",
    },
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
      <head>
        <link rel="icon" href="/gj-favicon.png?v=2" type="image/png" sizes="1024x1024" />
        <link rel="shortcut icon" href="/gj-favicon.png?v=2" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
