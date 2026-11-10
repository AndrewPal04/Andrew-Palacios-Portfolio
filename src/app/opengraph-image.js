import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 32,
          background: "#f4f5f7",
          color: "#14161b",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 72,
            background: "#ffffff",
            borderRadius: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              background: "#eef0f4",
              fontSize: 28,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#34b56a" }} />
            {profile.title}
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 0.95,
              marginTop: 36,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 40, color: "#454953", marginTop: 32 }}>{profile.tagline}</div>
          <div style={{ display: "flex", marginTop: 40, height: 12, width: 160, borderRadius: 999, background: "#2f5bd8" }} />
        </div>
      </div>
    ),
    size,
  );
}
