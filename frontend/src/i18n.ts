import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationTH from "./locales/th.json";

i18n
  .use(initReactI18next) // ใช้ react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      th: { translation: translationTH },
    },
    lng: "th", // ภาษาเริ่มต้น
    fallbackLng: "th",
    interpolation: { escapeValue: false },
  });

export default i18n;
