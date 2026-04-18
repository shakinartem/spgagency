import { useEffect, useMemo, useState, type ImgHTMLAttributes, type ReactNode } from "react";

type FallbackImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  sources: string[];
  fallback: ReactNode;
};

export function FallbackImage({ sources, fallback, alt, ...props }: FallbackImageProps) {
  const uniqueSources = useMemo(
    () => sources.filter((value, index) => Boolean(value) && sources.indexOf(value) === index),
    [sources],
  );
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    setSourceIndex(0);
  }, [uniqueSources]);

  const activeSource = uniqueSources[sourceIndex];

  if (!activeSource) {
    return <>{fallback}</>;
  }

  return (
    <img
      {...props}
      src={activeSource}
      alt={alt}
      onError={() => {
        setSourceIndex((current) => current + 1);
      }}
    />
  );
}
