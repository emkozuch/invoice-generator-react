import { useTranslation } from "react-i18next";
import { TKeys } from "../../../translations/Tkeys";

export const ClientData = () => {
  const { t } = useTranslation();
  return <h2>{t(TKeys.CLIENT_COMPANY_DATA)}</h2>;
};
