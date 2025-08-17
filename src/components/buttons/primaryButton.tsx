import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export default function PrimaryButton({
  label,
  onClick,
  className,
  isDisabled = false,
  isLoading = false,
}: PrimaryButtonProps) {
  return (
    <button
      className={`h-16 w-64 rounded-full border-4 border-dark-orange bg-dark-orange font-semibold text-light-orange active:border-jet active:text-jet ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {label}
      {isLoading && (
        <FontAwesomeIcon icon={faSpinner} className="ml-2 animate-spin" />
      )}
    </button>
  );
}
