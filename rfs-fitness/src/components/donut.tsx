"use client"

import "../chartConfig";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import type { TooltipItem } from "chart.js";
type DonutProps = {
 data?: ChartData<"doughnut">;
  options?: ChartOptions<"doughnut">;
};

import { useEffect, useState } from "react";



const DonutChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
    const data = {
    labels: [
      "Understand your actual roadblocks ",
      "Get clarity on your portion patterns",
      "Lose 3–6 kg in the next few weeks",
    ],
    datasets: [
      {
        data: [200,200,200],
        backgroundColor: [
          "rgba(38, 21, 25, 0.8)", 
          "rgba(255, 112, 64, 0.95)", 
          "rgba(255, 205, 86, 0.8)", 
        ],
        borderColor: [
          "rgb(25, 19, 20)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  };

  const defaultOptions: ChartOptions<"doughnut">= {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? "bottom" : "right",
        labels: {
    font: {
      size: isMobile ? 12 : 14,   // bigger text
      weight: "bold",             // bold text
    },
    // padding: 15,                  // spacing between items
  },
      },
      
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">): string =>  {
            let label = context.label || "";
            let value = (context.raw as number) ?? 0;
            return `${label}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-wrapper" style={{color:"black", height: "100%", width:"50vw", textAlign:"center"}}>
      <Doughnut 
      data={data} 
      options={defaultOptions} 
    />
    </div>
  );
};

export default DonutChart;
