# claude-nextjs-starters

Next.js 15 + React 19 기반의 프로덕션 준비 웹 애플리케이션 스타터 템플릿입니다.

> ⚠️ PRD(`docs/PRD.md`)와 로드맵(`docs/ROADMAP.md`)이 아직 없습니다. 개발을 시작하기 전에 작성하고 이 README를 갱신하세요.

## 🛠️ 기술 스택

| 영역          | 기술                                    |
| ------------- | --------------------------------------- |
| Framework     | Next.js 15.5.3 (App Router + Turbopack) |
| Runtime       | React 19.1.0                            |
| Language      | TypeScript 5                            |
| Styling       | TailwindCSS v4 + shadcn/ui (new-york)   |
| Forms         | React Hook Form + Zod + Server Actions  |
| UI Components | Radix UI + Lucide Icons                 |
| Theme         | next-themes (라이트/다크/시스템)        |
| Development   | ESLint + Prettier + Husky + lint-staged |

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 모든 검사 통합 실행
npm run check-all
```

개발 서버를 실행한 후 [http://localhost:3000](http://localhost:3000)에서 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/           # Next.js App Router 페이지
├── components/    # React 컴포넌트
│   ├── layout/    # 레이아웃 (Header, Footer, Container)
│   ├── navigation/# 네비게이션
│   ├── providers/ # Context 프로바이더
│   ├── ui/        # shadcn/ui 기본 컴포넌트
│   └── theme-toggle.tsx
└── lib/           # 유틸리티 및 환경변수 검증
```

## 📖 개발 가이드

- [프로젝트 구조](./docs/guides/project-structure.md)
- [스타일링 가이드](./docs/guides/styling-guide.md)
- [컴포넌트 패턴](./docs/guides/component-patterns.md)
- [Next.js 15.5.3 가이드](./docs/guides/nextjs-15.md)
- [폼 처리 가이드](./docs/guides/forms-react-hook-form.md)
- [Claude Code 개발 지침](./CLAUDE.md)
