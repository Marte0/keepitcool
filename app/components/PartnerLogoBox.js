import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function PartnerLogoBox({
  logo,
  delay = 0,
  variant = "partner",
  width = 400,
  height = 400,
}) {
  const isFunded = variant === "funded";
  const slotClass = isFunded ? "partner-slot-funded" : `partner-slot-${logo.slot}`;
  const boxClass = `partner-logo-box ${slotClass}${isFunded ? " partner-logo-box--funded" : ""}`;

  const inner = (
    <div
      className="partner-logo-box__float"
      style={{ "--partner-float-delay": `${logo.floatDelay ?? 0}s` }}
    >
      <div
        className={`partner-logo-box__inner${isFunded ? " partner-logo-box__inner--funded" : ""}`}
        style={{
          "--partner-tilt": `${logo.tilt}deg`,
          "--partner-tilt-mobile": `${logo.mobileTilt}deg`,
        }}
      >
        <Image
          src={logo.src}
          alt={logo.name}
          width={width}
          height={height}
          className="partner-logo-box__img"
          unoptimized
          sizes={
            isFunded ? "(max-width: 768px) 12rem, 14rem" : "(max-width: 768px) 8rem, 12rem"
          }
        />
      </div>
    </div>
  );

  return (
    <RevealOnScroll delay={delay} className={boxClass}>
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${logo.name} website`}
          className="partner-logo-box__link"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </RevealOnScroll>
  );
}
