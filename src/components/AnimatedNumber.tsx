import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const startedAt = performance.now();
    const duration = 1400;

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, value]);

  const formatted = useMemo(
    () =>
      new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }).format(displayValue),
    [decimals, displayValue],
  );

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
