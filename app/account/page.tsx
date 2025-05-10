"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Medal, Trophy } from "lucide-react"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Account</h1>

      {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <AuthForms setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

function AuthForms({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Sign in to track your progress and join the community</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email-signin">Email</Label>
              <Input id="email-signin" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-signin">Password</Label>
                <Button variant="link" className="p-0 h-auto text-xs">
                  Forgot password?
                </Button>
              </div>
              <Input id="password-signin" type="password" />
            </div>
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
              Sign In
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-signup">Email</Label>
              <Input id="email-signup" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-signup">Password</Label>
              <Input id="password-signup" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function UserProfile({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Sign Out
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-muted-foreground" />
                <span>Current Rank:</span>
              </div>
              <Badge variant="outline" className="text-sm">
                4th Place
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Medal className="h-5 w-5 text-muted-foreground" />
                <span>Total Points:</span>
              </div>
              <Badge variant="outline" className="text-sm">
                1,250 pts
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span>Quizzes Completed:</span>
              </div>
              <Badge variant="outline" className="text-sm">
                24
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Perfect Score</p>
                <p className="text-sm text-muted-foreground">Achieved 100% on the Book of Psalms quiz</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+100 pts</Badge>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Consistent Student</p>
                <p className="text-sm text-muted-foreground">Completed 5 consecutive weekly quizzes</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+50 pts</Badge>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Medal className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Top 5 Ranking</p>
                <p className="text-sm text-muted-foreground">Reached top 5 on the weekly leaderboard</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+75 pts</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="display-name">Display Name</Label>
            <Input id="display-name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-new-password">Confirm New Password</Label>
            <Input id="confirm-new-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
