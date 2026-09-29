type CosteaLogoVariant = 'icon' | 'full';

const sources: Record<CosteaLogoVariant, string> = {
  icon: `${import.meta.env.BASE_URL}costea-icon.png`,
  full: `${import.meta.env.BASE_URL}costea-logo.png`,
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
