import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="header">
        <h1 className="text-4xl font-bold">{t("main.title")}</h1>
        <div className="inline-flex">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => i18n.changeLanguage("de")}
          >
            DE
          </button>
        </div>
      </div>
    </>
  );
};
