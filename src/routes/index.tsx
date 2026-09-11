import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The deliverable is a static HTML/CSS mockup living in public/behold/.
// This route just forwards the preview to it.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lauren Daigle — Behold Christmas Tour 2026 VIP Upgrades" },
      {
        name: "description",
        content:
          "Ticketless VIP upgrades for the Lauren Daigle Behold Christmas Tour 2026 — pre-show experience, tour dates and venues.",
      },
      {
        property: "og:title",
        content: "Lauren Daigle — Behold Christmas Tour 2026 VIP Upgrades",
      },
      {
        property: "og:description",
        content: "Ticketless VIP upgrades for the Lauren Daigle Behold Christmas Tour 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/behold/index.html");
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "Georgia, serif" }}>
      <p>
        Opening the mockup… <a href="/behold/index.html">Lauren Daigle — Behold VIP Upgrades</a>
      </p>
    </div>
  );
}
