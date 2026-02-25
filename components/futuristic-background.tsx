export function FuturisticBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,hsl(250_85%_62%/.28),transparent_36%),radial-gradient(circle_at_88%_22%,hsl(160_95%_52%/.2),transparent_34%),radial-gradient(circle_at_40%_85%,hsl(258_92%_64%/.18),transparent_36%)]" />
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl animate-glowPulse" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-glowPulse [animation-delay:1.2s]" />
      <div className="absolute inset-0 futuristic-grid opacity-45" />
      <div className="absolute inset-0 futuristic-noise opacity-[0.045]" />
    </div>
  );
}
