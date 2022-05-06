import {
  DefaultTemplate,
  PageTitle,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Home() {
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/home/`,
  });
  // AppTemplate
  // DefaultTemplate
  const { t } = useTranslation("home-page");
  return (
    <DefaultTemplate lngLinks={lngLinks}>
      <PageTitle text={t("title")} />
      <p dangerouslySetInnerHTML={{ __html: t("intro") }} />
      <a href={`/${currentLanguage}/samples`}>
        <button className="btn btn-primary" type="button">
          {t("sample-pages")}
        </button>
      </a> <span></span>
      <a href={`/${currentLanguage}/publication`}>
        <button className="btn btn-primary" type="button">
          {t("pubEntry")}
        </button>
      </a>
    </DefaultTemplate>
  );
}

// Note: You can use getServerSideProps if you also need to load dynamic data
// from an API on each page load.
export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? defaultLocale ?? "en", [
      "home-page",
    ])),
  },
});
