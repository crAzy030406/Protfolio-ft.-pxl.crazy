"use client"

import * as React from "react"
import { RadialBar, RadialBarChart, PolarAngleAxis, Tooltip } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface RatingChartProps {
    rating: number;
}

export default function RatingChart({ rating }: RatingChartProps) {
  const percentage = (rating / 5) * 100;
  const chartData = [{ name: "Rating", value: percentage, fill: "hsl(var(--primary))" }]

  return (
    <ChartContainer
      config={{
        Rating: {
          label: "Client Rating",
        },
      }}
      className="mx-auto aspect-square h-[250px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={-270}
        innerRadius="70%"
        outerRadius="100%"
        barSize={20}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} axisLine={false} />
        <RadialBar
          dataKey="value"
          background={{ fill: "hsl(var(--muted))" }}
          cornerRadius={10}
        />
        <Tooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel hideIndicator />}
        />
        <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-foreground text-4xl font-bold"
        >
            {rating}/5
        </text>
      </RadialBarChart>
    </ChartContainer>
  )
}
