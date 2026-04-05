export interface Video {
  title: string;
  channel: string;
  duration: string;
  views: string;
  videoId: string;
  comment: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 動画データを編集する方法:
// 1. videoId を実際のYouTube動画IDに差し替える
//    (YouTubeのURL https://youtube.com/watch?v=XXXXX の XXXXX 部分)
// 2. title, channel, duration, views を実際の動画情報に更新
// 3. comment にトレーナーとしてのアドバイスを記入
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const VIDEOS: Record<string, Record<string, Video[]>> = {
  stretch: {
    shoulder: [
      { title: "【5分】肩こり解消ストレッチ｜デスクワークの方必見", channel: "ストレッチチャンネル", duration: "5:12", views: "120万", videoId: "dQw4w9WgXcQ", comment: "デスクワーク後に毎日やってほしいメニューです。特に2:30〜の僧帽筋ストレッチが効きます。" },
      { title: "肩甲骨はがし｜ガチガチの肩がほぐれる7分間", channel: "整体師チャンネル", duration: "7:30", views: "85万", videoId: "dQw4w9WgXcQ", comment: "肩甲骨の可動域を広げたい方に。壁を使うバージョンが特におすすめです。" },
      { title: "寝ながらできる首・肩ストレッチ", channel: "ヨガチャンネル", duration: "10:00", views: "63万", videoId: "dQw4w9WgXcQ", comment: "寝る前のルーティンに最適。リラックス効果も高いので睡眠の質も上がります。" },
    ],
    back: [
      { title: "【腰痛改善】毎日3分の腰痛ストレッチ", channel: "理学療法士チャンネル", duration: "3:45", views: "200万", videoId: "dQw4w9WgXcQ", comment: "反り腰の方はまずこれから。キャットカウの動きを丁寧にやってください。" },
      { title: "反り腰を治す！骨盤矯正エクササイズ", channel: "ピラティスチャンネル", duration: "8:20", views: "95万", videoId: "dQw4w9WgXcQ", comment: "骨盤の前傾が気になる方に。腹横筋の意識がポイントです。" },
      { title: "腰が痛い朝にやるべき5分ルーティン", channel: "整体チャンネル", duration: "5:00", views: "150万", videoId: "dQw4w9WgXcQ", comment: "朝起きて腰が重い方に。ベッドの上でできるので続けやすいです。" },
    ],
    hip: [
      { title: "股関節を柔らかくする10分ストレッチ", channel: "ヨガチャンネル", duration: "10:15", views: "180万", videoId: "dQw4w9WgXcQ", comment: "スクワットのフォーム改善にも直結します。毎日少しずつ可動域を広げましょう。" },
      { title: "【初心者向け】硬い人のための股関節ほぐし", channel: "ストレッチチャンネル", duration: "7:00", views: "110万", videoId: "dQw4w9WgXcQ", comment: "体が硬い方でも無理なくできる内容です。お風呂上がりがベストタイミング。" },
      { title: "開脚ができるようになるストレッチ", channel: "バレエチャンネル", duration: "12:00", views: "75万", videoId: "dQw4w9WgXcQ", comment: "開脚が目標の方に。2週間続けると変化を感じられるはずです。" },
    ],
    leg: [
      { title: "脚のむくみ解消マッサージ＆ストレッチ", channel: "エステチャンネル", duration: "8:00", views: "90万", videoId: "dQw4w9WgXcQ", comment: "立ち仕事の方に。ふくらはぎのポンプ機能を回復させる内容です。" },
      { title: "【寝ながら】脚やせストレッチ10分", channel: "ダイエットチャンネル", duration: "10:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "むくみ解消+脚の疲労回復に。壁に脚を上げるポーズも取り入れてください。" },
      { title: "ふくらはぎパンパンを解消する5分ケア", channel: "理学療法士チャンネル", duration: "5:30", views: "65万", videoId: "dQw4w9WgXcQ", comment: "ヒールを履く方は特にやってほしい。アキレス腱周りのケアがポイントです。" },
    ],
    fullbody: [
      { title: "全身ストレッチ15分｜朝or寝る前に", channel: "ヨガチャンネル", duration: "15:00", views: "300万", videoId: "dQw4w9WgXcQ", comment: "迷ったらまずこれ。全身まんべんなくほぐせる万能メニューです。" },
      { title: "【リラックス】自律神経を整えるストレッチ", channel: "メディテーションチャンネル", duration: "12:00", views: "170万", videoId: "dQw4w9WgXcQ", comment: "ストレスが溜まっている時に。呼吸を意識しながらゆっくり行ってください。" },
      { title: "体が軽くなる！全身フォームローラー", channel: "トレーナーチャンネル", duration: "10:00", views: "85万", videoId: "dQw4w9WgXcQ", comment: "フォームローラーをお持ちの方に。筋膜リリースで翌朝の体が全然違います。" },
    ],
  },
  training: {
    abs: [
      { title: "【5分】お腹引き締め腹筋トレーニング", channel: "筋トレチャンネル", duration: "5:00", views: "500万", videoId: "dQw4w9WgXcQ", comment: "短時間で追い込めます。フォームが大事なので、動画をよく見てから始めてください。" },
      { title: "ぽっこりお腹解消！下腹部トレーニング", channel: "ダイエットチャンネル", duration: "8:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "下腹部に効かせるコツは骨盤を後傾させること。腰が浮かないように注意。" },
      { title: "プランクチャレンジ｜体幹を鍛える10分", channel: "フィットネスチャンネル", duration: "10:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "体幹の基礎作りに最適。お尻が上がりすぎないよう一直線を意識してください。" },
    ],
    arms: [
      { title: "二の腕痩せ！タオルで簡単エクササイズ", channel: "ダイエットチャンネル", duration: "7:00", views: "150万", videoId: "dQw4w9WgXcQ", comment: "器具不要でできます。上腕三頭筋を意識して、ゆっくり動かすのがコツ。" },
      { title: "ペットボトルでできる腕トレーニング", channel: "宅トレチャンネル", duration: "10:00", views: "120万", videoId: "dQw4w9WgXcQ", comment: "500mlペットボトルで十分です。回数より丁寧なフォームを優先して。" },
      { title: "【立ったまま】二の腕引き締め5分", channel: "フィットネスチャンネル", duration: "5:00", views: "90万", videoId: "dQw4w9WgXcQ", comment: "スキマ時間にサクッとできます。肩がすくまないよう注意してください。" },
    ],
    glutes: [
      { title: "ヒップアップ！お尻トレーニング10分", channel: "美尻チャンネル", duration: "10:00", views: "350万", videoId: "dQw4w9WgXcQ", comment: "ヒップスラストの自重版が入っています。お尻の収縮を毎回しっかり感じて。" },
      { title: "【寝ながら】桃尻エクササイズ", channel: "ピラティスチャンネル", duration: "8:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "クラムシェルは中臀筋に効きます。ゴムバンドがあるとさらに効果的。" },
      { title: "スクワットバリエーション5種", channel: "筋トレチャンネル", duration: "12:00", views: "160万", videoId: "dQw4w9WgXcQ", comment: "ワイドスクワットを中心に。膝がつま先より内に入らないよう気をつけて。" },
    ],
    cardio: [
      { title: "【マンションOK】静かにできる有酸素10分", channel: "宅トレチャンネル", duration: "10:00", views: "400万", videoId: "dQw4w9WgXcQ", comment: "ジャンプなしで心拍数を上げられます。マンション住まいの方に最適。" },
      { title: "脂肪燃焼HIIT 15分｜初心者向け", channel: "HIITチャンネル", duration: "15:00", views: "280万", videoId: "dQw4w9WgXcQ", comment: "きつかったら休憩を長めにとってOK。週2〜3回が理想です。" },
      { title: "楽しく踊って有酸素！ダンスワークアウト", channel: "ダンスチャンネル", duration: "12:00", views: "220万", videoId: "dQw4w9WgXcQ", comment: "楽しみながら動きたい方に。完璧に踊れなくても動き続ければOKです。" },
    ],
    posture: [
      { title: "猫背改善エクササイズ｜毎日5分", channel: "姿勢改善チャンネル", duration: "5:00", views: "170万", videoId: "dQw4w9WgXcQ", comment: "胸椎の伸展がメインです。デスクワークの合間にもやってみてください。" },
      { title: "体幹トレーニング｜姿勢を支える筋肉を鍛える", channel: "ピラティスチャンネル", duration: "10:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "インナーマッスルを鍛えて姿勢をキープ。呼吸を止めないのがポイント。" },
      { title: "巻き肩・ストレートネック改善ストレッチ", channel: "理学療法士チャンネル", duration: "8:00", views: "95万", videoId: "dQw4w9WgXcQ", comment: "スマホ首の方に。胸鎖乳突筋と大胸筋のストレッチが特に重要です。" },
    ],
  },
  recipe: {
    protein: [
      { title: "鶏むね肉の最強レシピ5選", channel: "筋肉料理チャンネル", duration: "10:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "鶏むね肉をパサつかせないコツが詰まっています。塩麹漬けが個人的イチオシ。" },
      { title: "高タンパク弁当の作り方", channel: "ダイエット飯チャンネル", duration: "12:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "お弁当にすると昼食のPFCバランスが安定します。週末にまとめて仕込むのが楽。" },
      { title: "プロテインスムージーレシピ集", channel: "栄養士チャンネル", duration: "8:00", views: "90万", videoId: "dQw4w9WgXcQ", comment: "朝時間がない方に。バナナ+プロテイン+豆乳の組み合わせが飲みやすいです。" },
    ],
    snack: [
      { title: "ダイエット中でもOKなおやつ10選", channel: "栄養士チャンネル", duration: "8:00", views: "300万", videoId: "dQw4w9WgXcQ", comment: "間食は悪ではありません。血糖値を安定させるための戦略的な間食を覚えましょう。" },
      { title: "オートミールクッキーの作り方", channel: "ヘルシースイーツ", duration: "6:00", views: "120万", videoId: "dQw4w9WgXcQ", comment: "甘いものが食べたくなった時に。食物繊維も摂れて腹持ちが良いです。" },
      { title: "コンビニで買える低糖質おやつ", channel: "ダイエットチャンネル", duration: "5:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "自炊が難しい時の参考に。ギリシャヨーグルト+ナッツが最強の組み合わせ。" },
    ],
    mealprep: [
      { title: "1週間分の作り置き｜高タンパク低脂質", channel: "meal prepチャンネル", duration: "15:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "日曜2時間で1週間分。食事管理は準備が9割です。" },
      { title: "冷凍できるヘルシー作り置きおかず", channel: "料理チャンネル", duration: "12:00", views: "140万", videoId: "dQw4w9WgXcQ", comment: "冷凍ストックがあると外食やコンビニ弁当に頼る頻度が激減します。" },
      { title: "筋トレ民の1週間リアル食事", channel: "筋肉飯チャンネル", duration: "10:00", views: "95万", videoId: "dQw4w9WgXcQ", comment: "完璧を目指さなくてOK。まずは真似できるところから取り入れてみてください。" },
    ],
    breakfast: [
      { title: "5分で作れる高タンパク朝ごはん", channel: "朝活チャンネル", duration: "5:00", views: "160万", videoId: "dQw4w9WgXcQ", comment: "朝のタンパク質摂取は1日の代謝に影響します。卵2個は最低ラインです。" },
      { title: "オートミール朝食レシピ3選", channel: "ヘルシーチャンネル", duration: "7:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "オーバーナイトオーツは前日夜に仕込むだけ。忙しい朝の味方です。" },
      { title: "朝食抜きはNG？トレーナーの朝ごはん", channel: "フィットネスチャンネル", duration: "8:00", views: "85万", videoId: "dQw4w9WgXcQ", comment: "朝食を抜くと筋分解が進みやすいです。少量でもいいので何か口にしましょう。" },
    ],
    recovery: [
      { title: "筋トレ後30分以内に食べるべきもの", channel: "筋肉食堂チャンネル", duration: "6:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "トレーニング後はタンパク質+糖質のセットが鉄則。おにぎり+プロテインが最強。" },
      { title: "リカバリー飯｜疲労回復レシピ5選", channel: "アスリート飯チャンネル", duration: "10:00", views: "110万", videoId: "dQw4w9WgXcQ", comment: "トレーニング日の夕食に。ビタミンB群を意識したメニューが揃っています。" },
      { title: "プロテインパンケーキの作り方", channel: "筋トレスイーツ", duration: "5:00", views: "150万", videoId: "dQw4w9WgXcQ", comment: "ご褒美感がありつつ栄養もしっかり。トレーニング後の楽しみにしてください。" },
    ],
  },
  sleep: {
    fallasleep: [
      { title: "寝つきが良くなる10分ストレッチ", channel: "睡眠チャンネル", duration: "10:00", views: "350万", videoId: "dQw4w9WgXcQ", comment: "副交感神経を優位にするメニューです。部屋を暗くしてやるのがポイント。" },
      { title: "【医師監修】眠れない夜の呼吸法", channel: "ドクターチャンネル", duration: "6:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "4-7-8呼吸法が紹介されています。布団に入ってからでもできるので試してみて。" },
      { title: "寝る前ヨガ｜深い眠りへ導く15分", channel: "ヨガチャンネル", duration: "15:00", views: "280万", videoId: "dQw4w9WgXcQ", comment: "トレーニング日の夜に特におすすめ。興奮した神経を落ち着かせてくれます。" },
    ],
    wakeup: [
      { title: "中途覚醒を防ぐ生活習慣5つ", channel: "睡眠専門医チャンネル", duration: "8:00", views: "120万", videoId: "dQw4w9WgXcQ", comment: "夕方以降のカフェインと寝室の温度管理がカギ。すぐ実践できる内容です。" },
      { title: "夜中に目が覚めた時のリラックス法", channel: "メンタルヘルスチャンネル", duration: "5:00", views: "90万", videoId: "dQw4w9WgXcQ", comment: "目が覚めてもスマホは見ないでください。この動画の方法を試してみて。" },
      { title: "睡眠の質を上げるナイトルーティン", channel: "ライフスタイルチャンネル", duration: "10:00", views: "150万", videoId: "dQw4w9WgXcQ", comment: "寝る90分前の入浴がゴールデンタイム。深部体温の低下が入眠を促します。" },
    ],
    morning: [
      { title: "朝スッキリ目覚める5分モーニングストレッチ", channel: "朝活チャンネル", duration: "5:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "ベッドの上でできます。血流を促して体のスイッチを入れましょう。" },
      { title: "【科学的】目覚めが良くなる朝の習慣", channel: "サイエンスチャンネル", duration: "7:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "起きたら15分以内に日光を浴びる。これだけで体内時計がリセットされます。" },
      { title: "低血圧でも起きられる朝のルーティン", channel: "健康チャンネル", duration: "6:00", views: "95万", videoId: "dQw4w9WgXcQ", comment: "急に起き上がらず、まず手足をグーパーする。段階的に体を起こすのがコツ。" },
    ],
    fatigue: [
      { title: "筋トレ後の疲労回復を早める方法5選", channel: "トレーナーチャンネル", duration: "8:00", views: "160万", videoId: "dQw4w9WgXcQ", comment: "トレーニング後の栄養・入浴・睡眠の3点セットが回復の基本です。" },
      { title: "アクティブリカバリー｜軽い運動で回復促進", channel: "フィットネスチャンネル", duration: "12:00", views: "110万", videoId: "dQw4w9WgXcQ", comment: "休息日にじっとしているより、軽く動いた方が回復が早い。この動画の強度が理想的。" },
      { title: "疲労回復のための栄養と睡眠の最適化", channel: "栄養士チャンネル", duration: "10:00", views: "85万", videoId: "dQw4w9WgXcQ", comment: "マグネシウムとビタミンCの摂取を意識してみてください。サプリでもOKです。" },
    ],
    daytime: [
      { title: "午後の眠気を吹き飛ばす5分エクササイズ", channel: "オフィスチャンネル", duration: "5:00", views: "140万", videoId: "dQw4w9WgXcQ", comment: "デスクでもできる動きが中心。血糖値スパイクを防ぐ食事法とセットで効果倍増。" },
      { title: "【パワーナップ】正しい昼寝の取り方", channel: "睡眠チャンネル", duration: "4:00", views: "100万", videoId: "dQw4w9WgXcQ", comment: "15〜20分の昼寝は科学的に推奨されています。30分以上は逆効果なので注意。" },
      { title: "だるさ解消！自律神経リセットストレッチ", channel: "整体チャンネル", duration: "8:00", views: "120万", videoId: "dQw4w9WgXcQ", comment: "季節の変わり目に特に効きます。胸を開く動きで交感神経にスイッチを入れて。" },
    ],
  },
  yoga: {
    beginner: [
      { title: "ヨガ入門｜初めての方へ基本の10ポーズ", channel: "ヨガチャンネル", duration: "15:00", views: "400万", videoId: "dQw4w9WgXcQ", comment: "まずはこれから。呼吸と動きの連動を意識してください。完璧じゃなくてOK。" },
      { title: "【超初心者向け】体が硬くてもできるヨガ", channel: "ビギナーヨガ", duration: "12:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "「体が硬いからヨガは無理」は誤解です。硬い人ほど効果を実感できます。" },
      { title: "ヨガの基本呼吸法3種類", channel: "ヨガインストラクターチャンネル", duration: "8:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "ポーズより先に呼吸を覚えると上達が早いです。腹式呼吸から始めましょう。" },
    ],
    morningyoga: [
      { title: "朝ヨガ10分｜エネルギーを高める太陽礼拝", channel: "ヨガチャンネル", duration: "10:00", views: "300万", videoId: "dQw4w9WgXcQ", comment: "太陽礼拝は全身を使う万能フロー。朝に1セットやるだけで1日の調子が変わります。" },
      { title: "ベッドでできる朝ヨガ5分", channel: "朝活ヨガチャンネル", duration: "5:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "布団の上でそのままできる手軽さが魅力。目覚めのスイッチとして習慣化を。" },
      { title: "朝のヴィンヤサフロー20分", channel: "ヨガスタジオチャンネル", duration: "20:00", views: "110万", videoId: "dQw4w9WgXcQ", comment: "しっかり動きたい朝に。呼吸に合わせた流れるような動きが気持ちいいです。" },
    ],
    nightyoga: [
      { title: "おやすみヨガ｜10分で深い眠りへ", channel: "リラックスヨガ", duration: "10:00", views: "350万", videoId: "dQw4w9WgXcQ", comment: "寝る前の新習慣に。前屈系のポーズが多く副交感神経が優位になります。" },
      { title: "リストラティブヨガ｜完全リラックス", channel: "ヨガチャンネル", duration: "20:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "クッションやブランケットを使って完全脱力。トレーニング日の夜に特におすすめ。" },
      { title: "陰ヨガ｜じっくり伸ばす15分", channel: "ヨガインストラクター", duration: "15:00", views: "140万", videoId: "dQw4w9WgXcQ", comment: "1ポーズ3〜5分キープ。筋膜や結合組織にアプローチするのでストレッチとは別の効果。" },
    ],
    pilatescore: [
      { title: "ピラティス初心者｜体幹を鍛える15分", channel: "ピラティスチャンネル", duration: "15:00", views: "220万", videoId: "dQw4w9WgXcQ", comment: "インナーマッスルの使い方がわかる良い動画です。お腹を薄く保つ意識を忘れずに。" },
      { title: "マットピラティス｜全身引き締め20分", channel: "ピラティススタジオ", duration: "20:00", views: "160万", videoId: "dQw4w9WgXcQ", comment: "RESISTのセッションの復習にも使えます。ハンドレッドは呼吸が命です。" },
      { title: "ピラティスで姿勢改善｜骨盤底筋エクササイズ", channel: "ウィメンズピラティス", duration: "12:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "骨盤底筋群は意識しにくい部位。この動画の誘導がとてもわかりやすいです。" },
    ],
    flexibility: [
      { title: "柔軟性アップ！全身ストレッチヨガ20分", channel: "ヨガチャンネル", duration: "20:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "週3回続ければ1ヶ月で変化を実感できます。無理に伸ばさず呼吸で深めて。" },
      { title: "前屈ができるようになるプログラム", channel: "柔軟チャンネル", duration: "10:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "ハムストリングスだけでなく背中の柔軟性も重要。段階的に進められる構成が◎" },
      { title: "開脚＆前屈｜30日チャレンジ Day1", channel: "ストレッチチャンネル", duration: "12:00", views: "140万", videoId: "dQw4w9WgXcQ", comment: "シリーズものなので続けるモチベーションになります。Day1から始めてみて。" },
    ],
  },
  knowledge: {
    pfc: [
      { title: "PFCバランスとは？5分でわかる栄養の基本", channel: "栄養士チャンネル", duration: "5:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "まずはこの動画で全体像を掴んでください。自分の目標体重でのPFCを計算してみましょう。" },
      { title: "タンパク質の摂り方｜いつ・何を・どれだけ", channel: "筋肉博士チャンネル", duration: "10:00", views: "220万", videoId: "dQw4w9WgXcQ", comment: "体重×1.5〜2gが目安。1食で吸収できる量にも限りがあるので分散摂取が理想。" },
      { title: "脂質は悪者じゃない｜良い脂質の選び方", channel: "ドクターチャンネル", duration: "8:00", views: "130万", videoId: "dQw4w9WgXcQ", comment: "オメガ3脂肪酸を意識的に。サバ缶やアマニ油を日常に取り入れてみてください。" },
    ],
    muscle: [
      { title: "筋肥大のメカニズム｜なぜ筋肉は大きくなるのか", channel: "筋肉博士チャンネル", duration: "12:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "トレーニングの原理を知ると、ジムでの取り組み方が変わります。必見。" },
      { title: "超回復の嘘と本当｜最新の筋トレ科学", channel: "サイエンスチャンネル", duration: "10:00", views: "170万", videoId: "dQw4w9WgXcQ", comment: "48〜72時間の休息が必要、というのは部位や強度によって変わります。" },
      { title: "初心者が筋肉をつけるための3原則", channel: "トレーナーチャンネル", duration: "8:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "漸進性過負荷・適切な栄養・十分な休息。この3つを押さえれば確実に変わります。" },
    ],
    fatburn: [
      { title: "脂肪燃焼の仕組み｜有酸素 vs 筋トレ", channel: "ダイエットチャンネル", duration: "10:00", views: "300万", videoId: "dQw4w9WgXcQ", comment: "結論、両方大事。ただし筋トレによる基礎代謝アップが長期的には最強です。" },
      { title: "カロリー収支の基本｜痩せる仕組みを理解する", channel: "栄養士チャンネル", duration: "7:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "消費>摂取がすべての基本。ただし極端なカロリー制限はNGな理由もわかります。" },
      { title: "なぜお腹の脂肪は最後に落ちるのか", channel: "ドクターチャンネル", duration: "8:00", views: "180万", videoId: "dQw4w9WgXcQ", comment: "部分痩せはできない、という事実の科学的根拠。焦らず全体の体脂肪を落としましょう。" },
    ],
    frequency: [
      { title: "週何回トレーニングすべき？科学的な答え", channel: "筋トレ科学チャンネル", duration: "8:00", views: "250万", videoId: "dQw4w9WgXcQ", comment: "週2〜3回のRESISTセッション+自宅トレが理想的な頻度です。" },
      { title: "オーバートレーニングの兆候と対策", channel: "トレーナーチャンネル", duration: "7:00", views: "120万", videoId: "dQw4w9WgXcQ", comment: "やる気が出ない、関節が痛い、風邪を引きやすい…これらはサインです。" },
      { title: "休息日の過ごし方｜何もしないのがベスト？", channel: "フィットネスチャンネル", duration: "6:00", views: "100万", videoId: "dQw4w9WgXcQ", comment: "完全休養とアクティブレストの使い分けがわかります。散歩やストレッチがおすすめ。" },
    ],
    supplement: [
      { title: "本当に必要なサプリメント3選", channel: "栄養士チャンネル", duration: "10:00", views: "280万", videoId: "dQw4w9WgXcQ", comment: "プロテイン・クレアチン・ビタミンD。この3つはエビデンスが豊富です。" },
      { title: "プロテインの選び方｜ホエイ・ソイ・カゼインの違い", channel: "筋肉博士チャンネル", duration: "8:00", views: "200万", videoId: "dQw4w9WgXcQ", comment: "迷ったらホエイプロテイン。乳糖不耐症の方はWPIかソイを選んでください。" },
      { title: "サプリメントの嘘と本当｜買う前に見て", channel: "ドクターチャンネル", duration: "12:00", views: "150万", videoId: "dQw4w9WgXcQ", comment: "広告に踊らされないために。エビデンスのあるものだけを選ぶ目を養えます。" },
    ],
  },
};

export function getVideos(categoryId: string, concernId: string): Video[] {
  return VIDEOS[categoryId]?.[concernId] || [];
}
