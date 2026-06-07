import Image from "next/image";

export default function SdgCard({ card }) {
  return (
    <article
      className={`sdg-card flex w-full flex-col gap-5 border-[10px] border-white p-5 shadow-card ${card.colorClass}`}
      style={{
        "--sdg-tilt": `${card.tilt}deg`,
        "--sdg-tilt-mobile": `${card.mobileTilt}deg`,
      }}
    >
      <div className="sdg-card__media aspect-square w-full overflow-hidden">
        <Image
          src={card.icon}
          alt={`SDG ${card.sdg}: ${card.label}`}
          width={card.width}
          height={card.height}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="font-body text-body leading-snug text-cream-light">{card.body}</p>
    </article>
  );
}
