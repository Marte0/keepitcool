import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function TeamMemberPortrait({
  member,
  portfolioHoverLabel,
  delay = 0,
  slotClass,
}) {
  return (
    <RevealOnScroll delay={delay} className={`team-portrait ${slotClass}`}>
      <a
        href={member.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${member.name} portfolio`}
        className="team-portrait__link"
      >
        <div
          className="team-portrait__card"
          style={{
            "--team-tilt": `${member.tilt}deg`,
            "--team-tilt-mobile": `${member.mobileTilt}deg`,
          }}
        >
          <span className="tag-psychologist team-portrait__tag inline-flex rounded-2xl px-3 py-2 font-display text-ui uppercase shadow-card">
            {member.name}
          </span>
          <div className="team-portrait__frame overflow-hidden rounded-[20px] shadow-card">
            <Image
              src={member.src}
              alt={member.name}
              width={member.width}
              height={member.height}
              className="team-portrait__img size-full object-cover"
              sizes="(max-width: 768px) 85vw, 26rem"
            />
            <span className="team-portrait__overlay" aria-hidden>
              <span className="team-portrait__overlay-label font-body text-ui font-normal">
                {portfolioHoverLabel}
              </span>
            </span>
          </div>
        </div>
        <span className="team-portrait__link-hint font-body text-ui text-ink-muted">
          {member.linkLabel} →
        </span>
      </a>
    </RevealOnScroll>
  );
}
