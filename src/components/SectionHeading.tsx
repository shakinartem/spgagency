type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="label-chip">{eyebrow}</div>
      <h2 className="mt-5 max-w-3xl font-display text-4xl leading-none text-paper sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-sand/80 sm:text-lg">{description}</p>
    </div>
  );
}
