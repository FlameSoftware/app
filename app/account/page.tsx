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
      <h1 className="text-2xl font-bold">Conta</h1>

      {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <AuthForms setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

function AuthForms({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bem-vindo</CardTitle>
        <CardDescription>Faça login para acompanhar o seu progresso e se juntar a comunidade!</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Entrar</TabsTrigger>
            <TabsTrigger value="signup">Cadastrar</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email-signin">Email</Label>
              <Input id="email-signin" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-signin">Senha</Label>
                <Button variant="link" className="p-0 h-auto text-xs">
                  Esqueceu sua senha?
                </Button>
              </div>
              <Input id="password-signin" type="password" />
            </div>
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
              Entrar
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-signup">Email</Label>
              <Input id="email-signup" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-signup">Senha</Label>
              <Input id="password-signup" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar senha</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
              Criar conta
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
              Sair
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-muted-foreground" />
                <span>Posição atual:</span>
              </div>
              <Badge variant="outline" className="text-sm">
                4o lugar
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Medal className="h-5 w-5 text-muted-foreground" />
                <span>Pontuação total:</span>
              </div>
              <Badge variant="outline" className="text-sm">
                1,250 pts
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span>Quizzes completos:</span>
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
          <CardTitle>Conquistas recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Pontuação perfeita</p>
                <p className="text-sm text-muted-foreground">Alcançou 100% no Quiz de Salmos</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+100 pts</Badge>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Estudante Consistente</p>
                <p className="text-sm text-muted-foreground">Completou 5 quizzes semanais consecutivos</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+50 pts</Badge>
            </div>

            <Separator />

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Medal className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium">Top 5 na liderança</p>
                <p className="text-sm text-muted-foreground">Alcançou o top 5 na liderança semanal</p>
              </div>
              <Badge className="bg-accent text-accent-foreground">+75 pts</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurações da conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="display-name">Nome de visualização</Label>
            <Input id="display-name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Nova senha</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-new-password">Confirmar senha</Label>
            <Input id="confirm-new-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Salvar alterações</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
