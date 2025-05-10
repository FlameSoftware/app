"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const quizData = {
    title: "Livro de Romanos - Semana 3",
    description: "Teste seus conhecimentos sobre os capítulos 5 a 8 de Romanos",
    questions: [
      {
        question: "De acordo com Romanos 5:1, o que temos por meio da fé?",
        options: ["Vida eterna", "Paz com Deus", "Salvação", "Sabedoria"],
        correctAnswer: "Paz com Deus",
      },
      {
        question: "Em Romanos 6:23, qual é o dom de Deus?",
        options: ["Vida eterna em Cristo Jesus", "Perdão dos pecados", "O Espírito Santo", "Graça e misericórdia"],
        correctAnswer: "Vida eterna em Cristo Jesus",
      },
      {
        question: "De acordo com Romanos 8:28, para quem Deus faz todas as coisas cooperarem para o bem?",
        options: [
          "Para todos",
          "Para os que são chamados segundo o seu propósito",
          "Para os justos",
          "Para os fiéis",
        ],
        correctAnswer: "Para os que são chamados segundo o seu propósito",
      },
      {
        question: "Em Romanos 7, o que Paulo diz que se vê fazendo?",
        options: [
          "Fazendo o bem que deseja fazer",
          "Cumprindo a lei perfeitamente",
          "Não fazendo o bem que deseja fazer",
          "Pregando aos gentios",
        ],
        correctAnswer: "Não fazendo o bem que deseja fazer",
      },
      {
        question: "De acordo com Romanos 8:38-39, o que pode nos separar do amor de Deus?",
        options: ["A morte ou a vida", "Anjos ou demônios", "O presente ou o futuro", "Nada"],
        correctAnswer: "Nada",
      },
    ],
  }

  const currentQuestionData = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedAnswer === currentQuestionData.correctAnswer) {
      setScore(score + 1)
    }
    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quiz Semanal</h1>
        <p className="text-muted-foreground">{quizData.title}</p>
      </div>

      {!quizCompleted ? (
        <>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Pergunta {currentQuestion + 1} de {quizData.questions.length}
              </span>
              <span>Pontuação: {score}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{currentQuestionData.question}</CardTitle>
              <CardDescription>{quizData.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer || ""} className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 rounded-md border p-3 ${
                      isAnswered && option === currentQuestionData.correctAnswer
                        ? "border-green-500 bg-green-500/20 dark:bg-green-500/10"
                        : isAnswered && option === selectedAnswer
                          ? "border-orange-500 bg-orange-500/20 dark:bg-orange-500/10"
                          : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                    {isAnswered && option === currentQuestionData.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {isAnswered && option === selectedAnswer && option !== currentQuestionData.correctAnswer && (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              {!isAnswered ? (
                <Button onClick={handleCheckAnswer} disabled={!selectedAnswer} className="w-full">
                  Verificar Resposta
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestion < quizData.questions.length - 1 ? "Próxima Pergunta" : "Ver Resultados"}
                </Button>
              )}
            </CardFooter>
          </Card>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Concluído!</CardTitle>
            <CardDescription>{quizData.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6">
              <div className="text-5xl font-bold mb-2">
                {score} / {quizData.questions.length}
              </div>
              <p className="text-muted-foreground">
                {score === quizData.questions.length
                  ? "Pontuação perfeita! Trabalho incrível!"
                  : score >= quizData.questions.length * 0.7
                    ? "Ótimo trabalho! Você conhece bem a Bíblia!"
                    : "Bom esforço! Continue estudando a Palavra!"}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full">
              Tentar Novamente
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
