import RevealOnScroll from "./RevealOnScroll";
import TeamMemberPortrait from "./TeamMemberPortrait";
import { TEAM } from "../content/sections";

export default function TeamSection() {
  return (
    <section
      className="relative bg-cream"
      style={{
        paddingBottom: "var(--section-py)",
        paddingTop: "clamp(2rem, 1rem + 3vw, 4rem)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-5 lg:px-12">
        <div className="mx-auto flex max-w-[38rem] flex-col items-center text-center">
          <RevealOnScroll delay={0}>
            <h2 className="font-display text-section text-ink-muted">{TEAM.title}</h2>
          </RevealOnScroll>
        </div>

        <div className="team-stage mx-auto mt-12 md:mt-16" aria-label="Team members">
          {TEAM.members.map((member, index) => (
            <TeamMemberPortrait
              key={member.id}
              member={member}
              portfolioHoverLabel={TEAM.portfolioHoverLabel}
              delay={index + 1}
              slotClass={`team-portrait--${member.slot}`}
            />
          ))}
        </div>

        <RevealOnScroll delay={3}>
          <p className="mx-auto mt-10 max-w-[38rem] text-center font-body text-lead text-ink md:mt-12">
            {TEAM.body}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
