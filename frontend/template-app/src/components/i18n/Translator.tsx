import React from "react";
import { useTranslation } from "react-i18next";

interface TranslatorProps {
  path: any;
}

const Translator = ({ path }: TranslatorProps) => {
  const { t } = useTranslation();
  return <>{t(path)}</>;
};

export default Translator;
