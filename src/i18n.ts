import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as plJson from "./translations/pl.json";

const resources = {
  pl: {
    translation: plJson,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
});

export default i18n;
