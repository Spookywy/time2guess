type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export default function PrimaryButton({
  label,
  onClick,
  className,
}: PrimaryButtonProps) {
  return (
    <button
      className={`h-16 w-64 rounded-full border-4 border-dark-orange bg-dark-orange font-semibold text-light-orange active:border-jet active:text-jet ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
