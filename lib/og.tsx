import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOgCard({
  kicker = "AI BOTTLENECK MAP",
  number,
  title,
  body,
  color = "#f0b429",
}: {
  kicker?: string;
  number?: string;
  title: string;
  body: string;
  color?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#07080c",
          color: "#f3efe4",
          padding: 72,
          borderLeft: `18px solid ${color}`,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#9b9588",
          }}
        >
          {kicker}
        </div>
        {number ? (
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 72,
              color,
            }}
          >
            {number}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            marginTop: number ? 8 : 40,
            fontSize: 58,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 26,
            color: "#9b9588",
            lineHeight: 1.35,
            maxWidth: 960,
          }}
        >
          {body}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 18,
            color: "#9b9588",
          }}
        >
          Not investment advice. Educational only. Do your own research.
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
