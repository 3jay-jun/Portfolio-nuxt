# Design System

## 1. Visual Theme & Atmosphere

이 디자인 언어는 자신감 있는 미니멀리즘의 정수다 — 모든 픽셀이 목적을 갖고, 장식은 그 존재 이유를 스스로 증명해야 하는 흑백의 세계. 전체 경험은 강렬한 이원성 위에 세워진다: 제트 블랙(`#000000`)과 순수한 화이트(`#ffffff`), 그 사이를 희석시키는 중간 톤의 그레이는 거의 존재하지 않는다. 이것은 아직 디자인이 덜 된 스타트업의 공허한 미니멀리즘이 아니라 — 침묵이 곧 권위인 브랜드의 의도적인 절제다.

핵심 서체는 **Pretendard**다. 기하학적이고 현대적인 산세리프 계열로, 굵기 스케일이 촘촘하게 갖춰져 있어 디스플레이부터 캡션까지 단 하나의 패밀리로 완결된 타이포그래피 시스템을 구성한다. Pretendard Bold(700) 헤드라인은 52px에서 빌보드처럼 강렬하고 직접적이다. Pretendard Medium(500)은 버튼과 UI 텍스트를 담당하며 더 부드럽고 읽기 편한 인상을 준다. 이 둘이 만들어내는 타이포그래피 시스템은 교통 안내판처럼 명확하고 효율적이다 — 빠르게 훑어보기 위해 설계된 구조.

인터페이스의 정체성을 가장 분명히 드러내는 것은 풀블리드 사진·일러스트레이션과 알약 모양(pill-shaped) 인터랙티브 요소(999px border-radius)의 조합이다. 내비게이션 칩, CTA 버튼, 카테고리 선택기 모두 이 캡슐 형태를 공유하며, 촉각적이고 엄지 친화적인 인터페이스 언어를 형성한다. 따뜻하고 약간 양식화된 일러스트레이션은 자칫 차가울 수 있는 모노크롬 시스템에 인간적인 온기를 불어넣는다. 레이아웃은 화이트 콘텐츠 섹션과 풀 블랙 푸터를 번갈아 배치하며, 카드 기반 레이아웃은 가장 섬세한 그림자(rgba(0,0,0,0.12–0.16))를 사용해 플랫 미학을 깨뜨리지 않으면서 미묘한 입체감을 만든다.

**핵심 특성:**
- 순수 흑백 기반 — UI 크롬에는 중간 톤 그레이가 거의 없음
- Pretendard 단일 패밀리 — 굵기(weight)로 헤드라인과 바디를 구분
- 알약 모양의 버튼, 칩, 내비게이션 아이템 — 999px border-radius
- 따뜻한 인간 중심 일러스트레이션이 모노크롬 인터페이스와 대비
- 카드 기반 레이아웃, 囁whisper 수준의 그림자(0.12–0.16 opacity)
- 8px 스페이싱 그리드, 컴팩트하고 정보 밀도 높은 레이아웃
- 강렬한 사진을 풀블리드 히어로 배경으로 활용
- 블랙 푸터가 페이지를 고대비 환경으로 마무리

---

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): 정의적 브랜드 색상 — 프라이머리 버튼, 헤드라인, 내비게이션 텍스트, 푸터에 사용. '거의 검정'이나 '오프블랙'이 아닌, 타협 없는 순수 블랙.
- **Pure White** (`#ffffff`): 기본 배경색이자 역방향 텍스트. 페이지 배경, 카드 표면, 블랙 요소 위의 텍스트에 사용.

### Interactive & Button States
- **Hover Gray** (`#e2e2e2`): 화이트 버튼 호버 상태 — 따뜻함 없이 명확한 피드백을 제공하는 쿨 라이트 그레이.
- **Hover Light** (`#f3f3f3`): 엘리베이티드 화이트 버튼의 서브틀한 호버 — 부드러운 인터랙션 피드백.
- **Chip Gray** (`#efefef`): 세컨더리/필터 버튼과 내비게이션 칩의 배경 — 중립적이고 극도로 밝은 그레이.

### Text & Content
- **Body Gray** (`#4b4b4b`): 세컨더리 텍스트와 푸터 링크 — 따뜻하거나 차갑지 않은 진정한 미드그레이.
- **Muted Gray** (`#afafaf`): 터셔리 텍스트, 강조가 줄어든 푸터 링크, 플레이스홀더 콘텐츠.

### Borders & Separation
- **Border Black** (`#000000`): 구조적 구획을 위한 얇은 1px 테두리 — 구분선과 폼 컨테이너에 드물게 사용.

### Shadows & Depth
- **Shadow Light** (`rgba(0, 0, 0, 0.12)`): 표준 카드 엘리베이션 — 콘텐츠 카드에 깃털처럼 가벼운 입체감.
- **Shadow Medium** (`rgba(0, 0, 0, 0.16)`): 플로팅 액션 버튼과 오버레이의 약간 강한 엘리베이션.
- **Button Press** (`rgba(0, 0, 0, 0.08)`): 세컨더리 버튼의 액티브/프레스 상태 인셋 그림자.

### Link States
- **Default Link Blue** (`#0000ee`): 언더라인이 있는 텍스트 링크의 표준 브라우저 블루 — 바디 콘텐츠에 사용.
- **Link White** (`#ffffff`): 다크 표면 위의 링크 — 푸터와 다크 섹션에 사용.
- **Link Black** (`#000000`): 라이트 표면 위의 링크, 언더라인 데코레이션 포함.

### Gradient System
이 디자인 시스템은 **완전히 그라디언트-프리**다. 흑백 이원성과 플랫 색상 블록이 모든 시각적 위계를 만든다. 어디에도 그라디언트가 등장하지 않는다 — 모든 표면은 단색이고, 모든 전환은 하드 에지 또는 그림자다.

---

## 3. Typography Rules

### Font Family
**Pretendard** 단일 패밀리를 모든 용도에 사용한다. 굵기(weight)로 역할을 구분하며, 헤드라인과 UI 텍스트 모두 Pretendard 내에서 해결한다.

```css
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Thin.woff2') format('woff2');
  font-weight: 100;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-ExtraLight.woff2') format('woff2');
  font-weight: 200;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Light.woff2') format('woff2');
  font-weight: 300;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-ExtraBold.woff2') format('woff2');
  font-weight: 800;
}
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard-Black.woff2') format('woff2');
  font-weight: 900;
}

/* 기본 적용 */
body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

### Available Weights
| Weight | 파일 | 사용처 |
|--------|------|--------|
| 100 (Thin) | Pretendard-Thin.woff2 | 장식적 대형 디스플레이, 로고 보조 |
| 200 (ExtraLight) | Pretendard-ExtraLight.woff2 | 서브 히어로, 인트로 텍스트 |
| 300 (Light) | Pretendard-Light.woff2 | 보조 바디, 캡션 |
| 400 (Regular) | Pretendard-Regular.woff2 | 기본 바디 텍스트 |
| 500 (Medium) | Pretendard-Medium.woff2 | UI 텍스트, 버튼, 내비게이션 |
| 600 (SemiBold) | Pretendard-SemiBold.woff2 | 서브헤딩, 강조 라벨 |
| 700 (Bold) | Pretendard-Bold.woff2 | 섹션 헤딩, 카드 타이틀 |
| 800 (ExtraBold) | Pretendard-ExtraBold.woff2 | 메이저 헤딩 |
| 900 (Black) | Pretendard-Black.woff2 | 디스플레이/히어로, 빌보드 헤드라인 |

### Typography Hierarchy

| Role | Weight | Size | Line Height | Notes |
|------|--------|------|-------------|-------|
| Display / Hero | 900 (Black) | 52px (3.25rem) | 1.23 | 최대 임팩트, 빌보드 존재감 |
| Section Heading | 800 (ExtraBold) | 36px (2.25rem) | 1.22 | 주요 섹션 앵커 |
| Card Title | 700 (Bold) | 32px (2rem) | 1.25 | 카드·기능 헤딩 |
| Sub-heading | 700 (Bold) | 24px (1.5rem) | 1.33 | 보조 섹션 헤더 |
| Small Heading | 600 (SemiBold) | 20px (1.25rem) | 1.40 | 컴팩트 헤딩, 리스트 타이틀 |
| Nav / UI Large | 500 (Medium) | 18px (1.13rem) | 1.33 | 내비게이션 링크, 주요 UI 텍스트 |
| Body / Button | 400–500 | 16px (1rem) | 1.25–1.50 | 표준 바디 텍스트, 버튼 라벨 |
| Caption | 400–500 | 14px (0.88rem) | 1.14–1.43 | 메타데이터, 설명, 소형 링크 |
| Micro | 300–400 | 12px (0.75rem) | 1.67 | 세부 정보, 법적 텍스트 |

### Principles
- **무거운 헤드라인, 미디엄 바디**: 헤드라인은 800–900 weight — 모든 헤드라인이 빌보드의 힘으로 도달한다. 바디와 UI 텍스트는 400–500을 사용하여 weight 대비로 명확한 시각적 위계를 만든다.
- **타이트한 헤딩 줄간격**: 모든 헤드라인은 1.22–1.40의 줄간격 — 읽기보다 훑기를 위해 설계된 컴팩트하고 임팩트 있는 구조.
- **기능적 타이포그래피**: 장식적 타이포그래피 처리는 존재하지 않는다. 자간 조정, 텍스트 변환, 장식적 크기 조절 없음. 모든 텍스트 요소는 직접적인 커뮤니케이션 목적을 수행한다.
- **단일 패밀리, 역할 구분은 weight로**: Pretendard 하나로 모든 텍스트 역할을 커버하되, 굵기 스케일을 통해 헤드라인과 UI를 명확히 구분한다.

---

## 4. Component Stylings

### Buttons

**Primary Black (CTA)**
```css
background: #000000;
color: #ffffff;
padding: 10px 12px;
border-radius: 999px;
border: none;
font-family: 'Pretendard', sans-serif;
font-weight: 500;
font-size: 16px;
/* Focus */
box-shadow: inset rgb(255,255,255) 0px 0px 0px 2px;
```
프라이머리 액션 버튼 — 굵고, 고대비, 놓칠 수 없는.

**Secondary White**
```css
background: #ffffff;
color: #000000;
padding: 10px 12px;
border-radius: 999px;
/* Hover */
background: #e2e2e2;
```
다크 배경 위 또는 Primary Black과 나란히 세컨더리 액션으로 사용.

**Chip / Filter**
```css
background: #efefef;
color: #000000;
padding: 14px 16px;
border-radius: 999px;
font-weight: 500;
font-size: 14px;
/* Active */
box-shadow: inset rgba(0,0,0,0.08) 0px 0px 0px 999px;
```
내비게이션 칩, 카테고리 선택기, 필터 토글.

**Floating Action**
```css
background: #ffffff;
color: #000000;
padding: 14px;
border-radius: 999px;
box-shadow: rgba(0,0,0,0.16) 0px 2px 8px 0px;
transform: translateY(2px);
/* Hover */
background: #f3f3f3;
```
맵 컨트롤, 스크롤 투 탑, 플로팅 CTA.

---

### Cards & Containers
```css
background: #ffffff;
border-radius: 8px;              /* 표준 카드 */
border-radius: 12px;             /* 피처/프로모 카드 */
box-shadow: rgba(0,0,0,0.12) 0px 4px 16px 0px;
```
- 테두리 없음 — 카드는 스트로크가 아닌 그림자로 정의된다
- 이미지 리드 카드는 풀블리드 이미지와 텍스트 오버레이 또는 하단 텍스트 조합
- 내부 여백은 약 24–32px로 정보 밀도를 유지

---

### Inputs & Forms
```css
color: #000000;
background: #ffffff;
border: 1px solid #000000;
border-radius: 8px;
font-family: 'Pretendard', sans-serif;
font-weight: 400;
font-size: 16px;
```
- 폼 요소에서 테두리가 눈에 띄게 등장하는 유일한 지점
- 포커스: 표준 브라우저 포커스 링에 의존

---

### Navigation
```css
/* 스티키 상단 내비게이션 */
background: #ffffff;
position: sticky;
top: 0;

/* 내비게이션 링크 */
font-family: 'Pretendard', sans-serif;
font-weight: 500;
font-size: 14px–18px;
color: #000000;

/* 카테고리 칩 */
background: #efefef;
border-radius: 999px;
padding: 14px 16px;
```
- 로고: 좌측 고정
- 카테고리 내비게이션: 알약 칩 형태의 수평 나열
- 메뉴 토글: `border-radius: 50%` 원형 버튼
- 모바일: 햄버거 메뉴 패턴

---

### Image Treatment
- 따뜻하고 손으로 그린 듯한 일러스트레이션 (피처 섹션은 사진보다 일러스트 선호)
- 일러스트 스타일: 약간 양식화된 인물, 일러스트 내 따뜻한 색조, 현대적 감성
- 히어로 섹션: 대담한 사진이나 일러스트를 풀 와이드 배경으로
- 카드 내 이미지: `border-radius: 8px` 또는 `12px`

---

### Distinctive Components

**Category Pill Navigation**
```css
/* 컨테이너 */
display: flex;
gap: 8px;
overflow-x: auto;

/* 각 칩 */
background: #efefef;
color: #000000;
border-radius: 999px;
padding: 14px 16px;
font-weight: 500;
font-size: 14px;
white-space: nowrap;

/* 액티브 상태 */
background: #000000;
color: #ffffff;
```

**Hero with Dual Action**
- 좌측: 텍스트 + CTA, 우측: 맵 또는 일러스트
- 픽업/목적지 입력 필드 나란히 배치
- 블랙 알약 CTA 버튼

**Feature Cards**
- 따뜻한 인간 중심 일러스트레이션이 중심
- 하단 블랙 알약 CTA 버튼
- 배경: Pure White, 그림자로 엘리베이션 표현

---

## 5. Layout Principles

### Spacing System
```
기본 단위: 8px
스케일: 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 24 / 32px

버튼 패딩:    10px 12px (컴팩트) / 14px 16px (컴포터블)
카드 내부 패딩: 24–32px
섹션 수직 간격: 64–96px (주요 섹션 사이)
```

### Grid & Container
```
최대 컨테이너 너비: 1136px (중앙 정렬)
히어로:           2분할 — 좌측 텍스트, 우측 비주얼
피처 섹션:        2컬럼 카드 그리드 또는 풀와이드 단일 컬럼
푸터:             멀티컬럼 링크 그리드, 블랙 배경
```

### Whitespace Philosophy
- **효율적, 공허하지 않게**: 여백은 기능적이다 — 분리하기 충분하지만, 비어 보일 만큼 넘치지 않는다. 교통 시스템 같은 간격: 컴팩트하고 명확하며 목적 지향적.
- **정보 밀도 높은 카드**: 카드 내부는 최소한의 간격으로 정보를 빽빽하게 담고, 그림자와 radius로 경계를 정의한다.
- **섹션 간 여유**: 주요 섹션 사이는 충분한 수직 여백을 두되, 섹션 내 요소들은 촘촘하게 그룹화한다.

### Border Radius Scale
| 값 | 사용처 |
|----|--------|
| 0px | 인터랙티브 요소에 사각 모서리 없음 |
| 8px | 콘텐츠 카드, 입력 필드, 리스트박스 |
| 12px | 피처 카드, 대형 컨테이너, 링크 카드 |
| 999px | 모든 버튼, 칩, 내비게이션 아이템, 알약 |
| 50% | 아바타 이미지, 아이콘 컨테이너, 원형 컨트롤 |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | 그림자 없음, 단색 배경 | 페이지 배경, 인라인 콘텐츠, 텍스트 섹션 |
| Subtle (1) | `rgba(0,0,0,0.12) 0px 4px 16px` | 표준 콘텐츠 카드, 피처 블록 |
| Medium (2) | `rgba(0,0,0,0.16) 0px 4px 16px` | 엘리베이티드 카드, 오버레이 요소 |
| Floating (3) | `rgba(0,0,0,0.16) 0px 2px 8px` + `translateY(2px)` | 플로팅 액션 버튼, 맵 컨트롤 |
| Pressed (4) | `rgba(0,0,0,0.08) inset` | 액티브/프레스 버튼 상태 |
| Focus Ring | `rgb(255,255,255) 0px 0px 0px 2px inset` | 키보드 포커스 인디케이터 |

**그림자 철학**: 그림자는 순수하게 구조적 도구로 사용하며, 절대 장식적으로 쓰지 않는다. 그림자는 항상 매우 낮은 opacity(0.08–0.16)의 블랙으로 — 콘텐츠 레이어를 분리하는 데 필요한 최소한의 입체감만 만든다. blur radius는 적당히 moderate(8–16px). 색상 그림자, 레이어드 그림자 스택, 앰비언트 글로우 효과는 없다. 깊이는 그림자 엘리베이션보다 블랙/화이트 섹션 대비로 전달된다.

---

## 7. Do's and Don'ts

### ✅ Do
- 순수 블랙(`#000000`)과 순수 화이트(`#ffffff`)를 기본 팔레트로 사용 — 강렬한 대비가 이 시스템의 정체성
- 모든 버튼, 칩, 알약형 내비게이션 요소에 999px border-radius 사용
- Pretendard 900–800 weight로 빌보드 수준의 헤드라인 임팩트 유지
- 카드 엘리베이션에 whisper 수준의 그림자 사용(0.12–0.16 opacity)
- 컴팩트하고 정보 밀도 높은 레이아웃 유지
- 따뜻하고 인간 중심의 일러스트레이션으로 모노크롬 인터페이스를 부드럽게
- 콘텐츠 카드에 8px, 피처 컨테이너에 12px radius 적용
- 내비게이션과 주요 UI 텍스트에 Pretendard Medium(500) 사용
- 블랙 프라이머리 버튼과 화이트 세컨더리 버튼을 듀얼 액션 레이아웃에 페어링

### ❌ Don't
- UI 크롬에 색상 도입 금지 — 인터페이스는 철저히 블랙, 화이트, 그레이
- 버튼에 999px 이하의 radius 사용 금지 — 풀 알약 형태는 핵심 정체성 요소
- 무겁거나 high opacity 그림자 사용 금지 — 깊이는 whisper처럼 섬세해야 함
- 세리프 폰트 사용 금지 — 타이포그래피는 오직 Pretendard (기하학적 산세리프)
- 과도한 여백으로 공허한 레이아웃 생성 금지 — 정보 밀도는 의도적
- 그라디언트 또는 컬러 오버레이 사용 금지 — 모든 표면은 플랫 단색
- 장식적 테두리 사용 금지 — 테두리는 기능적(입력, 구분선)이거나 없거나
- 오프화이트나 거의 검정으로 흑백 대비 희석 금지 — 이원성은 의도적

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | 주요 변화 |
|------|-------|-----------|
| Mobile Small | 320px | 최소 레이아웃, 단일 컬럼, 스택 입력, 컴팩트 타이포그래피 |
| Mobile | 600px | 표준 모바일, 스택 레이아웃, 햄버거 내비 |
| Tablet Small | 768px | 2컬럼 그리드 시작, 확장 카드 레이아웃 |
| Tablet | 1119px | 풀 태블릿 레이아웃, 나란히 배치 히어로 |
| Desktop Small | 1120px | 데스크탑 그리드 활성화, 수평 내비 칩 |
| Desktop | 1136px | 풀 데스크탑 레이아웃, 최대 컨테이너 너비, 스플릿 히어로 |

### Touch Targets
- 모든 알약 버튼: 최소 44px 높이 (10–14px 수직 패딩 + line-height)
- 내비게이션 칩: 14px 16px 패딩으로 편안한 엄지 탭 가능
- 원형 컨트롤 (메뉴, 닫기): 50% radius로 넓고 쉽게 탭 가능
- 카드 표면은 모바일에서 전체 영역 터치 타겟

### Collapsing Strategy
- **내비게이션**: 수평 알약 내비가 원형 토글의 햄버거 메뉴로 전환
- **히어로**: 스플릿 레이아웃(텍스트 + 비주얼)이 단일 컬럼으로 스택 — 텍스트 위, 비주얼 아래
- **입력 필드**: 나란히 배치된 픽업/목적지 입력이 수직으로 스택
- **피처 카드**: 2컬럼 그리드가 풀와이드 스택 카드로 전환
- **헤딩**: 52px 디스플레이가 36px → 32px → 24px → 20px으로 단계적 축소
- **푸터**: 멀티컬럼 링크 그리드가 아코디언 또는 단일 컬럼 스택으로 전환
- **카테고리 칩**: 소형 화면에서 오버플로우와 함께 수평 스크롤

### Image Behavior
- 일러스트레이션은 컨테이너 내에서 비율을 유지하며 스케일
- 히어로 이미지는 비율 유지, 소형 화면에서 크롭 가능
- 카드 이미지는 모든 크기에서 8–12px radius 유지

---

## 9. Quick Reference & Prompt Guide

### 색상 빠른 참조
```
프라이머리 버튼:        #000000
페이지 배경:           #ffffff
버튼 텍스트 (블랙 위):  #ffffff
버튼 텍스트 (화이트 위): #000000
세컨더리 텍스트:        #4b4b4b
터셔리 텍스트:          #afafaf
칩 배경:               #efefef
호버 상태:             #e2e2e2
카드 그림자:            rgba(0,0,0,0.12) 0px 4px 16px
푸터 배경:             #000000
```

### 컴포넌트 예시 프롬프트
- "Pure White(`#ffffff`) 배경의 히어로 섹션. Pretendard Black(900) 52px 헤드라인, line-height 1.23, 색상 `#000000`. Body Gray(`#4b4b4b`) 서브타이틀 Pretendard Regular(400) 16px, line-height 1.50. 하단에 `#000000` 배경, 화이트 텍스트, 999px radius, padding 10px 12px의 알약 CTA 버튼."
- "수평 알약 칩 내비게이션 바. 각 칩: `#efefef` 배경, `#000000` 텍스트, 14px 16px 패딩, 999px radius, Pretendard Medium(500) 14px. 액티브 칩: 블랙 배경에 화이트 텍스트로 인버전."
- "Pure White 위의 피처 카드, 8px radius, 그림자 `rgba(0,0,0,0.12) 0px 4px 16px`. 타이틀: Pretendard Bold(700) 24px. 설명: Body Gray(`#4b4b4b`) Pretendard Regular(400) 16px. 하단 블랙 알약 CTA 버튼."
- "`#000000` 배경의 다크 푸터. Pure White 헤딩 Pretendard ExtraBold(800) 20px. 푸터 링크 Muted Gray(`#afafaf`) Pretendard Regular(400) 14px. 링크 호버 시 Pure White. 멀티컬럼 그리드."
- "Pure White 플로팅 액션 버튼, 999px radius, 14px 패딩, 그림자 `rgba(0,0,0,0.16) 0px 2px 8px`. 호버 시 배경 `#f3f3f3`."

### 반복 작업 가이드
1. 한 번에 **하나의 컴포넌트**에 집중
2. 엄격한 흑백 팔레트 참조 — "어둡게" 대신 "Black(`#000000`)"으로 명시
3. 버튼과 알약에 항상 999px radius 지정 — 협상 불가
4. 폰트 weight를 명시적으로 서술 — "Pretendard Black(900) 헤드라인, Pretendard Medium(500) 라벨"
5. 그림자는 "whisper 그림자 `rgba(0,0,0,0.12) 0px 4px 16px`"로 — 절대 무겁지 않게
6. 레이아웃은 컴팩트하고 정보 밀도 높게 유지 — 공허함이 아닌 효율
7. 일러스트레이션은 따뜻하고 인간적으로 — "따뜻한 톤의 양식화된 인물" 묘사
8. CTA 듀얼 액션 레이아웃에서 블랙과 화이트 버튼을 균형 있게 페어링
