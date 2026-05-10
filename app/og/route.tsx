import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg,#050505 0%,#15171b 55%,#7f1118 100%)",
          color: "#f3f1ed",
          padding: 72
        }}
      >
        <div style={{ color: "#c71f2d", fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>
          10 Years of Experience
        </div>
        <div style={{ marginTop: 24, fontSize: 92, fontWeight: 900, lineHeight: 0.9, textTransform: "uppercase" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "rgba(255,255,255,.7)" }}>
          Premium Online Fitness Coaching
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
