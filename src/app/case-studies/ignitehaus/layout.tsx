import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignite Haus — Brand Identity Rebuild | pxl.crazy Case Study",
  description:
    "A complete strategic and visual overhaul of Ignite Haus — turning a generic creative agency into a purposeful brand at the intersection of creative energy and structural systems. Featuring two complete logo explorations, color direction, and brand strategy.",
  openGraph: {
    title: "Ignite Haus Brand Identity Rebuild — pxl.crazy",
    description:
      "From vibes to systems: how I rebuilt a creative agency identity from the ground up, leveraging the tension between IGNITE and HAUS as the brand's core philosophy.",
    type: "article",
  },
};

export default function IgniteHausLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
