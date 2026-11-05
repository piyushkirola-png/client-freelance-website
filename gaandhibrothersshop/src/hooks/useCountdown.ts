import { useEffect, useMemo, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** True once the target date has been reached */
  isPast: boolean;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * Live countdown to a target date.
 * @param targetISO ISO-8601 date string (e.g. "2026-11-16T18:30:00+05:30")
 */
export function useCountdown(targetISO: string): CountdownParts {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
    isPast: false,
  };
}

/** Zero-padded two digit string, e.g. 7 -> "07" */
export const pad = (value: number): string => String(value).padStart(2, "0");
