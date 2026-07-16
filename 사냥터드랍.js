window.LM_DROP = {
  "meta": {
    "updated": "2026-07-16",
    "server": "한국 본서버",
    "note": "리니지M 한국 본서버 사냥터·던전 층별 드랍 정리. 같은 던전 안에서 그 층에서만 확인된 고유 드랍과 여러 층 공통 드랍을 구분해 표시한다.",
    "groupOrder": [
      "sudeon",
      "tower",
      "faith_tower",
      "giran_prison",
      "ant_cave",
      "chaos_ant",
      "ivory_tower",
      "gludio",
      "dragon_valley",
      "rastabad",
      "giran_ruin",
      "dark_sudeon",
      "eva",
      "field"
    ],
    "groupLabel": {
      "sudeon": "수련의 던전",
      "tower": "오만의 탑",
      "faith_tower": "신념의 탑",
      "giran_prison": "기란 감옥",
      "ant_cave": "개미굴",
      "chaos_ant": "혼돈의 개미굴",
      "ivory_tower": "상아탑",
      "gludio": "글루디오 던전",
      "dragon_valley": "용의 계곡",
      "rastabad": "라스타바드 던전",
      "giran_ruin": "파멸의 기란감옥",
      "dark_sudeon": "어둠의 수련 던전",
      "eva": "에바왕국 던전 (구 수중 던전)",
      "field": "필드 사냥터"
    },
    "counts": {
      "groups": 14,
      "zones": 93,
      "drops": 1522
    },
    "caveats": [
      "드랍 확률(%) 수치는 이 패널에 없다. 엔씨소프트 공식 확률정보 페이지에 몬스터별 필드 드랍률이 공개되는지 확인되지 않았고, 커뮤니티 수치는 표본 추정이라 신뢰할 수 없어 싣지 않았다.",
      "드랍은 '사냥터'가 아니라 '몬스터' 단위다. 사냥터별 목록은 그 사냥터 몬스터들의 드랍을 합친 것이며, 같은 층 안에서도 특정 보스만 떨구는 아이템이 있다(예: 상아탑 영웅 제작 비법서).",
      "아인하사드의 축복이 0이면 아이템이 아예 안 나온다. 드랍 목록은 '축복이 있는 상태'를 전제로 한다.",
      "'축복 수치에 비례해 아이템 획득 확률이 최대 140% 증가', 'LUCKY 포인트', '행운 스탯의 드랍률 영향'은 리니지M 한국 본서버 소스로 확인되지 않았다(대부분 PC 리니지 문서가 출처). 이 패널은 해당 내용을 의도적으로 싣지 않는다.",
      "인게임 '몬스터 도감'은 드랍 목록 열람 기능이 아니라 몬스터 처치 보상 시스템이다. 게임 안에서 사냥터별 드랍표를 직접 볼 수 있는 공식 UI는 이번 조사에서 확인되지 않았다.",
      "드랍 목록 상당수는 인벤 등 커뮤니티 집계 데이터에 의존한다. 리뉴얼·밸런스 패치로 드랍 테이블이 변경될 수 있으며, 오래된 가이드 문서는 현재 서버와 다를 수 있다.",
      "'고유 드랍'은 공식 게임 용어가 아니다. 이 패널에서는 '특정 사냥터에서만 확인된 아이템'이라는 뜻으로 쓰며, 신규 콘텐츠 재료(태고의 화염 결정 등)에 주로 해당한다. 뇌신검처럼 여러 사냥터에서 중복으로 나오는 아이템이 더 흔하다.",
      "기준일 2026-07-16. 2026-07-29 '공허의 사원' 리뉴얼 및 기르타스 무기 제작식 추가가 예정되어 있어, 이후 드랍 정보가 변경될 수 있다.",
      "본 정보는 리니지M 한국 본서버 기준이다. 대만 天堂M·프리서버·리니지2M·리니지W·PC 리니지와는 드랍 시스템이 다르다.",
      "층별 고유(빨강)/공통(하양) 판정은 '같은 그룹(같은 던전) 안에서 아이템 이름이 정확히 일치하는가'만으로 기계 계산한 결과다. 그룹을 넘어선 비교는 하지 않는다. 이름 표기가 다른 같은 아이템은 다른 아이템으로 잡힌다.",
      "드랍은 사냥터가 아니라 몬스터 단위다. 같은 몬스터가 실제로 여러 층에 걸쳐 출현하면(예: 개미굴 '거대 흰 개미' 1·2층) 그 드랍은 어느 한 층의 고유가 아니며, 계산에도 두 층 모두에 반영돼 있다. 반대로 오만의 탑 '감시자 리퍼'처럼 이름만 같고 층마다 코드·드랍이 다른 별개 몬스터도 있다. 각 드랍의 '드랍 몬스터' 표기를 함께 볼 것.",
      "confidence가 '미확인'이거나 드랍이 비어 있는 구역은 고유/공통 계산의 유효 구역에서 제외했다(수련의 던전 1·2층, 상아탑 1~3층 마을, 층 미확인 버킷, 윈다우드·오크숲 등). 그룹 설명에 제외 사유를 명시했다.",
      "'수련의 던전'(권장 45, 천/철/보석) · '어둠의 수련 던전'(몬스터 레벨 90~95) · '에바왕국 던전'(구 수중던전) 은 셋 다 1~4층 구조라 혼동되지만 완전히 다른 사냥터다. 이 앱은 세 개를 별도 그룹으로 분리했고 서로 섞지 않았다.",
      "수련의 던전 1·2층은 리니지M 한국 본서버 기준 층별 드랍 근거를 웹 공개 자료(인벤 가이드·인벤 몬스터 DB 포함)에서 단 한 건도 찾지 못해 비워 두었다. 검색에 노출되는 1~2층 정보(오크 패밀리/구울/수련 흑기사, 수련의 증표 교환 등)는 PC 리니지 리마스터·파워북 자료라 의도적으로 배제했다.",
      "필드 사냥터의 '고유'는 이 앱에 실린 필드들끼리 비교한 결과일 뿐이다. 필드는 층이 아니라 독립 사냥터이므로, 목록에 없는 사냥터에서도 같은 아이템이 나올 수 있다.",
      "오만의 탑·신념의 탑·상아탑·개미굴·혼돈의 개미굴·글루디오 던전·파멸의 기란감옥·어둠의 수련 던전·에바왕국 던전의 몬스터/드랍은 인벤 리니지M 몬스터 DB를 헤드리스 브라우저로 직접 판독한 1차 자료다(266종 전수·실패 0). 다만 인벤 DB 자체가 커뮤니티 DB라 최신 패치 반영이 늦을 수 있다.",
      "기란 감옥·용의 계곡·라스타바드 던전·필드 사냥터의 층별 드랍은 (A)층별 몬스터 구성 출처와 (B)몬스터별 드랍 출처를 교차 결합해 산출했고, 주 근거가 2017~2019년 NC 커뮤니티 유저 작성글이라 현재와 다를 수 있다.",
      "대만 天堂M · 프리서버 · 리니지2M · 리니지W · PC 리니지(리마스터/클래식) 유래 항목은 전량 배제했다(수련 던전 1~2층 오크패밀리/구울/수련의 증표=PC 리니지 리마스터·파워북, 상아탑 3층 헤르문쿠스 장비=리니지2M, 오만의 탑 100층설=PC 리니지, 기란 감옥 '4층→2층 리뉴얼·시간제한 폐지'=PC 리마스터, 오만의 탑 10층 '오만의 결정→타림의 영혼석'=리니지2M, 에바왕국 던전 자료를 수련의 던전으로 옮기는 '수던' 약어 혼동 등).",
      "반대로, 검색 기반으로 '타 게임 오염'이라 지목됐던 오만의 탑 10층 '오만한 우그누스'는 인벤 리니지M 몬스터 DB 직접 판독에서 레벨 99 몬스터로 실재함이 확인되어 채택했다(같은 층의 '오만한 아스모데우스'는 레벨 90). 배제와 채택 모두 1차 DB 판독을 기준으로 삼았다."
    ],
    "scopeLegend": {
      "unique": "이 그룹(던전) 안에서 이 층에서만 확인된 드랍",
      "shared": "이 그룹 안 여러 층에서 확인된 드랍",
      "all": "이 그룹의 유효 층 전부에서 확인된 드랍",
      "unknown": "층 미확인 구역에서만 확인된 드랍 — 어느 층에서 나오는지 특정하지 못했다. 유효 층 등장이 0회라 고유/공통 어느 쪽으로도 단정하지 않는다.",
      "_무효구역_폴백규칙": "confidence가 '미확인'인 구역(층 미확인 버킷 등)의 드랍은 그 구역 자체가 고유/공통 계산의 유효 층이 아니므로, 해당 구역 안에서는 scope를 'unique'로 올리지 않고 보수적으로 'shared'로 고정하며 sharedCount는 max(1, 유효 층 등장 횟수)로 바닥 처리한다. 따라서 이 구역의 sharedCount 1은 '유효 층에서 1회 확인'일 수도, '유효 층 등장 0회(바닥값)'일 수도 있다. 후자는 scope를 'unknown'으로 따로 분리해 '층 미확인'으로 표기한다."
    },
    "howItWorks": [
      {
        "q": "드랍은 몬스터 단위인가, 사냥터 단위인가?",
        "a": "기본은 '몬스터 단위'다. 각 몬스터가 자기 드랍 테이블을 가지며, 유저가 체감하는 '사냥터 드랍'은 그 사냥터에 배치된 몬스터들의 드랍 테이블 합집합이다. 예: 상아탑 7층의 '상아탑 파사즈', 8층의 '상아탑 레서 데몬'처럼 같은 층 안에서도 특정 몬스터만 '영웅 제작 비법서'를 드랍한다. 따라서 '이 사냥터에서 나온다'는 표현은 '이 사냥터의 어떤 몬스터에서 나온다'의 줄임말로 이해해야 한다.",
        "confidence": "확인",
        "source": "https://www.inven.co.kr/webzine/news/?news=198052&site=lineagem"
      },
      {
        "q": "층별로 드랍 테이블이 실제로 다른가?",
        "a": "다르다. 리뉴얼된 상아탑 기준 4~5층은 '마물의 기운'만, 6층부터 '스탯 티셔츠'가 추가되고, 7~8층에서만 특정 보스 몬스터를 통해 '영웅 제작 비법서'를 얻을 수 있다. 즉 같은 던전이라도 층이 올라갈수록 드랍 품목이 누적·확장되는 구조가 실재한다.",
        "confidence": "확인",
        "source": "https://www.inven.co.kr/webzine/news/?news=198052&site=lineagem"
      },
      {
        "q": "던전마다 드랍 성격이 뚜렷하게 갈리는가?",
        "a": "갈린다. 상아탑은 보스(데몬)를 제외하면 희귀 등급 이상 장비가 아예 나오지 않는 반면, 기란 감옥·용의 계곡·에바 왕국 던전 등은 희귀 이상 무기·방어구가 나온다. 이 때문에 사냥터 선택 자체가 파밍 목표를 결정한다.",
        "confidence": "확인",
        "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
      },
      {
        "q": "희귀 등급 이상 장비는 드랍으로만 얻는가?",
        "a": "부분적으로 그렇다. 희귀 등급 이상 장비는 필드 보스 등에서 얻는 '제작 비법서'를 통한 제작 경로가 있으나, 실제로 유저가 사용하는 희귀 등급 이상 무기는 대부분 드랍으로 얻은 것이라고 인벤 가이드는 서술한다. 드랍과 제작이 병존하는 구조.",
        "confidence": "부분",
        "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180439"
      },
      {
        "q": "아이템과 아데나는 같은 확률로 떨어지는가?",
        "a": "구분된다. 아이템과 아데나는 개별적으로 드랍 확률이 나뉘어 있으며, 플레이어의 아이템 획득 확률에 따라 몬스터의 아이템 드랍 유무가 결정된다는 서술이 있다. 다만 이 서술의 원 출처가 리니지M 전용 문서로 확정되지 않아 '부분'으로 표기.",
        "confidence": "부분",
        "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5c0d2f5dd389e900014e790b"
      },
      {
        "q": "각 몬스터의 정확한 드랍률(%) 수치가 공개되어 있는가?",
        "a": "미확인. 엔씨소프트는 리니지M 확률정보 페이지(probability.plaync.com/lineagem)를 운영하지만, 조사 시점에 해당 페이지는 JS 렌더 방식이라 본문 수집이 불가했고 '몬스터별 필드 드랍률'이 공개 항목에 포함되는지 확인하지 못했다. 공개된 확률은 주로 뽑기(가챠)·상자류 확률로 보이며, 필드 드랍률 수치는 확인되지 않음.",
        "confidence": "미확인",
        "source": "https://probability.plaync.com/lineagem/index"
      }
    ],
    "dropRateFactors": [
      {
        "name": "아인하사드의 축복 (수치 0일 때 아이템 획득 불가)",
        "effect": "축복 수치가 0이 되면 아이템을 획득할 수 없고 거래 불가 장비만 획득된다. 축복 0 상태에서는 철·가죽 등 제작 재료도 얻지 못하므로, 재료 파밍은 반드시 축복이 있을 때 해야 한다. 사실상 '드랍률 증가'가 아니라 '드랍 자체의 ON/OFF 스위치'에 가깝다. 이것이 리니지M 드랍 시스템에서 가장 확실하고 중요한 변수다.",
        "confidence": "확인",
        "source": "https://www.inven.co.kr/webzine/news/?news=180209&site=lineagem"
      },
      {
        "name": "아인하사드의 축복 (경험치·아데나 획득률)",
        "effect": "축복 201 이상이면 경험치 획득률 700%·아데나 획득률 200%. 축복 200 이하면 경험치 200%·아데나 125%. 축복 0이면 경험치 100%·아데나 100%. 주의: 이 수치는 경험치와 아데나에 대한 것이며, '아이템 드랍률'이 축복 수치에 비례해 올라간다는 근거는 리니지M 소스에서 확인하지 못했다.",
        "confidence": "확인",
        "source": "https://www.inven.co.kr/webzine/news/?news=180209&site=lineagem"
      },
      {
        "name": "아인하사드의 축복 충전 수단",
        "effect": "안전지역 체류 또는 로그아웃 시 2분마다 1씩 자연 회복(최대 200까지만). '드래곤의 다이아몬드' 사용 시 100 회복. 즉 축복 유지는 시간 또는 유료 재화로 이뤄진다.",
        "confidence": "확인",
        "source": "https://www.inven.co.kr/webzine/news/?news=180209&site=lineagem"
      },
      {
        "name": "축복 소모 효율 옵션",
        "effect": "아인하사드의 축복 소모를 줄여주는 '축복 소모 효율' 옵션을 가진 아이템군이 존재한다. 축복 유지 시간을 늘려 결과적으로 아이템 획득 가능 시간을 늘리는 간접 요소. 단, 참고 기사가 리니지M 전용인지 PC 리니지 대상인지 명확히 분리되지 않아 '부분'으로 표기.",
        "confidence": "부분",
        "source": "https://www.inven.co.kr/webzine/news/?news=217663"
      },
      {
        "name": "'아이템 획득 확률' 최대 140% 증가설",
        "effect": "미확인. '축복 수치에 따라 아이템 획득 확률이 최대 140%까지 증가한다'는 서술이 검색 결과에 나타나지만, 추적 결과 원 출처가 PC 리니지(lineage.plaync.com) 게시글이며 리니지M 전용 소스로 재확인되지 않았다. 리니지M에 그대로 적용된다고 단정할 수 없어 앱에는 싣지 않기를 권장.",
        "confidence": "미확인",
        "source": "https://lineage.plaync.com/board/server/view?articleId=653f95f91679173e7ba68b2b"
      },
      {
        "name": "LUCKY(럭키) 포인트",
        "effect": "미확인. '아인하사드 포인트 가챠로 LUCKY 포인트를 높여 아이템 획득 확률을 올린다'는 서술이 검색되나, 원 출처가 PC 리니지 문서다. 리니지M 한국 본서버에 동일 시스템이 있는지 공식 소스로 확인하지 못했다. 앱 반영 금지 권장.",
        "confidence": "미확인",
        "source": "https://lineage.plaync.com/powerbook/wiki/%EC%95%84%EC%9D%B8%ED%95%98%EC%82%AC%EB%93%9C%20%ED%8F%AC%EC%9D%B8%ED%8A%B8"
      },
      {
        "name": "'행운(럭)' 스탯의 드랍률 영향",
        "effect": "미확인. 리니지M 한국 본서버에서 행운 수치가 몬스터 드랍률에 영향을 준다는 공식·공신력 있는 근거를 이번 조사에서 찾지 못했다. 추측 배제.",
        "confidence": "미확인",
        "source": ""
      },
      {
        "name": "드랍률 증가 물약·이벤트 버프",
        "effect": "미확인. 리니지M 한국 본서버에 상시 존재하는 '드랍률 증가 물약'을 특정하지 못했다. 이벤트 기간 중 대체 재료 추가 등 이벤트성 획득 보정은 패치노트에서 확인되나, 이는 드랍률 자체의 배수 증가와는 다른 개념이다.",
        "confidence": "미확인",
        "source": "https://lineagem.plaync.com/board/update/view?articleId=6a3adeb8f7d5e442c498b78d"
      },
      {
        "name": "몬스터 레벨",
        "effect": "높은 레벨의 몬스터일수록 희귀 아이템 드롭 확률이 높다는 통설이 있으나, 리니지M 공식 수치로 뒷받침되지 않아 '부분'으로 표기.",
        "confidence": "부분",
        "source": "https://www.inven.co.kr/board/lineagem/5557/13982"
      }
    ],
    "uniqueDropConcept": {
      "exists": "확인",
      "explain": "리니지M 한국 본서버에는 '특정 사냥터/던전(또는 그 안의 특정 몬스터)에서만 나오는 아이템'이 실재한다. 다만 게임이 '고유 드랍'이라는 공식 용어를 쓰는 것은 아니며, 실질적으로 신규 장비의 제작 재료를 특정 신규 사냥터에 묶어두는 방식으로 구현된다. 대표적으로 2026-07 PHOENIX 업데이트의 유일 등급 무기 '기르타스' 제작 재료가 재료별로 서로 다른 사냥터에 배타적으로 배치되었다. 반대로 뇌신검·천사의 지팡이처럼 여러 사냥터에서 중복 드랍되는 아이템도 많으므로, '고유 드랍'은 전체가 아니라 일부 아이템에만 해당한다.",
      "examples": [
        {
          "item": "태고의 화염 결정 (기르타스 무기 제작 재료)",
          "zone": "숨겨진 결계의 숲 · 화염의 성소 (이 두 신규 사냥터에서만 획득)",
          "source": "https://www.inven.co.kr/webzine/news/?news=318258"
        },
        {
          "item": "태고의 흑철 (기르타스 무기 제작 재료)",
          "zone": "지배의 탑",
          "source": "https://www.inven.co.kr/webzine/news/?news=318258"
        },
        {
          "item": "영웅 제작 비법서",
          "zone": "상아탑 7층 '상아탑 파사즈' · 8층 '상아탑 레서 데몬' (해당 보스 몬스터에서만)",
          "source": "https://www.inven.co.kr/webzine/news/?news=198052&site=lineagem"
        },
        {
          "item": "수정 단검 · 해신의 삼지창",
          "zone": "에바 왕국 던전 1~4층 (대표적 상징 드랍처)",
          "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
        },
        {
          "item": "기백의 반지 · 오우거의 벨트 · 흑장로의 로브/샌달",
          "zone": "용의 계곡 14~17층 · 32층",
          "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
        }
      ]
    },
    "inGameTools": [
      {
        "name": "몬스터 도감",
        "explain": "리니지M에 실재하는 인게임 시스템. 단, 흔한 오해와 달리 '드랍 아이템 목록을 열람하는 도감'이 아니라 '도감에 등록된 몬스터를 처치하면 보상을 받는' 수집·보상 시스템이다. 매일 오전 5시 초기화되는 '일일 도감'과 이벤트 기간 내 달성하는 '일반 도감'으로 나뉘며, 경험치·명예 코인·축복 부여 주문서(각인)·수호석 등을 주고, 일반 도감 완성 시 전설 등급 장비·상급 변신/마법인형 카드 뽑기권 등을 확률적으로 준다. 공식 보도자료에 드랍 정보 조회 기능이라는 언급은 없다.",
        "confidence": "확인",
        "source": "https://about.ncsoft.com/news/article/lineagem-event-20200226"
      },
      {
        "name": "몬스터 도감 등급 옵션",
        "explain": "몬스터 도감의 등급 옵션은 일반·고급·희귀·영웅·전설 5종이며, 몬스터 석판 등록 및 재등록 시 정해진 확률에 따라 옵션 등급이 결정된다. 커뮤니티 정리 기준이라 '부분'으로 표기.",
        "confidence": "부분",
        "source": "https://www.inven.co.kr/board/lineagem/5019/484695"
      },
      {
        "name": "인게임 '사냥터 정보'",
        "explain": "미확인. 검색 스니펫 수준에서 '인게임 사냥터 정보'라는 표현이 등장하나, 리니지M 한국 본서버에 사냥터별 드랍 아이템을 열람할 수 있는 인게임 UI가 실제로 존재하는지 공식 소스로 확인하지 못했다. 앱에 '게임 안에서 볼 수 있다'고 단정 표기 금지.",
        "confidence": "미확인",
        "source": ""
      },
      {
        "name": "공식 확률정보 페이지 (probability.plaync.com/lineagem)",
        "explain": "엔씨소프트가 운영하는 리니지M 확률 공개 페이지. 게임물 확률 공개 의무에 따른 것으로 보이나, 조사 시점에 JS 렌더로 본문 수집이 불가해 '몬스터 필드 드랍률'이 공개 범위에 포함되는지는 확인하지 못했다. 확인된 공개 확률은 주로 뽑기·상자류다.",
        "confidence": "부분",
        "source": "https://probability.plaync.com/lineagem/index"
      },
      {
        "name": "외부 DB (인벤 몬스터 DB / 추천 사냥터 가이드)",
        "explain": "인게임 열람 기능이 제한적이라, 실사용 유저들은 인벤의 몬스터 DB와 '추천 사냥터' 가이드 문서를 통해 드랍 정보를 확인한다. 공식이 아닌 커뮤니티 집계 데이터이므로 최신 패치 반영이 늦을 수 있다.",
        "confidence": "확인",
        "source": "https://lineagem.inven.co.kr/dataninfo/monster/"
      }
    ],
    "recentZones": [
      {
        "name": "숨겨진 결계의 숲 (신규 필드 사냥터)",
        "when": "2026-07-08 — PHOENIX 업데이트. 요정 숲과 용의 계곡 경계에 위치. '페트라 사막' 이후 약 2년 만에 추가된 필드 사냥터. 주요 드랍: 태고의 화염 결정, 완력/민첩/지식의 반지, 빛나는 사이하의 반지, 진 레이피어·파괴의 장궁 등 유일 등급 무기. 신규 보스 '듀펠게넌'이 필드에 랜덤 출현.",
        "source": "https://www.inven.co.kr/webzine/news/?news=318258"
      },
      {
        "name": "화염의 성소 (신규 던전)",
        "when": "2026-07-08 — PHOENIX 업데이트. 매시 정각 결계의 숲에 나타나는 감시자 NPC를 통해 입장, 매일 5시간 이용 가능. 주요 드랍: 태고의 화염 결정(기르타스 무기 재료), 빛나는 사이하의 반지, 달의 장궁, 뇌신검, 천사의 지팡이, 정령의 수정(소울 오브 프레임), 퓨어 엘릭서, 봉인된 희귀 제작 비법서, 침략자의 표식(컬렉션 재료).",
        "source": "https://www.inven.co.kr/webzine/news/?news=318258"
      },
      {
        "name": "기억의 섬 (월드 던전)",
        "when": "2025-12-03 — THE DARKNESS 업데이트. '암흑룡 할파스' 스토리 기반, 3개 구역(기억의 수역 1구/2구/할파스 레어 입구). 기란 성 지배 혈맹이 '암흑룡 할파스' 레이드 토벌 시 해금되는 조건부 사냥터. 세부 드랍 목록은 이번 조사에서 미확인.",
        "source": "https://about.ncsoft.com/news/article/lineagem_update_251126"
      },
      {
        "name": "공허의 사원 리뉴얼",
        "when": "2026-07-29 예정 — 보스 '공허의 기르타스' 등장 시 전투구역이 War Zone에서 Combat Zone으로 변경. 차원의 석상·아티팩트·순간이동 등 전략 요소 추가. 기르타스 무기 제작식도 같은 날 추가 예정. 드랍 변경 여부는 조사 시점(2026-07-16) 기준 미확인.",
        "source": "https://www.inven.co.kr/webzine/news/?news=318258"
      },
      {
        "name": "페트라 (신규 지역)",
        "when": "2024-06 — EPISODE. ZERO / 7주년 업데이트. '숨겨진 결계의 숲' 직전까지 가장 최근에 추가된 필드 사냥터였음.",
        "source": "https://www.inven.co.kr/board/lineagem/5019/587650"
      }
    ],
    "notFound": [
      {
        "name": "죽음의 안개",
        "confidence": "미확인",
        "reason": "리니지M 한국 본서버에 '죽음의 안개'라는 던전/사냥터/지역이 존재한다는 근거를 어떤 출처에서도 찾지 못했다. 완전일치 검색, 인벤 site:lineagem 한정 검색, 인벤 '대박 사냥터 총정리' 지역명 40여개 전수 확인 모두 히트 0건. 유력한 혼동 후보: (1) 리니지2 레볼루션(넷마블)의 '죽음 안개 해안' — 타 게임이라 배제, (2) 리니지M '오만의 탑 4층' — 테마가 '죽음'이고 몬스터 전원이 '죽음의 OO' 접두어(죽음의 해골 근위병/돌격병/스파토이/저격병/좀비, 보스 죽음의 좀비로드, 권장 70+), (3) 리니지M '죽음의 폐허(해골밭)' — 글루딘 12시 언데드 사냥터, 보스 바포메트. 창작을 피하기 위해 항목을 만들지 않았다. 사용자 확인 필요.",
        "candidateSources": [
          "https://lineagem.inven.co.kr/dataninfo/guide/?idx=192955",
          "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
          "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
        ]
      }
    ],
    "sources": [
      "http://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17162",
      "http://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18371",
      "http://web.archive.org/web/20191019173900/https://greenblog.co.kr/2018/11/19/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%96%B4%EC%8A%A4%EB%B0%94%EC%9D%B8%EB%93%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-6%EC%B8%B5-%EB%93%9C%EB%9E%8D%ED%85%9C/",
      "http://web.archive.org/web/20251106211949/https://greenblog.co.kr/2019/08/18/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-5%EC%B8%B5-%EB%93%9C%EB%9E%8D-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A0%95%EB%A6%AC/",
      "https://lineagem.inven.co.kr/dataninfo/guide/",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180231",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180233",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180277",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180808",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181040",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
      "https://lineagem.inven.co.kr/dataninfo/guide/?idx=192955",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17152",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17172",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18221",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18311",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=28751",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=40084",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=53673",
      "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=53683",
      "https://lineagem.inven.co.kr/db/item/1085",
      "https://lineagem.inven.co.kr/db/item/111074",
      "https://lineagem.inven.co.kr/db/item/111133",
      "https://lineagem.inven.co.kr/db/item/111143",
      "https://lineagem.inven.co.kr/db/item/111153",
      "https://lineagem.inven.co.kr/db/item/111163",
      "https://lineagem.inven.co.kr/db/item/111183",
      "https://lineagem.inven.co.kr/db/item/111193",
      "https://lineagem.inven.co.kr/db/item/112212",
      "https://lineagem.inven.co.kr/db/item/112232",
      "https://lineagem.inven.co.kr/db/item/1123",
      "https://lineagem.inven.co.kr/db/item/113572",
      "https://lineagem.inven.co.kr/db/item/113582",
      "https://lineagem.inven.co.kr/db/item/113892",
      "https://lineagem.inven.co.kr/db/item/114012",
      "https://lineagem.inven.co.kr/db/item/114022",
      "https://lineagem.inven.co.kr/db/item/114052",
      "https://lineagem.inven.co.kr/db/item/114062",
      "https://lineagem.inven.co.kr/db/item/114082",
      "https://lineagem.inven.co.kr/db/item/114092",
      "https://lineagem.inven.co.kr/db/item/114102",
      "https://lineagem.inven.co.kr/db/item/114112",
      "https://lineagem.inven.co.kr/db/item/114152",
      "https://lineagem.inven.co.kr/db/item/114162",
      "https://lineagem.inven.co.kr/db/item/114172",
      "https://lineagem.inven.co.kr/db/item/114182",
      "https://lineagem.inven.co.kr/db/item/114192",
      "https://lineagem.inven.co.kr/db/item/114202",
      "https://lineagem.inven.co.kr/db/item/1161",
      "https://lineagem.inven.co.kr/db/item/116182",
      "https://lineagem.inven.co.kr/db/item/116242",
      "https://lineagem.inven.co.kr/db/item/116262",
      "https://lineagem.inven.co.kr/db/item/116272",
      "https://lineagem.inven.co.kr/db/item/1166",
      "https://lineagem.inven.co.kr/db/item/1167",
      "https://lineagem.inven.co.kr/db/item/1168",
      "https://lineagem.inven.co.kr/db/item/1169",
      "https://lineagem.inven.co.kr/db/item/1171",
      "https://lineagem.inven.co.kr/db/item/1172",
      "https://lineagem.inven.co.kr/db/item/1173",
      "https://lineagem.inven.co.kr/db/item/117544",
      "https://lineagem.inven.co.kr/db/item/1196",
      "https://lineagem.inven.co.kr/db/item/120062",
      "https://lineagem.inven.co.kr/db/item/120082",
      "https://lineagem.inven.co.kr/db/item/121833",
      "https://lineagem.inven.co.kr/db/item/121843",
      "https://lineagem.inven.co.kr/db/item/121853",
      "https://lineagem.inven.co.kr/db/item/121863",
      "https://lineagem.inven.co.kr/db/item/122344",
      "https://lineagem.inven.co.kr/db/item/122374",
      "https://lineagem.inven.co.kr/db/item/122384",
      "https://lineagem.inven.co.kr/db/item/122394",
      "https://lineagem.inven.co.kr/db/item/122994",
      "https://lineagem.inven.co.kr/db/item/124492",
      "https://lineagem.inven.co.kr/db/item/125633",
      "https://lineagem.inven.co.kr/db/item/125673",
      "https://lineagem.inven.co.kr/db/item/130471",
      "https://lineagem.inven.co.kr/db/item/130501",
      "https://lineagem.inven.co.kr/db/item/130511",
      "https://lineagem.inven.co.kr/db/item/130961",
      "https://lineagem.inven.co.kr/db/item/131121",
      "https://lineagem.inven.co.kr/db/item/131181",
      "https://lineagem.inven.co.kr/db/item/131331",
      "https://lineagem.inven.co.kr/db/item/133793",
      "https://lineagem.inven.co.kr/db/item/133803",
      "https://lineagem.inven.co.kr/db/item/134862",
      "https://lineagem.inven.co.kr/db/item/137",
      "https://lineagem.inven.co.kr/db/item/138",
      "https://lineagem.inven.co.kr/db/item/138361",
      "https://lineagem.inven.co.kr/db/item/138381",
      "https://lineagem.inven.co.kr/db/item/142213",
      "https://lineagem.inven.co.kr/db/item/142573",
      "https://lineagem.inven.co.kr/db/item/146652",
      "https://lineagem.inven.co.kr/db/item/147162",
      "https://lineagem.inven.co.kr/db/item/147172",
      "https://lineagem.inven.co.kr/db/item/147182",
      "https://lineagem.inven.co.kr/db/item/147192",
      "https://lineagem.inven.co.kr/db/item/147202",
      "https://lineagem.inven.co.kr/db/item/147212",
      "https://lineagem.inven.co.kr/db/item/147222",
      "https://lineagem.inven.co.kr/db/item/147232",
      "https://lineagem.inven.co.kr/db/item/147242",
      "https://lineagem.inven.co.kr/db/item/147252",
      "https://lineagem.inven.co.kr/db/item/147292",
      "https://lineagem.inven.co.kr/db/item/147302",
      "https://lineagem.inven.co.kr/db/item/147312",
      "https://lineagem.inven.co.kr/db/item/147322",
      "https://lineagem.inven.co.kr/db/item/149232",
      "https://lineagem.inven.co.kr/db/item/149242",
      "https://lineagem.inven.co.kr/db/item/150293",
      "https://lineagem.inven.co.kr/db/item/150303",
      "https://lineagem.inven.co.kr/db/item/152652",
      "https://lineagem.inven.co.kr/db/item/152682",
      "https://lineagem.inven.co.kr/db/item/152692",
      "https://lineagem.inven.co.kr/db/item/152792",
      "https://lineagem.inven.co.kr/db/item/157151",
      "https://lineagem.inven.co.kr/db/item/157171",
      "https://lineagem.inven.co.kr/db/item/158041",
      "https://lineagem.inven.co.kr/db/item/158051",
      "https://lineagem.inven.co.kr/db/item/158091",
      "https://lineagem.inven.co.kr/db/item/158121",
      "https://lineagem.inven.co.kr/db/item/161043",
      "https://lineagem.inven.co.kr/db/item/161053",
      "https://lineagem.inven.co.kr/db/item/161063",
      "https://lineagem.inven.co.kr/db/item/161073",
      "https://lineagem.inven.co.kr/db/item/161083",
      "https://lineagem.inven.co.kr/db/item/161093",
      "https://lineagem.inven.co.kr/db/item/161462",
      "https://lineagem.inven.co.kr/db/item/163954",
      "https://lineagem.inven.co.kr/db/item/163974",
      "https://lineagem.inven.co.kr/db/item/169553",
      "https://lineagem.inven.co.kr/db/item/169734",
      "https://lineagem.inven.co.kr/db/item/169934",
      "https://lineagem.inven.co.kr/db/item/180864",
      "https://lineagem.inven.co.kr/db/item/182411",
      "https://lineagem.inven.co.kr/db/item/182431",
      "https://lineagem.inven.co.kr/db/item/182471",
      "https://lineagem.inven.co.kr/db/item/182481",
      "https://lineagem.inven.co.kr/db/item/182531",
      "https://lineagem.inven.co.kr/db/item/182801",
      "https://lineagem.inven.co.kr/db/item/184942",
      "https://lineagem.inven.co.kr/db/item/185343",
      "https://lineagem.inven.co.kr/db/item/185824",
      "https://lineagem.inven.co.kr/db/item/185844",
      "https://lineagem.inven.co.kr/db/item/186854",
      "https://lineagem.inven.co.kr/db/item/187964",
      "https://lineagem.inven.co.kr/db/item/19222",
      "https://lineagem.inven.co.kr/db/item/19232",
      "https://lineagem.inven.co.kr/db/item/19272",
      "https://lineagem.inven.co.kr/db/item/19302",
      "https://lineagem.inven.co.kr/db/item/19332",
      "https://lineagem.inven.co.kr/db/item/19342",
      "https://lineagem.inven.co.kr/db/item/19352",
      "https://lineagem.inven.co.kr/db/item/19362",
      "https://lineagem.inven.co.kr/db/item/19392",
      "https://lineagem.inven.co.kr/db/item/19402",
      "https://lineagem.inven.co.kr/db/item/198041",
      "https://lineagem.inven.co.kr/db/item/198051",
      "https://lineagem.inven.co.kr/db/item/198071",
      "https://lineagem.inven.co.kr/db/item/198081",
      "https://lineagem.inven.co.kr/db/item/198091",
      "https://lineagem.inven.co.kr/db/item/1981",
      "https://lineagem.inven.co.kr/db/item/198101",
      "https://lineagem.inven.co.kr/db/item/198114",
      "https://lineagem.inven.co.kr/db/item/198134",
      "https://lineagem.inven.co.kr/db/item/198174",
      "https://lineagem.inven.co.kr/db/item/198184",
      "https://lineagem.inven.co.kr/db/item/198414",
      "https://lineagem.inven.co.kr/db/item/198424",
      "https://lineagem.inven.co.kr/db/item/198428",
      "https://lineagem.inven.co.kr/db/item/198434",
      "https://lineagem.inven.co.kr/db/item/198448",
      "https://lineagem.inven.co.kr/db/item/198478",
      "https://lineagem.inven.co.kr/db/item/198498",
      "https://lineagem.inven.co.kr/db/item/199738",
      "https://lineagem.inven.co.kr/db/item/199748",
      "https://lineagem.inven.co.kr/db/item/199758",
      "https://lineagem.inven.co.kr/db/item/199768",
      "https://lineagem.inven.co.kr/db/item/201163",
      "https://lineagem.inven.co.kr/db/item/206061",
      "https://lineagem.inven.co.kr/db/item/206091",
      "https://lineagem.inven.co.kr/db/item/206521",
      "https://lineagem.inven.co.kr/db/item/214241",
      "https://lineagem.inven.co.kr/db/item/222351",
      "https://lineagem.inven.co.kr/db/item/226972",
      "https://lineagem.inven.co.kr/db/item/230",
      "https://lineagem.inven.co.kr/db/item/230382",
      "https://lineagem.inven.co.kr/db/item/230592",
      "https://lineagem.inven.co.kr/db/item/232364",
      "https://lineagem.inven.co.kr/db/item/232384",
      "https://lineagem.inven.co.kr/db/item/232394",
      "https://lineagem.inven.co.kr/db/item/232444",
      "https://lineagem.inven.co.kr/db/item/235213",
      "https://lineagem.inven.co.kr/db/item/236632",
      "https://lineagem.inven.co.kr/db/item/236702",
      "https://lineagem.inven.co.kr/db/item/236712",
      "https://lineagem.inven.co.kr/db/item/241031",
      "https://lineagem.inven.co.kr/db/item/246058",
      "https://lineagem.inven.co.kr/db/item/2481",
      "https://lineagem.inven.co.kr/db/item/251",
      "https://lineagem.inven.co.kr/db/item/251032",
      "https://lineagem.inven.co.kr/db/item/256",
      "https://lineagem.inven.co.kr/db/item/2572",
      "https://lineagem.inven.co.kr/db/item/259103",
      "https://lineagem.inven.co.kr/db/item/259473",
      "https://lineagem.inven.co.kr/db/item/259483",
      "https://lineagem.inven.co.kr/db/item/259493",
      "https://lineagem.inven.co.kr/db/item/259503",
      "https://lineagem.inven.co.kr/db/item/259513",
      "https://lineagem.inven.co.kr/db/item/262",
      "https://lineagem.inven.co.kr/db/item/262958",
      "https://lineagem.inven.co.kr/db/item/263058",
      "https://lineagem.inven.co.kr/db/item/268",
      "https://lineagem.inven.co.kr/db/item/270",
      "https://lineagem.inven.co.kr/db/item/271",
      "https://lineagem.inven.co.kr/db/item/274",
      "https://lineagem.inven.co.kr/db/item/2762",
      "https://lineagem.inven.co.kr/db/item/278",
      "https://lineagem.inven.co.kr/db/item/278753",
      "https://lineagem.inven.co.kr/db/item/278773",
      "https://lineagem.inven.co.kr/db/item/2792",
      "https://lineagem.inven.co.kr/db/item/282",
      "https://lineagem.inven.co.kr/db/item/283053",
      "https://lineagem.inven.co.kr/db/item/283174",
      "https://lineagem.inven.co.kr/db/item/283224",
      "https://lineagem.inven.co.kr/db/item/283644",
      "https://lineagem.inven.co.kr/db/item/283654",
      "https://lineagem.inven.co.kr/db/item/284024",
      "https://lineagem.inven.co.kr/db/item/287232",
      "https://lineagem.inven.co.kr/db/item/2882",
      "https://lineagem.inven.co.kr/db/item/289162",
      "https://lineagem.inven.co.kr/db/item/289352",
      "https://lineagem.inven.co.kr/db/item/291102",
      "https://lineagem.inven.co.kr/db/item/291142",
      "https://lineagem.inven.co.kr/db/item/292292",
      "https://lineagem.inven.co.kr/db/item/292302",
      "https://lineagem.inven.co.kr/db/item/292312",
      "https://lineagem.inven.co.kr/db/item/292322",
      "https://lineagem.inven.co.kr/db/item/292332",
      "https://lineagem.inven.co.kr/db/item/292542",
      "https://lineagem.inven.co.kr/db/item/293453",
      "https://lineagem.inven.co.kr/db/item/293463",
      "https://lineagem.inven.co.kr/db/item/293483",
      "https://lineagem.inven.co.kr/db/item/293493",
      "https://lineagem.inven.co.kr/db/item/293503",
      "https://lineagem.inven.co.kr/db/item/293513",
      "https://lineagem.inven.co.kr/db/item/293523",
      "https://lineagem.inven.co.kr/db/item/293533",
      "https://lineagem.inven.co.kr/db/item/303342",
      "https://lineagem.inven.co.kr/db/item/303352",
      "https://lineagem.inven.co.kr/db/item/303362",
      "https://lineagem.inven.co.kr/db/item/303372",
      "https://lineagem.inven.co.kr/db/item/303382",
      "https://lineagem.inven.co.kr/db/item/303392",
      "https://lineagem.inven.co.kr/db/item/303402",
      "https://lineagem.inven.co.kr/db/item/303412",
      "https://lineagem.inven.co.kr/db/item/303422",
      "https://lineagem.inven.co.kr/db/item/303432",
      "https://lineagem.inven.co.kr/db/item/30583",
      "https://lineagem.inven.co.kr/db/item/306",
      "https://lineagem.inven.co.kr/db/item/30653",
      "https://lineagem.inven.co.kr/db/item/309",
      "https://lineagem.inven.co.kr/db/item/31043",
      "https://lineagem.inven.co.kr/db/item/31083",
      "https://lineagem.inven.co.kr/db/item/31093",
      "https://lineagem.inven.co.kr/db/item/311",
      "https://lineagem.inven.co.kr/db/item/31113",
      "https://lineagem.inven.co.kr/db/item/31123",
      "https://lineagem.inven.co.kr/db/item/31163",
      "https://lineagem.inven.co.kr/db/item/318",
      "https://lineagem.inven.co.kr/db/item/3182",
      "https://lineagem.inven.co.kr/db/item/320",
      "https://lineagem.inven.co.kr/db/item/32172",
      "https://lineagem.inven.co.kr/db/item/323843",
      "https://lineagem.inven.co.kr/db/item/324",
      "https://lineagem.inven.co.kr/db/item/3242",
      "https://lineagem.inven.co.kr/db/item/3252",
      "https://lineagem.inven.co.kr/db/item/326313",
      "https://lineagem.inven.co.kr/db/item/327293",
      "https://lineagem.inven.co.kr/db/item/32991",
      "https://lineagem.inven.co.kr/db/item/330",
      "https://lineagem.inven.co.kr/db/item/33001",
      "https://lineagem.inven.co.kr/db/item/33011",
      "https://lineagem.inven.co.kr/db/item/33081",
      "https://lineagem.inven.co.kr/db/item/33091",
      "https://lineagem.inven.co.kr/db/item/331",
      "https://lineagem.inven.co.kr/db/item/33101",
      "https://lineagem.inven.co.kr/db/item/33111",
      "https://lineagem.inven.co.kr/db/item/33121",
      "https://lineagem.inven.co.kr/db/item/33141",
      "https://lineagem.inven.co.kr/db/item/33191",
      "https://lineagem.inven.co.kr/db/item/33201",
      "https://lineagem.inven.co.kr/db/item/33211",
      "https://lineagem.inven.co.kr/db/item/334",
      "https://lineagem.inven.co.kr/db/item/335392",
      "https://lineagem.inven.co.kr/db/item/336838",
      "https://lineagem.inven.co.kr/db/item/336848",
      "https://lineagem.inven.co.kr/db/item/336858",
      "https://lineagem.inven.co.kr/db/item/336868",
      "https://lineagem.inven.co.kr/db/item/338",
      "https://lineagem.inven.co.kr/db/item/34801",
      "https://lineagem.inven.co.kr/db/item/34811",
      "https://lineagem.inven.co.kr/db/item/351882",
      "https://lineagem.inven.co.kr/db/item/3572",
      "https://lineagem.inven.co.kr/db/item/3631",
      "https://lineagem.inven.co.kr/db/item/3642",
      "https://lineagem.inven.co.kr/db/item/366",
      "https://lineagem.inven.co.kr/db/item/3662",
      "https://lineagem.inven.co.kr/db/item/3702",
      "https://lineagem.inven.co.kr/db/item/3732",
      "https://lineagem.inven.co.kr/db/item/379",
      "https://lineagem.inven.co.kr/db/item/382",
      "https://lineagem.inven.co.kr/db/item/386",
      "https://lineagem.inven.co.kr/db/item/388",
      "https://lineagem.inven.co.kr/db/item/4141",
      "https://lineagem.inven.co.kr/db/item/423",
      "https://lineagem.inven.co.kr/db/item/424",
      "https://lineagem.inven.co.kr/db/item/430",
      "https://lineagem.inven.co.kr/db/item/431",
      "https://lineagem.inven.co.kr/db/item/433",
      "https://lineagem.inven.co.kr/db/item/436",
      "https://lineagem.inven.co.kr/db/item/445",
      "https://lineagem.inven.co.kr/db/item/446",
      "https://lineagem.inven.co.kr/db/item/447",
      "https://lineagem.inven.co.kr/db/item/44822",
      "https://lineagem.inven.co.kr/db/item/44902",
      "https://lineagem.inven.co.kr/db/item/44912",
      "https://lineagem.inven.co.kr/db/item/44922",
      "https://lineagem.inven.co.kr/db/item/452",
      "https://lineagem.inven.co.kr/db/item/454",
      "https://lineagem.inven.co.kr/db/item/455",
      "https://lineagem.inven.co.kr/db/item/456",
      "https://lineagem.inven.co.kr/db/item/4621",
      "https://lineagem.inven.co.kr/db/item/465",
      "https://lineagem.inven.co.kr/db/item/468",
      "https://lineagem.inven.co.kr/db/item/480",
      "https://lineagem.inven.co.kr/db/item/485",
      "https://lineagem.inven.co.kr/db/item/492",
      "https://lineagem.inven.co.kr/db/item/493",
      "https://lineagem.inven.co.kr/db/item/495",
      "https://lineagem.inven.co.kr/db/item/496",
      "https://lineagem.inven.co.kr/db/item/498",
      "https://lineagem.inven.co.kr/db/item/503",
      "https://lineagem.inven.co.kr/db/item/505",
      "https://lineagem.inven.co.kr/db/item/507",
      "https://lineagem.inven.co.kr/db/item/508",
      "https://lineagem.inven.co.kr/db/item/513",
      "https://lineagem.inven.co.kr/db/item/514",
      "https://lineagem.inven.co.kr/db/item/515",
      "https://lineagem.inven.co.kr/db/item/517",
      "https://lineagem.inven.co.kr/db/item/518",
      "https://lineagem.inven.co.kr/db/item/524",
      "https://lineagem.inven.co.kr/db/item/525",
      "https://lineagem.inven.co.kr/db/item/528",
      "https://lineagem.inven.co.kr/db/item/530",
      "https://lineagem.inven.co.kr/db/item/54803",
      "https://lineagem.inven.co.kr/db/item/556",
      "https://lineagem.inven.co.kr/db/item/5611",
      "https://lineagem.inven.co.kr/db/item/565",
      "https://lineagem.inven.co.kr/db/item/566",
      "https://lineagem.inven.co.kr/db/item/567",
      "https://lineagem.inven.co.kr/db/item/568",
      "https://lineagem.inven.co.kr/db/item/569",
      "https://lineagem.inven.co.kr/db/item/571",
      "https://lineagem.inven.co.kr/db/item/573",
      "https://lineagem.inven.co.kr/db/item/575",
      "https://lineagem.inven.co.kr/db/item/576",
      "https://lineagem.inven.co.kr/db/item/578",
      "https://lineagem.inven.co.kr/db/item/580",
      "https://lineagem.inven.co.kr/db/item/5801",
      "https://lineagem.inven.co.kr/db/item/581",
      "https://lineagem.inven.co.kr/db/item/582",
      "https://lineagem.inven.co.kr/db/item/588",
      "https://lineagem.inven.co.kr/db/item/590",
      "https://lineagem.inven.co.kr/db/item/591",
      "https://lineagem.inven.co.kr/db/item/592",
      "https://lineagem.inven.co.kr/db/item/594",
      "https://lineagem.inven.co.kr/db/item/595",
      "https://lineagem.inven.co.kr/db/item/597",
      "https://lineagem.inven.co.kr/db/item/599",
      "https://lineagem.inven.co.kr/db/item/601",
      "https://lineagem.inven.co.kr/db/item/6011",
      "https://lineagem.inven.co.kr/db/item/603",
      "https://lineagem.inven.co.kr/db/item/604",
      "https://lineagem.inven.co.kr/db/item/6041",
      "https://lineagem.inven.co.kr/db/item/605",
      "https://lineagem.inven.co.kr/db/item/606",
      "https://lineagem.inven.co.kr/db/item/607",
      "https://lineagem.inven.co.kr/db/item/608",
      "https://lineagem.inven.co.kr/db/item/609",
      "https://lineagem.inven.co.kr/db/item/612",
      "https://lineagem.inven.co.kr/db/item/613",
      "https://lineagem.inven.co.kr/db/item/614",
      "https://lineagem.inven.co.kr/db/item/615",
      "https://lineagem.inven.co.kr/db/item/616",
      "https://lineagem.inven.co.kr/db/item/6161",
      "https://lineagem.inven.co.kr/db/item/617",
      "https://lineagem.inven.co.kr/db/item/618",
      "https://lineagem.inven.co.kr/db/item/623",
      "https://lineagem.inven.co.kr/db/item/6291",
      "https://lineagem.inven.co.kr/db/item/6311",
      "https://lineagem.inven.co.kr/db/item/6351",
      "https://lineagem.inven.co.kr/db/item/6361",
      "https://lineagem.inven.co.kr/db/item/6371",
      "https://lineagem.inven.co.kr/db/item/6381",
      "https://lineagem.inven.co.kr/db/item/6391",
      "https://lineagem.inven.co.kr/db/item/644",
      "https://lineagem.inven.co.kr/db/item/649",
      "https://lineagem.inven.co.kr/db/item/65181",
      "https://lineagem.inven.co.kr/db/item/65191",
      "https://lineagem.inven.co.kr/db/item/652",
      "https://lineagem.inven.co.kr/db/item/65201",
      "https://lineagem.inven.co.kr/db/item/65211",
      "https://lineagem.inven.co.kr/db/item/65221",
      "https://lineagem.inven.co.kr/db/item/65231",
      "https://lineagem.inven.co.kr/db/item/65241",
      "https://lineagem.inven.co.kr/db/item/65251",
      "https://lineagem.inven.co.kr/db/item/65271",
      "https://lineagem.inven.co.kr/db/item/653",
      "https://lineagem.inven.co.kr/db/item/658",
      "https://lineagem.inven.co.kr/db/item/659",
      "https://lineagem.inven.co.kr/db/item/660",
      "https://lineagem.inven.co.kr/db/item/661",
      "https://lineagem.inven.co.kr/db/item/662",
      "https://lineagem.inven.co.kr/db/item/673",
      "https://lineagem.inven.co.kr/db/item/677",
      "https://lineagem.inven.co.kr/db/item/681",
      "https://lineagem.inven.co.kr/db/item/682",
      "https://lineagem.inven.co.kr/db/item/683",
      "https://lineagem.inven.co.kr/db/item/704",
      "https://lineagem.inven.co.kr/db/item/705",
      "https://lineagem.inven.co.kr/db/item/719",
      "https://lineagem.inven.co.kr/db/item/724",
      "https://lineagem.inven.co.kr/db/item/731",
      "https://lineagem.inven.co.kr/db/item/733",
      "https://lineagem.inven.co.kr/db/item/734",
      "https://lineagem.inven.co.kr/db/item/739",
      "https://lineagem.inven.co.kr/db/item/744",
      "https://lineagem.inven.co.kr/db/item/746",
      "https://lineagem.inven.co.kr/db/item/752",
      "https://lineagem.inven.co.kr/db/item/753",
      "https://lineagem.inven.co.kr/db/item/754",
      "https://lineagem.inven.co.kr/db/item/767",
      "https://lineagem.inven.co.kr/db/item/7991",
      "https://lineagem.inven.co.kr/db/item/8001",
      "https://lineagem.inven.co.kr/db/item/840",
      "https://lineagem.inven.co.kr/db/item/841",
      "https://lineagem.inven.co.kr/db/item/843",
      "https://lineagem.inven.co.kr/db/item/853",
      "https://lineagem.inven.co.kr/db/item/859",
      "https://lineagem.inven.co.kr/db/item/887",
      "https://lineagem.inven.co.kr/db/item/910",
      "https://lineagem.inven.co.kr/db/item/913",
      "https://lineagem.inven.co.kr/db/item/915",
      "https://lineagem.inven.co.kr/db/item/916",
      "https://lineagem.inven.co.kr/db/item/920",
      "https://lineagem.inven.co.kr/db/item/928",
      "https://lineagem.inven.co.kr/db/item/943",
      "https://lineagem.inven.co.kr/db/item/951",
      "https://lineagem.inven.co.kr/db/item/9521",
      "https://lineagem.inven.co.kr/db/item/9531",
      "https://lineagem.inven.co.kr/db/item/954",
      "https://lineagem.inven.co.kr/db/item/9541",
      "https://lineagem.inven.co.kr/db/item/955",
      "https://lineagem.inven.co.kr/db/item/9551",
      "https://lineagem.inven.co.kr/db/item/9561",
      "https://lineagem.inven.co.kr/db/item/96364",
      "https://lineagem.inven.co.kr/db/item/96414",
      "https://lineagem.inven.co.kr/db/item/96484",
      "https://lineagem.inven.co.kr/db/item/96554",
      "https://lineagem.inven.co.kr/db/item/96574",
      "https://lineagem.inven.co.kr/db/item/96594",
      "https://lineagem.inven.co.kr/db/item/96634",
      "https://lineagem.inven.co.kr/db/item/96654",
      "https://lineagem.inven.co.kr/db/item/98224",
      "https://lineagem.inven.co.kr/db/item/98234",
      "https://lineagem.inven.co.kr/db/item/98244",
      "https://lineagem.inven.co.kr/db/item/98254",
      "https://lineagem.inven.co.kr/db/monster/?area=10601",
      "https://lineagem.inven.co.kr/db/monster/?area=10602",
      "https://lineagem.inven.co.kr/db/monster/?area=10603",
      "https://lineagem.inven.co.kr/db/monster/?area=10604",
      "https://lineagem.inven.co.kr/db/monster/?area=10605",
      "https://lineagem.inven.co.kr/db/monster/?area=10606",
      "https://lineagem.inven.co.kr/db/monster/?area=21301",
      "https://lineagem.inven.co.kr/db/monster/?area=21302",
      "https://lineagem.inven.co.kr/db/monster/?area=21303",
      "https://lineagem.inven.co.kr/db/monster/?area=21304",
      "https://lineagem.inven.co.kr/db/monster/?area=21305",
      "https://lineagem.inven.co.kr/db/monster/?area=21306",
      "https://lineagem.inven.co.kr/db/monster/?area=21307",
      "https://lineagem.inven.co.kr/db/monster/?area=21308",
      "https://lineagem.inven.co.kr/db/monster/?area=21309",
      "https://lineagem.inven.co.kr/db/monster/?area=21310",
      "https://lineagem.inven.co.kr/db/monster/?area=21401",
      "https://lineagem.inven.co.kr/db/monster/?area=21402",
      "https://lineagem.inven.co.kr/db/monster/?area=21403",
      "https://lineagem.inven.co.kr/db/monster/?area=21404",
      "https://lineagem.inven.co.kr/db/monster/?area=21501",
      "https://lineagem.inven.co.kr/db/monster/?area=21502",
      "https://lineagem.inven.co.kr/db/monster/?area=21503",
      "https://lineagem.inven.co.kr/db/monster/?area=21504",
      "https://lineagem.inven.co.kr/db/monster/?area=21505",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5957956dd389e9000124a32a",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5967765cd7a85c00011c20b7",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=59677690d7a85c00011c20ae",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=596776d5d7a85c00011c20ab",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=59677714d7a85c00011c20a6",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5967776ad7a85c00011c2091",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=596c4246d54e6400015000ee",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5ca232f2402b620001c30b92",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5cce4723d54e640001862cc2",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
      "https://lineagem.plaync.com/board/knowhow/view?articleId=66b31643660ac34913076071",
      "https://m.gamechosun.co.kr/news/view.php?no=149309",
      "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
      "https://m.inven.co.kr/webzine/wznews.php?idx=214398&site=lineagem",
      "https://www.gamechosun.co.kr/webzine/article/view.php?no=143551",
      "https://www.gametoc.co.kr/news/articleView.html?idxno=50652",
      "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
      "https://www.inven.co.kr/board/lineagem/5056/11226",
      "https://www.inven.co.kr/board/lineagem/5056/11265",
      "https://www.inven.co.kr/board/lineagem/5056/948",
      "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
      "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
      "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
      "https://www.inven.co.kr/webzine/news/?news=180505&site=mobilegame",
      "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem",
      "https://www.inven.co.kr/webzine/news/?news=198190&site=lineagem",
      "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
    ]
  },
  "groups": [
    {
      "key": "sudeon",
      "label": "수련의 던전",
      "zoneLabel": "층",
      "confidence": "부분",
      "note": "리니지M 한국 본서버 아덴 대륙 20번 던전(원작 리니지의 '사막 던전'), 총 1~4층. 천/철/보석 3대 제작 재료를 한 던전에서 모두 수급할 수 있는 대표 재료 사냥터. 3~4층만 공신력 있는 리니지M 전용 자료가 존재하며, 1~2층 층별 드랍은 리니지M 기준 자료를 찾지 못해 미확인으로 남김. ※'어둠의 수련 던전'(몬스터 레벨 90~95)과 '에바왕국 던전'(구 수중던전)은 이름·층 구조가 비슷할 뿐 완전히 다른 사냥터라 별도 그룹으로 분리했다. 1·2층은 리니지M 근거 자료가 없어 미확인이며 고유/공통 계산의 유효 층에서 제외했다(유효 층=3·4층).",
      "zones": [
        {
          "key": "sudeon_1",
          "zone": "수련의 던전 1층",
          "levelRange": "미확인",
          "entry": "은기사 마을에서 25분 방향으로 약 15발자국 이동하면 '블레이즈'(수련 던전 텔레포터)가 있으며, 이 NPC를 통해 수련 던전에 입장한다. (층별 개별 입장 조건은 미확인)",
          "monsters": [],
          "confidence": "미확인",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=66b31643660ac34913076071",
            "https://www.inven.co.kr/board/lineagem/5056/948",
            "https://lineagem.inven.co.kr/dataninfo/guide/"
          ],
          "note": "리니지M 인벤의 추천 사냥터 가이드에는 '수련 던전 3~4층'만 실려 있고, 1~2층 가이드는 아예 없습니다. 검색하면 나오는 1~2층 몬스터 구성(오크 패밀리·좀비·구울·수련 흑기사)과 '수련의 증표로 흑기사 부대장 농축 물약을 교환한다'는 이야기는 확인해 보니 전부 PC 리니지(리마스터 기사·파워북) 자료였습니다. 이 앱은 리니지M 한국 본서버만 다루기 때문에 다른 게임 정보는 일부러 싣지 않았습니다. 리니지M 기준 1층 드랍 자료는 찾지 못했습니다.",
          "drops": []
        },
        {
          "key": "sudeon_2",
          "zone": "수련의 던전 2층",
          "levelRange": "미확인",
          "entry": "은기사 마을에서 25분 방향으로 약 15발자국 이동하면 '블레이즈'(수련 던전 텔레포터)가 있으며, 이 NPC를 통해 수련 던전에 입장한다. (층별 개별 입장 조건은 미확인)",
          "monsters": [],
          "confidence": "미확인",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=66b31643660ac34913076071",
            "https://www.inven.co.kr/board/lineagem/5056/948",
            "https://lineagem.inven.co.kr/dataninfo/guide/"
          ],
          "note": "1층과 같은 이유입니다. 리니지M 기준 2층 드랍 자료를 찾지 못했고, 검색에 나오는 2층 정보(수련 흑기사·구울·버그베어, 구울 마비독에 해독제가 필요하다는 이야기)는 PC 리니지 리마스터 자료라 싣지 않았습니다. 추측으로 채우지 않았습니다.",
          "drops": []
        },
        {
          "key": "sudeon_3",
          "zone": "수련의 던전 3층",
          "levelRange": "45+ (리니지M 인벤 가이드 기준 '이제 막 45를 지나 제작 장비를 맞추는 유저'에게 권장. 실측은 50레벨 기사 기준)",
          "entry": "은기사 마을 25분 방향 약 15발자국의 '블레이즈'(수련 던전 텔레포터)로 수련 던전 진입 후 3층까지 이동. 던전 길이 복잡한 편.",
          "monsters": [
            "임프",
            "켈베로스"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
            "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
            "https://www.inven.co.kr/webzine/news/?news=180505&site=mobilegame"
          ],
          "note": "리니지M 인벤 공식 추천 사냥터 가이드로 천/보석/각인 장비 상자/아데나는 확인. 다만 원문이 3층과 4층을 묶어 서술하는 부분이 많아 몬스터별 전체 드랍 테이블(무기/방어구 세부 목록)은 확보하지 못함. 인벤 몬스터 DB는 JS 렌더링으로 본문 접근 차단됨.",
          "drops": [
            {
              "name": "천",
              "kind": "재료",
              "note": "3층 주력 재료. 임프가 주로 드랍. 3~4층 통합 1시간 평균 약 50개(50레벨 기사 기준)",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [
                "임프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "3층과 4층 양쪽에 모두 출현하는 켈베로스가 드랍. 3~4층 통합 1시간 평균 약 20개",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 확률 낮음. 3~4층 통합 1시간 평균 약 2개",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "시간당 약 10만 아데나 수준",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "사각 방패",
              "kind": "방어구",
              "note": "용해용 아이템. 원문이 '수련 던전 3~4층'으로 묶어 서술해 3층 단독 드랍 여부는 부분 확인",
              "confidence": "부분",
              "source": "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "미늘창",
              "kind": "무기",
              "note": "용해용 아이템. 원문이 '수련 던전 3~4층'으로 묶어 서술해 3층 단독 드랍 여부는 부분 확인",
              "confidence": "부분",
              "source": "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            }
          ]
        },
        {
          "key": "sudeon_4",
          "zone": "수련의 던전 4층",
          "levelRange": "45+ (리니지M 인벤 가이드 기준. 실측은 50레벨 기사 기준)",
          "entry": "은기사 마을 25분 방향 약 15발자국의 '블레이즈'(수련 던전 텔레포터)로 수련 던전 진입 후 4층까지 이동. 던전 길이 복잡한 편.",
          "monsters": [
            "흑기사",
            "켈베로스"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
            "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
            "https://www.inven.co.kr/webzine/news/?news=180505&site=mobilegame"
          ],
          "note": "3층과 동일. 철/보석/각인 장비 상자/아데나는 리니지M 인벤 가이드로 확인. 4층 보스(정예 흑기사 대장)·킹버그베어 등은 검색 요약에만 등장하고 리니지M 1차 출처로 교차 확인되지 않아(PC 리니지 파워북 혼입 의심) 기재하지 않음.",
          "drops": [
            {
              "name": "철",
              "kind": "재료",
              "note": "4층 주력 재료. 흑기사가 주로 드랍. 3~4층 통합 1시간 평균 약 60개(50레벨 기사 기준)",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [
                "흑기사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "3층과 4층 양쪽에 모두 출현하는 켈베로스가 드랍. 3~4층 통합 1시간 평균 약 20개",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 확률 낮음. 3~4층 통합 1시간 평균 약 2개",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "시간당 약 10만 아데나 수준",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180505",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "사각 방패",
              "kind": "방어구",
              "note": "용해용 아이템. 원문이 '수련 던전 3~4층'으로 묶어 서술해 4층 단독 드랍 여부는 부분 확인",
              "confidence": "부분",
              "source": "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            },
            {
              "name": "미늘창",
              "kind": "무기",
              "note": "용해용 아이템. 원문이 '수련 던전 3~4층'으로 묶어 서술해 4층 단독 드랍 여부는 부분 확인",
              "confidence": "부분",
              "source": "https://m.inven.co.kr/webzine/wznews.php?idx=180505&site=hit",
              "from": [],
              "sharedCount": 2,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "tower",
      "label": "오만의 탑",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "1~10층(10층이 최상층). 테마=1층 왜곡/2층 불신/3층 공포/4층 죽음/5층 지옥/6층 불사/7층 잔혹/8층 어둠/9층 불멸/10층 오만. 몬스터·드랍은 인벤 리니지M 몬스터 DB를 헤드리스 브라우저로 직접 판독한 1차 자료를 채택했다(검색엔진 색인 경유로 수집된 초기 목록은 몬스터 2~5종 누락·표기 오류가 있어 폐기). ★'감시자 리퍼'는 1~10층 모든 층에 같은 이름으로 등장하지만, 실제로는 층마다 몬스터 코드·외형·드랍 테이블이 전부 다른 별개 몬스터이며 각자 자기 층에만 출현한다(1층 코드 17092 '외형: 왜곡의 메두사' ~ 10층 코드 53713). 따라서 이름이 같다고 그 드랍이 전 층 공통인 것은 아니다. 고유/공통 판정은 몬스터 이름이 아니라 층별 아이템 집합으로 계산했다. 10층 위로는 별도 사냥터 '신념의 탑'이 이어진다.",
      "zones": [
        {
          "key": "tower_1",
          "zone": "오만의 탑 1층",
          "levelRange": "몬스터 레벨 75~90 (인벤 DB 표기)",
          "entry": "황혼 산맥 텔레포트 후 북동쪽 이동으로 접근(인벤 기준 텔레포트 비용 1만 아데나). 던전 메뉴를 통해 입장. 기본 주 7시간 이용, '오만과 신념의 탑 시간 충전석'으로 연장. 테마=왜곡",
          "monsters": [
            "감시자 리퍼",
            "왜곡의 라미아",
            "왜곡의 메두사",
            "왜곡의 웅골리언트",
            "왜곡의 제니스 퀸",
            "왜곡의 코카트리스",
            "왜곡의 키메라",
            "왜곡의 타란툴라"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21301",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17152"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 부분 확인 - 던전 자체 입장은 68레벨 이상 기준이 공식 안내에 반복 등장하나, 인벤 1~3층 가이드는 50레벨대 황혼 산맥 경유 진입을 전제로 서술. 층별 정확한 권장 레벨은 미확인",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 제니스 퀸",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/199738",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 제니스 퀸의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303342",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "강철 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 웅골리언트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230",
              "from": [
                "왜곡의 웅골리언트"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "강철 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 왜곡의 웅골리언트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114112",
              "from": [
                "왜곡의 웅골리언트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "고대 마법서 (팔랑크스: 에이스)",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/291142",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "기사의 면갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/910",
              "from": [
                "왜곡의 코카트리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본 (매지컬 샷: 그랩)",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98254",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본 (매지컬 샷: 캔슬레이션)",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/152792",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본 (브레이크 샷: 카운터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/131331",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 왜곡의 타란툴라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "왜곡의 제니스 퀸",
                "왜곡의 타란툴라"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "메두사 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 메두사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/515",
              "from": [
                "왜곡의 메두사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 타란툴라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/595",
              "from": [
                "왜곡의 타란툴라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "바람의 피혁",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/734",
              "from": [
                "왜곡의 라미아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "보호 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/306",
              "from": [
                "왜곡의 라미아"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 오만의 탑 1층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19272",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "사냥꾼의 라이플",
              "kind": "무기",
              "note": "드랍 몬스터: 왜곡의 키메라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96364",
              "from": [
                "왜곡의 키메라"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "신관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 타란툴라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/617",
              "from": [
                "왜곡의 라미아",
                "왜곡의 타란툴라"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 지식의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/121853",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 1층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 메두사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65191",
              "from": [
                "왜곡의 메두사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 1층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19232",
              "from": [
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 2층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19352",
              "from": [
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "요정족 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 키메라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4621",
              "from": [
                "왜곡의 키메라"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "왜곡의 제니스 퀸",
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 왜곡의 타란툴라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "왜곡의 제니스 퀸",
                "왜곡의 타란툴라"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "제니스의 각성 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161043",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "제니스의 눈물",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147162",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "제니스의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19222",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "왜곡의 제니스 퀸"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼, 왜곡의 라미아, 왜곡의 메두사, 왜곡의 타란툴라, 왜곡의 키메라, 왜곡의 웅골리언트, 왜곡의 코카트리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼",
                "왜곡의 라미아",
                "왜곡의 메두사",
                "왜곡의 타란툴라",
                "왜곡의 키메라",
                "왜곡의 웅골리언트",
                "왜곡의 코카트리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "흑정령의 수정 (쉐도우 아머)",
              "kind": "방어구",
              "note": "드랍 몬스터: 왜곡의 키메라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31083",
              "from": [
                "왜곡의 키메라"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 왜곡의 제니스 퀸, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "왜곡의 제니스 퀸",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_2",
          "zone": "오만의 탑 2층",
          "levelRange": "몬스터 레벨 76~90 (인벤 DB 표기)",
          "entry": "1층에서 '오만의 탑 2층 이동 주문서' 또는 이동 부적으로 진입. 테마=불신",
          "monsters": [
            "감시자 리퍼",
            "불신의 다이어울프",
            "불신의 댄싱 소드",
            "불신의 미믹",
            "불신의 비홀더",
            "불신의 서큐버스",
            "불신의 시어",
            "불신의 임프"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21302",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
            "http://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17162"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 미확인 (인벤 1~3층 가이드 기준 1층보다 소폭 상위. 정확한 권장 레벨 수치 미확인)",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 시어",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198041",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 시어의 눈",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303352",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 미믹",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 미믹"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "고급 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 다이어울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3642",
              "from": [
                "불신의 다이어울프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "고급 철",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 미믹",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3662",
              "from": [
                "불신의 미믹"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "기사단의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/915",
              "from": [
                "불신의 서큐버스",
                "불신의 임프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "나이트 발드의 왼쪽 심안",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147172",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데스 블레이드",
              "kind": "무기",
              "note": "드랍 몬스터: 불신의 댄싱 소드, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9531",
              "from": [
                "불신의 댄싱 소드",
                "불신의 임프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "불신의 시어",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법 방어 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 불신의 다이어울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/256",
              "from": [
                "불신의 다이어울프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (캔슬레이션)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/274",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/513",
              "from": [
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 미믹",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 미믹"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "바람의 피혁",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 비홀더",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/734",
              "from": [
                "불신의 비홀더"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 2층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19392",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성서 (매직 미러)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138381",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수정 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 불신의 비홀더",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/591",
              "from": [
                "불신의 비홀더"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "시어의 각성 심안",
              "kind": "악세",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161053",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "시어의 심안",
              "kind": "악세",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/518",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신관의 마력서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/612",
              "from": [
                "불신의 서큐버스",
                "불신의 임프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 민첩의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/121843",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "엘름의 축복",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/320",
              "from": [
                "불신의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 2층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 다이어울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65201",
              "from": [
                "불신의 다이어울프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 2층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19352",
              "from": [
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 3층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19362",
              "from": [
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "요정족 사슬 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 불신의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/334",
              "from": [
                "불신의 서큐버스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어, 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "불신의 시어",
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "불신의 시어",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "체력의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 미믹",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/607",
              "from": [
                "불신의 미믹"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불신의 시어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "불신의 시어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼, 불신의 서큐버스, 불신의 댄싱 소드, 불신의 비홀더, 불신의 다이어울프, 불신의 미믹, 불신의 임프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "불신의 시어",
                "감시자 리퍼",
                "불신의 서큐버스",
                "불신의 댄싱 소드",
                "불신의 비홀더",
                "불신의 다이어울프",
                "불신의 미믹",
                "불신의 임프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "활 골무",
              "kind": "무기",
              "note": "드랍 몬스터: 불신의 비홀더",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/592",
              "from": [
                "불신의 비홀더"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (버닝 스피릿츠)",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 댄싱 소드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31093",
              "from": [
                "불신의 댄싱 소드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불신의 시어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "불신의 시어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_3",
          "zone": "오만의 탑 3층",
          "levelRange": "몬스터 레벨 76~90 (인벤 DB 표기)",
          "entry": "2층에서 '오만의 탑 3층 이동 주문서' 또는 이동 부적으로 진입. 테마=공포",
          "monsters": [
            "감시자 리퍼",
            "공포의 나이트메어",
            "공포의 레서 데몬",
            "공포의 뱀파이어",
            "공포의 아그니",
            "공포의 이프리트",
            "공포의 자이언트 뱃",
            "공포의 켈베로스",
            "공포의 파이어 에그"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21303",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=185439",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=17172"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 미확인 (인벤 가이드상 3층은 불 속성 대비 화령 반지 권장. 정확한 권장 레벨 미확인)",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 뱀파이어",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198051",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 뱀파이어의 목걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303362",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 레서 데몬, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 레서 데몬",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "강철 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/601",
              "from": [
                "공포의 켈베로스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "강철 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 나이트메어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230",
              "from": [
                "공포의 나이트메어"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "군주의 위엄",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 이프리트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/567",
              "from": [
                "공포의 이프리트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "늑대 가죽 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 나이트메어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/32172",
              "from": [
                "공포의 나이트메어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "다마스커스 이도류",
              "kind": "무기",
              "note": "드랍 몬스터: 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/492",
              "from": [
                "공포의 레서 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "다마스커스 크로우",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 이프리트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/843",
              "from": [
                "공포의 이프리트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데몬의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/528",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 레서 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데몬의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/578",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 레서 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데몬의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/594",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 레서 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데몬의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/840",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 레서 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 뱀파이어, 공포의 자이언트 뱃",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "공포의 뱀파이어",
                "공포의 자이언트 뱃"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법서 (매직 마스터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/152652",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (브레이브 웨폰)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/131181",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (블랙 실드)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/152682",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (이뮨 투 함)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/943",
              "from": [
                "공포의 켈베로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (파이어 스톰)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/282",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/525",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 레서 데몬, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 레서 데몬",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "뱀파이어의 각성 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161063",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "뱀파이어의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/573",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 3층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19402",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "불의 피혁",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 이프리트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/731",
              "from": [
                "공포의 이프리트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성서 (세인트 체이서: 디바인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138361",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수정 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/524",
              "from": [
                "공포의 레서 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "수중 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9521",
              "from": [
                "공포의 켈베로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신관의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 레서 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/613",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 레서 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 완력의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/121833",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 3층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 자이언트 뱃, 공포의 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65211",
              "from": [
                "공포의 자이언트 뱃",
                "공포의 켈베로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 3층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19362",
              "from": [
                "공포의 아그니",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 4층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/32991",
              "from": [
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "용기의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/677",
              "from": [
                "공포의 파이어 에그"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은색의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/569",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어, 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "공포의 뱀파이어",
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 공포의 자이언트 뱃",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "공포의 뱀파이어",
                "공포의 자이언트 뱃"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "정령의 수정 (페어리)",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/5611",
              "from": [
                "공포의 파이어 에그"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "공포의 뱀파이어"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼, 공포의 아그니, 공포의 자이언트 뱃, 공포의 이프리트, 공포의 나이트메어, 공포의 레서 데몬, 공포의 켈베로스, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼",
                "공포의 아그니",
                "공포의 자이언트 뱃",
                "공포의 이프리트",
                "공포의 나이트메어",
                "공포의 레서 데몬",
                "공포의 켈베로스",
                "공포의 파이어 에그"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "화염의 활",
              "kind": "무기",
              "note": "드랍 몬스터: 공포의 아그니, 공포의 파이어 에그",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/454",
              "from": [
                "공포의 아그니",
                "공포의 파이어 에그"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (더블 브레이크)",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 이프리트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31113",
              "from": [
                "공포의 이프리트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흡혈귀의 송곳니",
              "kind": "기타",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147182",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 공포의 뱀파이어, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "공포의 뱀파이어",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_4",
          "zone": "오만의 탑 4층",
          "levelRange": "몬스터 레벨 78~91 (인벤 DB 표기)",
          "entry": "3층에서 '오만의 탑 4층 이동 주문서' 또는 이동 부적으로 진입. 테마=죽음(언데드 위주, 마법사 턴 언데드 유효)",
          "monsters": [
            "감시자 리퍼",
            "죽음의 스파토이",
            "죽음의 좀비",
            "죽음의 좀비 드래곤",
            "죽음의 좀비 로드",
            "죽음의 해골 근위병",
            "죽음의 해골 돌격병",
            "죽음의 해골 저격병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21304",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=192955",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18221"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 부분 확인 - 인벤 4~6층 가이드 기준 60레벨 이상 캐릭터용 사냥터",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 좀비로드",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/199748",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 좀비 로드의 손",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303372",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "강철 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230",
              "from": [
                "죽음의 해골 돌격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "격분의 각성 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161073",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "격분의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/599",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "낡은 민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9551",
              "from": [
                "죽음의 좀비"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "낡은 완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9541",
              "from": [
                "죽음의 해골 돌격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "낡은 지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 스파토이",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9561",
              "from": [
                "죽음의 스파토이"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "도전자의 뼛조각",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147192",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 죽음의 좀비 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "죽음의 좀비 로드",
                "죽음의 좀비 드래곤"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/566",
              "from": [
                "죽음의 좀비"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "백금 판금",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/704",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 4층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33191",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼, 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼",
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "빛나는 방어의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33121",
              "from": [
                "죽음의 좀비"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 수령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33091",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 돌격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 지령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33111",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "빛나는 풍령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33101",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 저격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 화령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 스파토이",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33081",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 스파토이"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼, 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼",
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "신관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 죽음의 스파토이",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/615",
              "from": [
                "죽음의 스파토이"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 완력의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111133",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "암흑 기술서 (다크 언데드)",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/124492",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼, 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼",
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 4층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 스파토이",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65221",
              "from": [
                "죽음의 스파토이"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 4층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/32991",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 5층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33001",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "완력의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/660",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "죽음의 좀비 로드",
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 죽음의 좀비 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "죽음의 좀비 로드",
                "죽음의 좀비 드래곤"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "체력의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 해골 근위병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/607",
              "from": [
                "죽음의 해골 근위병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 죽음의 좀비 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "죽음의 좀비 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "투사의 서판 (피어 : 임팩트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/116262",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "피에 젖은 붕대",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33141",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼, 죽음의 좀비 드래곤, 죽음의 해골 근위병, 죽음의 해골 돌격병, 죽음의 해골 저격병, 죽음의 스파토이, 죽음의 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼",
                "죽음의 좀비 드래곤",
                "죽음의 해골 근위병",
                "죽음의 해골 돌격병",
                "죽음의 해골 저격병",
                "죽음의 스파토이",
                "죽음의 좀비"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 죽음의 좀비 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "죽음의 좀비 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_5",
          "zone": "오만의 탑 5층",
          "levelRange": "몬스터 레벨 76~92 (인벤 DB 표기)",
          "entry": "4층에서 '오만의 탑 5층 이동 주문서' 또는 이동 부적으로 진입. 테마=지옥(손상/비손상·언데드/비언데드 혼재, 무기 손상 몬스터 다수)",
          "monsters": [
            "감시자 리퍼",
            "지옥의 고스트",
            "지옥의 네크로맨서",
            "지옥의 다크 매지션",
            "지옥의 레서 드래곤",
            "지옥의 본 드래곤",
            "지옥의 아이언 골렘",
            "지옥의 쿠거"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21305",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=192955",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18311"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 부분 확인 - 인벤 4~6층 가이드 기준 60레벨 이상",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 쿠거",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/199758",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 쿠거의 꼬리",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303382",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "강철 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 지옥의 레서 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/601",
              "from": [
                "지옥의 레서 드래곤"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "고대 마법서 (에테르 웨폰: 에이스)",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289352",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 지옥의 다크 매지션",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "지옥의 쿠거",
                "지옥의 다크 매지션"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/513",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "민첩의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/661",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "백금 판금",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/704",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 5층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33201",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼, 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼",
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "빛나는 방어의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33121",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 고스트"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 수령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 네크로맨서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33091",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 네크로맨서"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 지령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 레서 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33111",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 레서 드래곤"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "빛나는 풍령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33101",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 화령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33081",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼, 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼",
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "신관의 마력서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 네크로맨서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/612",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 네크로맨서"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "엘름의 축복",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/320",
              "from": [
                "지옥의 고스트"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼, 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼",
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 5층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65231",
              "from": [
                "지옥의 고스트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 5층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33001",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 6층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33011",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "용의 심장",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 레서 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/746",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 레서 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거, 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "지옥의 쿠거",
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 지옥의 다크 매지션",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "지옥의 쿠거",
                "지옥의 다크 매지션"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "쿠거 가죽 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147312",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "쿠거의 발톱",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147202",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "쿠거의 이빨",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/30583",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "포효의 이도류",
              "kind": "무기",
              "note": "드랍 몬스터: 지옥의 쿠거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/498",
              "from": [
                "지옥의 쿠거"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼, 지옥의 다크 매지션, 지옥의 아이언 골렘, 지옥의 레서 드래곤, 지옥의 네크로맨서, 지옥의 본 드래곤, 지옥의 고스트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼",
                "지옥의 다크 매지션",
                "지옥의 아이언 골렘",
                "지옥의 레서 드래곤",
                "지옥의 네크로맨서",
                "지옥의 본 드래곤",
                "지옥의 고스트"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "흑왕도",
              "kind": "무기",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/496",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (쉐도우 블라인드)",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/34801",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (아머 브레이크)",
              "kind": "기타",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31163",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 지옥의 쿠거, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "지옥의 쿠거",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_6",
          "zone": "오만의 탑 6층",
          "levelRange": "몬스터 레벨 80~93 (인벤 DB 표기)",
          "entry": "5층에서 '오만의 탑 6층 이동 주문서' 또는 이동 부적으로 진입. 테마=불사(전 몬스터 언데드 속성). 2022 리뉴얼로 사냥터 2배 이상 확장",
          "monsters": [
            "감시자 리퍼",
            "불사의 구울",
            "불사의 머미 로드",
            "불사의 좀비 네크로맨서",
            "불사의 좀비 마법사",
            "불사의 좀비 병사",
            "불사의 좀비 장군"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21306",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=192955",
            "http://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=18371"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 부분 확인 - 인벤 4~6층 가이드 기준 60레벨 이상. 선공 몬스터 개체 수가 많아 난이도 상당",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 머미로드",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198071",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 머미 로드의 관",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303392",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "나시리스의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149232",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데스 블레이드",
              "kind": "무기",
              "note": "드랍 몬스터: 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/9531",
              "from": [
                "불사의 구울"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 불사의 좀비 네크로맨서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "불사의 머미 로드",
                "불사의 좀비 네크로맨서"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "머미 로드의 각성 왕관",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161083",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "머미 로드의 왕관",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1161",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무관의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/525",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "미라의 두개골 파편",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147212",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 6층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33211",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼, 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼",
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "블러드서커",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114052",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "빛나는 방어의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33121",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 구울"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 수령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33091",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 마법사"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 풍령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33101",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 화령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 병사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33081",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 병사"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼, 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼",
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "수정 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 좀비 병사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/524",
              "from": [
                "불사의 좀비 병사"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/613",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 마법사"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 민첩의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111143",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼, 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼",
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 6층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 좀비 장군",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65241",
              "from": [
                "불사의 좀비 장군"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 6층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33011",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 7층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65181",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "이계의 전투 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114172",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드, 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "불사의 머미 로드",
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 불사의 좀비 네크로맨서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "불사의 머미 로드",
                "불사의 좀비 네크로맨서"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "정령의 수정 (소울 배리어)",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/125633",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "정령의 수정 (어스 그랩)",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/951",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지식의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/662",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불사의 머미 로드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "불사의 머미 로드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼, 불사의 좀비 네크로맨서, 불사의 좀비 장군, 불사의 좀비 마법사, 불사의 좀비 병사, 불사의 구울",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼",
                "불사의 좀비 네크로맨서",
                "불사의 좀비 장군",
                "불사의 좀비 마법사",
                "불사의 좀비 병사",
                "불사의 구울"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "황금 판금",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/705",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불사의 머미 로드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "불사의 머미 로드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_7",
          "zone": "오만의 탑 7층",
          "levelRange": "몬스터 레벨 82~94 (인벤 DB 표기)",
          "entry": "6층에서 '오만의 탑 7층 이동 주문서' 또는 이동 부적으로 진입. 7층 이동 주문서는 아덴 마을 NPC '무브니'가 1~6층 이동 주문서 + 아데나로 제작. 테마=잔혹(냉기)",
          "monsters": [
            "감시자 리퍼",
            "잔혹한 라이칸스로프",
            "잔혹한 샤벨타이거",
            "잔혹한 아시타지오",
            "잔혹한 아이리스",
            "잔혹한 타란툴라",
            "잔혹한 혼 켈베로스"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21307",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=28751",
            "https://www.inven.co.kr/webzine/news/?news=198190&site=lineagem"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 확인 - 68레벨 이상 입장(2018-04 업데이트 당시 이벤트 기간 한정 60레벨로 완화된 바 있음)",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 아이리스",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198081",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 아이리스의 채찍",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303402",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "기술 교본 (데스 스나이핑)",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98234",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본 (브레이크 샷)",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98244",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "달의 장궁",
              "kind": "무기",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/456",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스, 잔혹한 타란툴라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "잔혹한 아이리스",
                "잔혹한 타란툴라"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법서 (디스인티그레이트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/841",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (아이스 스파이크)",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/268",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 7층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65271",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼, 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼",
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼, 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼",
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "아이리스의 각성 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161462",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아이리스의 목걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65251",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아이리스의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147322",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아이리스의 팬던트",
              "kind": "악세",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147222",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼, 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼",
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 7층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 샤벨타이거",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111074",
              "from": [
                "잔혹한 샤벨타이거"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 7층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/65181",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 8층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111163",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "이계의 전투 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114162",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스, 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "잔혹한 아이리스",
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 잔혹한 타란툴라",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "잔혹한 아이리스",
                "잔혹한 타란툴라"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "체력 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/603",
              "from": [
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 잔혹한 아이리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "잔혹한 아이리스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "파워 글로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/386",
              "from": [
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼, 잔혹한 타란툴라, 잔혹한 혼 켈베로스, 잔혹한 샤벨타이거, 잔혹한 아시타지오, 잔혹한 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼",
                "잔혹한 타란툴라",
                "잔혹한 혼 켈베로스",
                "잔혹한 샤벨타이거",
                "잔혹한 아시타지오",
                "잔혹한 라이칸스로프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 잔혹한 아이리스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "잔혹한 아이리스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_8",
          "zone": "오만의 탑 8층",
          "levelRange": "몬스터 레벨 84~95 (인벤 DB 표기)",
          "entry": "7층에서 '오만의 탑 8층 이동 주문서' 또는 이동 부적으로 진입. 2018-07-31 업데이트로 추가. 테마=어둠",
          "monsters": [
            "감시자 리퍼",
            "암흑의 서큐버스 퀸",
            "암흑의 흑기사",
            "어둠의 나이트 발드",
            "어둠의 불타는 궁수",
            "어둠의 불타는 전사",
            "어둠의 헌터 울프"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21308",
            "https://m.gamechosun.co.kr/news/view.php?no=149309",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=40084"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 미확인 (68레벨 이상 던전 입장 기준 적용 추정이나 8층 전용 권장 레벨 수치는 확인 못 함)",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 나이트발드",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198091",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 나이트발드의 견갑",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303412",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "고대 명궁의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/608",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "고대 투사의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/609",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "기술서 (블로우 어택)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/125673",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (카운터 배리어: 마스터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1981",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "나이트 발드의 오른쪽 심안",
              "kind": "악세",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147232",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "나이트발드의 양손검",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/447",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "나이트발드의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147292",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 어둠의 헌터 울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "어둠의 나이트 발드",
                "어둠의 헌터 울프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "반역자의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 헌터 울프, 암흑의 흑기사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/517",
              "from": [
                "어둠의 헌터 울프",
                "암흑의 흑기사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 8층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111183",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "신성한 완력의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111133",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 8층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 불타는 전사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111193",
              "from": [
                "어둠의 불타는 전사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 8층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111163",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 9층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122344",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "어둠의 나이트 발드",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 어둠의 헌터 울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "어둠의 나이트 발드",
                "어둠의 헌터 울프"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 나이트 발드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "어둠의 나이트 발드"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "침묵의 대검",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 불타는 전사, 어둠의 헌터 울프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/121863",
              "from": [
                "어둠의 불타는 전사",
                "어둠의 헌터 울프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "투사의 전투 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114152",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파괴의 이도류",
              "kind": "무기",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/495",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파괴의 크로우",
              "kind": "기타",
              "note": "드랍 몬스터: 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/505",
              "from": [
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼, 암흑의 서큐버스 퀸, 어둠의 불타는 전사, 어둠의 헌터 울프, 암흑의 흑기사, 어둠의 불타는 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼",
                "암흑의 서큐버스 퀸",
                "어둠의 불타는 전사",
                "어둠의 헌터 울프",
                "암흑의 흑기사",
                "어둠의 불타는 궁수"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 나이트 발드, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "어둠의 나이트 발드",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_9",
          "zone": "오만의 탑 9층",
          "levelRange": "몬스터 레벨 87~97 (인벤 DB 표기)",
          "entry": "8층 몬스터가 드랍하는 '오만의 탑 9층 이동 주문서' 또는 이동 부적으로 진입. 2019-01-30 업데이트로 추가. 테마=불멸. 전 몬스터가 언데드 속성이라 마법사 턴 언데드 활용 가능. 손상/비손상 몬스터 없음",
          "monsters": [
            "감시자 리퍼",
            "불멸의 리치",
            "불멸의 본 드래곤",
            "불멸의 해골 근위병",
            "불멸의 해골 기사",
            "불멸의 해골 돌격병",
            "불멸의 해골 저격병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21309",
            "https://m.inven.co.kr/webzine/wznews.php?idx=214398&site=lineagem",
            "https://www.gametoc.co.kr/news/articleView.html?idxno=50652"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 확인 - 68레벨 이상, 주 7시간 이용",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 리치",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198101",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 리치의 서클릿",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303422",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "고대 마법서 (룬 마스터리: 레전드)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/291102",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광전사의 인장 (버닝 하트)",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/335392",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "돌 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/597",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 불멸의 본 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "불멸의 리치",
                "불멸의 본 드래곤"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "리치 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/530",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "리치의 각성 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/161093",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "리치의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122394",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (디스인티그레이트: 에이션트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/131121",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (오라클)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/34811",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (인비지블리티)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/271",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (풀 힐)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/152692",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "민첩의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/605",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 9층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122374",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "불멸의 리치",
                "감시자 리퍼",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19332",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 9,
              "scope": "shared"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "불멸의 리치",
                "감시자 리퍼",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "소멸자의 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114092",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 지식의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/111153",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "불멸의 리치",
                "감시자 리퍼",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "불멸의 리치",
                "감시자 리퍼",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 10층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/130471",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "오만의 탑 9층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 해골 기사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122384",
              "from": [
                "불멸의 해골 기사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 9층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122344",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "완력의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/604",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 돌격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은색의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/569",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "불멸의 리치",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 불멸의 본 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "불멸의 리치",
                "불멸의 본 드래곤"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "지식의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 근위병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/606",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 근위병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지휘관의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/54803",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 불멸의 리치",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "불멸의 리치"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼, 불멸의 본 드래곤, 불멸의 해골 기사, 불멸의 해골 돌격병, 불멸의 해골 근위병, 불멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "불멸의 리치",
                "감시자 리퍼",
                "불멸의 본 드래곤",
                "불멸의 해골 기사",
                "불멸의 해골 돌격병",
                "불멸의 해골 근위병",
                "불멸의 해골 저격병"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "황제의 인장",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147242",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 불멸의 리치, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "불멸의 리치",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        },
        {
          "key": "tower_10",
          "zone": "오만의 탑 10층",
          "levelRange": "몬스터 레벨 88~99 (인벤 DB 표기)",
          "entry": "9층 몬스터가 드랍하는 '오만의 탑 10층 이동 주문서' 또는 '봉인된 오만의 탑 10층 이동 부적'으로 진입. 기억(리콜) 불가 설정이라 재진입이 불가능하고 이동 주문서로만 탈출 가능. 테마=오만. 오만의 탑의 최상층이며, 10층 몬스터가 '신념의 탑 1층 이동 주문서'를 드랍해 후속 사냥터 '신념의 탑'으로 이어진다",
          "monsters": [
            "감시자 리퍼",
            "오만한 레비아탄",
            "오만한 서큐버스 퀸",
            "오만한 아스모데우스",
            "오만한 아시타지오",
            "오만한 우그누스",
            "오만한 플레임 팽"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21310",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=53683",
            "https://lineagem.inven.co.kr/dataninfo/monster/detail.php?monstercode=53673"
          ],
          "note": "층별 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준. 권장 레벨: 부분 확인 - 68레벨부터 입장 가능하나 유저 후기 기준 실질 80레벨 이상 권장(다수 몬스터 동시 접근으로 난이도 급상승) ★10층 보스 논란 정리: 인벤 리니지M 몬스터 DB 직접 판독 결과 10층에는 '오만한 우그누스'(레벨 99, 최고 레벨)와 '오만한 아스모데우스'(레벨 90)가 모두 실재한다. '우그누스는 리니지W 자료이므로 리니지M 아님'이라는 검색 기반 초기 판정은 이 1차 DB 판독으로 뒤집혔다.",
          "drops": [
            {
              "name": "[마법인형 카드 상자] 우그누스",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/199768",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "[성물 카드] 우그누스의 양날검",
              "kind": "무기",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/303432",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스, 오만한 플레임 팽",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "오만한 우그누스",
                "오만한 플레임 팽"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "멸마의 가죽 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 플레임 팽, 오만한 레비아탄",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1167",
              "from": [
                "오만한 플레임 팽",
                "오만한 레비아탄"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 플레임 팽",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1168",
              "from": [
                "오만한 아스모데우스",
                "오만한 플레임 팽"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 비늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 플레임 팽, 오만한 서큐버스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1169",
              "from": [
                "오만한 플레임 팽",
                "오만한 서큐버스 퀸"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 판금 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 플레임 팽, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1166",
              "from": [
                "오만한 플레임 팽",
                "오만한 아시타지오"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "봉인된 오만의 탑 10층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/130501",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "비전서 (체인 라이트닝: 미스틱)",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/222351",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 인장",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/149242",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "섬멸자의 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114012",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "신념의 탑 1층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182411",
              "from": [
                "오만한 아스모데우스",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 지배 부적 조각",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/122994",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "오만의 탑 10층 보물상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 아스모데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/130511",
              "from": [
                "오만한 아스모데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만의 탑 10층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/130471",
              "from": [
                "오만한 아스모데우스",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "우그누스의 깃털",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147252",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "우그누스의 부러진 창",
              "kind": "무기",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114022",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "우그누스의 흉갑",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/147302",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "이계의 전투 면갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114182",
              "from": [
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "이계의 전투 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114192",
              "from": [
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "이계의 전투 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114202",
              "from": [
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "오만한 우그누스",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 오만한 플레임 팽",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "오만한 우그누스",
                "오만한 플레임 팽"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "투사의 목걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/649",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "투사의 서판 (가드 브레이크 : 임팩트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/116272",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "투사의 서판 (드래곤 스턴)",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/116242",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "투사의 서판 (패링)",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/262958",
              "from": [
                "오만한 우그누스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼, 오만한 아스모데우스, 오만한 플레임 팽, 오만한 레비아탄, 오만한 서큐버스 퀸, 오만한 아시타지오",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼",
                "오만한 아스모데우스",
                "오만한 플레임 팽",
                "오만한 레비아탄",
                "오만한 서큐버스 퀸",
                "오만한 아시타지오"
              ],
              "sharedCount": 10,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 오만한 우그누스, 감시자 리퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "오만한 우그누스",
                "감시자 리퍼"
              ],
              "sharedCount": 10,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "faith_tower",
      "label": "신념의 탑",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "오만의 탑 10층 위로 이어지는 별도 사냥터(공식 명칭이 '오만과 신념의 탑'으로 묶여 있어 혼동 주의). 1~4층. 인벤 리니지M 몬스터 DB 직접 판독 기준. 입장 방법·권장 레벨은 이번 조사에서 확인하지 못했다.",
      "zones": [
        {
          "key": "faith_1",
          "zone": "신념의 탑 1층",
          "levelRange": "몬스터 레벨 87~97 (인벤 DB 표기)",
          "entry": "미확인 — 오만의 탑 10층 몬스터가 드랍하는 '신념의 탑 1층 이동 주문서'로 진입하는 것으로 보이나 공식 확인 실패",
          "monsters": [
            "교만의 감시자 나이트",
            "교만의 네르갈",
            "교만의 레버넌트",
            "교만의 왕자 데우스",
            "교만의 제노사이더",
            "교만의 제라키엘",
            "교만의 킬 하운드",
            "교만의 하운드"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21401"
          ],
          "note": "",
          "drops": [
            {
              "name": "[성물 카드] 감시자 나이트의 깃털 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/336838",
              "from": [
                "교만의 감시자 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "거인의 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 교만의 하운드, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/157151",
              "from": [
                "교만의 하운드",
                "교만의 킬 하운드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "기술 교본 (데우스 엑스 마키나)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/214241",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데우스의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182481",
              "from": [
                "교만의 왕자 데우스",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데우스의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/184942",
              "from": [
                "교만의 왕자 데우스",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "둠 블래스터",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 하운드, 교만의 네르갈",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96574",
              "from": [
                "교만의 하운드",
                "교만의 네르갈"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마법서 (어쏘리티)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198478",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (엑스칼리버: 마스터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/263058",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "방어 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230592",
              "from": [
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "봉인된 신념의 탑 1층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182431",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "빛나는 각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/284024",
              "from": [
                "교만의 왕자 데우스",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "교만의 왕자 데우스",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 하운드, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/117544",
              "from": [
                "교만의 하운드",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "성서 (세인트 이뮨: 디바인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/180864",
              "from": [
                "교만의 왕자 데우스",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성서 (유니티)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/251032",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185343",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 소환 막대 (1층)",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182531",
              "from": [
                "교만의 감시자 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 1층 보물상자",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182801",
              "from": [
                "교만의 하운드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 1층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 감시자 나이트, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182411",
              "from": [
                "교만의 감시자 나이트",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 2층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198184",
              "from": [
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "악마의 인장",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182471",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "암흑 기술서 (다크 소울: 어벤져)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/163974",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "암흑 기술서 (다크 핸드)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198428",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "오가닉 슈즈",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 하운드, 교만의 제노사이더, 교만의 제라키엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96634",
              "from": [
                "교만의 하운드",
                "교만의 제노사이더",
                "교만의 제라키엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "교만의 왕자 데우스",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "교만의 왕자 데우스",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 교만의 왕자 데우스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "교만의 왕자 데우스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "통찰의 조준경",
              "kind": "악세",
              "note": "드랍 몬스터: 교만의 하운드, 교만의 레버넌트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96654",
              "from": [
                "교만의 하운드",
                "교만의 레버넌트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트, 교만의 네르갈, 교만의 제노사이더, 교만의 제라키엘, 교만의 레버넌트, 교만의 킬 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트",
                "교만의 네르갈",
                "교만의 제노사이더",
                "교만의 제라키엘",
                "교만의 레버넌트",
                "교만의 킬 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 교만의 왕자 데우스, 교만의 하운드, 교만의 감시자 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "교만의 왕자 데우스",
                "교만의 하운드",
                "교만의 감시자 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "faith_2",
          "zone": "신념의 탑 2층",
          "levelRange": "몬스터 레벨 93~98 (인벤 DB 표기)",
          "entry": "미확인 — 오만의 탑 10층 몬스터가 드랍하는 '신념의 탑 1층 이동 주문서'로 진입하는 것으로 보이나 공식 확인 실패",
          "monsters": [
            "탐욕의 감시자 아크르",
            "탐욕의 그럽",
            "탐욕의 만토디아",
            "탐욕의 엔트키아",
            "탐욕의 여왕 벨리엘",
            "탐욕의 좀비",
            "탐욕의 코아쿡",
            "탐욕의 타믈러스",
            "탐욕의 텐타클"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21402"
          ],
          "note": "",
          "drops": [
            {
              "name": "[성물 카드] 감시자 아크르의 맹독침 꼬리",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/336848",
              "from": [
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3182",
              "from": [
                "탐욕의 엔트키아"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "나이트 베인",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 만토디아, 탐욕의 텐타클",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185844",
              "from": [
                "탐욕의 만토디아",
                "탐욕의 텐타클"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마법서 (턴 언데드 : 에이션트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/201163",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "방어 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230592",
              "from": [
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "벨리엘의 검은빛 날개",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198414",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "벨리엘의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198434",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "벨리엘의 보랏빛 날개",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198424",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "봉인된 신념의 탑 2층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198134",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "빛나는 각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/284024",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "사신의 서 (고스트 이베이젼: 레퀴엠)",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/187964",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/117544",
              "from": [
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185343",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 소환 막대 (2층)",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198114",
              "from": [
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 2층 보물상자",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198174",
              "from": [
                "탐욕의 타믈러스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 2층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 감시자 아크르, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 좀비, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198184",
              "from": [
                "탐욕의 감시자 아크르",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 좀비",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신념의 탑 3층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/232394",
              "from": [
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "악마의 인장",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 좀비, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182471",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 좀비",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "암흑 기술서 (다크 미러: 어벤져)",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198448",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "파괴의 크로우",
              "kind": "기타",
              "note": "드랍 몬스터: 탐욕의 코아쿡",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/505",
              "from": [
                "탐욕의 코아쿡"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스, 탐욕의 만토디아, 탐욕의 그럽, 탐욕의 코아쿡, 탐욕의 텐타클, 탐욕의 엔트키아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스",
                "탐욕의 만토디아",
                "탐욕의 그럽",
                "탐욕의 코아쿡",
                "탐욕의 텐타클",
                "탐욕의 엔트키아"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "환영의 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕의 그럽",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114082",
              "from": [
                "탐욕의 그럽"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (쉐도우 대시)",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/198498",
              "from": [
                "탐욕의 여왕 벨리엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕의 여왕 벨리엘, 탐욕의 감시자 아크르, 탐욕의 타믈러스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "탐욕의 여왕 벨리엘",
                "탐욕의 감시자 아크르",
                "탐욕의 타믈러스"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "faith_3",
          "zone": "신념의 탑 3층",
          "levelRange": "몬스터 레벨 94~99 (인벤 DB 표기)",
          "entry": "미확인 — 오만의 탑 10층 몬스터가 드랍하는 '신념의 탑 1층 이동 주문서'로 진입하는 것으로 보이나 공식 확인 실패",
          "monsters": [
            "질투의 감시자 알비온",
            "질투의 공주 이자벨",
            "질투의 로가리우스",
            "질투의 스켈레톤 윙",
            "질투의 아타바크",
            "질투의 좀비 나이트",
            "질투의 좀비 메이드"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21403"
          ],
          "note": "",
          "drops": [
            {
              "name": "[성물 카드] 감시자 알비온의 쌍도",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/336858",
              "from": [
                "질투의 감시자 알비온"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "광전사의 인장 (가이아)",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/158121",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광전사의 인장 (샤우팅)",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230382",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광전사의 인장 (타이탄: 라이징)",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/158091",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광전사의 인장 (타이탄: 매직)",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/158051",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광전사의 인장 (타이탄: 블릿)",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/158041",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마법서 (다크스타)",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/241031",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "방어 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230592",
              "from": [
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "봉인된 신념의 탑 3층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/232444",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "질투의 공주 이자벨",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "붉은 기사의 대검",
              "kind": "무기",
              "note": "드랍 몬스터: 질투의 로가리우스, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/446",
              "from": [
                "질투의 로가리우스",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "빛나는 각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/284024",
              "from": [
                "질투의 공주 이자벨",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "사이하의 활",
              "kind": "무기",
              "note": "드랍 몬스터: 질투의 스켈레톤 윙",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/853",
              "from": [
                "질투의 스켈레톤 윙"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "질투의 공주 이자벨",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/117544",
              "from": [
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185343",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 탑 3층 보물상자",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/232384",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 3층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 감시자 알비온, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/232394",
              "from": [
                "질투의 감시자 알비온",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신념의 탑 4층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283053",
              "from": [
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "악마의 인장",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182471",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "이자벨의 귀걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/226972",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "이자벨의 팔찌",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/232364",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "질투의 공주 이자벨",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 질투의 공주 이자벨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "질투의 공주 이자벨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "트리스탄의 라이플",
              "kind": "무기",
              "note": "드랍 몬스터: 질투의 좀비 메이드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96554",
              "from": [
                "질투의 좀비 메이드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파멸자의 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 질투의 아타바크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114062",
              "from": [
                "질투의 아타바크"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온, 질투의 로가리우스, 질투의 좀비 메이드, 질투의 스켈레톤 윙, 질투의 아타바크, 질투의 좀비 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온",
                "질투의 로가리우스",
                "질투의 좀비 메이드",
                "질투의 스켈레톤 윙",
                "질투의 아타바크",
                "질투의 좀비 나이트"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 질투의 공주 이자벨, 질투의 감시자 알비온",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "질투의 공주 이자벨",
                "질투의 감시자 알비온"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "faith_4",
          "zone": "신념의 탑 4층",
          "levelRange": "몬스터 레벨 94~99 (인벤 DB 표기)",
          "entry": "미확인 — 오만의 탑 10층 몬스터가 드랍하는 '신념의 탑 1층 이동 주문서'로 진입하는 것으로 보이나 공식 확인 실패",
          "monsters": [
            "분노의 감시자 데스 레이스",
            "분노의 데스 도그",
            "분노의 데스 라이더",
            "분노의 데스 리퍼",
            "분노의 데스 서번트",
            "분노의 데스 워리어",
            "분노의 데스 키퍼",
            "분노의 데스 헌터",
            "분노의 주시자 라즈엘"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21404"
          ],
          "note": "",
          "drops": [
            {
              "name": "[성물 카드] 감시자 데스 레이스의 낫",
              "kind": "무기",
              "note": "드랍 몬스터: 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/336868",
              "from": [
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "기사단의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 분노의 데스 도그, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/915",
              "from": [
                "분노의 데스 도그",
                "분노의 데스 헌터"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "달의 장궁",
              "kind": "무기",
              "note": "드랍 몬스터: 분노의 데스 리퍼, 분노의 데스 키퍼",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/456",
              "from": [
                "분노의 데스 리퍼",
                "분노의 데스 키퍼"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "라즈엘의 민첩 목걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283654",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "라즈엘의 완력 목걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283644",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "방어 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230592",
              "from": [
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "봉인된 신념의 탑 4층 이동 부적",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283174",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 축복 부여 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19342",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "블러드 사이드",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 데스 서번트, 분노의 데스 워리어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185824",
              "from": [
                "분노의 데스 서번트",
                "분노의 데스 워리어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "빛나는 각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/284024",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "빛나는 방어의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 분노의 데스 라이더",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/33121",
              "from": [
                "분노의 데스 라이더"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 서 (그림 리퍼)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/278753",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 서 (데스 파인더)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/186854",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사신의 서 (제노사이드: 레퀴엠)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/278773",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/326313",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/117544",
              "from": [
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/185343",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "신념의 탑 4층 보물상자",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283224",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신념의 탑 4층 이동 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 감시자 데스 레이스, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/283053",
              "from": [
                "분노의 감시자 데스 레이스",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "악마의 인장",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/182471",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "오만과 신념의 탑 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/19302",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "일반 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/323843",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "장인의 무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/134862",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "최상급 지배석 상자 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/327293",
              "from": [
                "분노의 주시자 라즈엘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "축복의 가루",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3732",
              "from": [
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스, 분노의 데스 도그, 분노의 데스 라이더, 분노의 데스 리퍼, 분노의 데스 서번트, 분노의 데스 워리어, 분노의 데스 키퍼, 분노의 데스 헌터",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스",
                "분노의 데스 도그",
                "분노의 데스 라이더",
                "분노의 데스 리퍼",
                "분노의 데스 서번트",
                "분노의 데스 워리어",
                "분노의 데스 키퍼",
                "분노의 데스 헌터"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 분노의 주시자 라즈엘, 분노의 감시자 데스 레이스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "분노의 주시자 라즈엘",
                "분노의 감시자 데스 레이스"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "giran_prison",
      "label": "기란 감옥",
      "zoneLabel": "층",
      "confidence": "부분",
      "note": "기란 마을 중앙 텔레포트 NPC '멀린'을 통해 입장. 입장비 5,000 아데나. 1일 5시간 시간제한(초기화 새벽 5시). 죄수 계열은 인간형이나 일정 피해를 받으면 '파우스트의 악령'(언데드)으로 변신하므로 오리하루콘/은/미스릴 재질 무기·화살이 유효하다. 인벤은 이 던전을 '45~48 퀘스트 사냥터'로 분류. 층별 권장 레벨은 어떤 출처에도 명시가 없어 전부 미확인. ※'파멸의 기란감옥'(Lv80~87)은 완전히 다른 사냥터이므로 데이터를 섞지 않았다. ※'기란 감옥 (층 미확인 몬스터)'는 실제 층이 아니라 층 특정에 실패한 몬스터를 모아둔 버킷이라 confidence 미확인이며 고유/공통 계산의 유효 층에서 제외했다. ※레벨 80~87 '파멸의 기란감옥'은 다른 사냥터라 별도 그룹이다.",
      "zones": [
        {
          "key": "giran_1",
          "zone": "기란 감옥 1층",
          "levelRange": "미확인 (인벤 분류상 45~48 퀘스트 사냥터)",
          "entry": "기란 마을 중앙 텔레포트 NPC '멀린' → 입장비 5,000 아데나",
          "monsters": [
            "악랄한 죄수",
            "포악한 죄수",
            "파우스트의 악령(죄수 변신체)"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
            "https://lineagem.inven.co.kr/dataninfo/guide/",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596c4246d54e6400015000ee",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d"
          ],
          "note": "층별 몬스터 구성은 인벤 퀘스트 순서로 확인. 몬스터별 드랍은 NC 커뮤니티 드랍정리글로 확인. 다만 '이 몬스터가 1층에 있다 + 이 몬스터가 이걸 드랍한다'의 결합은 단일 출처에 명시된 것이 아니라 교차 결합이라 '부분'. / 아인하사드의 축복 700% 기준 시간당 18,000~19,000. 몬스터 1마리당 평균 약 1,000 아데나.",
          "drops": [
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "악랄한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "악랄한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "장검",
              "kind": "무기",
              "note": "악랄한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "악랄한 죄수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사슬 갑옷",
              "kind": "방어구",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "부츠",
              "kind": "방어구",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "악랄한 죄수, 포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "악랄한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "악마의 피",
              "kind": "재료",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "엘븐 와퍼",
              "kind": "기타",
              "note": "악랄한 죄수, 포악한 죄수 (잡템)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "악랄한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "강화 초록 물약",
              "kind": "소모품",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "용기의 물약",
              "kind": "소모품",
              "note": "포악한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "giran_2",
          "zone": "기란 감옥 2층",
          "levelRange": "미확인 (인벤 분류상 45~48 퀘스트 사냥터)",
          "entry": "1층에서 하강",
          "monsters": [
            "굶주린 죄수(2층)",
            "악독한 죄수(원거리/활)",
            "두목 클라인(보스, 파우스트로 변신)",
            "파우스트의 악령(죄수 변신체)"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596c4246d54e6400015000ee",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5cce4723d54e640001862cc2"
          ],
          "note": "NC 공식 커뮤니티 기란감옥 글은 보스 '두목 클라인'을 2층으로 명시하나 4층에도 표기가 있어 리젠 층이 불분명(층 배정 '부분'). 또 인벤 퀘스트 순서는 굶주린 죄수를 2층으로, NC 글은 3층으로 표기해 상충하는데, 드랍정리글이 '굶주린 죄수(2층)'과 '굶주린 죄수(3층)'을 별개로 나눠 다른 드랍을 기재하므로 양쪽 층에 모두 존재하는 것으로 해석했다. / 2~3층 최대 약 28,000. 1층보다 아프다.",
          "drops": [
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "굶주린 죄수(2층) — 드랍정리글이 굶주린 죄수를 2층/3층으로 나눠 표기하며 드랍이 다름",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(2층)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "비늘 갑옷",
              "kind": "방어구",
              "note": "굶주린 죄수(2층), 악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(2층)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "굶주린 죄수(2층), 악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(2층)"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "악마의 피",
              "kind": "재료",
              "note": "악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "엘븐 와퍼",
              "kind": "기타",
              "note": "악독한 죄수 (잡템)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "강화 초록 물약",
              "kind": "소모품",
              "note": "악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "용기의 물약",
              "kind": "소모품",
              "note": "악독한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "빛나는 고대 목걸이",
              "kind": "악세",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "띠 갑옷",
              "kind": "방어구",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마법서(어드밴스 스피릿)",
              "kind": "소모품",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "보스 두목 클라인",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "giran_3",
          "zone": "기란 감옥 3층",
          "levelRange": "미확인 (인벤 분류상 45~48 퀘스트 사냥터)",
          "entry": "2층에서 하강",
          "monsters": [
            "굶주린 죄수(3층)",
            "탐욕스런 간수(창)",
            "탐욕스런 간수(활, 원거리)"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596c4246d54e6400015000ee",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d"
          ],
          "note": "층별 몬스터 구성은 NC 공식 커뮤니티 글 + 인벤 퀘스트 순서로 확인(단 굶주린 죄수 층 배정은 출처 간 상충, 상단 2층 note 참조). 몬스터→드랍 결합은 교차 결합이라 '부분'. / 2~3층 최대 약 28,000. 퀘스트: 탐욕스런 간수(창)·탐욕스런 간수(활) 15마리 처치.",
          "drops": [
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "굶주린 죄수(3층)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(3층)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "비늘 갑옷",
              "kind": "방어구",
              "note": "굶주린 죄수(3층)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(3층)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법 망토",
              "kind": "방어구",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "판금 갑옷",
              "kind": "방어구",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "장갑",
              "kind": "방어구",
              "note": "탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "굶주린 죄수(3층), 탐욕스런 간수(창), 탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "굶주린 죄수(3층)",
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "벡드 코빈",
              "kind": "기타",
              "note": "탐욕스런 간수(창) (잡템/음식)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "초록 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "용기의 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "giran_4",
          "zone": "기란 감옥 4층",
          "levelRange": "미확인 (인벤 분류상 45~48 퀘스트 사냥터)",
          "entry": "3층에서 하강",
          "monsters": [
            "탐욕스런 간수(창)",
            "탐욕스런 간수(활)",
            "탐욕스런 간수(검, 선공)",
            "탐욕스런 간수(지팡이, 선공)"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596c4246d54e6400015000ee",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d"
          ],
          "note": "층별 몬스터 구성은 NC 공식 커뮤니티 글로 확인. 몬스터→드랍 결합은 교차 결합이라 '부분'. / 퀘스트: '영주의 망토' 15개 입수. 탐욕스런 간수(검)·(지팡이)는 선공 몬스터라 주의 필요.",
          "drops": [
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "탐욕스런 간수(검)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "탐욕스런 간수(검)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "대검",
              "kind": "무기",
              "note": "탐욕스런 간수(검)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "탐욕스런 간수(지팡이)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(활)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마법 방어 투구",
              "kind": "방어구",
              "note": "탐욕스런 간수(검)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "탐욕스런 간수(검)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법 망토",
              "kind": "방어구",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "판금 갑옷",
              "kind": "방어구",
              "note": "탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "장갑",
              "kind": "방어구",
              "note": "탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(활)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "부츠",
              "kind": "방어구",
              "note": "탐욕스런 간수(지팡이)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영주의 망토",
              "kind": "기타",
              "note": "4층 퀘스트 입수품(15개 필요) — 4층 명시 확인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180228",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "탐욕스런 간수 4종 전부",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마법서(어드밴스 스피릿)",
              "kind": "소모품",
              "note": "탐욕스런 간수(지팡이)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "벡드 코빈",
              "kind": "기타",
              "note": "탐욕스런 간수(창) (잡템/음식)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "강화 초록 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(지팡이)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마나 회복 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(지팡이)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "용기의 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(검), 탐욕스런 간수(활)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(활)"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "초록 물약",
              "kind": "소모품",
              "note": "탐욕스런 간수(검), 탐욕스런 간수(창)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "탐욕스런 간수(창)"
              ],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "giran_5",
          "zone": "기란 감옥 (층 미확인 몬스터)",
          "levelRange": "미확인",
          "entry": "기란 마을 텔레포트 NPC '멀린'",
          "monsters": [
            "잔인한 죄수"
          ],
          "confidence": "미확인",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d"
          ],
          "note": "'잔인한 죄수'는 드랍정리글에 기란 감옥 몬스터로 기재돼 있으나 출현 층이 어떤 출처에도 없다. 층을 추측하지 않고 별도 구역으로 분리했다.",
          "drops": [
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "잔인한 죄수 — 출현 층을 어떤 출처에서도 특정하지 못함",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "장검",
              "kind": "무기",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 1,
              "scope": "shared"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 1,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "악마의 피",
              "kind": "재료",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "강화 초록 물약",
              "kind": "소모품",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "용기의 물약",
              "kind": "소모품",
              "note": "잔인한 죄수",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "잔인한 죄수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        }
      ]
    },
    {
      "key": "ant_cave",
      "label": "개미굴",
      "zoneLabel": "층",
      "confidence": "부분",
      "note": "1~4층 구조. '보석' 파밍 대표 사냥터. 층별 몬스터·드랍은 인벤 리니지M 몬스터 DB를 직접 판독해 1·2·4층이 확정됐다(3층 몬스터는 DB에 층 표기가 없어 '층 미확인' 구역으로 분리). '개미굴 입구'만 출처 계열이 달라(NC 커뮤니티 드랍정리글) 표기 차이로 고유/공통 판정이 어긋날 수 있다. ※'층 미확인' 구역은 고유/공통 계산의 유효 층이 아니라, 그 안의 드랍은 '이 층에서만'으로 올리지 않고 보수적으로 처리한다. 그중 유효 층(1·2·4층) 등장이 0회인 드랍은 공통으로 묶지 않고 '층 미확인'으로 따로 표기한다. ※'혼돈의 개미굴'은 별개 사냥터라 다른 그룹이다.",
      "zones": [
        {
          "key": "ant_1",
          "zone": "개미굴 1층",
          "levelRange": "몬스터 레벨 30~37 (인벤 DB 표기)",
          "entry": "개미굴 입구 → 순간 이동 주문서로 2층 입구를 찾아 하강. 인벤 기준 '4층까지 가기가 어렵다'가 유일한 단점.",
          "monsters": [
            "거대 개미",
            "거대 병정 개미",
            "거대 흰 개미",
            "흰 개미 무리"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10601"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 흰 개미, 흰 개미 무리, 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "거대 흰 개미",
                "흰 개미 무리",
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "지령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 거대 흰 개미, 흰 개미 무리, 거대 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/652",
              "from": [
                "거대 흰 개미",
                "흰 개미 무리",
                "거대 병정 개미"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 흰 개미, 흰 개미 무리, 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "거대 흰 개미",
                "흰 개미 무리",
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "ant_2",
          "zone": "개미굴 2층",
          "levelRange": "몬스터 레벨 30~37 (인벤 DB 표기)",
          "entry": "개미굴 입구 → 순간 이동 주문서로 2층 입구를 찾아 하강. 인벤 기준 '4층까지 가기가 어렵다'가 유일한 단점.",
          "monsters": [
            "거대 개미",
            "거대 병정 개미",
            "거대 불 개미",
            "거대 흰 개미",
            "흰 개미 무리"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10601"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 흰 개미, 거대 불 개미, 흰 개미 무리, 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "거대 흰 개미",
                "거대 불 개미",
                "흰 개미 무리",
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "지령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 거대 흰 개미, 거대 불 개미, 흰 개미 무리, 거대 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/652",
              "from": [
                "거대 흰 개미",
                "거대 불 개미",
                "흰 개미 무리",
                "거대 병정 개미"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 흰 개미, 거대 불 개미, 흰 개미 무리, 거대 병정 개미, 거대 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "거대 흰 개미",
                "거대 불 개미",
                "흰 개미 무리",
                "거대 병정 개미",
                "거대 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "ant_4",
          "zone": "개미굴 4층",
          "levelRange": "몬스터 레벨 38~84 (인벤 DB 표기)",
          "entry": "개미굴 입구 → 순간 이동 주문서로 2층 입구를 찾아 하강. 인벤 기준 '4층까지 가기가 어렵다'가 유일한 단점.",
          "monsters": [
            "거대 강화 개미",
            "거대 돌격 개미",
            "거대 산성 개미",
            "버려진 흑마법 실험체",
            "산성 개미 무리"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10601"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "미늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 거대 산성 개미, 거대 돌격 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2762",
              "from": [
                "거대 산성 개미",
                "거대 돌격 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "거대 산성 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "양손검",
              "kind": "무기",
              "note": "드랍 몬스터: 거대 산성 개미, 산성 개미 무리, 거대 돌격 개미, 거대 강화 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/318",
              "from": [
                "거대 산성 개미",
                "산성 개미 무리",
                "거대 돌격 개미",
                "거대 강화 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "청동 판금 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 산성 개미 무리, 거대 강화 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6351",
              "from": [
                "산성 개미 무리",
                "거대 강화 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 거대 산성 개미, 산성 개미 무리, 거대 돌격 개미, 거대 강화 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "버려진 흑마법 실험체",
                "거대 산성 개미",
                "산성 개미 무리",
                "거대 돌격 개미",
                "거대 강화 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "ant_unknown",
          "zone": "개미굴 (층 미확인 몬스터)",
          "levelRange": "몬스터 레벨 45 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "거대 수호 개미"
          ],
          "confidence": "미확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10601"
          ],
          "note": "인벤 DB에 출현 층 표기가 없는 몬스터. 실제 층이 아니라 미확인 버킷이므로 고유/공통 계산에서 제외된다.",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "기술서 (프라이드)",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/142213",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "unknown"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "unknown"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "unknown"
            },
            {
              "name": "지령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/652",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "ant_entrance",
          "zone": "개미굴 입구",
          "levelRange": "미확인",
          "entry": "필드 개미굴 입구",
          "monsters": [
            "거대 수호 개미"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5957956dd389e9000124a32a"
          ],
          "note": "[출처 계열 다름] 이 구역만 NC 커뮤니티 드랍정리글 기준이라, 인벤 DB 기준 층들과 아이템 표기가 달라 고유/공통 판정이 어긋날 수 있다. '거대 수호 개미'가 개미굴 입구 몬스터라는 것은 NC 커뮤니티 별도 글 제목/검색 스니펫 수준의 근거이며, 드랍정리글 자체에는 층 표기가 없다.",
          "drops": [
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지령의 반지",
              "kind": "악세",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "거대 수호 개미",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5bfc1a6bd389e9000142543d",
              "from": [
                "거대 수호 개미"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "chaos_ant",
      "label": "혼돈의 개미굴",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "개미굴(레벨 30~45대)과 이름만 비슷한 별개의 상위 사냥터. 1~4층 + 여왕개미 산란장. 인벤 리니지M 몬스터 DB 직접 판독 기준. 입장 방법·권장 레벨은 미확인.",
      "zones": [
        {
          "key": "chaosant_1",
          "zone": "혼돈의 개미굴 1층",
          "levelRange": "몬스터 레벨 80~95 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "거대 돌격 개미",
            "거대 불 개미",
            "거대 산성 개미",
            "오염된 개미알",
            "혼돈의 거대 수호 개미"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21501"
          ],
          "note": "",
          "drops": [
            {
              "name": "[마법인형 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259483",
              "from": [
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "마법사 모자",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/913",
              "from": [
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293523",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대형 도끼 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293503",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 미늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 사각 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293533",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 양손검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293493",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 청동 판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "산란장 통행증",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293453",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289162",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌 파편",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292292",
              "from": [
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "에메랄드",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292312",
              "from": [
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "혼돈의 개미굴 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 돌격 개미, 거대 불 개미, 거대 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293463",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 마법인형 카드 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 돌격 개미, 거대 불 개미, 거대 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259513",
              "from": [
                "거대 돌격 개미",
                "거대 불 개미",
                "거대 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "chaosant_2",
          "zone": "혼돈의 개미굴 2층",
          "levelRange": "몬스터 레벨 80~95 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "거대 호박 개미",
            "오염된 개미알",
            "큰 머리 개미",
            "호박 병정 개미",
            "혼돈의 거대 수호 개미"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21502"
          ],
          "note": "",
          "drops": [
            {
              "name": "[마법인형 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "[변신 카드 상자](영웅)",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259493",
              "from": [
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "루비",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292322",
              "from": [
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법사 모자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/913",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마법사 옷",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/928",
              "from": [
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "혼돈의 거대 수호 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293523",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대형 도끼 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293503",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 미늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 사각 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293533",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 양손검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293493",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 청동 판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "산란장 통행증",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293453",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289162",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌 파편",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 호박 개미, 큰 머리 개미, 호박 병정 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292292",
              "from": [
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "에메랄드",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292312",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 호박 개미, 큰 머리 개미, 호박 병정 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 호박 개미, 큰 머리 개미, 호박 병정 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "혼돈의 개미굴 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293463",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 마법인형 카드 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 변신 카드 상자",
              "kind": "소모품",
              "note": "드랍 몬스터: 거대 호박 개미, 큰 머리 개미, 호박 병정 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259503",
              "from": [
                "거대 호박 개미",
                "큰 머리 개미",
                "호박 병정 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "chaosant_3",
          "zone": "혼돈의 개미굴 3층",
          "levelRange": "몬스터 레벨 80~95 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "거대 붉은 개미",
            "오염된 개미알",
            "호박 개미 무리",
            "호박 산성 개미",
            "혼돈의 거대 수호 개미"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21503"
          ],
          "note": "",
          "drops": [
            {
              "name": "[마법인형 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "[성물 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259473",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "다이아몬드",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292302",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "마법사 모자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/913",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "혼돈의 거대 수호 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293523",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대형 도끼 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293503",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 미늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 사각 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293533",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 양손검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293493",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 청동 판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "사파이어",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292332",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "산란장 통행증",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293453",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289162",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌 파편",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292292",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "성물 제작 코인",
              "kind": "재료",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/246058",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "에메랄드",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292312",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "혼돈의 개미굴 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293463",
              "from": [
                "혼돈의 거대 수호 개미",
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 마법인형 카드 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 성물 카드 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 거대 붉은 개미, 호박 개미 무리, 호박 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259103",
              "from": [
                "거대 붉은 개미",
                "호박 개미 무리",
                "호박 산성 개미"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "chaosant_4",
          "zone": "혼돈의 개미굴 4층",
          "levelRange": "몬스터 레벨 80~95 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "붉은 개미 무리",
            "붉은 병정 개미",
            "붉은 산성 개미",
            "오염된 개미알",
            "혼돈의 거대 수호 개미"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21504"
          ],
          "note": "",
          "drops": [
            {
              "name": "[마법인형 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259483",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "[변신 카드 상자](영웅)",
              "kind": "소모품",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259493",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "[성물 카드 상자](영웅)",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259473",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "다이아몬드",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292302",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "루비",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292322",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법사 모자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/913",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "혼돈의 거대 수호 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293523",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대형 도끼 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293503",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 미늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293483",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 사각 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293533",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 양손검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293493",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 청동 판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "사파이어",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292332",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "산란장 통행증",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293453",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289162",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌 파편",
              "kind": "재료",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292292",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "에메랄드",
              "kind": "기타",
              "note": "드랍 몬스터: 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292312",
              "from": [
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미, 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미",
                "오염된 개미알"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "혼돈의 개미굴 시간 충전석",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미, 붉은 개미 무리, 붉은 병정 개미, 붉은 산성 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293463",
              "from": [
                "혼돈의 거대 수호 개미",
                "붉은 개미 무리",
                "붉은 병정 개미",
                "붉은 산성 개미"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 마법인형 카드 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 오염된 개미알",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/259513",
              "from": [
                "오염된 개미알"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 거대 수호 개미",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "혼돈의 거대 수호 개미"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "chaosant_queen",
          "zone": "혼돈의 개미굴 — 여왕개미 산란장",
          "levelRange": "몬스터 레벨 98 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "혼돈의 에르자베"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=21505"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "거대 여왕 개미의 금빛 날개",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/571",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "거대 여왕 개미의 은빛 날개",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/568",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "고대 마법서 (트리니티: 에이스)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/287232",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "금빛 훈장",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150303",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "마법인형 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3252",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 제작 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3242",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293523",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 대형 도끼 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293503",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 미늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293483",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 사각 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293533",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 양손검 (각인)",
              "kind": "무기",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293493",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "부식된 청동 판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293513",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "산란장 통행증",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/293453",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "생명의 돌",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/289162",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "세계수의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/292542",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "에르자베의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/133793",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "에르자베의 수정구",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/133803",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 혼돈의 에르자베",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "혼돈의 에르자베"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "ivory_tower",
      "label": "상아탑",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "총 8층. 1~3층은 몬스터가 없는 마을(정비 구역)이라 드랍이 없고 고유/공통 계산의 유효 층에서 제외된다. 사냥터는 4~8층. 4~8층 몬스터·드랍은 인벤 리니지M 몬스터 DB 직접 판독 기준이며, 이 판독으로 '데몬'(8층)·'감시자 데몬'(7층)·'볼 라이트닝'(4층) 등 기존에 층 미확인이던 몬스터의 층이 확정됐다. ※9·10층은 존재하지 않는다. ※'헤르문쿠스' 장비는 리니지2M 자료라 배제했다.",
      "zones": [
        {
          "key": "ivory_town",
          "zone": "상아탑 1~3층 (마을)",
          "levelRange": "해당 없음",
          "entry": "오렌 마을 북쪽 상아탑 입구",
          "monsters": [],
          "confidence": "확인",
          "sources": [
            "https://www.gamechosun.co.kr/webzine/article/view.php?no=143551"
          ],
          "note": "몬스터가 없으므로 드랍도 없다. / 사냥터 아님. 1층=잡화점, 2층=마법 전수자 NPC, 3층=던전 텔레포터 아도니스 + 마법 수련실.",
          "drops": []
        },
        {
          "key": "ivory_4",
          "zone": "상아탑 4층",
          "levelRange": "몬스터 레벨 71 (인벤 DB 표기)",
          "entry": "오렌 마을 북쪽 '18.상아탑 입구'. 3층 중앙의 던전 텔레포터 '아도니스'를 통해 4층 진입(5,000 아데나). 시간제한 던전.",
          "monsters": [
            "댄싱 소드",
            "리빙아머",
            "볼 라이트닝",
            "스톤 골렘",
            "젤라틴 큐브",
            "페이퍼 맨"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10604"
          ],
          "note": "",
          "drops": [
            {
              "name": "마물의 기운",
              "kind": "재료",
              "note": "드랍 몬스터: 댄싱 소드, 리빙아머, 볼 라이트닝, 스톤 골렘, 젤라틴 큐브, 페이퍼 맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/744",
              "from": [
                "댄싱 소드",
                "리빙아머",
                "볼 라이트닝",
                "스톤 골렘",
                "젤라틴 큐브",
                "페이퍼 맨"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "악마의 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 댄싱 소드, 리빙아머, 볼 라이트닝, 스톤 골렘, 젤라틴 큐브, 페이퍼 맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44902",
              "from": [
                "댄싱 소드",
                "리빙아머",
                "볼 라이트닝",
                "스톤 골렘",
                "젤라틴 큐브",
                "페이퍼 맨"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "ivory_5",
          "zone": "상아탑 5층",
          "levelRange": "몬스터 레벨 63~73 (인벤 DB 표기)",
          "entry": "오렌 마을 북쪽 '18.상아탑 입구'. 3층 중앙의 던전 텔레포터 '아도니스'를 통해 4층 진입(5,000 아데나). 시간제한 던전.",
          "monsters": [
            "발록의 추종자",
            "상아탑 디앙가스",
            "실루엣",
            "파즈"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10604"
          ],
          "note": "",
          "drops": [
            {
              "name": "마물의 기운",
              "kind": "재료",
              "note": "드랍 몬스터: 발록의 추종자, 실루엣, 파즈, 상아탑 디앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/744",
              "from": [
                "발록의 추종자",
                "실루엣",
                "파즈",
                "상아탑 디앙가스"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "악마의 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 발록의 추종자, 실루엣, 파즈, 상아탑 디앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44902",
              "from": [
                "발록의 추종자",
                "실루엣",
                "파즈",
                "상아탑 디앙가스"
              ],
              "sharedCount": 5,
              "scope": "all"
            }
          ]
        },
        {
          "key": "ivory_6",
          "zone": "상아탑 6층",
          "levelRange": "몬스터 레벨 71~72 (인벤 DB 표기)",
          "entry": "오렌 마을 북쪽 '18.상아탑 입구'. 3층 중앙의 던전 텔레포터 '아도니스'를 통해 4층 진입(5,000 아데나). 시간제한 던전.",
          "monsters": [
            "너클레이",
            "땅의 시버인",
            "바람의 시버인",
            "불의 시버인",
            "상아탑 유령"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10604"
          ],
          "note": "",
          "drops": [
            {
              "name": "마물의 기운",
              "kind": "재료",
              "note": "드랍 몬스터: 땅의 시버인, 바람의 시버인, 불의 시버인, 너클레이, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/744",
              "from": [
                "땅의 시버인",
                "바람의 시버인",
                "불의 시버인",
                "너클레이",
                "상아탑 유령"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 땅의 시버인, 바람의 시버인, 불의 시버인, 너클레이, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "땅의 시버인",
                "바람의 시버인",
                "불의 시버인",
                "너클레이",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "악마의 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 땅의 시버인, 바람의 시버인, 불의 시버인, 너클레이, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44902",
              "from": [
                "땅의 시버인",
                "바람의 시버인",
                "불의 시버인",
                "너클레이",
                "상아탑 유령"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 땅의 시버인, 바람의 시버인, 불의 시버인, 너클레이, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "땅의 시버인",
                "바람의 시버인",
                "불의 시버인",
                "너클레이",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 땅의 시버인, 바람의 시버인, 불의 시버인, 너클레이, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "땅의 시버인",
                "바람의 시버인",
                "불의 시버인",
                "너클레이",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "ivory_7",
          "zone": "상아탑 7층",
          "levelRange": "몬스터 레벨 71~75 (인벤 DB 표기)",
          "entry": "오렌 마을 북쪽 '18.상아탑 입구'. 3층 중앙의 던전 텔레포터 '아도니스'를 통해 4층 진입(5,000 아데나). 시간제한 던전.",
          "monsters": [
            "감시자 데몬",
            "베레스의 분신",
            "상아탑 가고일",
            "상아탑 유령",
            "상아탑 파사즈"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10604"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/528",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/578",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 숨결",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44912",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/594",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/485",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/840",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마물의 기운",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬, 베레스의 분신, 상아탑 가고일, 상아탑 파사즈, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/744",
              "from": [
                "감시자 데몬",
                "베레스의 분신",
                "상아탑 가고일",
                "상아탑 파사즈",
                "상아탑 유령"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "마법서 (미티어 스트라이크)",
              "kind": "소모품",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/262",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 베레스의 분신, 상아탑 가고일, 상아탑 파사즈, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "베레스의 분신",
                "상아탑 가고일",
                "상아탑 파사즈",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "바람의 베레모",
              "kind": "방어구",
              "note": "드랍 몬스터: 베레스의 분신",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96594",
              "from": [
                "베레스의 분신"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "악마의 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬, 베레스의 분신, 상아탑 가고일, 상아탑 파사즈, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44902",
              "from": [
                "감시자 데몬",
                "베레스의 분신",
                "상아탑 가고일",
                "상아탑 파사즈",
                "상아탑 유령"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 베레스의 분신, 상아탑 가고일, 상아탑 파사즈, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "베레스의 분신",
                "상아탑 가고일",
                "상아탑 파사즈",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 베레스의 분신, 상아탑 가고일, 상아탑 파사즈, 상아탑 유령",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "베레스의 분신",
                "상아탑 가고일",
                "상아탑 파사즈",
                "상아탑 유령"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "파워 글로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/386",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "흑정령의 수정 (쉐도우 쇼크)",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44922",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 감시자 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "감시자 데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "ivory_8",
          "zone": "상아탑 8층",
          "levelRange": "몬스터 레벨 74~84 (인벤 DB 표기)",
          "entry": "오렌 마을 북쪽 '18.상아탑 입구'. 3층 중앙의 던전 텔레포터 '아도니스'를 통해 4층 진입(5,000 아데나). 시간제한 던전.",
          "monsters": [
            "데몬",
            "바포메트의 분신",
            "버려진 흑마법 실험체",
            "상아탑 레서 데몬",
            "앙가스"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10604"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "데몬",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본 (대시)",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98224",
              "from": [
                "데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (그랜드 마스터: 카운터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/120062",
              "from": [
                "데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (쇼크 스턴: 마스터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/120082",
              "from": [
                "데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (카운터 배리어: 베테랑)",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/130961",
              "from": [
                "데몬"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "데몬의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/528",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/578",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 숨결",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44912",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/594",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/485",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데몬의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/840",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마물의 기운",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬, 바포메트의 분신, 상아탑 레서 데몬, 앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/744",
              "from": [
                "데몬",
                "바포메트의 분신",
                "상아탑 레서 데몬",
                "앙가스"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "마법서 (미티어 스트라이크)",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/262",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "데몬",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 바포메트의 분신, 상아탑 레서 데몬, 앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "바포메트의 분신",
                "상아탑 레서 데몬",
                "앙가스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "악마의 가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬, 바포메트의 분신, 상아탑 레서 데몬, 앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44902",
              "from": [
                "데몬",
                "바포메트의 분신",
                "상아탑 레서 데몬",
                "앙가스"
              ],
              "sharedCount": 5,
              "scope": "all"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 바포메트의 분신, 상아탑 레서 데몬, 앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "바포메트의 분신",
                "상아탑 레서 데몬",
                "앙가스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 바포메트의 분신, 상아탑 레서 데몬, 앙가스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "바포메트의 분신",
                "상아탑 레서 데몬",
                "앙가스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "파워 글로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/386",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (쉐도우 쇼크)",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44922",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 데몬",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "데몬"
              ],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        }
      ]
    },
    {
      "key": "gludio",
      "label": "글루디오 던전",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "1~7층. 인벤 리니지M 몬스터 DB 직접 판독 기준. 입장 방법·권장 레벨은 이번 조사에서 확인하지 못했다.",
      "zones": [
        {
          "key": "gludio_1",
          "zone": "글루디오 던전 1층",
          "levelRange": "몬스터 레벨 17~31 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "오크",
            "오크 궁수",
            "좀비",
            "해골 궁수",
            "해골 도끼병",
            "해골 창병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 오크, 오크 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/366",
              "from": [
                "오크",
                "오크 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 궁수, 해골 도끼병, 오크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "해골 궁수",
                "해골 도끼병",
                "오크"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "모닝스타",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6371",
              "from": [
                "해골 도끼병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "사냥꾼 활",
              "kind": "무기",
              "note": "드랍 몬스터: 해골 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/452",
              "from": [
                "해골 궁수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "수리된 귀걸이",
              "kind": "악세",
              "note": "드랍 몬스터: 오크, 오크 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/623",
              "from": [
                "오크",
                "오크 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오크족 검",
              "kind": "무기",
              "note": "드랍 몬스터: 오크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/324",
              "from": [
                "오크"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오크족 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 오크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/330",
              "from": [
                "오크"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오크족 활",
              "kind": "무기",
              "note": "드랍 몬스터: 오크 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/331",
              "from": [
                "오크 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "작은 활",
              "kind": "무기",
              "note": "드랍 몬스터: 오크 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/338",
              "from": [
                "오크 궁수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/920",
              "from": [
                "좀비"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "철",
              "kind": "재료",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/379",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6361",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2481",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "포챠드",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/388",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 좀비, 해골 궁수, 해골 창병, 해골 도끼병, 오크, 오크 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "좀비",
                "해골 궁수",
                "해골 창병",
                "해골 도끼병",
                "오크",
                "오크 궁수"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_2",
          "zone": "글루디오 던전 2층",
          "levelRange": "몬스터 레벨 28~34 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "구울",
            "좀비",
            "해골 궁수",
            "해골 도끼병",
            "해골 창병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 궁수, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "해골 궁수",
                "해골 도끼병"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "모닝스타",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6371",
              "from": [
                "해골 도끼병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "사냥꾼 활",
              "kind": "무기",
              "note": "드랍 몬스터: 해골 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/452",
              "from": [
                "해골 궁수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/920",
              "from": [
                "좀비"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "철",
              "kind": "재료",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/379",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6361",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2481",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "포챠드",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/388",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 구울, 좀비, 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "구울",
                "좀비",
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_3",
          "zone": "글루디오 던전 3층",
          "levelRange": "몬스터 레벨 28~34 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "구울",
            "셸로브",
            "웅골리언트",
            "좀비",
            "해골 궁수",
            "해골 도끼병",
            "해골 창병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 궁수, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "해골 궁수",
                "해골 도끼병"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "기술 교본 (매지컬 샷: 그랩)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98254",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마법서 (이럽션)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/270",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "모닝스타",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6371",
              "from": [
                "해골 도끼병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무명 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6041",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/916",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사냥꾼 활",
              "kind": "무기",
              "note": "드랍 몬스터: 해골 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/452",
              "from": [
                "해골 궁수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 좀비",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/920",
              "from": [
                "좀비"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "드랍 몬스터: 웅골리언트, 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/739",
              "from": [
                "웅골리언트",
                "셸로브"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "철",
              "kind": "재료",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/379",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6361",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2481",
              "from": [
                "해골 궁수",
                "해골 창병",
                "해골 도끼병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "포챠드",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/388",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 구울, 좀비, 웅골리언트, 해골 궁수, 해골 창병, 셸로브, 해골 도끼병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "구울",
                "좀비",
                "웅골리언트",
                "해골 궁수",
                "해골 창병",
                "셸로브",
                "해골 도끼병"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_4",
          "zone": "글루디오 던전 4층",
          "levelRange": "몬스터 레벨 28~84 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "구울",
            "버그베어",
            "버려진 흑마법 실험체",
            "셸로브",
            "웅골리언트"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "버그베어"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "버려진 흑마법 실험체",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "기술 교본 (매지컬 샷: 그랩)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98254",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법서 (이럽션)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/270",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "버려진 흑마법 실험체",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "무명 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6041",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "미늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2762",
              "from": [
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/916",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "드랍 몬스터: 웅골리언트, 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/739",
              "from": [
                "웅골리언트",
                "셸로브"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 버그베어, 구울, 웅골리언트, 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "버려진 흑마법 실험체",
                "버그베어",
                "구울",
                "웅골리언트",
                "셸로브"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_5",
          "zone": "글루디오 던전 5층",
          "levelRange": "몬스터 레벨 28~35 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "구울",
            "버그베어",
            "셸로브",
            "웅골리언트",
            "켈베로스"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 버그베어, 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "버그베어",
                "켈베로스"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "기술 교본 (매지컬 샷: 그랩)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/98254",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마력의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/480",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "마법서 (이럽션)",
              "kind": "소모품",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/270",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "무명 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6041",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "미늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2762",
              "from": [
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/916",
              "from": [
                "셸로브"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "드랍 몬스터: 웅골리언트, 셸로브",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/739",
              "from": [
                "웅골리언트",
                "셸로브"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 버그베어, 구울, 웅골리언트, 셸로브, 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "버그베어",
                "구울",
                "웅골리언트",
                "셸로브",
                "켈베로스"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_6",
          "zone": "글루디오 던전 6층",
          "levelRange": "몬스터 레벨 27~42 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "괴물 눈",
            "구울",
            "버그베어",
            "웅골리언트",
            "켈베로스",
            "킹 버그베어"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어, 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "킹 버그베어",
                "버그베어",
                "켈베로스"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "킹 버그베어",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "대형 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 킹 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6011",
              "from": [
                "킹 버그베어"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마력의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/480",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "미늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2762",
              "from": [
                "킹 버그베어",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "드랍 몬스터: 웅골리언트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/739",
              "from": [
                "웅골리언트"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어, 구울, 웅골리언트, 켈베로스, 괴물 눈",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "킹 버그베어",
                "버그베어",
                "구울",
                "웅골리언트",
                "켈베로스",
                "괴물 눈"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        },
        {
          "key": "gludio_7",
          "zone": "글루디오 던전 7층",
          "levelRange": "몬스터 레벨 28~84 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "구울",
            "버그베어",
            "버려진 흑마법 실험체",
            "웅골리언트",
            "켈베로스",
            "킹 버그베어",
            "해골 궁수",
            "해골 창병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10602"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어, 해골 궁수, 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "킹 버그베어",
                "버그베어",
                "해골 궁수",
                "켈베로스"
              ],
              "sharedCount": 7,
              "scope": "all"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 킹 버그베어, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "버려진 흑마법 실험체",
                "킹 버그베어",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "대형 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 킹 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6011",
              "from": [
                "킹 버그베어"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마력의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/480",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "버려진 흑마법 실험체",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "미늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 킹 버그베어, 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2762",
              "from": [
                "킹 버그베어",
                "버그베어"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "켈베로스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사냥꾼 활",
              "kind": "무기",
              "note": "드랍 몬스터: 해골 궁수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/452",
              "from": [
                "해골 궁수"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "드랍 몬스터: 웅골리언트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/739",
              "from": [
                "웅골리언트"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "철",
              "kind": "재료",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/379",
              "from": [
                "해골 궁수",
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "큰 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6361",
              "from": [
                "해골 궁수",
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 해골 궁수, 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2481",
              "from": [
                "해골 궁수",
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "포챠드",
              "kind": "기타",
              "note": "드랍 몬스터: 해골 창병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/388",
              "from": [
                "해골 창병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 버려진 흑마법 실험체, 킹 버그베어, 버그베어, 구울, 웅골리언트, 해골 궁수, 해골 창병, 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "버려진 흑마법 실험체",
                "킹 버그베어",
                "버그베어",
                "구울",
                "웅골리언트",
                "해골 궁수",
                "해골 창병",
                "켈베로스"
              ],
              "sharedCount": 7,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "dragon_valley",
      "label": "용의 계곡",
      "zoneLabel": "구역",
      "confidence": "부분",
      "note": "필드 '용의 계곡'(삼거리) + '용의 계곡 던전' 1~7층. 필드는 월드맵에서 12,000 아데나로 직행 입장(시간제한 없음). 던전은 1일 5시간 제한. 층별 진입 권장 방수: 1·2층 100~110방 / 3층 110~120방 / 4~7층 120~130방. 층별 드랍의 주 근거는 NC 공식 커뮤니티 게시판 글(2017년 유저 작성)이며, 5·6층만 별도 블로그(아카이브)와 교차검증되어 '확인'이고 나머지 층은 단일 출처라 '부분'이다. 장비 계열 규칙: 투구=2~4층 / 부츠=4~7층 / 망토=6~7층. ※'용의 계곡 (필드/삼거리)'는 층이 아니라 야외 필드 구역이며, 던전 1~7층과 함께 한 그룹으로 묶여 있어 고유/공통 판정에 함께 들어간다.",
      "zones": [
        {
          "key": "dragon_1",
          "zone": "용의 계곡 (필드/삼거리)",
          "levelRange": "60+ (명중 60~65 권장)",
          "entry": "월드맵에서 12,000 아데나 지불 → 용던 입구/삼거리 직행. 필드라 시간제한 없음.",
          "monsters": [
            "해골류",
            "거대 해골(행운 몬스터)",
            "오우거",
            "거대 오우거",
            "코카트리스",
            "거대 코카트리스",
            "드레이크(용던 입구, 3시간 리젠)",
            "거대 드레이크(뼈 주변, 3~6시간 리젠)",
            "대 흑장로(보스, 뼈 안)"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5967765cd7a85c00011c20b7"
          ],
          "note": "파밍 코스 A(작뼈↔중뼈, 리젠 최상) 1.7~1.8%/h > 코스 B 1.3~1.5%/h > 코스 C 1.1~1.3%/h (65레벨 기준). '드래곤의 잔재'(큰뼈/중뼈/작뼈) 지형. 거대 해골 처치 시 일정 확률로 대 흑장로가 뼈 안으로 소환해 1:1 전투.",
          "drops": [
            {
              "name": "기백의 반지",
              "kind": "악세",
              "note": "필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오우거의 벨트",
              "kind": "악세",
              "note": "필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑장로의 로브",
              "kind": "방어구",
              "note": "필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑장로의 샌달",
              "kind": "방어구",
              "note": "필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "축복받은 무기 마법 주문서",
              "kind": "소모품",
              "note": "거대 드레이크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "축복받은 갑옷 마법 주문서",
              "kind": "소모품",
              "note": "거대 드레이크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오리하루콘의 단검",
              "kind": "무기",
              "note": "거대 드레이크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "완력의 부츠",
              "kind": "방어구",
              "note": "거대 드레이크",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=182978",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "dragon_2",
          "zone": "용의 계곡 던전 1층",
          "levelRange": "60+ (명중 70 이상 권장, 100~110방)",
          "entry": "용의 계곡 필드 → 던전 입구. 1일 5시간 제한.",
          "monsters": [
            "해골 돌격병",
            "해골 근위병",
            "해골 저격병",
            "트롤"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=59677690d7a85c00011c20ae",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df"
          ],
          "note": "층 구성·공식 평은 NC 공식 커뮤니티 층별 연재글로 확인. 몬스터별 세부 드랍은 단일 출처(유저 작성 드랍정리글)라 '부분'. / 언데드 중심 사냥터. 몬스터가 몰리지 않지만 하나하나 강력해 지형·순간이동으로 1:1 유도 권장. 언데드 추가 대미지 무기가 효율적. 공식 평: '트롤의 천사의 지팡이 외에는 희귀 아이템을 드랍하지 않아 득템을 노리기 힘들다.'",
          "drops": [
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "트롤 — 1층 유일한 희귀 아이템",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677690d7a85c00011c20ae",
              "from": [
                "트롤"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "트롤 벨트",
              "kind": "악세",
              "note": "트롤",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "트롤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "해골 저격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "화염의 활",
              "kind": "무기",
              "note": "해골 저격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "통찰의 조준경",
              "kind": "악세",
              "note": "해골 저격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 돌격병"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "해골 근위병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 근위병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "강철 부츠",
              "kind": "방어구",
              "note": "해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 돌격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "강철 장갑",
              "kind": "방어구",
              "note": "해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 돌격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수정 장갑",
              "kind": "방어구",
              "note": "해골 근위병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 근위병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법 망토",
              "kind": "방어구",
              "note": "해골 저격병, 해골 돌격병, 해골 근위병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 돌격병",
                "해골 근위병",
                "해골 저격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "젤",
              "kind": "재료",
              "note": "해골 저격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "dragon_3",
          "zone": "용의 계곡 던전 2층",
          "levelRange": "60+ (100~110방)",
          "entry": "1층에서 하강. 1일 5시간 제한.",
          "monsters": [
            "지룡의 졸개(블루)",
            "지룡의 졸개(레드)",
            "해골 저격병",
            "해골 돌격병",
            "해골 근위병"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596776d5d7a85c00011c20ab",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df"
          ],
          "note": "지룡의 졸개가 처음 등장. 투구는 2·3층이 주 드랍처다.",
          "drops": [
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "지룡의 졸개(블루)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 졸개(블루)"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "지룡의 졸개(레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 졸개(레드)"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "무관의 투구",
              "kind": "방어구",
              "note": "지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 투구",
              "kind": "방어구",
              "note": "지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "마법서(아이언 스킨)",
              "kind": "소모품",
              "note": "지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "젤",
              "kind": "재료",
              "note": "지룡의 졸개(레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 졸개(레드)"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "살천의 활 / 화염의 활 / 파멸의 대검 / 혹한의 창 등 해골 3종 드랍",
              "kind": "무기",
              "note": "1층과 동일한 해골 저격병·돌격병·근위병 드랍이 2층에도 적용",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "해골 저격병"
              ],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "dragon_4",
          "zone": "용의 계곡 던전 3층",
          "levelRange": "60+ (110~120방)",
          "entry": "2층에서 하강. 1일 5시간 제한.",
          "monsters": [
            "지룡의 졸개(블루)",
            "지룡의 졸개(레드)",
            "해골 저격병",
            "해골 돌격병",
            "해골 근위병",
            "무리안"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=59677714d7a85c00011c20a6",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df"
          ],
          "note": "검색 스니펫에 돌던 '3층 무리안이 축복받은 무기/갑옷 마법 주문서 드랍'은 원문 확인 실패로 채택하지 않았다. 원문상 3층 무리안 드랍은 데이·젤·축젤이며, 축복받은 주문서는 필드 거대 드레이크와 5층 지룡의 무리안 쪽에서 확인된다. / 공식 평: '3층과 2층은 등장하는 몬스터가 같고 대신 언데드 몬스터의 비중이 낮아진다.' 무리안이 추가된다.",
          "drops": [
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "무관의 투구",
              "kind": "방어구",
              "note": "무리안, 지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 투구",
              "kind": "방어구",
              "note": "무리안, 지룡의 졸개(블루/레드)",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "데이",
              "kind": "재료",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "젤",
              "kind": "재료",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "축젤",
              "kind": "재료",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마력의 단검 / 천사의 지팡이 / 희귀 제작 비법서 / 마법서(아이언 스킨)",
              "kind": "소모품",
              "note": "지룡의 졸개(블루/레드) — 2층과 동일",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "dragon_5",
          "zone": "용의 계곡 던전 4층",
          "levelRange": "60+ (120~130방)",
          "entry": "3층에서 하강. 1일 5시간 제한.",
          "monsters": [
            "지룡의 해골 저격병",
            "지룡의 해골 돌격병",
            "지룡의 해골 근위병",
            "무리안",
            "지룡의 서큐버스"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5967776ad7a85c00011c2091",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df"
          ],
          "note": "공식 평: '1~3층 언데드 대신 강화된 언데드가 등장하고 순간이동으로 갑자기 접근하는 지룡의 서큐버스도 등장 → 주의 필요. 대신 더 다양한 희귀 아이템을 드랍.' 부츠 드랍이 4층부터 시작된다.",
          "drops": [
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "지룡의 해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 돌격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "지룡의 해골 저격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 저격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "지룡의 해골 근위병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 근위병"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠",
              "kind": "방어구",
              "note": "지룡의 해골 3종, 지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 부츠",
              "kind": "방어구",
              "note": "지룡의 해골 3종, 지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법 망토",
              "kind": "방어구",
              "note": "지룡의 해골 저격병·돌격병·근위병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 저격병"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무관의 투구 / 신관의 투구",
              "kind": "방어구",
              "note": "무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지식의 목걸이",
              "kind": "악세",
              "note": "지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "어둠의 벨트",
              "kind": "악세",
              "note": "지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "지룡의 해골 저격병, 지룡의 해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 저격병",
                "지룡의 해골 돌격병"
              ],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "기술 교본(포커스 업)",
              "kind": "소모품",
              "note": "지룡의 해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 돌격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "기술서(쇼크 스턴)",
              "kind": "소모품",
              "note": "지룡의 해골 돌격병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 돌격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "투사의 서판(가드 브레이크)",
              "kind": "소모품",
              "note": "지룡의 서큐버스",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "젤 / 데이 / 축데이 / 축젤",
              "kind": "재료",
              "note": "지룡의 해골 저격병·돌격병, 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 해골 저격병",
                "무리안"
              ],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "dragon_6",
          "zone": "용의 계곡 던전 5층",
          "levelRange": "60+ (120~130방)",
          "entry": "4층에서 하강, 또는 맵 클릭 → 하딘의 텔레포트(10다이아)로 5층 직행. 1일 5시간 제한.",
          "monsters": [
            "지룡의 해골 저격병(선공/언데드)",
            "지룡의 해골 돌격병(비선공/언데드)",
            "지룡의 해골 근위병(비선공/언데드)",
            "지룡의 무리안(선공)",
            "지룡의 서큐버스",
            "지룡의 에틴(비선공/약점 불)"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
            "http://web.archive.org/web/20251106211949/https://greenblog.co.kr/2019/08/18/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-5%EC%B8%B5-%EB%93%9C%EB%9E%8D-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A0%95%EB%A6%AC/"
          ],
          "note": "NC 공식 커뮤니티 층별 연재글 + GREEN BLOG 5층 글(웨이백 아카이브) 독립 2개 출처 일치. / 혈맹 퀘스트 [쉬움]: 지룡의 해골 근위병 20마리 처치 → 명예 코인 100개 + 혈맹 경험치 10. 독립 2개 출처가 교차검증된 유일한 층 중 하나.",
          "drops": [
            {
              "name": "마법서(포그 오브 슬리핑)",
              "kind": "소모품",
              "note": "지룡의 에틴 — 5층 대표 드랍",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "지룡의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "지룡의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "지룡의 해골 근위병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠",
              "kind": "방어구",
              "note": "5층 몬스터 대부분 공통",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 부츠",
              "kind": "방어구",
              "note": "5층 몬스터 대부분 공통",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "암령의 장갑",
              "kind": "방어구",
              "note": "지룡의 해골 돌격병, 지룡의 해골 근위병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법 망토",
              "kind": "방어구",
              "note": "지룡의 해골 저격병·돌격병·근위병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "지식의 목걸이",
              "kind": "악세",
              "note": "지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "어둠의 벨트",
              "kind": "악세",
              "note": "지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "지룡의 무리안, 지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "지룡의 무리안, 지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "지룡의 무리안, 지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "지룡의 무리안, 지룡의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술 교본(포커스 업)",
              "kind": "소모품",
              "note": "지룡의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "기술서(쇼크 스턴)",
              "kind": "소모품",
              "note": "지룡의 해골 돌격병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "투사의 서판(가드 브레이크)",
              "kind": "소모품",
              "note": "지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "젤 / 데이 / 축데이 / 축젤",
              "kind": "재료",
              "note": "지룡의 무리안, 지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5967779dd7a85c00011c208c",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "dragon_7",
          "zone": "용의 계곡 던전 6층",
          "levelRange": "60+ (120~130방)",
          "entry": "하딘의 텔레포트(10다이아)로 5층 직행 후 이동. 1일 5시간 제한.",
          "monsters": [
            "지룡의 정예병(선공/약점 불)",
            "지룡의 문지기(선공/약점 불)",
            "지룡의 서큐버스 퀸(선공/약점 땅/악마)",
            "지룡의 서큐버스",
            "지룡의 에틴",
            "지룡의 무리안"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
            "http://web.archive.org/web/20191019173900/https://greenblog.co.kr/2018/11/19/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%96%B4%EC%8A%A4%EB%B0%94%EC%9D%B8%EB%93%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-6%EC%B8%B5-%EB%93%9C%EB%9E%8D%ED%85%9C/"
          ],
          "note": "NC 공식 커뮤니티 층별 연재글 + GREEN BLOG 6층 글(웨이백 아카이브) 독립 2개 출처 일치. 단 '부분' 표기 항목은 단일 출처. / 공식 평: '1~5층까지 주로 희귀 장갑과 신발을 드랍했다면, 6층부터 희귀 망토를 드랍한다.' 각인 장비 상자는 6층 몬스터 전원 공통 드랍.",
          "drops": [
            {
              "name": "정령의 수정(어스 바인드)",
              "kind": "소모품",
              "note": "지룡의 정예병 — 6층 대표 드랍(요정 스킬). 독립 2개 출처 일치",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "흑정령의 수정(언케니 닷지)",
              "kind": "소모품",
              "note": "지룡의 서큐버스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "브레이크 어스바인드",
              "kind": "소모품",
              "note": "지룡의 문지기",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "지룡의 정예병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "지룡의 문지기, 지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "파괴의 이도류",
              "kind": "무기",
              "note": "지룡의 문지기 (다크엘프용)",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "지룡의 서큐버스 퀸",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 무리안"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 에틴"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무관의 망토",
              "kind": "방어구",
              "note": "지룡의 정예병, 지룡의 문지기, 지룡의 서큐버스 퀸 — 망토는 6층부터",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 망토",
              "kind": "방어구",
              "note": "지룡의 정예병, 지룡의 문지기, 지룡의 서큐버스 퀸 — 망토는 6층부터",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "암령의 장갑",
              "kind": "방어구",
              "note": "지룡의 정예병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠 / 신관의 부츠",
              "kind": "방어구",
              "note": "지룡의 서큐버스, 지룡의 에틴, 지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스",
                "지룡의 에틴",
                "지룡의 무리안"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "지식의 목걸이 / 어둠의 벨트",
              "kind": "악세",
              "note": "지룡의 서큐버스",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "6층 몬스터 전원 공통 (GREEN BLOG 6층 기준)",
              "confidence": "부분",
              "source": "http://web.archive.org/web/20191019173900/https://greenblog.co.kr/2018/11/19/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%96%B4%EC%8A%A4%EB%B0%94%EC%9D%B8%EB%93%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-6%EC%B8%B5-%EB%93%9C%EB%9E%8D%ED%85%9C/",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "지룡의 정예병, 지룡의 문지기, 지룡의 서큐버스 퀸, 지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스",
                "지룡의 무리안"
              ],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "지룡의 정예병, 지룡의 문지기, 지룡의 서큐버스 퀸, 지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 서큐버스",
                "지룡의 무리안"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "악마의 피",
              "kind": "재료",
              "note": "지룡의 서큐버스 퀸, 지룡의 서큐버스",
              "confidence": "부분",
              "source": "http://web.archive.org/web/20191019173900/https://greenblog.co.kr/2018/11/19/%EB%A6%AC%EB%8B%88%EC%A7%80m-%EC%96%B4%EC%8A%A4%EB%B0%94%EC%9D%B8%EB%93%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EC%9A%A9%EC%9D%98-%EA%B3%84%EA%B3%A1-%EB%8D%98%EC%A0%84-6%EC%B8%B5-%EB%93%9C%EB%9E%8D%ED%85%9C/",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "지룡의 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "둠 블레스터",
              "kind": "소모품",
              "note": "지룡의 서큐버스 퀸",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서(포그 오브 슬리핑)",
              "kind": "소모품",
              "note": "지룡의 에틴",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 에틴"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서 / 무기 마법 주문서",
              "kind": "소모품",
              "note": "지룡의 정예병, 지룡의 에틴, 지룡의 무리안",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [
                "지룡의 에틴",
                "지룡의 무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "변신 주문서",
              "kind": "소모품",
              "note": "지룡의 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 무리안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "용기의 물약 / 초록의 물약 / 지혜의 물약 / 마나 회복 물약",
              "kind": "소모품",
              "note": "지룡의 정예병, 지룡의 문지기, 지룡의 에틴, 지룡의 서큐버스 등",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 서큐버스",
                "지룡의 에틴"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "순간 이동 주문서",
              "kind": "소모품",
              "note": "지룡의 문지기",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "젤",
              "kind": "재료",
              "note": "지룡의 정예병",
              "confidence": "확인",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=596777d1d7a85c00011c2083",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "dragon_8",
          "zone": "용의 계곡 던전 7층",
          "levelRange": "60+ (120~130방)",
          "entry": "6층에서 이동. 1일 5시간 제한.",
          "monsters": [
            "테라 드래곤",
            "유니 드래곤",
            "지룡의 정예병",
            "지룡의 무리안"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df"
          ],
          "note": "원문에 유니 드래곤 드랍 중 아이템명이 '안타라스'로만 적힌 항목이 있으나 정식 아이템명 특정 불가로 제외(미확인). 지룡 안타라스 보스는 미구현. '7층은 텅 빈 곳'이라는 서술은 PC 리니지 자료(리니지파워북)라 배제했다. / 공식 평: '마지막 7층에선 본래 보스 몬스터인 지룡 안타라스가 등장해야 하지만, 현재 리니지M에선 드래곤들이 구현되지 않았다. 이곳에선 현재 유니 드래곤과 테라 드래곤 등이 등장하고 있으며 희귀 제작 비법서를 비롯한 희귀 아이템을 얻을 수 있다.' ※어스바인드는 6층 전용이 아니며 7층 지룡의 정예병도 동일 드랍.",
          "drops": [
            {
              "name": "파멸의 대검",
              "kind": "무기",
              "note": "테라 드래곤, 지룡의 정예병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
              "from": [
                "테라 드래곤",
                "지룡의 정예병"
              ],
              "sharedCount": 5,
              "scope": "shared"
            },
            {
              "name": "혹한의 창",
              "kind": "무기",
              "note": "유니 드래곤",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
              "from": [
                "유니 드래곤"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "지룡의 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 무리안"
              ],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "무관의 망토",
              "kind": "방어구",
              "note": "테라 드래곤, 유니 드래곤, 지룡의 정예병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
              "from": [
                "테라 드래곤",
                "유니 드래곤",
                "지룡의 정예병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 망토",
              "kind": "방어구",
              "note": "테라 드래곤, 유니 드래곤, 지룡의 정예병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
              "from": [
                "테라 드래곤",
                "유니 드래곤",
                "지룡의 정예병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠 / 신관의 부츠",
              "kind": "방어구",
              "note": "지룡의 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 무리안"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "정령의 수정(어스 바인드)",
              "kind": "소모품",
              "note": "지룡의 정예병 — 6층 전용 아님",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 정예병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "테라 드래곤, 유니 드래곤, 지룡의 정예병, 지룡의 무리안",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=59677809d7a85c00011c2081",
              "from": [
                "테라 드래곤",
                "유니 드래곤",
                "지룡의 정예병",
                "지룡의 무리안"
              ],
              "sharedCount": 6,
              "scope": "shared"
            },
            {
              "name": "젤 / 데이 / 축데이 / 축젤",
              "kind": "재료",
              "note": "지룡의 무리안, 지룡의 정예병",
              "confidence": "부분",
              "source": "https://lineagem.plaync.com/board/knowhow/view?articleId=5d244555d7a85c00016ca8df",
              "from": [
                "지룡의 정예병",
                "지룡의 무리안"
              ],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        }
      ]
    },
    {
      "key": "rastabad",
      "label": "라스타바드 던전",
      "zoneLabel": "구역",
      "confidence": "부분",
      "note": "70레벨 이상, 월드 던전 UI로 입장. 주말 전용(금 자정~일 자정), 주간 기본 4시간·만능 충전석으로 최대 5시간. 구조는 중앙 광장 + 4구역(각 구역에 70/75/80 3개 방). 난도: 마수 → 명법 → 마령 → 암살 순 상승. ※방(70/75/80) 단위 드랍 차등 자료는 웹에 사실상 없어 구역 단위가 확인 한계다. 억지로 층을 쪼개지 않았다. ※방(70/75/80) 단위 드랍 차등 자료가 없어 구역 단위가 확인 한계다. '대법관의 심판장'은 드랍 미확인이라 유효 구역에서 제외했다.",
      "zones": [
        {
          "key": "rasta_1",
          "zone": "라스타바드 던전 중앙 광장",
          "levelRange": "70+",
          "entry": "월드 던전 UI. 주말(금 자정~일 자정) 전용. 주간 기본 4시간, 만능 충전석으로 최대 5시간.",
          "monsters": [],
          "confidence": "확인",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
            "https://www.inven.co.kr/board/lineagem/5056/11226",
            "https://www.inven.co.kr/board/lineagem/5056/11265",
            "https://lineagem.plaync.com/board/knowhow/view?articleId=5ca232f2402b620001c30b92"
          ],
          "note": "중앙 광장에서만 나오는 고유 재료가 있다. 영혼 결정체·어둠의 주괴는 영웅 액세서리 제작 재료.",
          "drops": [
            {
              "name": "다크엘프 영혼 결정체",
              "kind": "재료",
              "note": "중앙 광장에서만 드랍. 영웅 액세서리 제작 재료",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 주괴",
              "kind": "재료",
              "note": "중앙 광장에서만 드랍. 영웅 액세서리 제작 재료",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "라스타바드 장비 상자",
              "kind": "기타",
              "note": "일반/고급 장비. 확인된 내용물: [일반] 라스타바드 징박힌 레더 아머, [일반] 라스타바드 부츠, [고급] 다크포레스터의 부츠. 별도 출처는 '최대 전설 무기까지' 획득 가능하다고 기재",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/board/lineagem/5056/11265",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "다크엘프 병사의 배지",
              "kind": "재료",
              "note": "",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/board/lineagem/5056/11226",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "다크엘프 장군의 배지",
              "kind": "재료",
              "note": "",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/board/lineagem/5056/11226",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "rasta_2",
          "zone": "라스타바드 던전 마수군왕 구역 (3시)",
          "levelRange": "70 / 75 / 80 방 3개",
          "entry": "중앙 광장 3시 방향. 4구역 중 난도 최하.",
          "monsters": [
            "바란카(보스)"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
          ],
          "note": "보스·버프·권장레벨은 확인. 개별 드랍은 원문이 404된 블로그 스니펫 근거라 신뢰도 낮음 → 대부분 미확인. / 구역 버프: 근거리 대미지 +1. 물방/격수 유리.",
          "drops": [
            {
              "name": "마수군왕의 인장",
              "kind": "재료",
              "note": "구역 고유 증표. ※인벤 기사는 '증표', 아이템 DB는 'OO군왕의 인장'으로 표기",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서(퀵 리커버리)",
              "kind": "소모품",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "체력의 각반",
              "kind": "방어구",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "완력의 각반",
              "kind": "방어구",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "rasta_3",
          "zone": "라스타바드 던전 암살군왕 구역 (6시)",
          "levelRange": "70 / 75 / 80 방 3개",
          "entry": "중앙 광장 6시 방향. 4구역 중 난도 최상.",
          "monsters": [
            "슬레이브(보스)"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
          ],
          "note": "구역 버프: 근거리 명중 +3. 물리 피해가 높아 AC 주의.",
          "drops": [
            {
              "name": "암살군왕의 인장",
              "kind": "재료",
              "note": "구역 고유 증표",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "정령의 수정(트리플 업)",
              "kind": "소모품",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 희귀 무기 제작 비법서",
              "kind": "재료",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은색의 이도류",
              "kind": "무기",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "rasta_4",
          "zone": "라스타바드 던전 명법군왕 구역 (9시)",
          "levelRange": "70 / 75 / 80 방 3개",
          "entry": "중앙 광장 9시 방향",
          "monsters": [
            "헬바인(보스)"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
          ],
          "note": "구역 버프: INT +2. 언데드 계열이라 요정·법사 유리.",
          "drops": [
            {
              "name": "명법군왕의 인장",
              "kind": "재료",
              "note": "구역 고유 증표",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서(글로리 프로텍션)",
              "kind": "소모품",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 완력의 반지",
              "kind": "악세",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 민첩의 반지",
              "kind": "악세",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 지식의 반지",
              "kind": "악세",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 희귀 악세서리 제작 비법서",
              "kind": "재료",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "rasta_5",
          "zone": "라스타바드 던전 마령군왕 구역 (12시)",
          "levelRange": "70 / 75 / 80 방 3개",
          "entry": "중앙 광장 12시 방향",
          "monsters": [
            "라이아(보스)"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
          ],
          "note": "구역 버프: 원거리 명중 +3. 마법 몬스터라 MR 필요.",
          "drops": [
            {
              "name": "마령군왕의 인장",
              "kind": "재료",
              "note": "구역 고유 증표",
              "confidence": "부분",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서(에이션트 레벨레이션)",
              "kind": "소모품",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "봉인된 희귀 방어구 제작 비법서",
              "kind": "재료",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마력의 장갑",
              "kind": "방어구",
              "note": "",
              "confidence": "미확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "rasta_6",
          "zone": "라스타바드 대법관의 심판장 (숨은 구역)",
          "levelRange": "미확인",
          "entry": "13곳 사냥터의 '살아남은 다크엘프 패잔병' 처치 시 진입. 주 1시간, 주말 시간 미차감, 30분 리젠.",
          "monsters": [],
          "confidence": "미확인",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=297045&site=lineagem"
          ],
          "note": "입장/운영 방식만 확인됐고, 드랍은 어떤 신뢰 출처에도 없다. 추측하지 않고 비워 뒀다.",
          "drops": []
        }
      ]
    },
    {
      "key": "giran_ruin",
      "label": "파멸의 기란감옥",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "레벨 80~87대 상위 던전으로, 45~48레벨 '기란 감옥' 1~4층과는 완전히 다른 사냥터다(둘 다 1~4층이라 혼동 주의). 인벤 리니지M 몬스터 DB 직접 판독 기준.",
      "zones": [
        {
          "key": "giranruin_1",
          "zone": "파멸의 기란감옥 1층",
          "levelRange": "몬스터 레벨 80~85 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "굶주린 죄수",
            "악랄한 죄수",
            "잔인한 죄수",
            "포악한 죄수",
            "폭주한 클라인"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10603"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3182",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "기술서 (쇼크 스턴: 베테랑)",
              "kind": "소모품",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/142573",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (카운터 배리어: 마스터)",
              "kind": "소모품",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1981",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/436",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무관의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/525",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/566",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/513",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/576",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/595",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/556",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "빛나는 고대 목걸이 (각인)",
              "kind": "악세",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/644",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/455",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "완력의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/681",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 폭주한 클라인",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "폭주한 클라인"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "파멸의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/235213",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 폭주한 클라인, 굶주린 죄수, 악랄한 죄수, 잔인한 죄수, 포악한 죄수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "폭주한 클라인",
                "굶주린 죄수",
                "악랄한 죄수",
                "잔인한 죄수",
                "포악한 죄수"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "giranruin_2",
          "zone": "파멸의 기란감옥 2층",
          "levelRange": "몬스터 레벨 85 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "암흑영주 타로스",
            "탐욕스런 간수"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10603"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 암흑영주 타로스, 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "암흑영주 타로스",
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "광풍의 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3182",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "뇌신검",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/436",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무관의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/525",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/566",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/513",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/576",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/595",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무관의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/556",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "민첩의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/581",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "비늘 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/309",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "살천의 활",
              "kind": "무기",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/455",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "완력의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/580",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "지식의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/683",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "지식의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/582",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "파멸의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/235213",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스, 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "암흑영주 타로스",
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "흑정령의 수정 (쉐도우 쇼크)",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44922",
              "from": [
                "암흑영주 타로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 암흑영주 타로스, 탐욕스런 간수",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "암흑영주 타로스",
                "탐욕스런 간수"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "giranruin_3",
          "zone": "파멸의 기란감옥 3층",
          "levelRange": "몬스터 레벨 85~90 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "수문장 고르고스",
            "파멸의 해골 근위병",
            "파멸의 해골 돌격병",
            "파멸의 해골 저격병"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10603"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/424",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "멸마의 가죽 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1167",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 수문장 고르고스, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "수문장 고르고스",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "미스릴 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/157171",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/661",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "민첩의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/682",
              "from": [
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "사슬 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/311",
              "from": [
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "슬레이어의 보상 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44822",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/613",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 마력서",
              "kind": "소모품",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/612",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/615",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/616",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/617",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/614",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "정령의 수정 (엘리멘탈 스턴)",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/146652",
              "from": [
                "수문장 고르고스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3572",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "파멸의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/235213",
              "from": [
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 수문장 고르고스, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "수문장 고르고스",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "수문장 고르고스",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 수문장 고르고스, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "수문장 고르고스",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "giranruin_4",
          "zone": "파멸의 기란감옥 4층",
          "levelRange": "몬스터 레벨 84~90 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "대부 텍투스",
            "버려진 흑마법 실험체",
            "파멸의 트롤",
            "파멸의 해골 근위병",
            "파멸의 해골 돌격병",
            "파멸의 해골 저격병",
            "할파스의 추종자"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10603"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 대부 텍투스, 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "대부 텍투스",
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "마력의 단검",
              "kind": "무기",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/424",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마법서 (앱솔루트 배리어)",
              "kind": "소모품",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2572",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1168",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "미스릴 도끼",
              "kind": "무기",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/157171",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/682",
              "from": [
                "할파스의 추종자",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "민첩의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1172",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "사슬 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/311",
              "from": [
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "슬레이어의 보상 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/44822",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 로브",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/613",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 마력서",
              "kind": "소모품",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/612",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/615",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/616",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/617",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신관의 투구",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/614",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "완력의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1171",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "지식의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 대부 텍투스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/662",
              "from": [
                "대부 텍투스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "지식의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 할파스의 추종자",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/683",
              "from": [
                "할파스의 추종자"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "지식의 티셔츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1173",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "천사의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3572",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "큰 방패 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 할파스의 추종자",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/382",
              "from": [
                "할파스의 추종자"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "파멸의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/235213",
              "from": [
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 대부 텍투스, 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "대부 텍투스",
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 대부 텍투스, 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "대부 텍투스",
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 대부 텍투스, 할파스의 추종자, 파멸의 트롤, 파멸의 해골 근위병, 파멸의 해골 돌격병, 파멸의 해골 저격병",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "대부 텍투스",
                "할파스의 추종자",
                "파멸의 트롤",
                "파멸의 해골 근위병",
                "파멸의 해골 돌격병",
                "파멸의 해골 저격병"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "dark_sudeon",
      "label": "어둠의 수련 던전",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "★'수련의 던전'과 완전히 다른 사냥터다. 이름이 비슷하고 똑같이 1~4층 구조라 가장 혼동되기 쉬우나, 여기는 몬스터 레벨 90~95의 고레벨 던전이고(수련의 던전은 권장 45의 천/철/보석 재료 던전), 전설·영웅 제작 비법서·할파스의 집념·용의 심장 같은 고레벨 산출물이 나온다. 두 던전의 데이터를 절대 섞어 보지 말 것. 인벤 리니지M 몬스터 DB 직접 판독 기준.",
      "zones": [
        {
          "key": "darksudeon_1",
          "zone": "어둠의 수련 던전 1층",
          "levelRange": "몬스터 레벨 82~84 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "어둠의 늑대인간",
            "어둠의 돌골렘",
            "어둠의 랫맨",
            "어둠의 버그베어"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10605"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "레이피어",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/251",
              "from": [
                "어둠의 랫맨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "어둠의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206521",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "판금 갑옷 (각인)",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2882",
              "from": [
                "어둠의 돌골렘"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 늑대인간, 어둠의 랫맨, 어둠의 버그베어, 어둠의 돌골렘",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "어둠의 늑대인간",
                "어둠의 랫맨",
                "어둠의 버그베어",
                "어둠의 돌골렘"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "darksudeon_2",
          "zone": "어둠의 수련 던전 2층",
          "levelRange": "몬스터 레벨 84~86 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "감시자 다크엘프",
            "도주한 다크엘프 장로",
            "어둠의 라이칸스로프",
            "어둠의 임프 장로",
            "어둠의 켈베로스",
            "어둠의 킹 버그베어"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10605"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 도주한 다크엘프 장로, 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "도주한 다크엘프 장로",
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "어둠의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/565",
              "from": [
                "어둠의 임프 장로"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 라이칸스로프",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/575",
              "from": [
                "어둠의 라이칸스로프"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 도주한 다크엘프 장로, 어둠의 라이칸스로프, 감시자 다크엘프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206521",
              "from": [
                "도주한 다크엘프 장로",
                "어둠의 라이칸스로프",
                "감시자 다크엘프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "투사의 체인소드",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 켈베로스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/114102",
              "from": [
                "어둠의 켈베로스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "흑정령의 수정 (쉐도우 악셀레이션)",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 킹 버그베어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/163954",
              "from": [
                "어둠의 킹 버그베어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 라이칸스로프, 어둠의 켈베로스, 어둠의 킹 버그베어, 어둠의 임프 장로",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "어둠의 라이칸스로프",
                "어둠의 켈베로스",
                "어둠의 킹 버그베어",
                "어둠의 임프 장로"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "darksudeon_3",
          "zone": "어둠의 수련 던전 3층",
          "levelRange": "몬스터 레벨 86~88 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "어둠의 송장",
            "어둠의 시체",
            "어둠의 실험체",
            "어둠의 화석룡"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10605"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "다크 포레스터의 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 송장",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113572",
              "from": [
                "어둠의 송장"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "다크 포레스터의 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113582",
              "from": [
                "어둠의 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "어둠의 머리띠",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/30653",
              "from": [
                "어둠의 시체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206521",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "흑정령의 수정 (버닝 스피릿츠: 데스티니)",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 화석룡",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/169553",
              "from": [
                "어둠의 화석룡"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 화석룡, 어둠의 송장, 어둠의 실험체, 어둠의 시체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "어둠의 화석룡",
                "어둠의 송장",
                "어둠의 실험체",
                "어둠의 시체"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "darksudeon_4",
          "zone": "어둠의 수련 던전 4층",
          "levelRange": "몬스터 레벨 84~95 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "감시자 다크엘프",
            "도주한 다크엘프 군주",
            "드라카리스",
            "버려진 흑마법 실험체",
            "어둠의 나이트",
            "어둠의 랜서",
            "어둠의 아처",
            "어둠의 하운드",
            "칠흑의 군단장 듀라한"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10605"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한, 어둠의 아처, 도주한 다크엘프 군주, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한",
                "어둠의 아처",
                "도주한 다크엘프 군주",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (리덕션 아머: 베테랑)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/169734",
              "from": [
                "어둠의 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기술서 (리포스트)",
              "kind": "소모품",
              "note": "드랍 몬스터: 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/169934",
              "from": [
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드래곤의 진주",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/887",
              "from": [
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무관의 양손검",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/445",
              "from": [
                "어둠의 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무관의 장검",
              "kind": "무기",
              "note": "드랍 몬스터: 어둠의 나이트",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/430",
              "from": [
                "어둠의 나이트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한, 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한",
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "비스트 서머너의 가더",
              "kind": "기타",
              "note": "드랍 몬스터: 어둠의 아처",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/112212",
              "from": [
                "어둠의 아처"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "비스트 테이머의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 랜서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/112232",
              "from": [
                "어둠의 랜서"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 어둠의 아처",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/590",
              "from": [
                "어둠의 아처"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "어둠의 증표",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 아처, 도주한 다크엘프 군주, 어둠의 나이트, 어둠의 랜서, 감시자 다크엘프, 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206521",
              "from": [
                "어둠의 아처",
                "도주한 다크엘프 군주",
                "어둠의 나이트",
                "어둠의 랜서",
                "감시자 다크엘프",
                "어둠의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "용의 심장",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/746",
              "from": [
                "드라카리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "전설 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/752",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "전투 강화의 주문서 (각인)",
              "kind": "소모품",
              "note": "드랍 몬스터: 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/859",
              "from": [
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "증오의 발톱",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/507",
              "from": [
                "드라카리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "진 레이피어",
              "kind": "무기",
              "note": "드랍 몬스터: 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1123",
              "from": [
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "진노의 크로우",
              "kind": "기타",
              "note": "드랍 몬스터: 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/508",
              "from": [
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한, 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한",
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한, 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드, 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한",
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드",
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "흑정령의 수정 (베놈 마스터리: 데스티니)",
              "kind": "재료",
              "note": "드랍 몬스터: 칠흑의 군단장 듀라한",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206061",
              "from": [
                "칠흑의 군단장 듀라한"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (쉐도우 하이딩)",
              "kind": "재료",
              "note": "드랍 몬스터: 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31043",
              "from": [
                "어둠의 하운드"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (어쌔신)",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/206091",
              "from": [
                "드라카리스"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 드라카리스, 칠흑의 군단장 듀라한, 어둠의 아처, 어둠의 나이트, 어둠의 랜서, 어둠의 하운드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "드라카리스",
                "칠흑의 군단장 듀라한",
                "어둠의 아처",
                "어둠의 나이트",
                "어둠의 랜서",
                "어둠의 하운드"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        }
      ]
    },
    {
      "key": "eva",
      "label": "에바왕국 던전 (구 수중 던전)",
      "zoneLabel": "층",
      "confidence": "확인",
      "note": "★'수던'이라는 약어가 과거에는 이 던전(수중 던전)을, 지금은 '수련의 던전'을 뜻해 혼동이 잦다. 여기도 1~4층 구조라 수련의 던전 자료로 착각해 옮기면 완벽한 가짜가 된다. 완전히 다른 사냥터다. 인벤 리니지M 몬스터 DB 직접 판독 기준.",
      "zones": [
        {
          "key": "eva_1",
          "zone": "에바왕국 던전 1층",
          "levelRange": "몬스터 레벨 45~63 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "뉴트리아",
            "랫맨",
            "바쿡",
            "사악한 리자드맨",
            "사악한 악어",
            "에바 왕국의 악령",
            "크랩맨",
            "혈거인간"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10606"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/366",
              "from": [
                "랫맨"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "그라디우스",
              "kind": "기타",
              "note": "드랍 몬스터: 사악한 리자드맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6311",
              "from": [
                "사악한 리자드맨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 혈거인간",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "혈거인간"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "비늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 사악한 리자드맨, 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6291",
              "from": [
                "사악한 리자드맨",
                "크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "사격 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 뉴트리아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96484",
              "from": [
                "뉴트리아"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/653",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "싸울아비 장검",
              "kind": "무기",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/433",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "어둠의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 바쿡",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/590",
              "from": [
                "바쿡"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "포챠드",
              "kind": "기타",
              "note": "드랍 몬스터: 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/388",
              "from": [
                "랫맨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 에바 왕국의 악령, 뉴트리아, 바쿡, 사악한 리자드맨, 크랩맨, 혈거인간, 사악한 악어, 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "에바 왕국의 악령",
                "뉴트리아",
                "바쿡",
                "사악한 리자드맨",
                "크랩맨",
                "혈거인간",
                "사악한 악어",
                "랫맨"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "eva_2",
          "zone": "에바왕국 던전 2층",
          "levelRange": "몬스터 레벨 58~67 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "사악한 라미아",
            "사악한 랫맨",
            "크랩맨"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10606"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/366",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "루선해머",
              "kind": "무기",
              "note": "드랍 몬스터: 사악한 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6381",
              "from": [
                "사악한 랫맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "비늘 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6291",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "수령의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/653",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "싸울아비 장검",
              "kind": "무기",
              "note": "드랍 몬스터: 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/433",
              "from": [
                "크랩맨"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "영혼의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/673",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 사악한 라미아, 사악한 랫맨, 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "사악한 라미아",
                "사악한 랫맨",
                "크랩맨"
              ],
              "sharedCount": 4,
              "scope": "all"
            }
          ]
        },
        {
          "key": "eva_3",
          "zone": "에바왕국 던전 3층",
          "levelRange": "몬스터 레벨 62~67 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "리자드맨 마법사",
            "리자드맨 전사",
            "사악한 라미아",
            "사악한 랫맨",
            "산호껍질 크랩맨"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10606"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/366",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 산호껍질 크랩맨, 리자드맨 전사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "산호껍질 크랩맨",
                "리자드맨 전사"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "그림자 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 산호껍질 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/588",
              "from": [
                "산호껍질 크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "루선해머",
              "kind": "무기",
              "note": "드랍 몬스터: 사악한 랫맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6381",
              "from": [
                "사악한 랫맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "마나 수정구",
              "kind": "재료",
              "note": "드랍 몬스터: 리자드맨 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/7991",
              "from": [
                "리자드맨 마법사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 리자드맨 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/659",
              "from": [
                "리자드맨 마법사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사슬 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 리자드맨 전사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1196",
              "from": [
                "리자드맨 전사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영혼의 벨트",
              "kind": "악세",
              "note": "드랍 몬스터: 사악한 라미아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/673",
              "from": [
                "사악한 라미아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "청동 판금 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 산호껍질 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6351",
              "from": [
                "산호껍질 크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 사악한 라미아, 산호껍질 크랩맨, 사악한 랫맨, 리자드맨 전사, 리자드맨 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "사악한 라미아",
                "산호껍질 크랩맨",
                "사악한 랫맨",
                "리자드맨 전사",
                "리자드맨 마법사"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "헌팅 라이플",
              "kind": "무기",
              "note": "드랍 몬스터: 리자드맨 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/96414",
              "from": [
                "리자드맨 마법사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑빛의 이도류",
              "kind": "무기",
              "note": "드랍 몬스터: 리자드맨 전사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/493",
              "from": [
                "리자드맨 전사"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "힘의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 리자드맨 마법사",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1085",
              "from": [
                "리자드맨 마법사"
              ],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "eva_4",
          "zone": "에바왕국 던전 4층",
          "levelRange": "몬스터 레벨 63~84 (인벤 DB 표기)",
          "entry": "미확인",
          "monsters": [
            "머맨",
            "바다 터틀 드래곤",
            "버려진 흑마법 실험체",
            "뼈 뱀장어",
            "산호껍질 크랩맨",
            "상어",
            "수룡의 데비",
            "수룡의 수호자",
            "시댄서",
            "실라칸스",
            "심해어",
            "아스테",
            "알로퍼스 메가",
            "알로퍼스 비아",
            "인어",
            "일렉카둠",
            "자이언트 웜",
            "저주받은 무녀 사엘",
            "저주받은 물의 대정령",
            "카푸",
            "크러스트시안",
            "해파리"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/db/monster/?area=10606"
          ],
          "note": "",
          "drops": [
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "드랍 몬스터: 아스테",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6161",
              "from": [
                "아스테"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 자이언트 웜, 버려진 흑마법 실험체, 저주받은 물의 대정령, 크러스트시안, 바다 터틀 드래곤, 수룡의 데비, 수룡의 수호자, 카푸, 산호껍질 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/138",
              "from": [
                "자이언트 웜",
                "버려진 흑마법 실험체",
                "저주받은 물의 대정령",
                "크러스트시안",
                "바다 터틀 드래곤",
                "수룡의 데비",
                "수룡의 수호자",
                "카푸",
                "산호껍질 크랩맨"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "강철 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 바다 터틀 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/601",
              "from": [
                "바다 터틀 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "강철 부츠",
              "kind": "방어구",
              "note": "드랍 몬스터: 일렉카둠",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/230",
              "from": [
                "일렉카둠"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "검은빛 비늘",
              "kind": "무기",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236632",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "그림자 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 산호껍질 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/588",
              "from": [
                "산호껍질 크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "드래곤의 다이아몬드 (각인)",
              "kind": "기타",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/113892",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마력서",
              "kind": "소모품",
              "note": "드랍 몬스터: 시댄서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/2792",
              "from": [
                "시댄서"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "마법서 (콜 라이트닝)",
              "kind": "소모품",
              "note": "드랍 몬스터: 일렉카둠",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/278",
              "from": [
                "일렉카둠"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "메일 브레이커",
              "kind": "기타",
              "note": "드랍 몬스터: 아스테",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/431",
              "from": [
                "아스테"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "명예 코인",
              "kind": "기타",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3631",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "드랍 몬스터: 자이언트 웜, 버려진 흑마법 실험체, 저주받은 물의 대정령, 알로퍼스 메가, 알로퍼스 비아, 수룡의 데비, 수룡의 수호자, 카푸",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/137",
              "from": [
                "자이언트 웜",
                "버려진 흑마법 실험체",
                "저주받은 물의 대정령",
                "알로퍼스 메가",
                "알로퍼스 비아",
                "수룡의 데비",
                "수룡의 수호자",
                "카푸"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "물의 숨결",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/724",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "물의 피혁",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/733",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "벡드코빈",
              "kind": "기타",
              "note": "드랍 몬스터: 머맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/465",
              "from": [
                "머맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "드랍 몬스터: 저주받은 물의 대정령, 뼈 뱀장어, 바다 터틀 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/3702",
              "from": [
                "저주받은 물의 대정령",
                "뼈 뱀장어",
                "바다 터틀 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "빙령의 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 알로퍼스 메가, 알로퍼스 비아, 수룡의 데비, 수룡의 수호자, 카푸, 머맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/618",
              "from": [
                "알로퍼스 메가",
                "알로퍼스 비아",
                "수룡의 데비",
                "수룡의 수호자",
                "카푸",
                "머맨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "상급 만능 충전석 (귀속)",
              "kind": "소모품",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/351882",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236702",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수룡 비늘",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/719",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수정 단검",
              "kind": "무기",
              "note": "드랍 몬스터: 뼈 뱀장어, 심해어, 크러스트시안",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/423",
              "from": [
                "뼈 뱀장어",
                "심해어",
                "크러스트시안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "수정 장갑",
              "kind": "방어구",
              "note": "드랍 몬스터: 알로퍼스 메가, 알로퍼스 비아, 수룡의 데비, 수룡의 수호자",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/591",
              "from": [
                "알로퍼스 메가",
                "알로퍼스 비아",
                "수룡의 데비",
                "수룡의 수호자"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "신성한 성장의 각반",
              "kind": "방어구",
              "note": "드랍 몬스터: 버려진 흑마법 실험체",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/236712",
              "from": [
                "버려진 흑마법 실험체"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "심연의 반지",
              "kind": "악세",
              "note": "드랍 몬스터: 바다 터틀 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/658",
              "from": [
                "바다 터틀 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "싸울아비 장검",
              "kind": "무기",
              "note": "드랍 몬스터: 상어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/433",
              "from": [
                "상어"
              ],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "양손검",
              "kind": "무기",
              "note": "드랍 몬스터: 아스테",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/318",
              "from": [
                "아스테"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "에바의 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 바다 터틀 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/514",
              "from": [
                "바다 터틀 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "엘름의 축복",
              "kind": "기타",
              "note": "드랍 몬스터: 머맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/320",
              "from": [
                "머맨"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "영웅 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/753",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "요정족 방패",
              "kind": "방어구",
              "note": "드랍 몬스터: 크러스트시안",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4621",
              "from": [
                "크러스트시안"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은빛 훈장",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/150293",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은색의 망토",
              "kind": "방어구",
              "note": "드랍 몬스터: 수룡의 수호자",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/569",
              "from": [
                "수룡의 수호자"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "은장검",
              "kind": "무기",
              "note": "드랍 몬스터: 알로퍼스 메가, 알로퍼스 비아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6391",
              "from": [
                "알로퍼스 메가",
                "알로퍼스 비아"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "정령의 수정 (네이쳐스 블레싱)",
              "kind": "재료",
              "note": "드랍 몬스터: 저주받은 물의 대정령, 아스테, 시댄서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/954",
              "from": [
                "저주받은 물의 대정령",
                "아스테",
                "시댄서"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "정령의 수정 (아쿠아 프리즌)",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜, 시댄서",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/5801",
              "from": [
                "자이언트 웜",
                "시댄서"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "정령의 수정 (폴루트 워터)",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜, 알로퍼스 메가, 알로퍼스 비아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/955",
              "from": [
                "자이언트 웜",
                "알로퍼스 메가",
                "알로퍼스 비아"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "청동 판금 갑옷",
              "kind": "방어구",
              "note": "드랍 몬스터: 심해어, 산호껍질 크랩맨",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/6351",
              "from": [
                "심해어",
                "산호껍질 크랩맨"
              ],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "투사의 서판 (각성 : 파푸리온)",
              "kind": "소모품",
              "note": "드랍 몬스터: 크러스트시안, 시댄서, 인어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/116182",
              "from": [
                "크러스트시안",
                "시댄서",
                "인어"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "퓨어 엘릭서",
              "kind": "소모품",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/4141",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "할파스의 집념",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜, 버려진 흑마법 실험체, 저주받은 물의 대정령, 뼈 뱀장어, 심해어, 크러스트시안, 바다 터틀 드래곤, 알로퍼스 메가, 알로퍼스 비아, 일렉카둠, 상어, 수룡의 데비, 수룡의 수호자, 아스테, 시댄서, 카푸, 머맨, 산호껍질 크랩맨, 저주받은 무녀 사엘, 해파리, 실라칸스, 인어",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/767",
              "from": [
                "자이언트 웜",
                "버려진 흑마법 실험체",
                "저주받은 물의 대정령",
                "뼈 뱀장어",
                "심해어",
                "크러스트시안",
                "바다 터틀 드래곤",
                "알로퍼스 메가",
                "알로퍼스 비아",
                "일렉카둠",
                "상어",
                "수룡의 데비",
                "수룡의 수호자",
                "아스테",
                "시댄서",
                "카푸",
                "머맨",
                "산호껍질 크랩맨",
                "저주받은 무녀 사엘",
                "해파리",
                "실라칸스",
                "인어"
              ],
              "sharedCount": 4,
              "scope": "all"
            },
            {
              "name": "해신의 삼지창",
              "kind": "무기",
              "note": "드랍 몬스터: 알로퍼스 메가, 알로퍼스 비아, 수룡의 수호자",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/468",
              "from": [
                "알로퍼스 메가",
                "알로퍼스 비아",
                "수룡의 수호자"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "황금 지휘봉",
              "kind": "무기",
              "note": "드랍 몬스터: 일렉카둠",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/8001",
              "from": [
                "일렉카둠"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑빛의 크로우",
              "kind": "기타",
              "note": "드랍 몬스터: 바다 터틀 드래곤",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/503",
              "from": [
                "바다 터틀 드래곤"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑정령의 수정 (블러디 크로우)",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/31123",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "드랍 몬스터: 자이언트 웜",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/754",
              "from": [
                "자이언트 웜"
              ],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "힘의 지팡이",
              "kind": "무기",
              "note": "드랍 몬스터: 뼈 뱀장어, 알로퍼스 메가, 알로퍼스 비아",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/db/item/1085",
              "from": [
                "뼈 뱀장어",
                "알로퍼스 메가",
                "알로퍼스 비아"
              ],
              "sharedCount": 2,
              "scope": "shared"
            }
          ]
        }
      ]
    },
    {
      "key": "field",
      "label": "필드 사냥터",
      "zoneLabel": "사냥터",
      "confidence": "부분",
      "note": "리니지M 한국 본서버 기준 대표 필드(야외) 사냥터. 던전(개미굴/요정숲 던전/글루디오 던전/기란 감옥/에바왕국 던전/말하는 섬 던전/오만의 탑/화룡의 둥지 등)은 담당 범위가 아니므로 제외했다. 인벤 추천 사냥터 가이드·인벤 웹진 기사·헝그리앱 기사에서 명시적으로 확인된 사실만 기재했으며, 출처에서 확인되지 않은 항목은 '미확인'으로 표기했다. 출처 다수가 리니지M 서비스 초기~중기(2017~2019) 기사이므로 이후 업데이트로 드랍 구성이 변경되었을 수 있다. 드랍 수치(시간당 재료/아데나)는 출처 기준 46레벨 기사·요정 표본이다. 고유/공통 판정은 하지 않았다. ★필드는 층이 아니라 서로 독립된 개별 사냥터다. 따라서 여기서 '고유'로 표시되는 것은 '이 목록에 실린 필드들끼리 비교했을 때만 한 곳에서 확인됐다'는 뜻일 뿐, 게임 전체에서 그 사냥터에만 나온다는 뜻이 아니다. 목록에 없는 사냥터에서도 나올 수 있다. ※하이네 늪지대·남부 필드·로서스섬은 출처가 세 곳을 묶어 서술해 개별 사냥터 단위 확정이 불가하다(공통 판정이 부풀 수 있음). ※윈다우드·오크숲은 리니지M 근거를 못 찾아 미확인으로 남겼고 유효 사냥터에서 제외했다.",
      "zones": [
        {
          "key": "field_1",
          "zone": "말하는 섬 - 오크부락~오크망루",
          "levelRange": "미확인 (저레벨 초반 사냥터)",
          "entry": "말하는 섬 필드. 자동사냥 중 다른 지역으로 벗어나지 않는 안정적 구역으로 소개됨",
          "monsters": [
            "오크 궁수",
            "오크 전사",
            "오크 마법사",
            "골렘",
            "라이칸스로프"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "오크류 주력 재료",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "철",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_2",
          "zone": "말하는 섬 - 북섬",
          "levelRange": "미확인 (저레벨 초반 사냥터)",
          "entry": "말하는 섬 북쪽 필드",
          "monsters": [
            "라이칸스로프"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "라이칸스로프만 다수 출현해 가죽 수집에 유리",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [
                "라이칸스로프"
              ],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_3",
          "zone": "말하는 섬 - 거미숲",
          "levelRange": "미확인 (저레벨 초반 사냥터)",
          "entry": "말하는 섬 마을 바로 아래 위치. 상대적으로 사냥 인구가 적음",
          "monsters": [
            "웅골리언트",
            "셸로브",
            "떠도는 유령",
            "원한의 망령"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450"
          ],
          "note": "",
          "drops": [
            {
              "name": "천",
              "kind": "재료",
              "note": "천 수집에 최적화된 필드",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_4",
          "zone": "말하는 섬 - 검은 기사단 야영지 / 장로밭",
          "levelRange": "46+",
          "entry": "말하는 섬 검은 기사단 야영지 및 그 주변 필드(야영지에서 빠져나오면 장로밭)",
          "monsters": [
            "흑기사",
            "장로",
            "다이어울프"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180233",
            "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450"
          ],
          "note": "",
          "drops": [
            {
              "name": "철",
              "kind": "재료",
              "note": "철 수급 명소. 시간당 60~100개(46레벨 기준)",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180233",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "보석",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "시간당 9~12만(46레벨 기준)",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180233",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_5",
          "zone": "말하는 섬 - 난쟁이 부락 (동/서)",
          "levelRange": "미확인",
          "entry": "말하는 섬 필드. 검은 기사단 야영지보다 경쟁이 적음",
          "monsters": [
            "드워프 계열 몬스터"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450"
          ],
          "note": "",
          "drops": [
            {
              "name": "철",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "난쟁이 장비",
              "kind": "기타",
              "note": "출처에 '난쟁이 장비'로만 표기, 세부 품목 미확인",
              "confidence": "부분",
              "source": "https://www.hungryapp.co.kr/news/news_view.php?bcode=news&pid=64450",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_6",
          "zone": "죽음의 폐허 (해골밭)",
          "levelRange": "미확인 (저레벨 초반 사냥터)",
          "entry": "글루딘 마을 12시 방향의 무덤 형태 필드",
          "monsters": [
            "해골",
            "스파토이",
            "좀비",
            "버그베어",
            "바포메트"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "바포메트의 지팡이",
              "kind": "무기",
              "note": "카오틱 신전 근처 보스 몬스터 '바포메트' 드랍",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [
                "바포메트"
              ],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_7",
          "zone": "산적 출몰 지역 / 산적 소굴",
          "levelRange": "45 전후 (퀘스트 사냥터)",
          "entry": "기란 성 바로 위. 텔레포트로 바로 이동(5,000아데나) 또는 웰던 마을에서 동쪽으로 이동",
          "monsters": [
            "산적"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "홀리 워크",
              "kind": "소모품",
              "note": "마법서",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_8",
          "zone": "싸이클롭스 소굴",
          "levelRange": "미확인 (45 전후 퀘스트 사냥터)",
          "entry": "기란 영지 동쪽",
          "monsters": [
            "싸이클롭스",
            "다크엘프",
            "아울베어",
            "임프 장로"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "사일런스",
              "kind": "소모품",
              "note": "마법서",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "힐 올",
              "kind": "소모품",
              "note": "마법서",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "그레이터 힐",
              "kind": "소모품",
              "note": "마법서 5단계",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=179950&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_9",
          "zone": "기란 마을 남쪽 숲",
          "levelRange": "미확인",
          "entry": "기란 마을 남쪽 필드. 출처 기사에 '04.기란 마을 남쪽 숲'으로 표기",
          "monsters": [
            "다크엘프",
            "정예 다크엘프"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 스톰 샷",
              "kind": "소모품",
              "note": "요정의 정령 마법. 원거리 명중 +3, 원거리 대미지 +6",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_10",
          "zone": "시련의 숲",
          "levelRange": "46+",
          "entry": "켄트 마을 북쪽 필드. 몬스터 수가 매우 많으나 유저 경쟁이 치열함",
          "monsters": [
            "난쟁이족",
            "잡몹 계열"
          ],
          "confidence": "확인",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180277",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180233"
          ],
          "note": "",
          "drops": [
            {
              "name": "철",
              "kind": "재료",
              "note": "시간당 20~30개(46레벨 기준)",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "천",
              "kind": "재료",
              "note": "시간당 15~25개(46레벨 기준)",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            },
            {
              "name": "난쟁이족 시리즈",
              "kind": "기타",
              "note": "잡템. 시간당 2~4개. 용해해 축복의 가루 수급 가능",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "넓은 창",
              "kind": "무기",
              "note": "잡템",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "사슬 갑옷",
              "kind": "방어구",
              "note": "잡템",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180277",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "시간당 17~20만(46레벨 기준)",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_11",
          "zone": "동부 사막지대",
          "levelRange": "45~46+",
          "entry": "필드 사냥터. 접근성이 쉽고 자동 사냥이 안정적",
          "monsters": [
            "바실리스크"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180231",
            "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "보석",
              "kind": "재료",
              "note": "시간당 30~40개(46레벨 기준, 활요정은 최소 30~최대 45개). 보석 수급 대표 필드",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180231",
              "from": [],
              "sharedCount": 2,
              "scope": "shared"
            },
            {
              "name": "헤이스트",
              "kind": "소모품",
              "note": "마법서",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180231",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "시간당 14~15만(46레벨 기준)",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180277&site=lineagem",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_12",
          "zone": "하이네 동쪽 필드 (크랩맨 밭)",
          "levelRange": "48+",
          "entry": "하이네 마을로 워프한 후 마을에서 나와 동쪽으로 도보 이동. 자동사냥 중 거울의 숲으로 이탈 시 도펠겡어·터틀 드래곤에게 사망 위험",
          "monsters": [
            "크랩맨",
            "악어"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180808"
          ],
          "note": "",
          "drops": [
            {
              "name": "가죽",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180808",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "각인 장비 상자",
              "kind": "기타",
              "note": "낮은 확률",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180808",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "아데나",
              "kind": "기타",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=180808",
              "from": [],
              "sharedCount": 4,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_13",
          "zone": "하이네 늪지대",
          "levelRange": "고급 (구체 수치 미확인)",
          "entry": "하이네 지역 늪지대 필드",
          "monsters": [],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 워터 라이프",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "축복받은 갑옷 마법 주문서",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_14",
          "zone": "남부 필드",
          "levelRange": "고급 (구체 수치 미확인)",
          "entry": "잊혀진 섬 선착장부터 남부 필드를 거쳐 이어지는 해안가 라인",
          "monsters": [
            "터틀 드래곤",
            "라미아",
            "비홀더"
          ],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181040"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 워터 라이프",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "축복받은 갑옷 마법 주문서",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_15",
          "zone": "로서스섬",
          "levelRange": "고급 (구체 수치 미확인)",
          "entry": "미확인",
          "monsters": [],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 워터 라이프",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "축복받은 갑옷 마법 주문서",
              "kind": "소모품",
              "note": "출처가 '남부 필드/로서스섬/하이네 늪지대'를 묶어 표기 ※출처가 하이네 늪지대·남부 필드·로서스섬 세 곳을 묶어 표기해 이 사냥터 단독 드랍인지 확정 불가 — 공통(하양) 판정이 부풀려졌을 수 있음.",
              "confidence": "부분",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_16",
          "zone": "아덴 집시촌",
          "levelRange": "41~50 (퀘스트 사냥터)",
          "entry": "아덴 지역 필드. 출처 기사에 '11.아덴 집시촌'으로 표기",
          "monsters": [
            "다크엘프",
            "정예 다크엘프"
          ],
          "confidence": "확인",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
            "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 스톰 샷",
              "kind": "소모품",
              "note": "요정의 정령 마법. 원거리 명중 +3, 원거리 대미지 +6",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            },
            {
              "name": "무기 마법 주문서",
              "kind": "소모품",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "갑옷 마법 주문서",
              "kind": "소모품",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_17",
          "zone": "야만의 숲지대",
          "levelRange": "미확인",
          "entry": "출처 기사에 '31.야만의 숲지대'로 표기",
          "monsters": [
            "다크엘프",
            "정예 다크엘프"
          ],
          "confidence": "부분",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem"
          ],
          "note": "",
          "drops": [
            {
              "name": "정령의 수정 - 스톰 샷",
              "kind": "소모품",
              "note": "요정의 정령 마법. 원거리 명중 +3, 원거리 대미지 +6",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=181094&site=lineagem",
              "from": [],
              "sharedCount": 3,
              "scope": "shared"
            }
          ]
        },
        {
          "key": "field_18",
          "zone": "용의 계곡",
          "levelRange": "71~80",
          "entry": "필드 사냥터. 던전(용의 계곡 던전 1~7층)과는 별도 구역",
          "monsters": [
            "대흑장로",
            "드레이크",
            "거대 해골류",
            "오우거"
          ],
          "confidence": "확인",
          "sources": [
            "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
          ],
          "note": "",
          "drops": [
            {
              "name": "흑장로의 로브",
              "kind": "방어구",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "흑장로의 샌달",
              "kind": "방어구",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오리하루콘의 단검",
              "kind": "무기",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "기백의 반지",
              "kind": "악세",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오우거의 벨트",
              "kind": "악세",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "쇼크 스턴",
              "kind": "소모품",
              "note": "기술서",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "오우거의 피",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "제로스의 주머니",
              "kind": "기타",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "드레이크의 알",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://www.inven.co.kr/webzine/news/?news=180016&site=lineagem",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "희귀 제작 비법서",
              "kind": "재료",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_19",
          "zone": "엘모어 격전지 / 주둔지",
          "levelRange": "고급 (구체 수치 미확인)",
          "entry": "미확인",
          "monsters": [],
          "confidence": "부분",
          "sources": [
            "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683"
          ],
          "note": "",
          "drops": [
            {
              "name": "기술서 리덕션 아머",
              "kind": "소모품",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            },
            {
              "name": "멸마의 반지",
              "kind": "악세",
              "note": "",
              "confidence": "확인",
              "source": "https://lineagem.inven.co.kr/dataninfo/guide/?idx=181683",
              "from": [],
              "sharedCount": 1,
              "scope": "unique"
            }
          ]
        },
        {
          "key": "field_20",
          "zone": "윈다우드",
          "levelRange": "미확인",
          "entry": "미확인",
          "monsters": [],
          "confidence": "미확인",
          "sources": [],
          "note": "",
          "drops": []
        },
        {
          "key": "field_21",
          "zone": "오크숲",
          "levelRange": "미확인",
          "entry": "미확인",
          "monsters": [],
          "confidence": "미확인",
          "sources": [],
          "note": "",
          "drops": []
        }
      ]
    }
  ]
};
