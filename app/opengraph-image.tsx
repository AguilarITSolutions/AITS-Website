import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aguilar IT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #005BA4 0%, #004578 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "white",
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        Aguilar IT Solutions
      </div>
      <div
        style={{
          fontSize: 32,
          color: "rgba(255,255,255,0.85)",
          marginTop: 16,
        }}
      >
        IT Solutions for the Modern Business
      </div>
    </div>,
    { ...size },
  );
}
