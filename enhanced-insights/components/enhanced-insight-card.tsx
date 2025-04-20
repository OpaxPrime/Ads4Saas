import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Download, ExternalLink, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

interface EnhancedInsightCardProps {
  title: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  timeToImplement: string
  summary: string
  problem: string
  solution: string
  implementation: {
    steps: {
      title: string
      description: string
    }[]
  }
  metrics: {
    name: string
    description: string
    target: string
  }[]
  resources: {
    title: string
    url: string
    type: "article" | "video" | "tool" | "template"
  }[]
  caseStudies: {
    company: string
    result: string
    description: string
  }[]
}

export function EnhancedInsightCard({
  title,
  category,
  difficulty,
  timeToImplement,
  summary,
  problem,
  solution,
  implementation,
  metrics,
  resources,
  caseStudies,
}: EnhancedInsightCardProps) {
  const difficultyColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="outline" className="font-medium">
            {category}
          </Badge>
          <Badge className={difficultyColor[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            {timeToImplement}
          </div>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">The Problem</h3>
              <p className="text-muted-foreground">{problem}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">The Solution</h3>
              <p className="text-muted-foreground">{solution}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Case Studies</h3>
              <div className="space-y-3">
                {caseStudies.map((caseStudy, index) => (
                  <div key={index} className="bg-muted p-3 rounded-md">
                    <div className="font-medium">{caseStudy.company}</div>
                    <div className="text-sm text-muted-foreground mb-1">{caseStudy.description}</div>
                    <div className="text-sm font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                      {caseStudy.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Step-by-Step Implementation</h3>
            <div className="space-y-4">
              {implementation.steps.map((step, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-base mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Key Metrics to Track</h3>
            <div className="space-y-3">
              {metrics.map((metric, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h4 className="font-medium text-base mb-1">{metric.name}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{metric.description}</p>
                  <div className="flex items-center text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                    Target: {metric.target}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Helpful Resources</h3>
            <div className="grid gap-3">
              {resources.map((resource, index) => (
                <Link
                  href={resource.url}
                  key={index}
                  target="_blank"
                  className="flex items-center justify-between border rounded-md p-3 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {resource.type === "article" && <FileText className="h-4 w-4" />}
                    {resource.type === "video" && <FileText className="h-4 w-4" />}
                    {resource.type === "tool" && <FileText className="h-4 w-4" />}
                    {resource.type === "template" && <Download className="h-4 w-4" />}
                    <span>{resource.title}</span>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save for Later</Button>
        <Button>Implement Now</Button>
      </CardFooter>
    </Card>
  )
}
