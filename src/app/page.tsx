"use client";

import { useState } from "react";
import { CATEGORIES, type Category, type Concern } from "@/data/categories";
import { getVideos, type Video } from "@/data/videos";

function VideoCard({ video, index }: { video: Video; index: number }) {
  const thumbUrl = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
  const ytLink = `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-100"
      style={{ animation: `fadeSlideUp 0.4s ease ${index * 0.1}s both` }}
    >
      <a href={ytLink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative">
          <img
            src={thumbUrl}
            alt={video.title}
            className="w-full h-[180px] object-cover block"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-[3px]" />
          </div>
          <div
            className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-0.5 rounded text-xs"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {video.duration}
          </div>
        </div>
        <div className="px-4 pt-3.5 pb-2">
          <h3 className="text-sm font-bold leading-relaxed text-gray-900 line-clamp-2">
            {video.title}
          </h3>
          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <span className="text-[#E53E3E] text-sm">▶</span>
            {video.channel}　•　{video.views}回再生
          </div>
        </div>
      </a>
      <div className="mx-4 mb-3.5 p-3 bg-[#FFF9F5] rounded-lg border-l-[3px] border-l-[#E8623E]">
        <div
          className="text-[10px] font-bold text-[#E8623E] mb-1 tracking-widest"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          TRAINER&apos;S ADVICE
        </div>
        <p className="text-[13px] text-gray-600 leading-7">{video.comment}</p>
        <div className="text-[11px] text-gray-300 mt-1.5 text-right">
          — RESIST トレーナー
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [step, setStep] = useState<"category" | "concern" | "results">("category");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="px-5 pt-6 pb-7 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E8623E 0%, #F2994A 100%)",
        }}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-white/[0.06]" />

        <div className="flex items-center gap-2.5 mb-1.5">
          <div
            className="w-[34px] h-[34px] rounded-[9px] bg-white/95 flex items-center justify-center text-[#E8623E] font-black text-base"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            R
          </div>
          <span
            className="text-white/90 text-[11px] tracking-[3px] font-medium"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            RESIST HOME ADVISOR
          </span>
        </div>

        <h1 className="text-white text-[22px] font-black mt-2 leading-snug drop-shadow-sm">
          {step === "category" && "今日はどんなケアをしますか？"}
          {step === "concern" &&
            `${selectedCategory?.emoji} ${selectedCategory?.label}`}
          {step === "results" &&
            `${selectedConcern?.icon} ${selectedConcern?.label}`}
        </h1>

        {step === "category" && (
          <p className="text-white/80 text-[13px] mt-1.5 leading-relaxed">
            トレーナーが厳選したおすすめコンテンツをお届けします
          </p>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pt-5 pb-10 max-w-[480px] mx-auto">
        {step !== "category" && (
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-[13px] text-[#E8623E] font-semibold mb-4 bg-transparent border-none cursor-pointer"
          >
            ← 戻る
          </button>
        )}

        {/* Step 1: Category Grid */}
        {step === "category" && (
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                className="bg-white border border-gray-100 rounded-2xl py-5 px-3.5 cursor-pointer flex flex-col items-center gap-2 shadow-sm text-center transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-[#F2994A] active:scale-[0.98]"
                style={{
                  animation: `fadeSlideUp 0.4s ease ${i * 0.06}s both`,
                }}
              >
                <div
                  className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[28px]"
                  style={{
                    background: "linear-gradient(135deg, #FFF0EB, #FFF5F0)",
                  }}
                >
                  {cat.emoji}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-snug">
                    {cat.label}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                    {cat.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Concern List */}
        {step === "concern" && selectedCategory && (
          <div className="flex flex-col gap-2.5">
            <p className="text-sm text-gray-500 mb-2 leading-relaxed">
              どんなお悩みがありますか？
            </p>
            {selectedCategory.concerns.map((concern, i) => (
              <button
                key={concern.id}
                onClick={() => handleConcernSelect(concern)}
                className="bg-white border border-gray-100 rounded-[14px] py-4 px-[18px] cursor-pointer flex items-center gap-3.5 text-left transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:border-[#F2994A] active:scale-[0.99]"
                style={{
                  animation: `fadeSlideUp 0.3s ease ${i * 0.06}s both`,
                }}
              >
                <span className="text-[22px]">{concern.icon}</span>
                <span className="text-[15px] font-semibold text-gray-900">
                  {concern.label}
                </span>
                <div className="ml-auto text-[#F2994A] text-base font-bold">
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
              className="rounded-xl px-4 py-3 mb-5 border border-[#FDDDD2]"
              style={{
                animation: "fadeIn 0.3s ease",
                background: "linear-gradient(135deg, #FFF0EB, #FFF8F5)",
              }}
            >
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <strong className="text-[#E8623E]">
                  {selectedCategory.emoji} {selectedCategory.label}
                </strong>
                {" ＞ "}
                <strong>{selectedConcern.label}</strong>　のおすすめ
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {videos.map((video, i) => (
                <VideoCard key={i} video={video} index={i} />
              ))}
            </div>

            <p className="text-center text-[11px] text-gray-300 mt-4 leading-relaxed">
              ※ タップするとYouTubeで再生されます
            </p>

            <button
              onClick={handleReset}
              className="w-full mt-3 py-3.5 text-white border-none rounded-xl text-sm font-bold cursor-pointer tracking-wider shadow-lg shadow-[#E8623E]/25 active:scale-[0.98] transition-transform"
              style={{
                background: "linear-gradient(135deg, #E8623E, #F2994A)",
              }}
            >
              他の悩みも探す
            </button>

            <p className="text-center text-[11px] text-gray-300 mt-4 leading-relaxed">
              ※ 痛みがある場合は無理せずトレーナーにご相談ください
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
