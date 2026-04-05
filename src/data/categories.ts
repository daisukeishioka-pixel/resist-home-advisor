export interface Concern {
  id: string;
  label: string;
  icon: string;
}

export interface Category {
  id: string;
  emoji: string;
  label: string;
  subtitle: string;
  concerns: Concern[];
}

export const CATEGORIES: Category[] = [
  {
    id: "stretch",
    emoji: "🧘",
    label: "ストレッチ・ケア",
    subtitle: "体の不調をセルフケア",
    concerns: [
      { id: "shoulder", label: "肩こり・首の張り", icon: "🦴" },
      { id: "back", label: "腰痛・反り腰", icon: "🔙" },
      { id: "hip", label: "股関節が硬い", icon: "🦵" },
      { id: "leg", label: "脚のむくみ・疲れ", icon: "🦶" },
      { id: "fullbody", label: "全身スッキリしたい", icon: "✨" },
    ],
  },
  {
    id: "training",
    emoji: "🏋️",
    label: "自宅トレーニング",
    subtitle: "ジム以外の日も体を動かそう",
    concerns: [
      { id: "abs", label: "お腹を引き締めたい", icon: "💪" },
      { id: "arms", label: "二の腕を引き締めたい", icon: "💪" },
      { id: "glutes", label: "ヒップアップしたい", icon: "🍑" },
      { id: "cardio", label: "全身を動かしたい", icon: "🏃" },
      { id: "posture", label: "姿勢を良くしたい", icon: "🧍" },
    ],
  },
  {
    id: "recipe",
    emoji: "🥗",
    label: "ヘルシーレシピ",
    subtitle: "食事からカラダを変える",
    concerns: [
      { id: "protein", label: "高タンパク・低脂質", icon: "🍗" },
      { id: "snack", label: "ダイエット中の間食", icon: "🍎" },
      { id: "mealprep", label: "簡単つくりおき", icon: "🍱" },
      { id: "breakfast", label: "朝ごはん・軽食", icon: "🥚" },
      { id: "recovery", label: "筋トレ後のリカバリー飯", icon: "🥩" },
    ],
  },
  {
    id: "sleep",
    emoji: "😴",
    label: "睡眠・リカバリー",
    subtitle: "休息の質を高める",
    concerns: [
      { id: "fallasleep", label: "寝つきが悪い・眠れない", icon: "🌙" },
      { id: "wakeup", label: "夜中に目が覚める", icon: "⏰" },
      { id: "morning", label: "朝スッキリ起きられない", icon: "☀️" },
      { id: "fatigue", label: "トレ後の疲労が取れない", icon: "😮‍💨" },
      { id: "daytime", label: "日中の眠気・だるさ", icon: "💤" },
    ],
  },
  {
    id: "yoga",
    emoji: "🧘‍♀️",
    label: "ヨガ・ピラティス",
    subtitle: "心と体を整える",
    concerns: [
      { id: "beginner", label: "初心者向け・基本のポーズ", icon: "🔰" },
      { id: "morningyoga", label: "朝ヨガ・目覚めのフロー", icon: "🌅" },
      { id: "nightyoga", label: "リラックスヨガ・夜", icon: "🌃" },
      { id: "pilatescore", label: "ピラティスで体幹強化", icon: "🎯" },
      { id: "flexibility", label: "柔軟性を高めたい", icon: "🤸" },
    ],
  },
  {
    id: "knowledge",
    emoji: "📚",
    label: "カラダの基礎知識",
    subtitle: "理論を知って効果を上げる",
    concerns: [
      { id: "pfc", label: "タンパク質・PFCバランス", icon: "📊" },
      { id: "muscle", label: "筋肉がつく仕組み", icon: "💪" },
      { id: "fatburn", label: "脂肪が落ちる仕組み", icon: "🔥" },
      { id: "frequency", label: "トレーニング頻度と休息", icon: "📅" },
      { id: "supplement", label: "サプリメントの選び方", icon: "💊" },
    ],
  },
];
