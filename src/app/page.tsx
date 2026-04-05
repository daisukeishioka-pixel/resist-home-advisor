"use client";

import { useState } from "react";
import { CATEGORIES, type Category, type Concern } from "@/data/categories";
import { getVideos, type Video } from "@/data/videos";

function VideoCard({ video, index }: { video: Video; index: number }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
  const ytLink = `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #f0f0f0",
        animation: `fadeSlideUp 0.4s ease ${index * 0.1}s both`,
      }}
    >
      <a
        href={ytLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={thumbUrl}
            alt={video.title}
            style={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 56,
              height: 56,
              background: "rgba(0,0,0,0.7)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "18px solid #fff",
                marginLeft: 3,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              background: "rgba(0,0,0,0.75)",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {video.duration}
          </div>
        </div>
        <div style={{ padding: "14px 16px 8px" }}>
          <h3
            style={{
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.5,
              margin: 0,
              color: "#1a1a1a",
              fontFamily: "'Noto Sans JP', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            }}
          >
            {video.title}
          </h3>
          <div
            style={{
              fontSize: 12,
              color: "#999",
              marginTop: 4,
              fontFamily: "'Noto Sans JP', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "#E53E3E", fontSize: 14 }}>▶</span>
            {video.channel}　•　{video.views}回再生
          </div>
        </div>
      </a>
      <div
        style={{
          margin: "0 16px 14px",
          padding: "12px 14px",
          background: "#FFF9F5",
          borderRadius: 10,
          borderLeft: "3px solid #E8623E",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#E8623E",
            marginBottom: 4,
            letterSpacing: 1,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          TRAINER&apos;S ADVICE
        </div>
        <p
          style={{
            fontSize: 13,
            color: "#444",
            lineHeight: 1.7,
            margin: 0,
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          {video.comment}
        </p>
        <div
          style={{
            fontSize: 11,
            color: "#bbb",
            marginTop: 6,
            textAlign: "right",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          — RESIST トレーナー
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [step, setStep] = useState<"category" | "concern" | "results">(
    "category"
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedConcern, setSelectedConcern] = useState<Concern | null>(null);

  const handleCategorySelect = (cat: Category) => {
    setSelectedCategory(cat);
    setStep("concern");
  };
  const handleConcernSelect = (concern: Concern) => {
    setSelectedConcern(concern);
    setStep("results");
  };
  const handleBack = () => {
    if (step === "results") {
      setSelectedConcern(null);
      setStep("concern");
    } else if (step === "concern") {
      setSelectedCategory(null);
      setStep("category");
    }
  };
  const handleReset = () => {
    setStep("category");
    setSelectedCategory(null);
    setSelectedConcern(null);
  };

  const videos =
    selectedCategory && selectedConcern
      ? getVideos(selectedCategory.id, selectedConcern.id)
      : [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { overscroll-behavior: none; background: #ffffff; }
      `}</style>

      {/* Desktop: centered phone frame / Mobile: full width */}
      <div
        style={{
          maxWidth: 430,
          margin: "0 auto",
          background: "#ffffff",
          fontFamily: "'Noto Sans JP', sans-serif",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #E8623E 0%, #F2994A 100%)",
            padding: "24px 20px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 160,
              height: 160,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
              width: 100,
              height: 100,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: "rgba(255,255,255,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 900,
                color: "#E8623E",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              R
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 11,
                letterSpacing: 3,
                fontFamily: "'DM Mono', monospace",
                fontWeight: 500,
              }}
            >
              RESIST HOME ADVISOR
            </span>
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: 900,
              margin: "8px 0 0",
              lineHeight: 1.4,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            {step === "category" && "今日はどんなケアをしますか？"}
            {step === "concern" &&
              `${selectedCategory?.emoji} ${selectedCategory?.label}`}
            {step === "results" &&
              `${selectedConcern?.icon} ${selectedConcern?.label}`}
          </h1>

          {step === "category" && (
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 13,
                margin: "6px 0 0",
                lineHeight: 1.6,
              }}
            >
              トレーナーが厳選したおすすめコンテンツをお届けします
            </p>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "20px 16px 20px" }}>
          {/* Back button */}
          {step !== "category" && (
            <button
              onClick={handleBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#E8623E",
                fontWeight: 600,
                marginBottom: 16,
                padding: 0,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              ← 戻る
            </button>
          )}

          {/* Step 1: Category — 2x3 grid */}
          {step === "category" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat)}
                  style={{
                    background: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: 16,
                    padding: "22px 14px 18px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    animation: `fadeSlideUp 0.4s ease ${i * 0.06}s both`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background:
                        "linear-gradient(135deg, #FFF0EB, #FFF5F0)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                  >
                    {cat.emoji}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#1a1a1a",
                        lineHeight: 1.4,
                      }}
                    >
                      {cat.label}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#999",
                        marginTop: 2,
                        lineHeight: 1.4,
                      }}
                    >
                      {cat.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Concern List */}
          {step === "concern" && selectedCategory && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  margin: "0 0 8px",
                  lineHeight: 1.6,
                }}
              >
                どんなお悩みがありますか？
              </p>
              {selectedCategory.concerns.map((concern, i) => (
                <button
                  key={concern.id}
                  onClick={() => handleConcernSelect(concern)}
                  style={{
                    background: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: 14,
                    padding: "16px 18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    animation: `fadeSlideUp 0.3s ease ${i * 0.06}s both`,
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{concern.icon}</span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#1a1a1a",
                    }}
                  >
                    {concern.label}
                  </span>
                  <div
                    style={{
                      marginLeft: "auto",
                      color: "#F2994A",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    ›
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 3: Results */}
          {step === "results" && selectedCategory && selectedConcern && (
            <div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #FFF0EB, #FFF8F5)",
                  border: "1px solid #FDDDD2",
                  borderRadius: 12,
                  padding: "12px 16px",
                  marginBottom: 20,
                  animation: "fadeIn 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "#555",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "#E8623E" }}>
                    {selectedCategory.emoji} {selectedCategory.label}
                  </strong>
                  {" ＞ "}
                  <strong>{selectedConcern.label}</strong>　のおすすめ
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {videos.map((video, i) => (
                  <VideoCard key={i} video={video} index={i} />
                ))}
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  color: "#ccc",
                  margin: "16px 0 4px",
                  lineHeight: 1.5,
                }}
              >
                ※ タップするとYouTubeで再生されます
              </p>

              <button
                onClick={handleReset}
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: 14,
                  background:
                    "linear-gradient(135deg, #E8623E, #F2994A)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  letterSpacing: 1,
                  boxShadow: "0 4px 12px rgba(232,98,62,0.25)",
                }}
              >
                他の悩みも探す
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 11,
                  color: "#ccc",
                  marginTop: 16,
                  lineHeight: 1.6,
                }}
              >
                ※ 痛みがある場合は無理せずトレーナーにご相談ください
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
