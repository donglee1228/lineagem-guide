window.LM_BOSS = {
  "meta": {
    "note": "리니지M 한국 본서버 보스 위치·리젠 정리. 필드네임드·던전/탑·레이드/월드/드래곤 통합. 리젠/드랍/레벨은 업데이트로 자주 변동 → confidence(확인/부분확인/미확인) 정직표기.",
    "updated": "2026-07-13",
    "server": "리니지M 한국 본서버",
    "count": 54,
    "regionCount": 29,
    "groupOrder": [
      "field_small",
      "field_named",
      "dungeon_tower",
      "raid_world"
    ],
    "groupLabel": {
      "field_small": "자잘",
      "field_named": "필드네임드",
      "dungeon_tower": "던전·탑",
      "raid_world": "레이드·월드·드래곤"
    },
    "groupColor": {
      "field_small": "var(--muted)",
      "field_named": "var(--r-ranged)",
      "dungeon_tower": "var(--r-tank)",
      "raid_world": "var(--gold)"
    },
    "groupCounts": {
      "field_small": 3,
      "field_named": 28,
      "dungeon_tower": 19,
      "raid_world": 4
    },
    "anchorRegions": [
      "글루디오",
      "켄트",
      "오렌",
      "하이네",
      "아덴"
    ],
    "mapNote": "지역맵은 실제 배치를 참고해 직접 그린 도식(오리지널) 지도이며 좌표는 근사치입니다. 인벤/NC 등 타사 지도 이미지는 사용하지 않았습니다."
  },
  "regions": [
    {
      "region": "말하는 섬",
      "continent": "말하는 섬 (초보 섬)",
      "levelRange": "1~15",
      "hasBoss": true,
      "regionNo": null,
      "note": "리니지M 초보 시작 지역. 말하는 섬 마을 + 말하는 섬 던전(1~2층). 던전 2층은 구울/좀비/해골 궁수/해골 돌격병 등 약한 몬스터라 6검4셋으로 안전 사냥. 보스=커즈(Kurtz, Lv.39)가 '말하는 섬 2번' 지역에 젠(젠주기 약 10h/멍). 검은 기사단 선착장(08번)도 이 권역이며 커츠 관련.",
      "sources": [
        "https://namu.wiki/w/리니지M/지역",
        "https://lineagem.plaync.com/board/knowhow/view?articleId=5954ed3491196a0001713f67",
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 13,
      "y": 20,
      "neighbors": [
        "검은 기사단 선착장",
        "글루디오"
      ],
      "coastal": true,
      "mapNote": "본토(아덴 대륙)에서 떨어진 북서쪽 앞바다의 독립 섬. 배(선착장)로 글루딘 항구로 이동해 본토 진입. 초보 시작 지역.",
      "posConfidence": "확인"
    },
    {
      "region": "검은 기사단 선착장",
      "continent": "말하는 섬 권역",
      "levelRange": "39~",
      "hasBoss": true,
      "regionNo": "08",
      "note": "맵 번호 08. 보스 커즈(Kurtz) Lv.39 젠 지역. 커즈 세트 아이템/희귀 비법서 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 17,
      "y": 30,
      "neighbors": [
        "말하는 섬",
        "글루디오"
      ],
      "coastal": true,
      "mapNote": "말하는 섬 권역의 선착장(해안 도크). 커즈(Kurtz Lv.39) 젠. 섬↔본토 항로 연결점.",
      "posConfidence": "확인"
    },
    {
      "region": "기란 마을",
      "continent": "아덴 대륙",
      "levelRange": "15~30",
      "hasBoss": false,
      "regionNo": null,
      "note": "아덴 대륙 중심 마을. 광장 근처 '마법사 멀린'을 통해 기란 감옥으로 텔레포트. 초중반 거점.",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
      ],
      "x": 47,
      "y": 48,
      "neighbors": [
        "켄트",
        "기란 감옥 던전",
        "사이클롭스 소굴",
        "마법사의 연구실",
        "용의 계곡 / 용의 던전",
        "하이네"
      ],
      "coastal": false,
      "mapNote": "[지도 기준점] 아덴 대륙 중앙 허브 마을. 글루디오·켄트와 연결돼 사냥터 범위가 가장 넓음. 근처에 용의계곡·용의던전·기란던전·다크엘프밭·싸이(사이클롭스)밭. 하이네와도 직접 연결.",
      "posConfidence": "확인"
    },
    {
      "region": "기란 감옥 던전",
      "continent": "아덴 대륙",
      "levelRange": "20~35",
      "hasBoss": true,
      "regionNo": "04",
      "note": "맵 번호 04. 기란 감옥 던전 1~4층. 보스=파우스트(두목 클라인) 젠(젠주기 약 1h). 유니크 무기 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 50,
      "y": 53,
      "neighbors": [
        "기란 마을",
        "사이클롭스 소굴"
      ],
      "coastal": false,
      "mapNote": "기란 마을 지하/인접 감옥 던전 1~4층. 파우스트(두목 클라인) 젠. 중앙 기란 권역.",
      "posConfidence": "확인"
    },
    {
      "region": "사이클롭스 소굴",
      "continent": "아덴 대륙",
      "levelRange": "45~48",
      "hasBoss": false,
      "regionNo": null,
      "note": "기란 마을에서 우측으로 1~2분. 사이클롭스/다크엘프/임프 장로 3종 주류. 퀘스트 사냥터.",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/"
      ],
      "x": 54,
      "y": 46,
      "neighbors": [
        "기란 마을",
        "기란 감옥 던전",
        "마법사의 연구실"
      ],
      "coastal": false,
      "mapNote": "기란 마을에서 우측(동)으로 1~2분. 사이클롭스·다크엘프·임프 장로. 중앙 기란 동측 필드.",
      "posConfidence": "추정"
    },
    {
      "region": "산적 소굴",
      "continent": "아덴 대륙",
      "levelRange": "35~48",
      "hasBoss": true,
      "regionNo": "30",
      "note": "맵 번호 30(텔레포트 지역 근처). 웰던 마을 동쪽. 퀘스트 마무리 사냥터. 보스=산적 두목 젠(젠주기 약 3h). Holy Walk 스펠/희귀 비법서 드랍.",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/",
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 38,
      "y": 40,
      "neighbors": [
        "켄트",
        "글루디오"
      ],
      "coastal": false,
      "mapNote": "웰던 마을 동쪽, 텔레포트 지역 근처. 켄트~글루디오 사이 중부. 산적 두목 젠.",
      "posConfidence": "추정"
    },
    {
      "region": "요정 숲 마을",
      "continent": "아덴 대륙",
      "levelRange": "45~50",
      "hasBoss": true,
      "regionNo": "06",
      "note": "맵 번호 06. 보스=리칸트(Licant) Lv.47, 요정 숲 마을에서 5시(오른쪽) 방향 젠(젠주기 약 8h/멍). 사일런스 소드 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 28,
      "y": 58,
      "neighbors": [
        "글루디오",
        "개미 굴 (개미굴 입구)"
      ],
      "coastal": false,
      "mapNote": "글루디오 남서쪽 요정 숲 권역(엘프 지역). 숲 지형. 리칸트 Lv.47 5시 방향 젠.",
      "posConfidence": "확인"
    },
    {
      "region": "마법사의 연구실",
      "continent": "아덴 대륙",
      "levelRange": "43~45",
      "hasBoss": true,
      "regionNo": "12",
      "note": "맵 번호 12. 4대 원소 보스 카스파/메르키오르/발터자르/세마(Lv.43~45) 젠. 연구실에서 위로 쭉 이동(젠주기 약 2h). 정령/원소 가죽 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 42,
      "y": 42,
      "neighbors": [
        "기란 마을",
        "사이클롭스 소굴",
        "망자의 무덤"
      ],
      "coastal": false,
      "mapNote": "중앙 권역. 4대 원소 보스(카스파/메르키오르/발터자르/세마) 젠. 연구실에서 위(북)로 이동.",
      "posConfidence": "추정"
    },
    {
      "region": "오크 숲 / 오크 부락 / 오크 성벽",
      "continent": "아덴 대륙",
      "levelRange": "43~48",
      "hasBoss": true,
      "regionNo": "40",
      "note": "맵 번호 40~43 권역. 보스=가스트 로드(Lv.43, 40번 오크 부락 북동쪽 오크 성벽 주변, 젠 3h/멍)와 스피리드(Lv.45, 41번 오크 숲 벌목지대 주변, 젠 3h). 오리하르콘 플레이트 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 40,
      "y": 16,
      "neighbors": [
        "켄트"
      ],
      "coastal": false,
      "mapNote": "대륙 북부 오크 세력권(부락·벌목지대·성벽). 켄트 위쪽 북방. 가스트 로드 Lv.43, 스피리드 Lv.45.",
      "posConfidence": "확인"
    },
    {
      "region": "개미 굴 (개미굴 입구)",
      "continent": "아덴 대륙",
      "levelRange": "45~55",
      "hasBoss": true,
      "regionNo": "68",
      "note": "맵 번호 68(1번). 보스=거대 수호 개미 Lv.45, 개미 굴 입구 4층 2구역 젠(젠주기 약 3.5h). 스피릿 링 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 30,
      "y": 54,
      "neighbors": [
        "글루디오",
        "죽음의 폐허 / 카오틱 신전",
        "요정 숲 마을"
      ],
      "coastal": false,
      "mapNote": "글루디오 남쪽 개미굴 입구 4층 던전. 거대 수호 개미 Lv.45. 서중부 지하 던전.",
      "posConfidence": "확인"
    },
    {
      "region": "망자의 무덤",
      "continent": "아덴 대륙",
      "levelRange": "46~50",
      "hasBoss": true,
      "regionNo": "23",
      "note": "맵 번호 23(18번). 보스 2종: 네크로맨서 Lv.46(젠 홀수시 1,3,5,7,9,11시/멍), 데스나이트 Lv.48(젠 약 7h/멍). 데스나이트 세트 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 60,
      "y": 44,
      "neighbors": [
        "마법사의 연구실",
        "오렌",
        "거울의 숲"
      ],
      "coastal": false,
      "mapNote": "기란과 오렌 사이 중동부 통로/무덤(데스패스 계열). 네크로맨서 Lv.46·데스나이트 Lv.48.",
      "posConfidence": "추정"
    },
    {
      "region": "은기사 마을",
      "continent": "아덴 대륙",
      "levelRange": "50~55",
      "hasBoss": true,
      "regionNo": "53",
      "note": "맵 번호 53(58번). 보스=아르피어(Arpia) Lv.50, 은기사 마을 북쪽 숲 12시 방향 젠(젠주기 약 4h). 윈드 브레스 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 52,
      "y": 64,
      "neighbors": [
        "아덴",
        "하이네",
        "거울의 숲"
      ],
      "coastal": false,
      "mapNote": "아덴 인근 중남부 마을. 우측(동)으로 이동하면 하이네 필드로 연결. 아르피어 Lv.50 북쪽 숲 12시.",
      "posConfidence": "확인"
    },
    {
      "region": "죽음의 폐허 / 카오틱 신전",
      "continent": "아덴 대륙",
      "levelRange": "35~45",
      "hasBoss": true,
      "regionNo": "59",
      "note": "맵 번호 59(60번). 보스=바포메트(Baphomet) Lv.35, 죽음의 폐허/카오틱 신전 젠. 젠 시간이 고정형(오후 2:20~30, 오후 8:00~30). 바포메트 아머/희귀 비법서 드랍.",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 30,
      "y": 48,
      "neighbors": [
        "글루디오",
        "개미 굴 (개미굴 입구)"
      ],
      "coastal": false,
      "mapNote": "글루디오 부근 서부(카오틱 신전=버그밭 인근). 바포메트 Lv.35 고정 젠.",
      "posConfidence": "추정"
    },
    {
      "region": "에바왕국 던전",
      "continent": "아덴 대륙",
      "levelRange": "65~70",
      "hasBoss": true,
      "regionNo": "21",
      "note": "맵 번호 21(37번). 보스=자이언트 웜(Giant Worm) Lv.69, 에바왕국 던전 4층 난파선 주위 젠(젠주기 약 2h/멍).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 62,
      "y": 80,
      "neighbors": [
        "하이네",
        "로서스 섬"
      ],
      "coastal": true,
      "mapNote": "하이네(항구)에서 이어지는 남부 수중/해안 왕국 던전. 4층 난파선. 자이언트 웜 Lv.69.",
      "posConfidence": "추정"
    },
    {
      "region": "거울의 숲",
      "continent": "아덴 대륙",
      "levelRange": "60~68",
      "hasBoss": true,
      "regionNo": "54",
      "note": "맵 번호 54(2번). 보스=도펠겡어(Doppelganger) 보스 Lv.65, 거울의 숲 5시 방향 지역 숲 젠(젠주기 약 7h/멍).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 66,
      "y": 54,
      "neighbors": [
        "오렌",
        "망자의 무덤",
        "상아탑",
        "은기사 마을"
      ],
      "coastal": false,
      "mapNote": "동부 숲 지형. 도펠겡어 보스 Lv.65 5시 방향. 오렌~은기사 사이 동측.",
      "posConfidence": "추정"
    },
    {
      "region": "로서스 섬",
      "continent": "아덴 대륙",
      "levelRange": "70~75",
      "hasBoss": true,
      "regionNo": "56",
      "note": "맵 번호 56(15번). 보스=자이언트 크로커다일 Lv.73, 로서스 섬 젠(젠주기 약 3h).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 76,
      "y": 82,
      "neighbors": [
        "에바왕국 던전",
        "하이네"
      ],
      "coastal": true,
      "mapNote": "남동쪽 앞바다의 섬. 자이언트 크로커다일 Lv.73(습지/해안). 섬 지형.",
      "posConfidence": "추정"
    },
    {
      "region": "용의 계곡 / 용의 던전",
      "continent": "아덴 대륙",
      "levelRange": "60~77",
      "hasBoss": true,
      "regionNo": "14",
      "note": "맵 번호 14~17, 32, 48~50 권역. 60렙 초반 진입, 1층은 공격력 100~110·명중 70+ 필요. 다수 드레이크 보스: 동/중/북서 드레이크(48~50번, 젠 2~3h), 거대 드레이크 Lv.77(17번 용의 계곡 중앙 위 큰 용뼈 지역, 젠 3h/멍), 드레이크 Lv.74(14~17번 던전 입구·32번 삼거리). 대흑장로 Lv.73(15번 용의 던전 중앙 입구 큰 용뼈 지역, 젠 3h).",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 54,
      "y": 30,
      "neighbors": [
        "기란 마을",
        "화룡의 둥지 / 화염의 둥지",
        "오렌"
      ],
      "coastal": false,
      "mapNote": "기란 북동쪽 산악 고레벨 계곡(드레이크 다수·대흑장로·거대 드레이크 Lv.77). 험준한 용뼈 지형.",
      "posConfidence": "확인"
    },
    {
      "region": "화룡의 둥지 / 화염의 둥지",
      "continent": "아덴 대륙",
      "levelRange": "75~85",
      "hasBoss": true,
      "regionNo": "33",
      "note": "맵 번호 33(72번). 고레벨 보스 밀집: 이프리트(Ifrit) Lv.77(화룡의 둥지 11시 방향, 젠 2h/멍), 피닉스(Phoenix) Lv.84(화염의 둥지 12시 방향, 젠 7h/멍).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 60,
      "y": 22,
      "neighbors": [
        "용의 계곡 / 용의 던전",
        "오렌 설벽"
      ],
      "coastal": false,
      "mapNote": "용의 계곡 너머 북동부 화산/용암 둥지. 이프리트 Lv.77·피닉스 Lv.84. 화염 지형 고레벨.",
      "posConfidence": "추정"
    },
    {
      "region": "오렌 설벽 (설벽)",
      "continent": "아덴 대륙 (오렌 지방)",
      "levelRange": "78~85",
      "hasBoss": true,
      "regionNo": "36",
      "note": "맵 번호 36(29번). 보스=큰 발의 마요(마요) Lv.80, 오렌 설벽 12시 방향 젠(젠주기 약 3h/멍).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 68,
      "y": 16,
      "neighbors": [
        "오렌",
        "화룡의 둥지 / 화염의 둥지",
        "엘모어 전초기지 / 격전지"
      ],
      "coastal": false,
      "mapNote": "오렌 북쪽 설원/설벽(엘모어 방면 북방 눈 지형). 큰 발의 마요 Lv.80 12시 방향.",
      "posConfidence": "확인"
    },
    {
      "region": "상아탑",
      "continent": "아덴 대륙 (오렌 지방)",
      "levelRange": "60~75 (70+ 추천)",
      "hasBoss": true,
      "regionNo": null,
      "note": "오렌 상아탑. 70레벨 이상 추천, 상대적으로 난이도 낮고 경험치 효율 좋음. 1~4층은 60.5렙 무난, 5층은 몬스터 선공. 보스=감시자 데몬(상아탑 7층, 젠주기 약 6h).",
      "sources": [
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=143551",
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=184193"
      ],
      "x": 72,
      "y": 32,
      "neighbors": [
        "오렌",
        "거울의 숲",
        "오만과 신념의 탑"
      ],
      "coastal": false,
      "mapNote": "오렌의 마법탑(7층). 동부 오렌 지방. 감시자 데몬 7층. 상대적 저난이도 고효율 던전.",
      "posConfidence": "확인"
    },
    {
      "region": "오만과 신념의 탑 (오만의 탑)",
      "continent": "아덴 대륙",
      "levelRange": "50~65",
      "hasBoss": false,
      "regionNo": null,
      "note": "층별 사냥터. 1~3층 중반 사냥터로 인기.",
      "sources": [
        "https://lineagem.plaync.com/guidebook/view?title=오만과+신념의+탑",
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439"
      ],
      "x": 82,
      "y": 42,
      "neighbors": [
        "상아탑",
        "오렌",
        "흑기사 전투기지"
      ],
      "coastal": false,
      "mapNote": "대륙 동편의 고탑. 오렌/상아탑 동쪽. 층별 사냥터(1~3층 인기).",
      "posConfidence": "확인"
    },
    {
      "region": "엘모어 전초기지 / 격전지",
      "continent": "아덴 대륙 (엘모어 지방)",
      "levelRange": "70~80",
      "hasBoss": true,
      "regionNo": "38",
      "note": "맵 번호 38~39. 보스: 광풍/질풍의 샤스키(38번 엘모어 전초기지/격전지), 빨샤(38번 엘모어 격전지에서 밑으로, 젠 2h/멍), 녹샤(39번 엘모어 전초기지, 젠 2h/멍).",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "x": 74,
      "y": 20,
      "neighbors": [
        "오렌 설벽",
        "황혼 산맥"
      ],
      "coastal": false,
      "mapNote": "북동부 엘모어 지방 전초기지/격전지. 샤스키(광풍/질풍/빨샤/녹샤) 젠. 설원~산악 접경 고레벨.",
      "posConfidence": "추정"
    },
    {
      "region": "황혼 산맥",
      "continent": "아덴 대륙",
      "levelRange": "75~85",
      "hasBoss": true,
      "regionNo": "74",
      "note": "맵 번호 74. 보스=에인션트 자이언트(Ancient Giant), 황혼 산맥 젠(젠주기 약 5h/멍).",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "x": 80,
      "y": 24,
      "neighbors": [
        "엘모어 전초기지 / 격전지",
        "흑기사 전투기지"
      ],
      "coastal": false,
      "mapNote": "북동 외곽 산맥 고레벨. 에인션트 자이언트. 험준 산악 지형.",
      "posConfidence": "추정"
    },
    {
      "region": "흑기사 전투기지",
      "continent": "아덴 대륙",
      "levelRange": "78~88",
      "hasBoss": true,
      "regionNo": "75",
      "note": "맵 번호 75. 고레벨 보스 밀집: 암흑대장로 / 베리스 / 케레니스, 흑기사 전투기지 젠(젠주기 약 3h/멍).",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "x": 86,
      "y": 32,
      "neighbors": [
        "황혼 산맥",
        "오만과 신념의 탑"
      ],
      "coastal": false,
      "mapNote": "동부 최외곽 고레벨 전투기지. 암흑대장로/베리스/케레니스 밀집. 최상위 사냥터.",
      "posConfidence": "추정"
    },
    {
      "region": "글루디오",
      "continent": "아덴 대륙 (서부)",
      "levelRange": "10~30",
      "hasBoss": false,
      "regionNo": null,
      "note": "[지도 기준점] 말하는 섬을 벗어나 진입하는 본토 서부 관문 마을(글루딘 항구=서해안). 북쪽 골밭, 동쪽 흑기사밭, 동북 장로밭, 카오틱신전 부근 버그밭. 켄트·기란으로 연결.",
      "mapNote": "[지도 기준점] 말하는 섬을 벗어나 진입하는 본토 서부 관문 마을(글루딘 항구=서해안). 북쪽 골밭, 동쪽 흑기사밭, 동북 장로밭, 카오틱신전 부근 버그밭. 켄트·기란으로 연결.",
      "x": 24,
      "y": 46,
      "neighbors": [
        "말하는 섬",
        "검은 기사단 선착장",
        "켄트",
        "죽음의 폐허 / 카오틱 신전",
        "개미 굴 (개미굴 입구)",
        "요정 숲 마을"
      ],
      "coastal": true,
      "posConfidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=303626&site=lineagem",
        "https://www.khgames.co.kr/news/articleView.html?idxno=6707"
      ]
    },
    {
      "region": "켄트",
      "continent": "아덴 대륙 (서북부)",
      "levelRange": "15~30",
      "hasBoss": false,
      "regionNo": null,
      "note": "[지도 기준점] 글루디오 영지 근처(북쪽)의 마을. 펫 사냥 초보 거점. 아래쪽 난쟁이·장로 사냥터, 11시 방향 오우거 밭. 북쪽으로 오크 지역.",
      "mapNote": "[지도 기준점] 글루디오 영지 근처(북쪽)의 마을. 펫 사냥 초보 거점. 아래쪽 난쟁이·장로 사냥터, 11시 방향 오우거 밭. 북쪽으로 오크 지역.",
      "x": 34,
      "y": 30,
      "neighbors": [
        "글루디오",
        "기란 마을",
        "오크 숲 / 오크 부락 / 오크 성벽",
        "산적 소굴"
      ],
      "coastal": false,
      "posConfidence": "확인",
      "sources": [
        "https://www.khgames.co.kr/news/articleView.html?idxno=6707"
      ]
    },
    {
      "region": "오렌",
      "continent": "아덴 대륙 (동부)",
      "levelRange": "40~70",
      "hasBoss": false,
      "regionNo": null,
      "note": "[지도 기준점] 대륙 동부 마법 문화 중심 마을(상아탑 인근). 남동쪽 엘모어밭. 북쪽 설벽, 동쪽 오만.",
      "mapNote": "[지도 기준점] 대륙 동부 마법 문화 중심 마을(상아탑 인근). 남동쪽 엘모어밭. 북쪽 설벽, 동쪽 오만.",
      "x": 70,
      "y": 36,
      "neighbors": [
        "망자의 무덤",
        "상아탑",
        "오렌 설벽",
        "거울의 숲",
        "용의 계곡 / 용의 던전",
        "오만과 신념의 탑"
      ],
      "coastal": false,
      "posConfidence": "확인",
      "sources": [
        "https://www.khgames.co.kr/news/articleView.html?idxno=6707",
        "https://lineagem.inven.co.kr/dataninfo/maps/?idx=182409"
      ]
    },
    {
      "region": "하이네",
      "continent": "아덴 대륙 (남부 해안)",
      "levelRange": "40~70",
      "hasBoss": false,
      "regionNo": null,
      "note": "[지도 기준점] 남부 해안 항구 마을. 기란과 직접 연결, 은기사 마을 동쪽. 방사형 사냥터. 에바 왕국(수중)·로서스 섬 관문.",
      "mapNote": "[지도 기준점] 남부 해안 항구 마을. 기란과 직접 연결, 은기사 마을 동쪽. 방사형 사냥터. 에바 왕국(수중)·로서스 섬 관문.",
      "x": 58,
      "y": 72,
      "neighbors": [
        "기란 마을",
        "은기사 마을",
        "에바왕국 던전",
        "로서스 섬",
        "아덴"
      ],
      "coastal": true,
      "posConfidence": "확인",
      "sources": [
        "https://www.khgames.co.kr/news/articleView.html?idxno=6707"
      ]
    },
    {
      "region": "아덴",
      "continent": "아덴 대륙 (중남부, 수도)",
      "levelRange": "50~",
      "hasBoss": false,
      "regionNo": null,
      "note": "[지도 기준점] 대륙 중남부의 왕국 수도(아덴성). 기란 남쪽. 은기사 마을·하이네와 연결.",
      "mapNote": "[지도 기준점] 대륙 중남부의 왕국 수도(아덴성). 기란 남쪽. 은기사 마을·하이네와 연결.",
      "x": 50,
      "y": 68,
      "neighbors": [
        "은기사 마을",
        "하이네"
      ],
      "coastal": false,
      "posConfidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=179278&site=lineage",
        "https://lineagem.inven.co.kr/dataninfo/maps/?idx=182409"
      ]
    }
  ],
  "bosses": [
    {
      "name": "바포메트",
      "tier": "자잘",
      "groupKey": "field_small",
      "region": "카오틱 신전(혼돈의 신전)",
      "map": "59. 카오틱 신전",
      "location": "신전 내부 중앙 제단부",
      "level": 35,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "바포메트의 갑옷/지팡이",
        "희귀 제작 비법서"
      ],
      "note": "저레벨 필드보스 중 난이도 매우 쉬움, 1~2명이면 공략 가능",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://m.hungryapp.co.kr/bbs/bbs_view.php?pid=10910&bcode=lineagem"
      ],
      "regionNo": "59",
      "rx": 50,
      "ry": 45,
      "posConfidence": "확인",
      "worldRegion": "죽음의 폐허 / 카오틱 신전"
    },
    {
      "name": "커츠",
      "tier": "자잘",
      "groupKey": "field_small",
      "region": "말하는 섬 (검은 기사단 선착장)",
      "map": "08. 검은 기사단 선착장",
      "location": "말하는 섬 검은 기사단 선착장 부근에 필드 출현하는 네임드 보스",
      "level": 39,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "캔슬레이션 마법서",
        "커츠의 투구/부츠/장갑/검",
        "반역자의 방패",
        "희귀 제작 비법서",
        "희귀급 아이템"
      ],
      "note": "범위 웨이브(범위 마법) 다수 시전, 마법사 2명 이상 권장 ／ 저레벨 구간 대표 네임드 필드 보스. 젠 타임 경쟁 심함 ／ 난이도 어려움, 2~3파티 필요. 저~중레벨이나 체감 난이도 높은 편",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://m.hungryapp.co.kr/bbs/bbs_view.php?pid=10910&bcode=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/294",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "08",
      "rx": 55,
      "ry": 62,
      "posConfidence": "추정",
      "worldRegion": "검은 기사단 선착장"
    },
    {
      "name": "가스트 로드",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "오크 부락",
      "map": "40. 오크 부락 북동쪽(오크 성벽 주변)",
      "location": "북동쪽 오크 성벽 주변에서 배회",
      "level": 43,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "캔슬레이션 마법서",
        "오리하루콘 판금",
        "희귀 제작 비법서"
      ],
      "note": "난이도 쉬움, 2~3명 적정. 리젠 후 근방을 배회하므로 주변 수색 필요 ／ 오크 지역 중레벨 네임드. 드랍 세부 미확인",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "40",
      "rx": 70,
      "ry": 26,
      "posConfidence": "확인",
      "worldRegion": "오크 숲 / 오크 부락 / 오크 성벽"
    },
    {
      "name": "메르키오르",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "마법사의 연구실",
      "map": "12. 마법사의 연구실",
      "location": "연구실 내부(카스파 4형제 중 1체)",
      "level": "43~45",
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "각 피혁류",
        "고유 모자",
        "희귀 제작 비법서"
      ],
      "note": "카스파와 함께 최대 4체 동시 출현 가능",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "12",
      "rx": 38,
      "ry": 42,
      "posConfidence": "추정",
      "worldRegion": "마법사의 연구실"
    },
    {
      "name": "발터자르",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "마법사의 연구실",
      "map": "12. 마법사의 연구실",
      "location": "연구실 내부(카스파 4형제 중 1체)",
      "level": "43~45",
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "각 피혁류",
        "고유 모자",
        "희귀 제작 비법서"
      ],
      "note": "카스파와 함께 최대 4체 동시 출현 가능",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "12",
      "rx": 60,
      "ry": 42,
      "posConfidence": "추정",
      "worldRegion": "마법사의 연구실"
    },
    {
      "name": "세마",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "마법사의 연구실",
      "map": "12. 마법사의 연구실",
      "location": "연구실 내부(카스파 4형제 중 1체)",
      "level": "43~45",
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "각 피혁류",
        "고유 모자",
        "희귀 제작 비법서"
      ],
      "note": "카스파와 함께 최대 4체 동시 출현 가능",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "12",
      "rx": 38,
      "ry": 62,
      "posConfidence": "추정",
      "worldRegion": "마법사의 연구실"
    },
    {
      "name": "카스파",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "마법사의 연구실",
      "map": "마법사의 연구실 / 연구실",
      "location": "연구실 내부(메르키오르/발터자르/세마와 함께 최대 4개체 동시 출현 가능)",
      "level": "43~45",
      "respawn": "약 2시간(사망 후 랜덤)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "마력의 지팡이",
        "희귀 제작 비법서",
        "카스파의 모자",
        "메르키오르의 모자",
        "발터자르의 모자",
        "세마의 모자",
        "불/물/땅/바람의 피혁",
        "불의 피혁/물의 피혁",
        "카스파 고유 모자"
      ],
      "note": "마법사 컨셉 네임드. 4대 모자(카스파·메르키오르·발터자르·세마) 및 원소 피혁 드랍 ／ 난이도 쉬움, 2~3명 적정. 4형제 네임드(카스파/메르키오르/발터자르/세마) 중 하나",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/6054",
        "https://lineagem.plaync.com/board/free/view?articleId=5e07d4c6d7a85c0001a1c018",
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "12",
      "rx": 60,
      "ry": 62,
      "posConfidence": "추정",
      "worldRegion": "마법사의 연구실"
    },
    {
      "name": "거대 수호 개미",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "개미굴",
      "map": "68. 개미 굴 입구 4층",
      "location": "개미굴 입구 4층 내부",
      "level": 45,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "미확인",
        "미확인(개미굴 계열)"
      ],
      "note": "난이도 쉬움, 2~3명 적정. (별개 콘텐츠인 '혼돈의 개미굴' 여왕개미와 혼동 주의) ／ 개미굴 사냥터 대표 네임드. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "68",
      "rx": 50,
      "ry": 55,
      "posConfidence": "확인",
      "worldRegion": "개미 굴 (개미굴 입구)"
    },
    {
      "name": "스피리드",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "오크 숲 벌목지대",
      "map": "41. 오크 숲 벌목지대",
      "location": "오크 숲 벌목지대 주변",
      "level": 45,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "일정 주기마다 일반 몬스터를 소환. 소환된 잡몹 정리가 관건 ／ 저~중레벨 네임드. 드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "41",
      "rx": 48,
      "ry": 48,
      "posConfidence": "추정",
      "worldRegion": "오크 숲 / 오크 부락 / 오크 성벽"
    },
    {
      "name": "네크로맨서",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "망자의 무덤",
      "map": "23. 망자의 무덤",
      "location": "무덤 내부",
      "level": 46,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "난이도 쉬움, 2~3명 적정. 같은 맵에 데스나이트도 등장",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "23",
      "rx": 42,
      "ry": 45,
      "posConfidence": "추정",
      "worldRegion": "망자의 무덤"
    },
    {
      "name": "리칸트",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "요정 숲 마을",
      "map": "06. 요정 숲 마을",
      "location": "마을 기준 5시 방향",
      "level": 47,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "젤데이",
        "불의 피혁/물의 피혁",
        "마력의 지팡이",
        "희귀 제작 비법서"
      ],
      "note": "난이도 쉬움, 3~4명 적정 ／ 요정숲 지역 늑대인간형 네임드. 드랍 세부 미확인",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054",
        "https://lineagem.plaync.com/board/free/view?articleId=5e07d4c6d7a85c0001a1c018"
      ],
      "regionNo": "06",
      "rx": 66,
      "ry": 80,
      "posConfidence": "확인",
      "worldRegion": "요정 숲 마을"
    },
    {
      "name": "데스나이트",
      "tier": "레이드",
      "groupKey": "field_named",
      "region": "망자의 무덤",
      "map": "망자의 무덤 주변",
      "location": "망자의 무덤 지역 필드 출현 네임드 보스",
      "level": 48,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "오픈필드",
      "drops": [
        "젤데이",
        "희귀 제작 비법서",
        "희귀급 아이템"
      ],
      "note": "중레벨 구간 대표 필드 보스 ／ 난이도 쉬움, 2~3명 적정 ／ 언데드 죽음 컨셉 네임드. '죽음의 회랑'과는 별개 맵일 수 있어 위치 재확인 권장",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://m.hungryapp.co.kr/bbs/bbs_view.php?pid=10910&bcode=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "23",
      "rx": 60,
      "ry": 56,
      "posConfidence": "추정",
      "worldRegion": "망자의 무덤"
    },
    {
      "name": "아르피어",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "은기사 마을 북쪽 숲 / 고요한 숲",
      "map": "53. 은기사 마을 북쪽 숲",
      "location": "은기사 마을 북쪽 숲 12시 방향",
      "level": 50,
      "respawn": "약 2시간(사망 후 랜덤)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "난이도 보통, 적정 4~5명·마법사 필요. 범위 마법(거미줄) 시전 주의 ／ 범위 마법(거미줄) 시전, 데미지 꽤 아픔. 마법사 다수 권장",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "53",
      "rx": 50,
      "ry": 16,
      "posConfidence": "확인",
      "worldRegion": "은기사 마을"
    },
    {
      "name": "도펠겡어",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "거울의 숲",
      "map": "54. 거울의 숲",
      "location": "거울의 숲 필드 내",
      "level": 65,
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "미확인",
        "미확인(고급 제작/방어구 계열)"
      ],
      "note": "중레벨 상단 경계 보스. 스턴 기술 시전, 2파티 권장 ／ 플레이어 형상을 복제하는 컨셉의 네임드. 드랍 세부는 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "54",
      "rx": 66,
      "ry": 80,
      "posConfidence": "확인",
      "worldRegion": "거울의 숲"
    },
    {
      "name": "자이언트 웜",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "에바 왕국 던전",
      "map": "에바 왕국 던전 4층 (난파선 주변)",
      "location": "에바 왕국 던전 4층 난파선 주변 출현 대형 보스",
      "level": 69,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "필드 상시젠",
      "drops": [
        "에바왕국 던전 계열(수정 단검·해신의 삼지창 등 사냥터 산출물)",
        "희귀 제작 비법서",
        "희귀급 이상 아이템"
      ],
      "note": "에바왕국 던전의 대표 네임드. 드랍 세부는 사냥터 산출물 기준 추정 ／ 공략 시 10~11명 이상 권장되는 고레벨 다인 레이드",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "21",
      "rx": 50,
      "ry": 38,
      "posConfidence": "확인",
      "worldRegion": "에바왕국 던전"
    },
    {
      "name": "드레이크",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "용의 계곡",
      "map": "용의 계곡 던전 입구 (동/서/북 각 입구)",
      "location": "각 용던 입구 및 용의 계곡 삼거리",
      "level": 74,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "필드 상시젠",
      "drops": [
        "용의 계곡 계열(뇌신검·희귀 제작 비법서 등 사냥터 산출물)",
        "희귀 제작 비법서",
        "희귀급 이상 아이템"
      ],
      "note": "동쪽/서쪽/북쪽 등 입구별로 개별 드레이크가 리젠. 서쪽 쌍드레이크는 약 2시간 주기 ／ 공략 시 11~12명 이상 권장되는 고레벨 레이드",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": null,
      "rx": 42,
      "ry": 62,
      "posConfidence": "추정",
      "worldRegion": "용의 계곡 / 용의 던전"
    },
    {
      "name": "거대 드레이크",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "용의 계곡",
      "map": "17. 용의 계곡 중앙 지역 (용계 삼거리 큰 용뼈 주변)",
      "location": "용의 계곡 중앙 지역 위 큰 용뼈 지역 주변",
      "level": 77,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "필드 상시젠",
      "drops": [
        "드레이크 가죽 벨트(영웅 등급)",
        "슬레이어의 보상 상자",
        "희귀 제작 비법서",
        "희귀급 이상 아이템"
      ],
      "note": "2018 필드보스 리뉴얼 4종 중 하나. '질풍의 거대 드레이크'로 명칭 강화. 영웅 등급 방어구 드랍 ／ 13~14명(3파티 이상) 권장 고레벨 레이드",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://news.nate.com/view/20180314n18493"
      ],
      "regionNo": "17",
      "rx": 52,
      "ry": 32,
      "posConfidence": "확인",
      "worldRegion": "용의 계곡 / 용의 던전"
    },
    {
      "name": "이프리트",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "화룡의 둥지 / 화염 지역",
      "map": "33. 화룡의 둥지",
      "location": "화룡의 둥지 11시 방향",
      "level": 77,
      "respawn": "약 2시간(사망 후 랜덤)",
      "type": "필드 상시젠",
      "drops": [
        "이프리트 마력 목걸이(영웅 등급)",
        "슬레이어의 보상 상자"
      ],
      "note": "화염(불) 속성 컨셉. 2018 필드보스 리뉴얼 4종 중 하나. 화룡의 둥지는 마왕의 반지 사냥터",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://news.nate.com/view/20180314n18493"
      ],
      "regionNo": "33",
      "rx": 34,
      "ry": 22,
      "posConfidence": "확인",
      "worldRegion": "화룡의 둥지 / 화염의 둥지"
    },
    {
      "name": "큰 발의 마요",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "오렌 설벽 (설원)",
      "map": "36. 오렌 설벽",
      "location": "오렌 설벽 지역 (설벽)",
      "level": 80,
      "respawn": "약 4시간(사망 후 랜덤)",
      "type": "필드 상시젠",
      "drops": [
        "마요 얼음 부츠(영웅 등급)",
        "슬레이어의 보상 상자"
      ],
      "note": "얼음(냉기) 속성 컨셉. 2018 필드보스 리뉴얼 4종 중 하나",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://news.nate.com/view/20180314n18493"
      ],
      "regionNo": "36",
      "rx": 50,
      "ry": 16,
      "posConfidence": "확인",
      "worldRegion": "오렌 설벽 (설벽)"
    },
    {
      "name": "피닉스",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "화염의 둥지 / 화룡의 둥지",
      "map": "33. 화염의 둥지",
      "location": "화염의 둥지 12시 방향",
      "level": 84,
      "respawn": "처치 후 약 2시간 리젠(확률에 따라 4/6/8시간 지연 가능)",
      "type": "필드 상시젠",
      "drops": [
        "피닉스 깃털 가더(영웅 등급)",
        "슬레이어의 보상 상자",
        "희귀 제작 비법서",
        "희귀급 이상 아이템"
      ],
      "note": "리뉴얼 당시 필드 몬스터 최강(Lv.84). 범위 스턴 기술 및 범위 화염 마법 다수 시전. 불 속성 ／ 16~17명(4파티 이상) 권장. 발라카스(화룡) 이전 최고난도 필드 보스급",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "http://www.ujeil.com/news/articleView.html?idxno=218294"
      ],
      "regionNo": "33",
      "rx": 52,
      "ry": 16,
      "posConfidence": "확인",
      "worldRegion": "화룡의 둥지 / 화염의 둥지"
    },
    {
      "name": "감시자 데몬",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "상아탑",
      "map": "상아탑 7층",
      "location": "상아탑 7층 전역",
      "level": "미확인",
      "respawn": "약 6시간(멍/무적 없음)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(상아탑 계열)"
      ],
      "note": "상아탑 최상층 네임드. 데몬 계열. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/6054",
        "https://lineagem.plaync.com/board/free/view?articleId=5e07d4c6d7a85c0001a1c018"
      ],
      "regionNo": null,
      "rx": 48,
      "ry": 20,
      "posConfidence": "확인",
      "worldRegion": "상아탑"
    },
    {
      "name": "산적 두목",
      "tier": "자잘",
      "groupKey": "field_small",
      "region": "산적 소굴",
      "map": "산적 소굴 (텔레포트 지역 근처)",
      "location": "산적 소굴 텔레포트 지역 근처",
      "level": "미확인",
      "respawn": "약 2시간(사망 후, 등장 무작위)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "계속 이동하며 물리 공격력 높음. 박스(위치 고정) 필수 ／ 난이도 보통, 적정 7~8명(2파티)·마법사 필요. 계속 이동하므로 주의",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": "30",
      "rx": 55,
      "ry": 60,
      "posConfidence": "추정",
      "worldRegion": "산적 소굴"
    },
    {
      "name": "샤스키",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "엘모어 전초기지",
      "map": "엘모어 전초기지",
      "location": "전초기지 6시 방향(빨) / 전초기지(파) 두 종",
      "level": "미확인",
      "respawn": "약 2시간(사망 후 랜덤)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "빨강/파랑 두 개체가 각각 리젠(광풍·질풍). 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 84,
      "posConfidence": "확인",
      "worldRegion": "엘모어 전초기지 / 격전지"
    },
    {
      "name": "자크",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "로서스 섬 / 해안",
      "map": "로서스 섬",
      "location": "로서스 섬 전역",
      "level": "미확인",
      "respawn": "약 3시간(멍 없음)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "해안/섬 지역 대형 악어형 네임드. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/6054",
        "https://lineagem.plaync.com/board/free/view?articleId=5e07d4c6d7a85c0001a1c018"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 50,
      "posConfidence": "추정",
      "worldRegion": "로서스 섬"
    },
    {
      "name": "클라인",
      "tier": "필드네임드",
      "groupKey": "field_named",
      "region": "기란 마을 주변",
      "map": "기란 마을",
      "location": "기란 마을 지역",
      "level": "미확인",
      "respawn": "약 1시간(사망 후 랜덤, 짧은 편)",
      "type": "필드 상시젠",
      "drops": [
        "미확인"
      ],
      "note": "리젠이 약 1시간으로 짧은 축. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/6054"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 52,
      "posConfidence": "추정",
      "worldRegion": "기란 마을"
    },
    {
      "name": "파우스트",
      "tier": "던전",
      "groupKey": "field_named",
      "region": "기란 감옥 던전",
      "map": "기란 감옥 던전 1~4층",
      "location": "감옥 던전 내부. '두목 클라인'이 파우스트로 변신",
      "level": "미확인",
      "respawn": "상시(사냥터 보스)",
      "type": "상시젠",
      "drops": [
        "광풍의도끼",
        "혹한의창",
        "뇌신검",
        "파멸의대검",
        "살천의활",
        "빛나는고대목걸이",
        "희귀제작비법서",
        "마법서(어드밴스스피릿)",
        "할파스의집념",
        "띠갑옷"
      ],
      "note": "두목 클라인 상태에서 HP 감소 시 파우스트(언데드)로 변신, 스턴 기술 시전. 적정 7~8명(2파티). 구 수련던전 기란감옥 ／ 두목 클라인 처치 시 파우스트로 변신, 스턴 기술 시전. 기란 감옥 1층대는 리젠 약 1시간 언급도 있음(미확인)",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem",
        "https://lineagem.plaync.com/board/knowhow/view?articleId=5c0d2f5dd389e900014e790b",
        "https://lineagem.plaync.com/board/free/view?articleId=5c9a0a4fd54e64000176553c"
      ],
      "regionNo": "04",
      "rx": 45,
      "ry": 48,
      "posConfidence": "추정",
      "worldRegion": "기란 감옥 던전"
    },
    {
      "name": "올딘의 환영",
      "tier": "인스턴스",
      "groupKey": "dungeon_tower",
      "region": "파티 던전 오림",
      "map": "오림 던전 최종 층",
      "location": "오림 파티던전 마지막 층",
      "level": "미확인 (4인 파티)",
      "respawn": "인스턴스 입장형(추종자들/실험/함정 중 선택)",
      "type": "인스턴스",
      "drops": [
        "미확인"
      ],
      "note": "생존 클리어형 웨이브 던전. 보너스 스테이지에서 카스파/메르키오르/발터자르/세마 랜덤 보스 등장 후 최종층 올딘의 환영 등장",
      "confidence": "부분확인",
      "sources": [
        "https://lineagem.plaync.com/guidebook/view?title=파티+던전+오림",
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=148628"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 20,
      "posConfidence": "확인",
      "worldRegion": null
    },
    {
      "name": "데스나이트",
      "tier": "인스턴스",
      "groupKey": "dungeon_tower",
      "region": "파티 던전 데스나이트",
      "map": "글루디오 던전 7층",
      "location": "데스나이트 파티던전 최종 보스",
      "level": "70+ (4인 파티)",
      "respawn": "인스턴스 입장형",
      "type": "인스턴스",
      "drops": [
        "데스나이트 전리품 상자",
        "데스나이트 영혼석(망자의 팔찌 재료)",
        "아데나",
        "경험치"
      ],
      "note": "2025-03-19 추가된 신규 파티 던전 최종 보스. 3단계(말하는섬2층 바포메트 → 해저터널 → 글루디오7층 데스나이트)",
      "confidence": "확인",
      "sources": [
        "https://about.ncsoft.com/news/article/lineagem-update-250319",
        "https://m.inven.co.kr/webzine/wznews.php?idx=304071&site=ow"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 18,
      "posConfidence": "확인",
      "worldRegion": "글루디오"
    },
    {
      "name": "마령군왕 라이아",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "라스타바드",
      "map": "라스타바드 마령군왕의 집무실",
      "location": "암살/마령 구역",
      "level": "70+ 구역",
      "respawn": "매주 일요일 16:00~16:30 순차 등장",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "4대 군왕 중 하나. 군왕 이름은 재확인 권장",
      "confidence": "부분확인",
      "sources": [
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=150527"
      ],
      "regionNo": null,
      "rx": 62,
      "ry": 36,
      "posConfidence": "확인",
      "worldRegion": null
    },
    {
      "name": "바포메트",
      "tier": "인스턴스",
      "groupKey": "dungeon_tower",
      "region": "파티 던전 데스나이트",
      "map": "말하는 섬 던전 2층",
      "location": "데스나이트 파티던전 1단계 보스",
      "level": "70+ (4인 파티)",
      "respawn": "인스턴스 입장형(일반/어려움/지옥 난이도)",
      "type": "인스턴스",
      "drops": [
        "미확인(진행 보스)"
      ],
      "note": "처치 시 다음 단계 해저터널로 이동. 70레벨 이상 4인 파티",
      "confidence": "확인",
      "sources": [
        "https://about.ncsoft.com/news/article/lineagem-update-250319",
        "https://www.inven.co.kr/board/lineagem/5056/25051"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 72,
      "posConfidence": "확인",
      "worldRegion": "말하는 섬"
    },
    {
      "name": "암살군왕 슬레이브",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "라스타바드",
      "map": "라스타바드 암살군왕의 집무실",
      "location": "암살/마령 구역",
      "level": "70+ 구역",
      "respawn": "주말 월드던전, 매주 일요일 16:00~16:30 순차 등장(대법관 후 군왕)",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "라스타바드는 금요일 자정~일요일 자정 운영 주말 월드던전(70/75/80 구역, 3시간 사냥). 4대 군왕 중 하나. 군왕 이름은 커뮤니티 근거로 재확인 권장",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=150527"
      ],
      "regionNo": null,
      "rx": 38,
      "ry": 36,
      "posConfidence": "확인",
      "worldRegion": null
    },
    {
      "name": "마수군왕 바란카",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "라스타바드",
      "map": "라스타바드 마수군왕의 집무실",
      "location": "마수/명법 구역",
      "level": "75~80 구역",
      "respawn": "매주 일요일 16:30~17:00 순차 등장",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "4대 군왕 중 하나. 군왕 이름은 재확인 권장",
      "confidence": "부분확인",
      "sources": [
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=150527"
      ],
      "regionNo": null,
      "rx": 38,
      "ry": 68,
      "posConfidence": "확인",
      "worldRegion": null
    },
    {
      "name": "명법군왕 헬바인",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "라스타바드",
      "map": "라스타바드 명법군왕의 집무실",
      "location": "마수/명법 구역",
      "level": "75~80 구역",
      "respawn": "매주 일요일 16:30~17:00 순차 등장",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "4대 군왕 중 하나. 각 집무실마다 대법관 3명(케이나/비아타스/바로메스/앤디아스/이데아 등) 등장 후 군왕 출현. 군왕/대법관 이름 재확인 권장",
      "confidence": "부분확인",
      "sources": [
        "https://www.gamechosun.co.kr/webzine/article/view.php?no=150527"
      ],
      "regionNo": null,
      "rx": 62,
      "ry": 68,
      "posConfidence": "확인",
      "worldRegion": null
    },
    {
      "name": "감시자 리퍼",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 7층",
      "location": "7층 보스존(잔혹한 아이리스와 동층)",
      "level": "미확인",
      "respawn": "미확인",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "7층 추가 보스",
      "confidence": "부분확인",
      "sources": [
        "http://www.newsworker.co.kr/news/articleView.html?idxno=17463"
      ],
      "regionNo": null,
      "rx": 56,
      "ry": 22,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "공포의 뱀파이어",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 3층(공포)",
      "location": "3층 공포 구역 보스존. 켈베로스/파이어에그/나이트메어 서식",
      "level": "미확인",
      "respawn": "평일 22:30, 23:30 목표타임(±1h 랜덤). 100% 출현",
      "type": "고정시간젠",
      "drops": [
        "미확인(상급 아이템)"
      ],
      "note": "불속성 몬스터 구성으로 1~3층 중 난이도 최상",
      "confidence": "확인",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 56,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "데몬",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "상아탑",
      "map": "상아탑 발록 진영 6~8층(원작 기준)",
      "location": "상아탑 상층부",
      "level": "미확인",
      "respawn": "미확인",
      "type": "미확인",
      "drops": [
        "미티어 스트라이크(마법서)",
        "악마왕 무기 시리즈"
      ],
      "note": "원작 리니지 상아탑 보스급. 리니지M 상아탑에는 미등장으로 알려짐(등장 예고 기사 존재). 리니지M 상아탑은 주로 영웅 등급 잉크 드랍 일반몹(가디언 탐색자/포획자, 가고일) 위주. 실등장 재확인 필요",
      "confidence": "미확인",
      "sources": [
        "https://www.playforum.net/news/articleView.html?idxno=188376",
        "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=526"
      ],
      "regionNo": null,
      "rx": 58,
      "ry": 28,
      "posConfidence": "추정",
      "worldRegion": "상아탑"
    },
    {
      "name": "불사의 머미 로드",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 6층",
      "location": "6층 보스존",
      "level": "미확인",
      "respawn": "평일 12:30 목표타임(±1h 랜덤) 추정",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "공략 블로그 근거, 최신 패치 검증 필요",
      "confidence": "부분확인",
      "sources": [
        "https://2hoursago.com/저장소/104"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 30,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "불신의 시어",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 2층(불신)",
      "location": "2층 불신 구역 보스존. 비홀더/서큐버스/다이어울프 서식",
      "level": "미확인",
      "respawn": "평일 19:30, 22:30 목표타임(±1h 랜덤). 100% 출현",
      "type": "고정시간젠",
      "drops": [
        "미확인(상급 아이템)"
      ],
      "note": "마법방어 중요(MR 120+ 권장)",
      "confidence": "확인",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
        "https://www.inven.co.kr/board/lineagem/5056/6045"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 68,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "사신의 분신",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑 (오만의 탑)",
      "map": "오만의 탑 정상",
      "location": "오만의 탑 정상층(최상층)",
      "level": "미확인",
      "respawn": "매주 금요일 자정(24:00) 등장",
      "type": "고정시간젠",
      "drops": [
        "미확인",
        "미확인(오만의 탑 상위 계열)"
      ],
      "note": "오만의 탑 정상 신규 보스 추가 업데이트 ／ 리니지M 업데이트로 오만의 탑 정상에 추가된 신규 보스. 레벨/리젠/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.gamemeca.com/fam.php?gcode=fam_travel&rts=board&gid=1632511",
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439"
      ],
      "regionNo": null,
      "rx": 48,
      "ry": 9,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "서큐버스 퀸",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "용의 계곡 던전",
      "map": "용의 계곡 던전",
      "location": "용의 계곡 던전(옛 안타라스 둥지) 내 서큐버스 서식역",
      "level": "미확인",
      "respawn": "상시",
      "type": "상시젠",
      "drops": [
        "미확인"
      ],
      "note": "언데드/서큐버스/에틴/무리안 등 서식하는 던전의 네임드급. 7층 안타라스 둥지는 드래곤 리뉴얼로 현재 빈 지역",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978"
      ],
      "regionNo": null,
      "rx": 66,
      "ry": 54,
      "posConfidence": "추정",
      "worldRegion": "용의 계곡 / 용의 던전"
    },
    {
      "name": "얼음여왕",
      "tier": "던전",
      "groupKey": "dungeon_tower",
      "region": "수정 동굴",
      "map": "오렌 수정 동굴 3층",
      "location": "수정 동굴 3층 거대한 얼음 기둥 주변",
      "level": "미확인",
      "respawn": "미확인(사망 후 리젠형/이벤트 상시)",
      "type": "상시젠",
      "drops": [
        "얼음여왕의지팡이",
        "얼음여왕의매력적인샌달",
        "얼음여왕의매력적인드레스",
        "순간이동조정반지"
      ],
      "note": "블리자드/초록 냉기 브레스 시전. 회복 빠르나 불속성 취약(파이어월 유효)",
      "confidence": "확인",
      "sources": [
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 44,
      "posConfidence": "확인",
      "worldRegion": "오렌"
    },
    {
      "name": "잔혹한 아이리스",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 7층",
      "location": "7층 보스존. 잔혹한 라이칸스로프 등 서식",
      "level": "미확인",
      "respawn": "평일 19:30 목표타임(±1h 랜덤)",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "오만의 탑 7층 확장 업데이트로 추가된 보스",
      "confidence": "확인",
      "sources": [
        "http://www.osen.co.kr/article/G1110887983",
        "http://www.newsworker.co.kr/news/articleView.html?idxno=17463"
      ],
      "regionNo": null,
      "rx": 44,
      "ry": 22,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "제니스 퀸",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 1층(왜곡)",
      "location": "1층 왜곡 구역 보스존. 옹골리언트/라미아/메두사/코카트리스 서식",
      "level": "미확인",
      "respawn": "평일 18:30, 21:30 목표타임(±1h 랜덤). 100% 출현",
      "type": "고정시간젠",
      "drops": [
        "미확인(상급 아이템)"
      ],
      "note": "커스 포이즌/커스 패럴라이즈 사용. 1층 취약속성 참고. 오만의 탑은 현재 축소 운영",
      "confidence": "확인",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
        "https://www.inven.co.kr/board/lineagem/5056/6045"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 80,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "죽음의 좀비 로드",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 4층",
      "location": "4층 보스존",
      "level": "미확인",
      "respawn": "평일 20:30 목표타임(±1h 랜덤) 추정",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "층 이름/보스명은 공략 블로그 근거로 최신 패치와 다를 수 있음",
      "confidence": "부분확인",
      "sources": [
        "https://2hoursago.com/저장소/104"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 46,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "지옥의 쿠거",
      "tier": "탑",
      "groupKey": "dungeon_tower",
      "region": "오만과 신념의 탑",
      "map": "오만의 탑 5층",
      "location": "5층 보스존",
      "level": "미확인",
      "respawn": "평일 22:30 목표타임(±1h 랜덤) 추정",
      "type": "고정시간젠",
      "drops": [
        "미확인"
      ],
      "note": "공략 블로그 근거, 최신 패치 검증 필요",
      "confidence": "부분확인",
      "sources": [
        "https://2hoursago.com/저장소/104"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 38,
      "posConfidence": "확인",
      "worldRegion": "오만과 신념의 탑 (오만의 탑)"
    },
    {
      "name": "린드비오르",
      "tier": "드래곤",
      "groupKey": "raid_world",
      "region": "린드비오르 레어 (인스턴스) / 수도 아덴 연계",
      "map": "린드비오르 레어",
      "location": "'드래곤 키'로 생성되는 '드래곤 포탈'을 통해 입장하는 혈맹 레이드로 추정(안타라스·파푸리온과 동일 구조)",
      "level": "미확인",
      "respawn": "정기 스케줄 없음(드래곤 키 소환형, 추정)",
      "type": "인스턴스",
      "drops": [
        "린드비오르 계열 각인/장신구",
        "희귀급 이상 아이템"
      ],
      "note": "4대 드래곤 중 풍룡. 수도 아덴성 업데이트와 함께 추가. 세부 기믹은 교차확인 필요(안타/파푸 대비 자료 적음)",
      "confidence": "미확인",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/skill/detail.php?code=30652",
        "https://inews24.com/view/1094681"
      ],
      "regionNo": null,
      "rx": 50,
      "ry": 50,
      "posConfidence": "추정",
      "worldRegion": null
    },
    {
      "name": "발라카스",
      "tier": "드래곤",
      "groupKey": "raid_world",
      "region": "화룡의 둥지",
      "map": "발라카스의 안식처 (화룡의 둥지 정상)",
      "location": "화룡의 둥지 최상단 정상 지역에서 필드에 직접 출현",
      "level": "미확인",
      "respawn": "매주 금요일 밤 9시 정기 출현",
      "type": "오픈필드",
      "drops": [
        "봉인된 드래곤 슬레이어",
        "드래곤 슬레이어 변신카드(전설급)",
        "화룡의 역린",
        "화룡의 수호/질풍/정신/통찰(장신구)"
      ],
      "note": "리니지M 유일급 오픈필드 정기 레이드. 대규모 혈맹/연맹 단위 공략 필요. 단일 미티어 지정 대상 즉사 위험(전장 이탈 필수)·광역 스턴/캔슬 주의. 처치해 드래곤 슬레이어 탄생 시 서버에 버프 동상 생성(서버 전체 버프)",
      "confidence": "부분확인",
      "sources": [
        "https://www.lawissue.co.kr/view.php?ud=2018062509403752899817d053b9_12",
        "https://m.ruliweb.com/community/board/300141/read/30584607",
        "https://www.inven.co.kr/board/lineagem/5056/23271"
      ],
      "regionNo": null,
      "rx": 46,
      "ry": 8,
      "posConfidence": "확인",
      "worldRegion": "화룡의 둥지 / 화염의 둥지"
    },
    {
      "name": "안타라스",
      "tier": "드래곤",
      "groupKey": "raid_world",
      "region": "안타라스 레어 (인스턴스)",
      "map": "안타라스 동굴 → 안타라스 레어",
      "location": "'드래곤 키' 사용으로 생성되는 '드래곤 포탈'을 통해서만 입장. 4개 파티가 각각 안타라스 동굴(파티형 인던, 파티당 최대 8명) 클리어 후 레어 진입",
      "level": "미확인",
      "respawn": "정기 스케줄 없음(드래곤 키 획득 시 소환형). 드래곤 키는 드루가 가방에서 확률 획득, 생성 후 72시간 존재",
      "type": "인스턴스",
      "drops": [
        "안타라스의 인내력(각인)",
        "안타라스 계열 각인/장신구",
        "희귀급 이상 아이템"
      ],
      "note": "혈맹 레이드. 드래곤 키 소지자(포탈 개방자) 1명이면 최대 32명(4파티) 입장. 인스턴스라 타 혈맹 방해 없이 진행 ／ 드래곤 리뉴얼로 용의 계곡 7층에는 더 이상 등장하지 않음. 리니지M 내 드래곤 레이드 콘텐츠로 별도 운영 여부는 재확인 필요. 화룡 발라카스/화룡의 안식처 1인 인스턴스는 PC 리니지(리마스터) 콘텐츠로 리니지M 등장 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://lineagem.plaync.com/board/knowhow/view?articleId=676b9d2cc72d226bb3081bcc",
        "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=39274",
        "https://lineagem.inven.co.kr/dataninfo/item/detail.php?code=129583",
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
        "https://m.inven.co.kr/webzine/wznews.php?site=lineage&l=91985&p=15&idx=112907"
      ],
      "regionNo": null,
      "rx": 44,
      "ry": 50,
      "posConfidence": "추정",
      "worldRegion": null
    },
    {
      "name": "파푸리온",
      "tier": "드래곤",
      "groupKey": "raid_world",
      "region": "파푸리온 레어 (인스턴스)",
      "map": "파푸리온 동굴 → 파푸리온 레어 (수중)",
      "location": "'드래곤 키'로 생성되는 '드래곤 포탈'로만 입장. 각 파티가 파푸리온 동굴(소규모 인던) 클리어 후 레어 진입, 무녀 사엘에게 버프 수령",
      "level": "미확인",
      "respawn": "정기 스케줄 없음(드래곤 키 소환형)",
      "type": "인스턴스",
      "drops": [
        "파푸리온 계열 각인/장신구",
        "희귀급 이상 아이템"
      ],
      "note": "혈맹 레이드(최대 32명/4파티). 수중전이라 에바의 축복·인어의 비늘(호흡), 소환 진주 처리용 활과 화살, 드래곤의 눈물(HP회복), 용언 방어용 카운터 매직 주문서 필요",
      "confidence": "부분확인",
      "sources": [
        "https://lineagem.plaync.com/board/cm_story/view?articleId=5ed0b21d91196a00014b6f87",
        "https://www.inven.co.kr/board/lineagem/5056/21354",
        "https://www.thisisgame.com/bns/tboard/?board=37&n=298997"
      ],
      "regionNo": null,
      "rx": 56,
      "ry": 54,
      "posConfidence": "추정",
      "worldRegion": null
    },
    {
      "name": "에인션트 자이언트",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "황혼 산맥",
      "map": "74. 황혼 산맥",
      "location": "황혼 산맥 지역 필드 출현 고레벨 네임드",
      "level": "미확인(황혼 산맥 권장 75~85 구간)",
      "respawn": "약 5시간(멍)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(황혼 산맥 고레벨 계열)"
      ],
      "note": "황혼 산맥(맵 74) 고레벨 필드 네임드. 정확한 레벨/드랍 세부는 미확인 — 지역 권장 레벨대(75~85) 기준 표기",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "regionNo": "74",
      "rx": 50,
      "ry": 50,
      "posConfidence": "추정",
      "worldRegion": "황혼 산맥"
    },
    {
      "name": "암흑대장로",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "흑기사 전투기지",
      "map": "75. 흑기사 전투기지",
      "location": "흑기사 전투기지 고레벨 보스 밀집 구역",
      "level": "미확인(흑기사 전투기지 권장 78~88 구간)",
      "respawn": "약 3시간(멍)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(흑기사 전투기지 고레벨 계열)"
      ],
      "note": "흑기사 전투기지(맵 75)의 고레벨 보스 3종(암흑대장로/베리스/케레니스) 중 하나. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "regionNo": "75",
      "rx": 40,
      "ry": 44,
      "posConfidence": "추정",
      "worldRegion": "흑기사 전투기지"
    },
    {
      "name": "베리스",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "흑기사 전투기지",
      "map": "75. 흑기사 전투기지",
      "location": "흑기사 전투기지 고레벨 보스 밀집 구역",
      "level": "미확인(흑기사 전투기지 권장 78~88 구간)",
      "respawn": "약 3시간(멍)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(흑기사 전투기지 고레벨 계열)"
      ],
      "note": "흑기사 전투기지(맵 75)의 고레벨 보스 3종(암흑대장로/베리스/케레니스) 중 하나. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "regionNo": "75",
      "rx": 56,
      "ry": 44,
      "posConfidence": "추정",
      "worldRegion": "흑기사 전투기지"
    },
    {
      "name": "케레니스",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "흑기사 전투기지",
      "map": "75. 흑기사 전투기지",
      "location": "흑기사 전투기지 고레벨 보스 밀집 구역",
      "level": "미확인(흑기사 전투기지 권장 78~88 구간)",
      "respawn": "약 3시간(멍)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(흑기사 전투기지 고레벨 계열)"
      ],
      "note": "흑기사 전투기지(맵 75)의 고레벨 보스 3종(암흑대장로/베리스/케레니스) 중 하나. 레벨/드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://www.inven.co.kr/board/lineagem/5056/14983"
      ],
      "regionNo": "75",
      "rx": 48,
      "ry": 60,
      "posConfidence": "추정",
      "worldRegion": "흑기사 전투기지"
    },
    {
      "name": "대흑장로",
      "tier": "고레벨네임드",
      "groupKey": "field_named",
      "region": "용의 계곡 / 용의 던전",
      "map": "15. 용의 던전 중앙 입구(큰 용뼈 지역)",
      "location": "용의 던전 중앙 입구 큰 용뼈 지역 주변",
      "level": 73,
      "respawn": "약 3시간(멍)",
      "type": "필드 상시젠",
      "drops": [
        "미확인(용의 계곡 계열)"
      ],
      "note": "용의 던전(맵 15) 중앙 입구 큰 용뼈 지역의 Lv.73 필드 네임드. 드레이크 계열과 같은 용의 계곡 권역. 드랍 세부 미확인",
      "confidence": "부분확인",
      "sources": [
        "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
        "https://www.inven.co.kr/webzine/news/?news=181159&site=lineagem"
      ],
      "regionNo": "15",
      "rx": 48,
      "ry": 54,
      "posConfidence": "확인",
      "worldRegion": "용의 계곡 / 용의 던전"
    }
  ]
};
