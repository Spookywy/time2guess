import { flag } from "flags/next";

export const christmasThemeFlag = flag({
  key: "christmas-theme-flag",
  description: "Enable the Christmas theme",
  decide() {
    return false;
  },
});
