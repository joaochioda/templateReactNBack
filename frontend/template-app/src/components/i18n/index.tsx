import React from "react";
import { useTranslation } from "react-i18next";
import * as I from "./I18n";

const I18n = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <I.default i18n={i18n} />
    </>
  );
};

export default I18n;
