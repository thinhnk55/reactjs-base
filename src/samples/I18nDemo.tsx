import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function I18nDemo() {
  const { t } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18next.language === "vi" ? "en" : "vi";
    localStorage.setItem("language", newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (
    <div className="bg-amber-100 w-96 rounded-sm shadow-sm p-4 flex flex-col items-center">
      <h1>{t("demo")}</h1>
      <button onClick={toggleLanguage}>
        <Icon
          icon={
            i18next.language === "en"
              ? "twemoji:flag-vietnam"
              : "twemoji:flag-united-kingdom"
          }
          width="48"
          height="48"
          className="text-black"
        />
      </button>
    </div>
  );
}
