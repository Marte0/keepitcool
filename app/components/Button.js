export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-ui font-semibold no-underline transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

  const variants = {
    cta: "btn-cta hover:brightness-105 active:scale-[0.98]",
    primary: "bg-ink text-cream-light hover:opacity-90 active:scale-[0.98]",
    secondary:
      "nav-pill text-ink hover:bg-cream-light active:scale-[0.98]",
    ghost: "text-ink hover:bg-cream-light/80 active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
