"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RankingPage() {
  const [timeFilter, setTimeFilter] = useState("week")

  // Mock data for rankings
  const rankings = {
    week: [
      { id: 1, name: "Sarah Johnson", score: 98, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Michael Chen", score: 95, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "David Wilson", score: 92, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Emily Rodriguez", score: 88, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "James Taylor", score: 85, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Sophia Martinez", score: 82, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Daniel Brown", score: 78, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Olivia Lee", score: 75, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 9, name: "William Garcia", score: 72, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 10, name: "Ava Clark", score: 68, avatar: "/placeholder.svg?height=40&width=40" },
    ],
    month: [
      { id: 2, name: "Michael Chen", score: 456, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 1, name: "Sarah Johnson", score: 442, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "James Taylor", score: 410, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "David Wilson", score: 398, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Emily Rodriguez", score: 385, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Olivia Lee", score: 372, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Sophia Martinez", score: 365, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Daniel Brown", score: 352, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 10, name: "Ava Clark", score: 340, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 9, name: "William Garcia", score: 328, avatar: "/placeholder.svg?height=40&width=40" },
    ],
    allTime: [
      { id: 2, name: "Michael Chen", score: 2450, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "James Taylor", score: 2320, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 1, name: "Sarah Johnson", score: 2280, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Olivia Lee", score: 2150, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "David Wilson", score: 2080, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Emily Rodriguez", score: 1950, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 10, name: "Ava Clark", score: 1820, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Sophia Martinez", score: 1750, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Daniel Brown", score: 1680, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 9, name: "William Garcia", score: 1520, avatar: "/placeholder.svg?height=40&width=40" },
    ],
  }

  const currentRankings = rankings[timeFilter as keyof typeof rankings]
  const currentUserRank = 4 // Mock current user's rank

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">See who's leading in Bible knowledge</p>
      </div>

      <Tabs defaultValue="week" onValueChange={setTimeFilter}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
          <TabsTrigger value="allTime">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="mt-4">
          <LeaderboardContent rankings={rankings.week} currentUserRank={currentUserRank} />
        </TabsContent>

        <TabsContent value="month" className="mt-4">
          <LeaderboardContent rankings={rankings.month} currentUserRank={currentUserRank} />
        </TabsContent>

        <TabsContent value="allTime" className="mt-4">
          <LeaderboardContent rankings={rankings.allTime} currentUserRank={currentUserRank} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LeaderboardContent({
  rankings,
  currentUserRank,
}: {
  rankings: Array<{ id: number; name: string; score: number; avatar: string }>
  currentUserRank: number
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performers</CardTitle>
        <CardDescription>Based on quiz scores</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Top 3 with medals */}
          <div className="flex justify-between items-end mb-8">
            {/* Second Place */}
            <div className="flex flex-col items-center space-y-2 flex-1">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-purple-300">
                  <AvatarImage src={rankings[1]?.avatar || "/placeholder.svg"} alt={rankings[1]?.name} />
                  <AvatarFallback>{rankings[1]?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-300 text-purple-950 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm truncate max-w-[80px]">{rankings[1]?.name}</div>
                <div className="text-muted-foreground text-xs">{rankings[1]?.score} pts</div>
              </div>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center space-y-2 flex-1">
              <div className="relative">
                <Avatar className="h-20 w-20 border-2 border-orange-500">
                  <AvatarImage src={rankings[0]?.avatar || "/placeholder.svg"} alt={rankings[0]?.name} />
                  <AvatarFallback>{rankings[0]?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm truncate max-w-[80px]">{rankings[0]?.name}</div>
                <div className="text-muted-foreground text-xs">{rankings[0]?.score} pts</div>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center space-y-2 flex-1">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-orange-300">
                  <AvatarImage src={rankings[2]?.avatar || "/placeholder.svg"} alt={rankings[2]?.name} />
                  <AvatarFallback>{rankings[2]?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-300 text-orange-950 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm truncate max-w-[80px]">{rankings[2]?.name}</div>
                <div className="text-muted-foreground text-xs">{rankings[2]?.score} pts</div>
              </div>
            </div>
          </div>

          {/* Rest of the leaderboard */}
          <div className="space-y-2">
            {rankings.slice(3).map((user, index) => (
              <div
                key={user.id}
                className={`flex items-center p-3 rounded-md ${user.id === currentUserRank ? "bg-muted" : ""}`}
              >
                <div className="w-6 text-center font-medium text-muted-foreground">{index + 4}</div>
                <Avatar className="h-8 w-8 mx-3">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{user.name}</div>
                </div>
                <div className="font-medium">{user.score} pts</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
