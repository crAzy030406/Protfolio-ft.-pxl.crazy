
"use client";

import { useState, useEffect } from 'react';

const NUM_BALLS = 3;

type Ball = {
  id: number;
  size: number;
  animationName: string;
  animationDuration: number;
  animationDelay: number;
};

export default function GlowingBalls() {
  const [balls, setBalls] = useState<Ball[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const generateBalls = () => {
      const newBalls: Ball[] = [];
      for (let i = 0; i < NUM_BALLS; i++) {
        newBalls.push({
          id: i,
          size: Math.random() * 300 + 200, // 200px to 500px
          animationName: `move-ball-${(i % 3) + 1}`,
          animationDuration: Math.random() * 15 + 20, // 20s to 35s
          animationDelay: Math.random() * -20, // Start at different points
        });
      }
      setBalls(newBalls);
    };

    generateBalls();
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="glowing-ball"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            animation: `${ball.animationName} ${ball.animationDuration}s infinite ease-in-out`,
            animationDelay: `${ball.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}
