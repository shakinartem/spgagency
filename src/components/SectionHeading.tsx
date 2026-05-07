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
    <div className={`max-w-5xl ${alignment}`}>
      <div className="label-chip">{eyebrow}</div>
      <h2 className="editorial-title mt-5 max-w-5xl text-5xl text-paper sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-7 text-sand/75 sm:text-lg">{description}</p>
    </div>
  );
}
