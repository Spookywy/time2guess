import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavigationBarButtonProps = {
  icon: IconDefinition;
  label: string;
  isSelected?: boolean;
  onClick: () => void;
};

export default function NavigationBarButton({
  icon,
  label,
  isSelected,
  onClick,
}: NavigationBarButtonProps) {
  return (
    <button
      className={`flex w-28 scale-110 flex-col items-center rounded-full py-4 text-dark-orange sm:w-48 ${
        isSelected ? "bg-white" : ""
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <p className="font-medium">{label}</p>
    </button>
  );
}
