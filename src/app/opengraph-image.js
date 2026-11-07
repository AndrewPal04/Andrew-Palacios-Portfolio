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
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#121311",
          color: "#ecebe6",
        }}
      >
        <div style={{ fontSize: 36, color: "#5fd0c0" }}>{profile.title}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#a3a29b", marginTop: 24 }}>{profile.tagline}</div>
      </div>
    ),
    size,
  );
}
