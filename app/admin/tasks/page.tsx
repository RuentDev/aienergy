"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Calendar, AlertCircle } from "lucide-react"

const tasks = [
  { id: 1, title: "Review pending orders", priority: "High", dueDate: "2024-01-16", completed: false },
  { id: 2, title: "Update product inventory", priority: "Medium", dueDate: "2024-01-17", completed: false },
  { id: 3, title: "Contact supplier for new stock", priority: "High", dueDate: "2024-01-15", completed: true },
  { id: 4, title: "Send newsletter to customers", priority: "Low", dueDate: "2024-01-20", completed: false },
  { id: 5, title: "Prepare financial report", priority: "High", dueDate: "2024-01-18", completed: false },
]

const reminders = [
  { id: 1, title: "Team meeting at 2 PM", time: "Today, 2:00 PM" },
  { id: 2, title: "Follow up with customer inquiry", time: "Tomorrow, 10:00 AM" },
  { id: 3, title: "Review marketing campaign results", time: "Jan 17, 3:00 PM" },
]

export default function TasksPage() {
  const [taskList, setTaskList] = useState(tasks)

  const toggleTask = (id: number) => {
    setTaskList(taskList.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Tasks & Reminders</h1>
          <p className="text-sm text-muted-foreground">Stay organized and on track</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold">Tasks</h2>
          {taskList.map((task) => (
            <Card key={task.id} className="border-border hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                      {task.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant={
                          task.priority === "High"
                            ? "destructive"
                            : task.priority === "Medium"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {task.priority}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {task.dueDate}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reminders */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Reminders</h2>
          {reminders.map((reminder) => (
            <Card key={reminder.id} className="border-border hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{reminder.title}</h3>
                    <p className="text-sm text-muted-foreground">{reminder.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
