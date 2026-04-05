export interface Video {
  title: string;
  channel: string;
  duration: string;
  views: string;
  videoId: string;
  comment: string;
}

export const VIDEOS: Record<string, Record<string, Video[]>> = {
  "stretch": {
    "shoulder": [
      {
        "title": "【3分肩こり解消】ガチガチの肩こりや背中の張りを解消する時短ストレッチ！",
        "channel": "Marina Takewaki",
        "duration": "4:01",
        "views": "297万",
        "videoId": "x4UHQaRVc44",
        "comment": "デスクワーク後に毎日やってほしいメニューです。僧帽筋と肩甲骨周りをしっかりほぐしましょう。"
      },
      {
        "title": "【しっかり６分】ガチガチの肩こりを解消するしっかりストレッチ！",
        "channel": "Marina Takewaki",
        "duration": "6:58",
        "views": "1320万",
        "videoId": "4zC3TO8DQms",
        "comment": "肩甲骨の可動域を広げたい方に。壁を使うバージョンも試してみてください。"
      },
      {
        "title": "【毎日8分】 ガチガチ肩こりが１回で解消！ 座ったままでもOK #607",
        "channel": "B-Flow",
        "duration": "9:22",
        "views": "286万",
        "videoId": "To1yijqZCCE",
        "comment": "寝る前のルーティンに最適。リラックス効果も高いので睡眠の質も上がります。"
      }
    ],
    "back": [
      {
        "title": "【腰痛 ストレッチ】たった３分！無理せずできる！寝ながら腰痛改善ストレッチ！",
        "channel": "整体院和み-NAGOMI-土師和也",
        "duration": "7:17",
        "views": "401万",
        "videoId": "p6kIUBFCnV0",
        "comment": "反り腰の方はまずこれから。キャットカウの動きを丁寧にやってください。"
      },
      {
        "title": "【腰痛改善ストレッチ】４分",
        "channel": "家トレTV",
        "duration": "4:13",
        "views": "104万",
        "videoId": "sSvjjJSDSyo",
        "comment": "骨盤の前傾が気になる方に。腹横筋の意識がポイントです。"
      },
      {
        "title": "立ったまま腰痛対策ストレッチ【9分間】",
        "channel": "前田のまいにちセルフケア !  by GronG",
        "duration": "9:46",
        "views": "52万",
        "videoId": "koelvnexy3g",
        "comment": "朝起きて腰が重い方に。ベッドの上でできるので続けやすいです。"
      }
    ],
    "hip": [
      {
        "title": "【毎日9分】 股関節が『超』硬い人向け！体がどんどん柔らかくなるストレッチ！【ルーティン用】",
        "channel": "オガトレ",
        "duration": "9:35",
        "views": "818万",
        "videoId": "-Y5bOC_ecB0",
        "comment": "スクワットのフォーム改善にも直結します。毎日少しずつ可動域を広げましょう。"
      },
      {
        "title": "【8分で劇的変化！】 股関節がみるみる柔らかくなる魔法のストレッチ　骨盤調整・脚の冷え・むくみに効果的 #508",
        "channel": "B-Flow",
        "duration": "10:54",
        "views": "598万",
        "videoId": "qqfTG6mpX0E",
        "comment": "体が硬い方でも無理なくできる内容です。お風呂上がりがベストタイミング。"
      },
      {
        "title": "【股関節ストレッチ】５分！ガチガチに硬くなった股関節を柔らかく！",
        "channel": "家トレTV",
        "duration": "5:36",
        "views": "161万",
        "videoId": "9cXEAPmgc5A",
        "comment": "開脚が目標の方に。2週間続けると変化を感じられるはずです。"
      }
    ],
    "leg": [
      {
        "title": "【9分】寝る前に足スッキリ！むくみを流す下半身ストレッチ",
        "channel": "オガトレ",
        "duration": "9:37",
        "views": "32万",
        "videoId": "4SsJx5W8hNQ",
        "comment": "立ち仕事の方に。ふくらはぎのポンプ機能を回復させる内容です。"
      },
      {
        "title": "【毎日5分】ふくらはぎをスッキリほぐすルーティン【疲労回復/むくみ解消/柔軟性UP/マッサージ効果】",
        "channel": "オガトレ",
        "duration": "5:57",
        "views": "276万",
        "videoId": "gdvjMR61Z4k",
        "comment": "むくみ解消+脚の疲労回復に。壁に脚を上げるポーズも取り入れてください。"
      },
      {
        "title": "【夜やると脚が激変!!】ダイエット中欠かさなかった８分間の足のマッサージ!!〜見た目を変えるダイエット〜",
        "channel": "Marina Takewaki",
        "duration": "8:12",
        "views": "168万",
        "videoId": "2ipaAMYxGm4",
        "comment": "ヒールを履く方は特にやってほしい。アキレス腱周りのケアがポイントです。"
      }
    ],
    "fullbody": [
      {
        "title": "【毎日15分】 柔軟性が高まる全身ストレッチヨガ #583",
        "channel": "B-Flow",
        "duration": "17:38",
        "views": "185万",
        "videoId": "zzpuTm0lROQ",
        "comment": "迷ったらまずこれ。全身まんべんなくほぐせる万能メニューです。"
      },
      {
        "title": "【初心者向け】全身ストレッチ｜ストレッチを始めたばかりの方にオススメ【15分間】",
        "channel": "前田のまいにちセルフケア !  by GronG",
        "duration": "15:46",
        "views": "16万",
        "videoId": "6aFNAl3NZwc",
        "comment": "ストレスが溜まっている時に。呼吸を意識しながらゆっくり行ってください。"
      },
      {
        "title": "お風呂上がりのストレッチ｜ゆったり全身ほぐし【15分間】",
        "channel": "前田のまいにちセルフケア !  by GronG",
        "duration": "15:20",
        "views": "55万",
        "videoId": "ayfMmOblHAI",
        "comment": "フォームローラーをお持ちの方に。筋膜リリースで翌朝の体が全然違います。"
      }
    ]
  },
  "training": {
    "abs": [
      {
        "title": "【100%必ず効く】腹筋の境地を超えてもはや悟り。4分で限界突破腹筋トレーニング",
        "channel": "まめたまの筋トレ日記",
        "duration": "4:59",
        "views": "644万",
        "videoId": "7E-JAyzbj7o",
        "comment": "短時間で追い込めます。フォームが大事なので、動画をよく見てから始めてください。"
      },
      {
        "title": "【下腹部＆くびれ】10種目10分間で下腹を引き締めて、くびれのあるウエストを作りましょう。目指せ最速シックスパック。初心者の方用のやり方あり。",
        "channel": "ザ・きんにくTV 【The Muscle TV】",
        "duration": "10:50",
        "views": "1473万",
        "videoId": "o5vb430_m38",
        "comment": "下腹部に効かせるコツは骨盤を後傾させること。腰が浮かないように注意。"
      },
      {
        "title": "【お腹痩せ】1日4分で脂肪燃焼🔥筋トレ＋ストレッチまでコレ一本‼︎成功者続出で600万回再生された最強腹筋！！",
        "channel": "トレぴな【脱ムチコ】",
        "duration": "6:51",
        "views": "1935万",
        "videoId": "31X6hVi4LKQ",
        "comment": "体幹の基礎作りに最適。お尻が上がりすぎないよう一直線を意識してください。"
      }
    ],
    "arms": [
      {
        "title": "【二の腕痩せ】まだ間に合う！！２週間でタプタプの二の腕を引き締める４分間のトレーニング🔥【ダイエット】2 Weeks Toned Arms Workout",
        "channel": "Momomi",
        "duration": "4:31",
        "views": "10164万",
        "videoId": "uveZX-71OUw",
        "comment": "器具不要でできます。上腕三頭筋を意識して、ゆっくり動かすのがコツ。"
      },
      {
        "title": "【3分で叶える】猫背・巻き肩 ＆ 二の腕引き締めエクササイズ #697",
        "channel": "B-Flow",
        "duration": "4:12",
        "views": "84万",
        "videoId": "hI9XRg4uaLY",
        "comment": "500mlペットボトルで十分です。回数より丁寧なフォームを優先して。"
      },
      {
        "title": "【1日5分】7日間で変わった二の腕痩せトレーニング | 5 Min Upper Body & Arms Workout【ダイエット】",
        "channel": "ひなちゃんねる / Hinata Kato",
        "duration": "5:57",
        "views": "2234万",
        "videoId": "3HFAd1LLjxU",
        "comment": "スキマ時間にサクッとできます。肩がすくまないよう注意してください。"
      }
    ],
    "glutes": [
      {
        "title": "【懇願】騙されたと思って10回やって！数多のお尻を変えた最強トレーニング🍑再編集編",
        "channel": "のがちゃんねる/nogachannel",
        "duration": "8:25",
        "views": "71万",
        "videoId": "RZDpwU0EOtg",
        "comment": "ヒップスラストの自重版が入っています。お尻の収縮を毎回しっかり感じて。"
      },
      {
        "title": "Sub)【5日で変化】30日で効率良くお尻を上げ引締めるトレーニング",
        "channel": "のがちゃんねる/nogachannel",
        "duration": "6:26",
        "views": "2577万",
        "videoId": "yL9yRJIMqQ8",
        "comment": "クラムシェルは中臀筋に効きます。ゴムバンドがあるとさらに効果的。"
      },
      {
        "title": "【1日4分】３週間でたるんだお尻と太ももを引き締める🔥最強ヒップアップトレーニング！Get Round Booty and Toned Legs in 3 WEEKS!!!!",
        "channel": "Momomi",
        "duration": "4:33",
        "views": "1053万",
        "videoId": "4JizH4SPYU8",
        "comment": "ワイドスクワットを中心に。膝がつま先より内に入らないよう気をつけて。"
      }
    ],
    "cardio": [
      {
        "title": "【14分有酸素】マンションOK!!飛ばない運動で脂肪を燃やそう！",
        "channel": "Marina Takewaki",
        "duration": "14:50",
        "views": "1037万",
        "videoId": "wP27i_ZksZ8",
        "comment": "ジャンプなしで心拍数を上げられます。マンション住まいの方に最適。"
      },
      {
        "title": "【筋トレ前後や朝に】15分の有酸素運動で効率よく体脂肪を燃やそう!!~マンション OK飛ばないトレーニング〜",
        "channel": "Marina Takewaki",
        "duration": "15:23",
        "views": "694万",
        "videoId": "hXyamPHNhkk",
        "comment": "きつかったら休憩を長めにとってOK。週2〜3回が理想です。"
      },
      {
        "title": "【地獄の11分】マンションOK！飛ばない脂肪燃焼ダンスで全身の脂肪をみるみる燃やす！",
        "channel": "Marina Takewaki",
        "duration": "12:06",
        "views": "5256万",
        "videoId": "KxzZJwmB8qc",
        "comment": "楽しみながら動きたい方に。完璧に踊れなくても動き続ければOKです。"
      }
    ],
    "posture": [
      {
        "title": "【毎日10分】 姿勢改善ストレッチ　猫背、巻き肩、体のゆがみ、骨盤調整に効果的 #579",
        "channel": "B-Flow",
        "duration": "11:48",
        "views": "180万",
        "videoId": "t_mmDRvWd18",
        "comment": "胸椎の伸展がメインです。デスクワークの合間にもやってみてください。"
      },
      {
        "title": "【7分】巻き肩&猫背を改善して細見え！座って出来る毎日エクササイズ",
        "channel": "Yuuka Sagawa",
        "duration": "7:13",
        "views": "52万",
        "videoId": "cGzQ0GOLxqE",
        "comment": "インナーマッスルを鍛えて姿勢をキープ。呼吸を止めないのがポイント。"
      },
      {
        "title": "顔のたるみと猫背の原因！ストレートネックを自力で改善するストレッチ🐈",
        "channel": "のがちゃんねる/nogachannel",
        "duration": "5:54",
        "views": "799万",
        "videoId": "yfyejTh4kZc",
        "comment": "スマホ首の方に。胸鎖乳突筋と大胸筋のストレッチが特に重要です。"
      }
    ]
  },
  "recipe": {
    "protein": [
      {
        "title": "【冷凍できる筋肉弁当】高タンパク・安い・簡単！鶏胸肉で作るねぎ塩弁当5日分！",
        "channel": "たんぱく食堂",
        "duration": "8:43",
        "views": "66万",
        "videoId": "zRsORgW7EMs",
        "comment": "鶏むね肉をパサつかせないコツが詰まっています。塩麹漬けが個人的イチオシ。"
      },
      {
        "title": "【作り置き筋肉飯】材料3つだけ。鶏胸肉で作る高タンパク・低脂質なトマト煮弁当5日分！ミールプレップ、ダイエット、カチャトーラ",
        "channel": "たんぱく食堂",
        "duration": "7:25",
        "views": "166万",
        "videoId": "2N9agFFKwTk",
        "comment": "お弁当にすると昼食のPFCバランスが安定します。週末にまとめて仕込むのが楽。"
      },
      {
        "title": "「高タンパク」で痩せる！作り置きレシピ５品【管理栄養士のダイエットレシピ】",
        "channel": "食堂あさごはん",
        "duration": "16:24",
        "views": "81万",
        "videoId": "QV1lEO38LLc",
        "comment": "朝時間がない方に。バナナ+プロテイン+豆乳の組み合わせが飲みやすいです。"
      }
    ],
    "snack": [
      {
        "title": "【ダイエット】ヤバい、うますぎる。混ぜてレンジでチンするだけ。豆腐で作るふわふわチョコケーキ【低糖質】",
        "channel": "ばくばクック",
        "duration": "12:25",
        "views": "172万",
        "videoId": "hbzd7_BBVy8",
        "comment": "間食は悪ではありません。血糖値を安定させるための戦略的な間食を覚えましょう。"
      },
      {
        "title": "【ダイエット】低糖質ブラウニー作り方。洗いものなし！5分で作れる！簡単レンジだけ♪ low carb & gluten free Banana brownie",
        "channel": "yukap",
        "duration": "5:57",
        "views": "7万",
        "videoId": "aG4ZtTobaf8",
        "comment": "甘いものが食べたくなった時に。食物繊維も摂れて腹持ちが良いです。"
      },
      {
        "title": "【ダイエット】材料３つ！低糖質バナナケーキ作り方。まぜてレンジにかけるだけ！低カロリー低脂質のヘルシースイーツlow carb & gluten free Oatmeal Banana cake",
        "channel": "yukap",
        "duration": "6:18",
        "views": "160万",
        "videoId": "3xfGNpa-kTM",
        "comment": "自炊が難しい時の参考に。ギリシャヨーグルト+ナッツが最強の組み合わせ。"
      }
    ],
    "mealprep": [
      {
        "title": "【1週間2000円】1週間で身体がみるみる変わる糖質オフ献立7日分の晩ご飯【糖質制限ダイエット】",
        "channel": "なおよキッチン",
        "duration": "16:16",
        "views": "320万",
        "videoId": "V-algc2lPeQ",
        "comment": "日曜2時間で1週間分。食事管理は準備が9割です。"
      },
      {
        "title": "【痩せるダイエット弁当】運動なしで2ヶ月で10kg痩せた私の低糖質・高タンパクな1週間お弁当レシピ  | ダイエット中の食事",
        "channel": "ayahare diet",
        "duration": "12:34",
        "views": "314万",
        "videoId": "zb8AoFIZVjY",
        "comment": "冷凍ストックがあると外食やコンビニ弁当に頼る頻度が激減します。"
      },
      {
        "title": "【1週間ダイエット弁当】お気に入りTOP5でまるごと冷凍弁当を作り置き | タンパク質30g以上/1食",
        "channel": "ayahare diet",
        "duration": "17:02",
        "views": "205万",
        "videoId": "Rq1taW6LVOI",
        "comment": "完璧を目指さなくてOK。まずは真似できるところから取り入れてみてください。"
      }
    ],
    "breakfast": [
      {
        "title": "【5分以内】超簡単！サッと作れる高タンパクな朝ごはん5選！",
        "channel": "たんぱく食堂",
        "duration": "8:23",
        "views": "6万",
        "videoId": "ZKc-GDMflO4",
        "comment": "朝のタンパク質摂取は1日の代謝に影響します。卵2個は最低ラインです。"
      },
      {
        "title": "【朝の最強５分献立】年末までに体整える朝のタンパク質20gレシピ",
        "channel": "管理栄養士:関口絢子のウェルネスキッチン",
        "duration": "14:20",
        "views": "38万",
        "videoId": "6UgPIJvJIZ0",
        "comment": "オーバーナイトオーツは前日夜に仕込むだけ。忙しい朝の味方です。"
      },
      {
        "title": "【朝ご飯はコレ】ズボラ向け朝食セットを作り置き！忙しい朝のおすすめレシピ5選とその理由【1週間の朝ごはん】",
        "channel": "おすぎ(管理栄養士)",
        "duration": "10:02",
        "views": "41万",
        "videoId": "eGEA0cmLJBs",
        "comment": "朝食を抜くと筋分解が進みやすいです。少量でもいいので何か口にしましょう。"
      }
    ],
    "recovery": [
      {
        "title": "【筋トレ飯】寝る前に食べると太る？夜の筋トレ後の食事で気を付けることは？ 【新・バズーカ岡田チャンネル】 #バズーカ岡田",
        "channel": "新・バズーカ岡田チャンネル【岡田隆】",
        "duration": "10:36",
        "views": "5万",
        "videoId": "Bh5dTptUhwA",
        "comment": "トレーニング後はタンパク質+糖質のセットが鉄則。おにぎり+プロテインが最強。"
      },
      {
        "title": "【時間別徹底解説】プロテインだけではない!! 筋トレ前の食事は何を食べる？特に減量中はこれを摂って下さい。",
        "channel": "ザ・きんにくTV 【The Muscle TV】",
        "duration": "12:04",
        "views": "29万",
        "videoId": "YVglfeShnmM",
        "comment": "トレーニング日の夕食に。ビタミンB群を意識したメニューが揃っています。"
      },
      {
        "title": "【必見】運動直後はプロテインと一緒に摂るのを避けるべき食べ物【ビーレジェンド プロテイン】",
        "channel": "ビーレジェンド チャンネル",
        "duration": "4:43",
        "views": "9.4千",
        "videoId": "96RoUNh3ocQ",
        "comment": "ご褒美感がありつつ栄養もしっかり。トレーニング後の楽しみにしてください。"
      }
    ]
  },
  "sleep": {
    "fallasleep": [
      {
        "title": "【9分】熟睡できる！最高の寝る前専用ストレッチ【快眠/睡眠の質向上/疲労回復】",
        "channel": "オガトレ",
        "duration": "9:59",
        "views": "402万",
        "videoId": "09C7ti0xY4k",
        "comment": "副交感神経を優位にするメニューです。部屋を暗くしてやるのがポイント。"
      },
      {
        "title": "自律神経を整えたい方にオススメ｜寝る前ストレッチでリラックス【7分間】",
        "channel": "前田のまいにちセルフケア !  by GronG",
        "duration": "7:36",
        "views": "179万",
        "videoId": "kwDtQwrLD0Q",
        "comment": "4-7-8呼吸法が紹介されています。布団に入ってからでもできるので試してみて。"
      },
      {
        "title": "【寝る前 専用】9分で副交感神経が高まり深い眠りへ。寝ても疲れが取れない、なかなか眠れない方向け呼吸を深めるヨガBY283",
        "channel": "美筋ヨガチャンネル",
        "duration": "10:07",
        "views": "109万",
        "videoId": "WY7L052hiPY",
        "comment": "トレーニング日の夜に特におすすめ。興奮した神経を落ち着かせてくれます。"
      }
    ],
    "wakeup": [
      {
        "title": "医師が熟睡するためにやっている5つの習慣",
        "channel": "友利新公式チャンネル(内科・皮膚科医)",
        "duration": "19:42",
        "views": "181万",
        "videoId": "Hbv-3zBB3gk",
        "comment": "夕方以降のカフェインと寝室の温度管理がカギ。すぐ実践できる内容です。"
      },
      {
        "title": "睡眠の質を上げる心理学的ナイトルーティンTOP3",
        "channel": "メンタリスト DaiGo",
        "duration": "13:29",
        "views": "24万",
        "videoId": "qFyNKVLE-dg",
        "comment": "目が覚めてもスマホは見ないでください。この動画の方法を試してみて。"
      },
      {
        "title": "【9分】熟睡できる！最高の寝る前専用ストレッチ【快眠/睡眠の質向上/疲労回復】",
        "channel": "オガトレ",
        "duration": "9:59",
        "views": "402万",
        "videoId": "09C7ti0xY4k",
        "comment": "寝る90分前の入浴がゴールデンタイム。深部体温の低下が入眠を促します。"
      }
    ],
    "morning": [
      {
        "title": "【ガチガチをほぐす】最高の朝を作る5分間ストレッチ！【Morning routine】",
        "channel": "オガトレ",
        "duration": "6:00",
        "views": "472万",
        "videoId": "gMIlRS_lbYA",
        "comment": "ベッドの上でできます。血流を促して体のスイッチを入れましょう。"
      },
      {
        "title": "【朝専用】疲れないカラダを作る極上10分ストレッチ！【Morning routine】",
        "channel": "オガトレ",
        "duration": "10:41",
        "views": "1355万",
        "videoId": "2EfFlQev4rg",
        "comment": "起きたら15分以内に日光を浴びる。これだけで体内時計がリセットされます。"
      },
      {
        "title": "朝のストレッチ｜寝たまま目覚めの6分間",
        "channel": "前田のまいにちセルフケア !  by GronG",
        "duration": "7:01",
        "views": "65万",
        "videoId": "h8bvc10n3sk",
        "comment": "急に起き上がらず、まず手足をグーパーする。段階的に体を起こすのがコツ。"
      }
    ],
    "fatigue": [
      {
        "title": "【筋トレ】間違うと一生モノの怪我！日体大准教授が正しいケアの方法をお伝えします！",
        "channel": "バズーカ岡田の筋トレラボ",
        "duration": "9:45",
        "views": "12万",
        "videoId": "ktF9LfAPKn0",
        "comment": "トレーニング後の栄養・入浴・睡眠の3点セットが回復の基本です。"
      },
      {
        "title": "40代50代のリカバリー・疲労回復。具体的な日常生活でのリカバリー方法やサプリメントの摂取について解説",
        "channel": "整体サロンSoleil神戸三宮店",
        "duration": "10:17",
        "views": "680",
        "videoId": "YZHz1aqMJhQ",
        "comment": "休息日にじっとしているより、軽く動いた方が回復が早い。この動画の強度が理想的。"
      },
      {
        "title": "疲れが取れない人必見！運動後の疲労回復を早める飲み物とは？翌日に疲れを残さない方法",
        "channel": "Dr Ishiguro",
        "duration": "6:06",
        "views": "4万",
        "videoId": "quwAF8vENCc",
        "comment": "マグネシウムとビタミンCの摂取を意識してみてください。サプリでもOKです。"
      }
    ],
    "daytime": [
      {
        "title": "ギンギン目覚めるストレッチ！PM2時に『超眠い』人向け【眠い時に目を覚ます方法】",
        "channel": "オガトレ",
        "duration": "4:08",
        "views": "23万",
        "videoId": "b5Uzpc9xJX4",
        "comment": "デスクでもできる動きが中心。血糖値スパイクを防ぐ食事法とセットで効果倍増。"
      },
      {
        "title": "【8分全身ストレッチ】ガチガチのカラダを解放！寝る前や朝に最適の簡単ストレッチ",
        "channel": "Marina Takewaki",
        "duration": "9:29",
        "views": "271万",
        "videoId": "L9puWqX2BoQ",
        "comment": "15〜20分の昼寝は科学的に推奨されています。30分以上は逆効果なので注意。"
      },
      {
        "title": "【疲労回復・集中力アップ！】 呼吸が深まり、血流が良くなるリフレッシュヨガ☆ #405",
        "channel": "B-Flow",
        "duration": "14:19",
        "views": "233万",
        "videoId": "LRyDvgEIpcg",
        "comment": "季節の変わり目に特に効きます。胸を開く動きで交感神経にスイッチを入れて。"
      }
    ]
  },
  "yoga": {
    "beginner": [
      {
        "title": "【毎日15分】ヨガ初心者さん向け🔰の柔軟性が高まる毎日ストレッチ by 363",
        "channel": "美筋ヨガチャンネル",
        "duration": "16:11",
        "views": "77万",
        "videoId": "7pc0N4x1zhw",
        "comment": "まずはこれから。呼吸と動きの連動を意識してください。完璧じゃなくてOK。"
      },
      {
        "title": "【毎日10分で体が変わる！】ヨガ初心者、体が硬い人におすすめ",
        "channel": "Tomoya Tezuna",
        "duration": "12:49",
        "views": "15万",
        "videoId": "EzN2a2HZkHs",
        "comment": "「体が硬いからヨガは無理」は誤解です。硬い人ほど効果を実感できます。"
      },
      {
        "title": "【６分初心者向けヨガ】体が硬い人も男性もOK!!全身スッキリする優しいヨガでストレッチ!!【児嶋だよ!】",
        "channel": "Marina Takewaki",
        "duration": "6:57",
        "views": "167万",
        "videoId": "slspGIMcK2Q",
        "comment": "ポーズより先に呼吸を覚えると上達が早いです。腹式呼吸から始めましょう。"
      }
    ],
    "morningyoga": [
      {
        "title": "【太らない体をつくる！】 朝の10分フローヨガで時短ダイエット☆ #461",
        "channel": "B-Flow",
        "duration": "10:45",
        "views": "310万",
        "videoId": "AqyzZj8DcWI",
        "comment": "太陽礼拝は全身を使う万能フロー。朝に1セットやるだけで1日の調子が変わります。"
      },
      {
        "title": "太陽礼拝☆ヨガ初心者にもオススメの朝ヨガ #46",
        "channel": "B-Flow",
        "duration": "7:58",
        "views": "173万",
        "videoId": "9RP9YGcQYCY",
        "comment": "布団の上でそのままできる手軽さが魅力。目覚めのスイッチとして習慣化を。"
      },
      {
        "title": "朝ヨガで一日を最高に過ごす！　15分のエナジーチャージ☆ #264",
        "channel": "B-Flow",
        "duration": "16:37",
        "views": "409万",
        "videoId": "gLCd-E8ekEg",
        "comment": "しっかり動きたい朝に。呼吸に合わせた流れるような動きが気持ちいいです。"
      }
    ],
    "nightyoga": [
      {
        "title": "【寝る前のヨガ】 全身の疲れを癒し、自律神経を整える #481",
        "channel": "B-Flow",
        "duration": "15:36",
        "views": "468万",
        "videoId": "fJJrJ2dd1U4",
        "comment": "寝る前の新習慣に。前屈系のポーズが多く副交感神経が優位になります。"
      },
      {
        "title": "【毎晩10分】ぐっすり眠れる安眠ストレッチ　全身の疲労回復や骨盤調整にも効果的！ #633",
        "channel": "B-Flow",
        "duration": "11:26",
        "views": "398万",
        "videoId": "grD9NGRtGiQ",
        "comment": "クッションやブランケットを使って完全脱力。トレーニング日の夜に特におすすめ。"
      },
      {
        "title": "10分安眠ヨガで不眠から解放される【おやすみヨガ】 #8",
        "channel": "B-Flow",
        "duration": "11:51",
        "views": "775万",
        "videoId": "te3y-dU57Eg",
        "comment": "1ポーズ3〜5分キープ。筋膜や結合組織にアプローチするのでストレッチとは別の効果。"
      }
    ],
    "pilatescore": [
      {
        "title": "【毎日のピラティス】痩せる!初心者からOK基本のピラティス自宅ピラティス♪",
        "channel": "YUMI TAKAMI /ヨガピラティス専門チャンネル",
        "duration": "12:30",
        "views": "162万",
        "videoId": "vT85-ssw7Ls",
        "comment": "インナーマッスルの使い方がわかる良い動画です。お腹を薄く保つ意識を忘れずに。"
      },
      {
        "title": "【初心者のためのピラティス10分】基本のシンプル6つの動きで全身に効くピラティス/体がかたくてもOK",
        "channel": "NOBI by NORIKO",
        "duration": "11:06",
        "views": "113万",
        "videoId": "Q9QYS6pISxk",
        "comment": "RESISTのセッションの復習にも使えます。ハンドレッドは呼吸が命です。"
      },
      {
        "title": "【祝テレビ出演】心と体の軸を整えるためのマットピラティス16分【MEGUMIさんエクササイズを再現】",
        "channel": "NOBI by NORIKO",
        "duration": "18:19",
        "views": "11万",
        "videoId": "gplqarNH08Q",
        "comment": "骨盤底筋群は意識しにくい部位。この動画の誘導がとてもわかりやすいです。"
      }
    ],
    "flexibility": [
      {
        "title": "【全身フローヨガ】 柔軟性アップとダイエットに効果的！ #519",
        "channel": "B-Flow",
        "duration": "17:16",
        "views": "124万",
        "videoId": "DJ7iz90cRcw",
        "comment": "週3回続ければ1ヶ月で変化を実感できます。無理に伸ばさず呼吸で深めて。"
      },
      {
        "title": "【毎日10分 朝ストレッチ】 柔軟性を高め、しなやかな体を作る！　#522",
        "channel": "B-Flow",
        "duration": "11:15",
        "views": "629万",
        "videoId": "1Z3SifFe4RM",
        "comment": "ハムストリングスだけでなく背中の柔軟性も重要。段階的に進められる構成が◎"
      },
      {
        "title": "【極上ストレッチ】 全身の不調が改善し、みるみる柔らかくなる！ #501",
        "channel": "B-Flow",
        "duration": "18:34",
        "views": "578万",
        "videoId": "SX2FsECzB24",
        "comment": "シリーズものなので続けるモチベーションになります。Day1から始めてみて。"
      }
    ]
  },
  "knowledge": {
    "pfc": [
      {
        "title": "【PFCバランスとは】理想的なPFCバランスと1日の目標摂取量【ビーレジェンド プロテイン】",
        "channel": "ビーレジェンド チャンネル",
        "duration": "6:52",
        "views": "9万",
        "videoId": "LOXvBPglBMA",
        "comment": "まずはこの動画で全体像を掴んでください。自分の目標体重でのPFCを計算してみましょう。"
      },
      {
        "title": "タンパク質の取りすぎは危険！バズーカ岡田が教える3大栄養素摂取法【PFCバランス】",
        "channel": "バズーカ岡田の筋トレラボ",
        "duration": "9:18",
        "views": "26万",
        "videoId": "dptKX7iqjxM",
        "comment": "体重×1.5〜2gが目安。1食で吸収できる量にも限りがあるので分散摂取が理想。"
      },
      {
        "title": "これを意識するだけでダイエットの成功率がグンとあがります！",
        "channel": "JIN'S LIFE",
        "duration": "17:23",
        "views": "22万",
        "videoId": "idsGfRbJQ6M",
        "comment": "オメガ3脂肪酸を意識的に。サバ缶やアマニ油を日常に取り入れてみてください。"
      }
    ],
    "muscle": [
      {
        "title": "【柔道整復師が教える運動生理学】筋肥大・筋力向上の仕組みと体の変化の基礎知識【#57前編】",
        "channel": "タロー・トレーニング強化書",
        "duration": "18:34",
        "views": "1万",
        "videoId": "Hfu8KeXA-dI",
        "comment": "トレーニングの原理を知ると、ジムでの取り組み方が変わります。必見。"
      },
      {
        "title": "筋肉がつく仕組み！筋肥大のメカニズムをわかりやすく解説！",
        "channel": "ボディメイクリテラシー",
        "duration": "9:11",
        "views": "9.1千",
        "videoId": "RLX3FevyzkQ",
        "comment": "48〜72時間の休息が必要、というのは部位や強度によって変わります。"
      },
      {
        "title": "【必見！筋肉大きくする究極法！】筋肥大のための「筋トレ」と「栄養」の基本【ネガティブ動作を意識しよう！】",
        "channel": "クロマッキー大学",
        "duration": "12:19",
        "views": "4万",
        "videoId": "AIh7G_GIxzI",
        "comment": "漸進性過負荷・適切な栄養・十分な休息。この3つを押さえれば確実に変わります。"
      }
    ],
    "fatburn": [
      {
        "title": "【必見】有酸素運動の新常識｜長時間で筋肉分解は本当か？徹底解説！",
        "channel": "ニトベさん / 忖度なしの正直トレーナー",
        "duration": "11:49",
        "views": "11万",
        "videoId": "3eey544P2e4",
        "comment": "結論、両方大事。ただし筋トレによる基礎代謝アップが長期的には最強です。"
      },
      {
        "title": "【10分でわかる】眠れなくなるほど面白い 図解 体脂肪の話【痩せる運動のコツ】",
        "channel": "クロマッキー大学",
        "duration": "11:25",
        "views": "199万",
        "videoId": "zCl7dzo-LO4",
        "comment": "消費>摂取がすべての基本。ただし極端なカロリー制限はNGな理由もわかります。"
      },
      {
        "title": "【筋トレ】筋肉が付き、体脂肪が燃える有酸素運動のやり方。",
        "channel": "ニトベさん / 忖度なしの正直トレーナー",
        "duration": "10:33",
        "views": "64万",
        "videoId": "N1gKKWoEPBQ",
        "comment": "部分痩せはできない、という事実の科学的根拠。焦らず全体の体脂肪を落としましょう。"
      }
    ],
    "frequency": [
      {
        "title": "【筋トレ】間違ったら致命傷！最も効率的に筋肉を育てる正しい休養！！",
        "channel": "バズーカ岡田の筋トレラボ",
        "duration": "9:38",
        "views": "67万",
        "videoId": "uj99B4qi5oA",
        "comment": "週2〜3回のRESISTセッション+自宅トレが理想的な頻度です。"
      },
      {
        "title": "【筋トレ】筋肉を大きくするためにトレーニングは毎日してしまってはいけない？【頻度】",
        "channel": "VALX 山本義徳 筋トレ大学",
        "duration": "6:02",
        "views": "70万",
        "videoId": "YyRWlpqmqXA",
        "comment": "やる気が出ない、関節が痛い、風邪を引きやすい…これらはサインです。"
      },
      {
        "title": "【筋トレ科学】休息期間と筋委縮の関係　~何日間の休みで筋分解が起こるのか？~",
        "channel": "論文で解決 ~筋肉と栄養を科学する~",
        "duration": "10:31",
        "views": "22万",
        "videoId": "XjCfk-mQL94",
        "comment": "完全休養とアクティブレストの使い分けがわかります。散歩やストレッチがおすすめ。"
      }
    ],
    "supplement": [
      {
        "title": "【サプリ】プロテインの次におすすめのサプリメントを分かりやすく解説いたします。アミノ酸、BCAA、グルタミン、クレアチン、HMBなど一体どれを摂ればいいのか？",
        "channel": "ザ・きんにくTV 【The Muscle TV】",
        "duration": "13:04",
        "views": "78万",
        "videoId": "5GoMJHWmHhQ",
        "comment": "プロテイン・クレアチン・ビタミンD。この3つはエビデンスが豊富です。"
      },
      {
        "title": "【もったいない】プロテインを無駄にしていませんか？必要な人と必要ない人それぞれ３選ずつ、初級編〜中級編です。",
        "channel": "ザ・きんにくTV 【The Muscle TV】",
        "duration": "12:36",
        "views": "54万",
        "videoId": "R8BzAVXs2_k",
        "comment": "迷ったらホエイプロテイン。乳糖不耐症の方はWPIかソイを選んでください。"
      },
      {
        "title": "【プロテインの次に必要なサプリは？】意外なTOP3をプロビルダーが解説！",
        "channel": "マッスルグリル",
        "duration": "13:16",
        "views": "4万",
        "videoId": "01L9CjQDPEI",
        "comment": "広告に踊らされないために。エビデンスのあるものだけを選ぶ目を養えます。"
      }
    ]
  }
};

export function getVideos(categoryId: string, concernId: string): Video[] {
  return VIDEOS[categoryId]?.[concernId] || [];
}
