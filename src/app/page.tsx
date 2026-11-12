import { Container } from '@/components/layout/container'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

/**
 * 홈 페이지 - 스타터킷 진입점
 * PRD 작성 후 실제 콘텐츠로 교체하세요.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Next.js 스타터킷
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg">
              Next.js 15 · TypeScript · TailwindCSS v4 · shadcn/ui 기반의
              프로덕션 준비 개발 기반입니다. PRD를 작성하고 개발을 시작하세요.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
