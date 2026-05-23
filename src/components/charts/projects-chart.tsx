"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { year: "2020", projects: 20 },
  { year: "2021", projects: 30 },
  { year: "2022", projects: 5 },
  { year: "2023", projects: 45 },
  { year: "2024", projects: 50 },
  { year: "2025", projects: 75 },
]

const chartConfig = {
  projects: {
    label: "Projects",
    color: "hsl(var(--primary))",
  },
}
export default function ProjectsChart() {
  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
        <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
            tickMargin={10}
            tickFormatter={(value) => `${value}+`}
          />
          <Bar dataKey="projects" fill="var(--color-projects)" radius={8} />
        </BarChart>
      </ChartContainer>
      <div className="text-center mt-2 text-muted-foreground text-lg font-bold">75+ Worldwide</div>
    </div>
  )
}
