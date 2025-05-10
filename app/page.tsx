import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react"

export default function DevotionalPage() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Devocional Diário</h1>
        <div className="text-sm text-muted-foreground">{currentDate}</div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">Hoje</span>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Achando Paz em tempos difíceis</CardTitle>
          <CardDescription>João 14:27</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-accent/20 rounded-md">
            <p className="italic">
              "Deixo com vocês a paz, a minha paz lhes dou; não lhes dou a paz como o mundo a dá. Que o coração de vocês não fique angustiado nem com medo.""
            </p>
            <p className="text-right text-sm mt-2">- João 14:27</p>
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
              No devocional de hoje, exploramos como Jesus nos oferece uma paz que transcende nossas circunstâncias. Ao contrário
              da paz temporária que o mundo oferece, a paz de Cristo é eterna e sustentadora.
            </p>
            <p>
              Quando enfrentamos desafios, este versículo nos lembra que não precisamos deixar nossos corações se perturbarem. Em vez disso,
              podemos descansar na paz que Jesus concede gratuitamente a todos os que confiam nEle.
            </p>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reflexões</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium">1. Como você tem experimentado a Paz de Deus em tempos difíceis?</p>
            <p className="font-medium">2. Quais preocupações você pode render a Deus hoje?</p>
            <p className="font-medium">3. Como você pode compartilhar a Paz de Deus com alguém essa semana?</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
