import {
  DefaultTemplate,
  PageTitle,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";

import { useRouter } from "next/router";

export default function Breadcrumbs() {
  // const { t } = useTranslation("breadcrumbs-page");
  const { t, i18n } = useTranslation(['breadcrumbs-page', 'breadcrumbs']);
  const currentLanguage = useCurrentLanguage();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${
      currentLanguage == "en" ? "fr" : "en"
    }/home/samples/breadcrumbs`,
  });
  //for testing asPath of the router
  var router$1= useRouter();
  var linkPath = router$1.asPath.split('/');
  console.log(router$1);
  console.log(linkPath);



  return (
    <DefaultTemplate
      lngLinks={lngLinks}
      breadcrumbs={[
        { title: t("homeCrumbTitle"), href: t("homeCrumbHref") },
        // { title: t("homeCrumbTitle"), href: t("homeCrumbHref") },
        // { title: t("cdtsCrumbTitle"), href: t("cdtsCrumbHref") },href: t("browseCrumbHref",  {ns: "breadcrumbs"})
        { title: t("browseCrumbTitle", {ns: "breadcrumbs"}), href: t("browseCrumbHref",  {ns: "breadcrumbs"}) },
      ]}
    >
      <PageTitle text={t("title")} />
      <p>{t("intro")}</p>
      <h2>{t("implementation")}</h2>
      <p>{t("implementationIntro")}</p>
      <br></br>
      <p>{

        }</p>
      <ul>
        <li>
          <code>&quot;href&quot;:</code> {t("hrefDescription")}
        </li>
        <li>
          <code>&quot;title&quot;:</code> {t("titleDescription")}
        </li>
        <li>
          <code>&quot;acronym&quot;:</code> {t("acronymDescription")}
        </li>
      </ul>
      <p dangerouslySetInnerHTML={{ __html: t("note") }} />
      <pre>
        {`
const breadcrumbs = [{
    "title": "Home",
    "href": "/" as Href
},{
    "title": "CDTS",
    "acronym": "Centrally Deployed Templates Solution",
    "href": "https://www.canada.ca/en/index.html" as Href
}]`}
      </pre>
      <pre>
        {`<DefaultTemplate breadcrumbs={breadcrumbs}>...</DefaultTemplate>`}
      </pre>
      <pre>{`<AppTemplate breadcrumbs={breadcrumbs}>...</AppTemplate>`}</pre>
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
      "breadcrumbs-page","breadcrumbs"
    ])),
  },
});
