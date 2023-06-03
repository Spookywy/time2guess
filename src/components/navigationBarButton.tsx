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
      className={`flex flex-col rounded-full items-center text-dark-orange w-48 py-2 ${
        isSelected ? "bg-white" : ""
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <p>{label}</p>
    </button>
  );
}
