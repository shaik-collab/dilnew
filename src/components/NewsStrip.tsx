interface NewsStripProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  speed?: "slow" | "very-slow" | "extremely-slow";
}

const NewsStrip = ({
  text,
  bgColor = "bg-gradient-yellow-orange",
  textColor = "text-dil-purple",
  speed = "very-slow",
}: NewsStripProps) => {
  // One "block" — repeated within a single span so the strip isn't sparse.
  const block = `${text} • ${text} • ${text} • ${text} • ${text} • ${text}`;

  // Seamless loop: two identical copies side-by-side, container animates -50%.
  const animationClass = {
    slow: "animate-marquee-seamless",
    "very-slow": "animate-marquee-seamless-slow",
    "extremely-slow": "animate-marquee-seamless-very-slow",
  }[speed];

  return (
    <div className={`w-full overflow-hidden ${bgColor}`}>
      <div className={`py-3 flex w-max ${animationClass}`}>
        <span
          className={`text-base sm:text-lg font-normal whitespace-nowrap pr-8 ${textColor}`}
        >
          {block}
        </span>
        <span
          aria-hidden="true"
          className={`text-base sm:text-lg font-normal whitespace-nowrap pr-8 ${textColor}`}
        >
          {block}
        </span>
      </div>
    </div>
  );
};

export default NewsStrip;
