import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, BookOpen, BarChart } from "lucide-react"

interface Course {
  id: string
  title: string
  description: string
  image: string
  category: string
  duration: string
  level: string
  price: string
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3">{course.category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <BarChart className="mr-2 h-4 w-4" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center font-medium text-lg mt-2">
            <span>{course.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex space-x-2 w-full">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/learning/preview/${course.id}`}>
              <BookOpen className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link href={`/learning/course/${course.id}`}>Enroll Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
