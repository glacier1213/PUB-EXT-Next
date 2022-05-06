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
import { useCallback } from "react";
import { H2 } from "@arcnovus/wet-boew-react";

export default function Home() {
  // const currentLanguage = useCurrentLanguage();
  // const router = useRouter();
  const router = useRouter();
const currentLanguage = router.locale?.split("-")[0] ?? "en" as any;
const handleLink = useCallback(
  (a: HTMLAnchorElement) => {
    const relativeUrl = a.href.replace(window.location.origin, "");
    const asUrl = `/${currentLanguage}${relativeUrl}`;
    router.push(relativeUrl, asUrl, {
      shallow: false,
      locale: router.locale,
    });
  },
  [router, currentLanguage]
);


  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/contact/`,
  });
  // AppTemplate
  // DefaultTemplate
  const { t } = useTranslation("contact-page");
  return (
    <DefaultTemplate lngLinks={lngLinks} dateModified="2022-03-10">
      <PageTitle text={t("contactPublTitle")} />
      <p dangerouslySetInnerHTML={{ __html: t("contactContent1") }} />
      <p dangerouslySetInnerHTML={{ __html: t("contactContent2") }} />
      <p dangerouslySetInnerHTML={{ __html: t("contactContent3") }} />
      <p dangerouslySetInnerHTML={{ __html: t("directToArea") }} />
      <p dangerouslySetInnerHTML={{ __html: t("area1Title") }} />
      <p dangerouslySetInnerHTML={{ __html: t("area1Hours") }} />
      <p dangerouslySetInnerHTML={{ __html: t("area1MailAddress")+ '<a href="/browse">'+t("area1Email")+'</a>'}}></p>

      {/* <a href={`/${currentLanguage}/browse`}></a> */}
     

     

      <p dangerouslySetInnerHTML={{ __html: t("area2Title") }} />
      <p dangerouslySetInnerHTML={{ __html: t("area2Hours") }} />
      <p dangerouslySetInnerHTML={{ __html: t("area2MailAddress") }} />
      {/* <a href={`/${currentLanguage}/samples`}>
        <button className="btn btn-primary" type="button">
          {t("sample-pages")}
        </button>
      </a> */}
{/* <a href={`/samples/basic-settings`}>{t("basic-setting")}</a> */}


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
      "contact-page",
    ])),
  },
});
