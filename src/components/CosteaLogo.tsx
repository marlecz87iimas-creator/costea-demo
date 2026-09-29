type CosteaLogoVariant = 'icon' | 'full';

const sources: Record<CosteaLogoVariant, string> = {
  icon: '/costea-icon.png',
  full: '/costea-logo.png',
};

export default function CosteaLogo({
  variant = 'full',
  className = '',
}: {
  variant?: CosteaLogoVariant;
  className?: string;
}) {
  return (
    <img
      src={sources[variant]}
      alt="Costea"
      className={className}
      decoding="async"
    />
  );
}
