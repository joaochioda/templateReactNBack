import React from "react";
import { useTranslation } from "react-i18next";

import Flag from "./Flag";

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage() {
    i18n.changeLanguage(i18n.language === "en-US" ? "pt-BR" : "en-US");
  }

  return (
    <>
      <Flag onClick={handleChangeLanguage} selectedLanguage={i18n.language} />
    </>
  );
};

export default I18n;
