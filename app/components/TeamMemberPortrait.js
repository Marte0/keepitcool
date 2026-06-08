import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

function TeamPortraitActions({ member, labels, className = "" }) {
  return (
    <div className={`team-portrait__actions ${className}`.trim()}>
      <a
        href={member.portfolioHref}
        target="_blank"
        rel="noopener noreferrer"
        className="team-portrait__action"
      >
        {labels.portfolio}
      </a>
      <a href={`mailto:${member.email}`} className="team-portrait__action">
        {labels.mail}
      </a>
    </div>
  );
}

export default function TeamMemberPortrait({ member, actionLabels, delay = 0, slotClass }) {
  return (
    <RevealOnScroll delay={delay} className={`team-portrait ${slotClass}`}>
      <div className="team-portrait__interactive">
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
            <div className="team-portrait__overlay">
              <TeamPortraitActions member={member} labels={actionLabels} />
            </div>
          </div>
        </div>

        <TeamPortraitActions
          member={member}
          labels={actionLabels}
          className="team-portrait__link-hint"
        />
      </div>
    </RevealOnScroll>
  );
}
