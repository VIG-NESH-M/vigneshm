"use client";

import { useMemo } from "react";
import {
  format,
  subDays,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

interface ContributionDay {
  date: string; // ISO date string (e.g., "2025-09-13")
  count: number;
}

interface GitHubCalendarProps {
  data: ContributionDay[]; // Contribution data
  colors?: string[]; // Custom color scale (default: GitHub-like greens)
}

const GitHubCalendar = ({
  data,
  colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
}: GitHubCalendarProps) => {
  const today = new Date();
  const startDate = subDays(today, 364); // One year back
  const weeks = 53;

  // Process data prop using useMemo instead of useEffect + useState
  const contributions = useMemo(() => data, [data]);

  // Get color based on contribution count
  const getColor = (count: number) => {
    if (count === 0) return colors[0];
    if (count === 1) return colors[1];
    if (count === 2) return colors[2];
    if (count === 3) return colors[3];
    return colors[4] || colors[colors.length - 1]; // Fallback to last color
  };

  // Render weeks
  const renderWeeks = () => {
    const weeksArray = [];
    let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });

    for (let i = 0; i < weeks; i++) {
      const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 0 }),
      });

      weeksArray.push(
        <div key={i} className="flex flex-col gap-[2px] sm:gap-1">
          {weekDays.map((day, index) => {
            const contribution = contributions.find((c) =>
              isSameDay(new Date(c.date), day),
            );
            const color = contribution
              ? getColor(contribution.count)
              : colors[0];

            return (
              <div
                key={index}
                className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-3 md:h-3 rounded-[2px] sm:rounded-[3px] md:rounded-[4px]"
                style={{ backgroundColor: color }}
                title={`${format(day, "PPP")}: ${contribution?.count || 0} contributions`}
              />
            );
          })}
        </div>,
      );
      currentWeekStart = addDays(currentWeekStart, 7);
    }

    return weeksArray;
  };

  // Render month labels
  const renderMonthLabels = () => {
    const months = [];
    let currentMonth = startDate;
    for (let i = 0; i < 12; i++) {
      months.push(
        <span
          key={i}
          className="text-[10px] sm:text-xs text-gray-500 hidden sm:inline"
        >
          {format(currentMonth, "MMM")}
        </span>,
      );
      currentMonth = addDays(currentMonth, 30);
    }
    // Show fewer months on mobile
    const mobileMonths = [0, 3, 6, 9].map((i) => {
      const date = addDays(startDate, i * 30);
      return (
        <span
          key={`mobile-${i}`}
          className="text-[10px] text-gray-500 sm:hidden"
        >
          {format(date, "MMM")}
        </span>
      );
    });
    return (
      <>
        <span className="hidden sm:contents">{months}</span>
        <span className="contents sm:hidden">{mobileMonths}</span>
      </>
    );
  };

  // Render day labels - show abbreviated on mobile
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayLabelsShort = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="p-2 sm:p-3 md:p-4 border rounded-lg w-full overflow-x-auto">
      <div className="flex min-w-fit">
        <div className="flex flex-col justify-between mt-4 sm:mt-5 md:mt-5.5 mr-1 sm:mr-2">
          {dayLabels.map((day, index) => (
            <span
              key={index}
              className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 h-[8px] sm:h-[10px] md:h-3 leading-none"
            >
              <span className="hidden md:inline">{day}</span>
              <span className="md:hidden">{dayLabelsShort[index]}</span>
            </span>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex w-full justify-between gap-1 sm:gap-2 md:gap-4 mb-1 sm:mb-2">
            {renderMonthLabels()}
          </div>
          <div className="flex gap-[2px] sm:gap-1">{renderWeeks()}</div>
        </div>
      </div>
      <div className="mt-2 sm:mt-3 md:mt-4 justify-center flex gap-1 sm:gap-2 text-[10px] sm:text-xs items-center">
        <span>Less</span>
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-3 md:h-3 rounded-[2px] sm:rounded-[3px] md:rounded-[4px]"
            style={{ backgroundColor: color }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export { GitHubCalendar };
export type { ContributionDay, GitHubCalendarProps };
