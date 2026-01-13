"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { year: "2020", projects: 10 },
  { year: "2021", projects: 25 },
  { year: "2022", projects: 45 },
  { year: "2023", projects: 60 },
  { year: "2024", projects: 75 },
]

const chartConfig = {
  projects: {
    label: "Projects",
    color: "hsl(var(--primary))",
  },
}

export default function ProjectsChart() {
  return (
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
      <div className="text-center mt-2 text-muted-foreground text-lg font-bold">75+ Worldwide</div>
    </ChartContainer>
  )
}
