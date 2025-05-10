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
    title: "Book of Romans - Week 3",
    description: "Test your knowledge on Romans chapters 5-8",
    questions: [
      {
        question: "According to Romans 5:1, what do we have through faith?",
        options: ["Eternal life", "Peace with God", "Salvation", "Wisdom"],
        correctAnswer: "Peace with God",
      },
      {
        question: "In Romans 6:23, what is the gift of God?",
        options: ["Eternal life in Christ Jesus", "Forgiveness of sins", "The Holy Spirit", "Grace and mercy"],
        correctAnswer: "Eternal life in Christ Jesus",
      },
      {
        question: "According to Romans 8:28, for whom does God work all things together for good?",
        options: [
          "For everyone",
          "For those who are called according to his purpose",
          "For the righteous",
          "For the faithful",
        ],
        correctAnswer: "For those who are called according to his purpose",
      },
      {
        question: "In Romans 7, what does Paul say he finds himself doing?",
        options: [
          "Doing the good he wants to do",
          "Following the law perfectly",
          "Not doing the good he wants to do",
          "Preaching to the Gentiles",
        ],
        correctAnswer: "Not doing the good he wants to do",
      },
      {
        question: "According to Romans 8:38-39, what can separate us from the love of God?",
        options: ["Death or life", "Angels or demons", "The present or the future", "Nothing"],
        correctAnswer: "Nothing",
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
        <h1 className="text-2xl font-bold">Weekly Quiz</h1>
        <p className="text-muted-foreground">{quizData.title}</p>
      </div>

      {!quizCompleted ? (
        <>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Question {currentQuestion + 1} of {quizData.questions.length}
              </span>
              <span>Score: {score}</span>
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
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestion < quizData.questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </CardFooter>
          </Card>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Completed!</CardTitle>
            <CardDescription>{quizData.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6">
              <div className="text-5xl font-bold mb-2">
                {score} / {quizData.questions.length}
              </div>
              <p className="text-muted-foreground">
                {score === quizData.questions.length
                  ? "Perfect score! Amazing job!"
                  : score >= quizData.questions.length * 0.7
                    ? "Great job! You know your Bible well!"
                    : "Good effort! Keep studying the Word!"}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full">
              Try Again
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
