import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const SwitchTheme = () => {
  return (
    <label className="cursor-pointer flex gap-2 text-primary items-center">
      <FontAwesomeIcon icon={faMoon} className="w-3" />
      <input
        type="checkbox"
        className="toggle theme-controller bg-primary"
        value="light"
      />
      <FontAwesomeIcon icon={faSun} className="w-3" />
    </label>
  );
};
