export default function GameCard({ card, className = "" }) {
  return (
    <article
      className={`flex min-h-[250px] flex-col justify-between rounded-[20px] p-6 shadow-card ${card.gradientClass} ${className}`}
    >
      <h3 className={`font-display text-[2.875rem] uppercase leading-none ${card.titleClass}`}>
        {card.title}
      </h3>
      <p className={`text-body leading-snug ${card.bodyClass}`}>{card.body}</p>
    </article>
  );
}
