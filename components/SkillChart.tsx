"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "C++",
    "Python",
    "JavaScript",
    "SQL",
    "React",
    "Node.js",
    "FastAPI",
    "Machine Learning",
    "IoT Systems",
    "Cloud",
    "Arduino",
    "Raspberry Pi",
    "GitHub",
    "Docker",
    "VS Code",
    "Postman"
  ],
  datasets: [
    {
      label: "Skill Proficiency",
      data: [86, 94, 90, 82, 92, 88, 85, 91, 89, 84, 83, 81, 93, 80, 95, 84],
      borderColor: "rgba(56,189,248,1)",
      backgroundColor: "rgba(99,102,241,0.25)",
      pointBackgroundColor: "rgba(167,139,250,1)",
      pointHoverRadius: 7,
      borderWidth: 2
    }
  ]
};

export default function SkillChart() {
  return (
    <Radar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 100,
            angleLines: { color: "rgba(148,163,184,0.2)" },
            grid: { color: "rgba(148,163,184,0.2)" },
            pointLabels: { color: "rgba(226,232,240,0.9)", font: { size: 11 } },
            ticks: {
              color: "rgba(148,163,184,0.8)",
              backdropColor: "transparent",
              stepSize: 20
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(226,232,240,0.9)"
            }
          },
          tooltip: {
            backgroundColor: "rgba(15,23,42,0.92)",
            borderColor: "rgba(56,189,248,0.7)",
            borderWidth: 1
          }
        }
      }}
    />
  );
}
