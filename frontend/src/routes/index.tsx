import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RepAI Performance Lab" },
      {
        name: "description",
        content:
          "AI-powered posture training, nutrition planning, performance analysis, gym discovery, and adaptive coaching.",
      },
      { property: "og:title", content: "RepAI Performance Lab" },
      {
        property: "og:description",
        content:
          "A premium AI performance workspace for precise training, nutrition, recovery, and coaching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/repai/index.html"
        title="RepAI Performance Lab"
        allow="camera; microphone"
      />
    </main>
  );
}
