import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react"

export default function DevotionalPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Daily Devotional</h1>
        <div className="text-sm text-muted-foreground">{currentDate}</div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">Today</span>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Finding Peace in Troubled Times</CardTitle>
          <CardDescription>John 14:27</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-accent/20 rounded-md">
            <p className="italic">
              "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your
              hearts be troubled and do not be afraid."
            </p>
            <p className="text-right text-sm mt-2">- John 14:27</p>
          </div>

          <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-background/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </Button>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p>
              In today's devotional, we explore how Jesus offers us a peace that transcends our circumstances. Unlike
              the temporary peace the world offers, Christ's peace is eternal and sustaining.
            </p>
            <p>
              When we face challenges, this verse reminds us that we don't need to let our hearts be troubled. Instead,
              we can rest in the peace that Jesus freely gives to all who trust in Him.
            </p>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reflection Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium">1. How have you experienced God's peace in difficult situations?</p>
            <p className="font-medium">2. What worries can you surrender to God today?</p>
            <p className="font-medium">3. How can you share God's peace with someone this week?</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
