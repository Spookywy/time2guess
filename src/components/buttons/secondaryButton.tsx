type SecondaryButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export default function SecondaryButton({
  label,
  onClick,
  className,
  disabled = false,
}: SecondaryButtonProps) {
  return (
    <button
      className={`h-16 w-64 rounded-full border-4 border-dark-orange bg-jet font-semibold text-light-orange hover:border-jet ${className}}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
