type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
};

export default function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (
    <button
      className="h-16 w-64 rounded-full border-4 border-dark-orange bg-dark-orange font-semibold text-light-orange hover:border-jet hover:text-jet"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
