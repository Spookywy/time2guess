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
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-3 transition-all active:scale-95 ${
        isSelected
          ? "bg-light-orange text-jet"
          : "text-light-orange hover:bg-white/10"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}
