import {
    DefaultTemplate,
    PageTitle,
    Table,
    Row,
    H2,
    useLngLinks,
    Container,
  } from "@arcnovus/wet-boew-react";
  import { GetStaticProps } from "next";
  import { useTranslation } from "next-i18next";
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//   import DateModifiedExample from "../../components/DateModifiedExample";
//   import VersionIdentifierExample from "../../components/VersionIdentifierExample";
//   import ScreenIdentifierExample from "../../components/ScreenIdentifierExample";
  import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
  
  export default function Browse() {
    const { t } = useTranslation("browse");
  
    const currentLanguage = useCurrentLanguage();
    const { lngLinks } = useLngLinks({
      currentLanguage,
      translatedPage: `/${
        currentLanguage == "en" ? "fr" : "en"
      }/browse`,
    });
  
    return (
      <DefaultTemplate
        lngLinks={lngLinks}
        dateModified="2022-03-03"
        versionIdentifier="7890123456"
        screenIdentifier="0123456789"
        breadcrumbs={[{ title: t("homeCrumbTitle"), href: t("homeCrumbHref") }]}
      >
        <PageTitle text={t("browsePubTitle")} />
        <p>{t("inAllLang")}</p>
{console.log(window.location.href)}
        <Container>
            <Row>
                <div>
                <Table id="browseList" className="table table-striped table-boardered" caption="Browse Title">
            <caption className="wb-inv">Caption text</caption>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>{t("tablePubNumberTitle")}</th>
                    <th>{t("tablePubTitle")}</th>
                    <th>{t("tableYearPubTitle")}</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
                </div>
            </Row>
        </Container>
       
        {/* <DateModifiedExample />
        <ScreenIdentifierExample />
        <VersionIdentifierExample /> */}
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
        "browse",
       
      ])),
    },
  });
  