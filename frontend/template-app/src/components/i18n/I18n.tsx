import React from "react";

import Flag from "./Flag";

interface i18nProps {
  i18n: {
    changeLanguage: (language: string) => void;
    language: string;
  };
}

const I18n = ({ i18n }: i18nProps) => {
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
