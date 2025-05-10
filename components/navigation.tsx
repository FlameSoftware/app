"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Book, Trophy, User, BookOpen } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-xs mt-1">Devocional</span>
        </Link>
        <Link
          href="/quiz"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/quiz") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Book className="h-5 w-5" />
          <span className="text-xs mt-1">Quiz</span>
        </Link>
        <Link
          href="/ranking"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/ranking") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs mt-1">Ranking</span>
        </Link>
        <Link
          href="/account"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/account") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Conta</span>
        </Link>
      </div>
    </div>
  )
}
