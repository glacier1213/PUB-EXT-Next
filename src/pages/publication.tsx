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
import { H2 } from "@arcnovus/wet-boew-react";

export default function Home() {
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/publication/`,
  });
  // AppTemplate
  // DefaultTemplate
  const { t } = useTranslation("publication-home");
  return (
    <DefaultTemplate lngLinks={lngLinks} dateModified="2022-03-10">
      <PageTitle text={t("title")} />
      <p dangerouslySetInnerHTML={{ __html: t("introContent1") }} />
      <p dangerouslySetInnerHTML={{ __html: t("introContent2") }} />
      <p dangerouslySetInnerHTML={{ __html: t("introNote") }} />
      {/* <a href={`/${currentLanguage}/samples`}>
        <button className="btn btn-primary" type="button">
          {t("sample-pages")}
        </button>
      </a> */}
{/* <a href={`/samples/basic-settings`}>{t("basic-setting")}</a> */}
{/**   <a href={`/${currentLanguage}/publication`}>
        <button className="btn btn-primary" type="button">
          {t("pubEntry")}
        </button>
      </a> */}

      <ul className="colcount-sm-2 colcount-md-3 colcount-lg-4 lst-none">
        <li>
            <a href={`/${currentLanguage}/browse`}>
            {t("browsePubEntry")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_search-pub_rech-eng.cfm`}
          >
            {t("searchPubEntry")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_adv_search-pub_avan_rech-eng.cfm?clear_session_criteria=1`}
          >
            {t("advancedSearchEntry")}
          </a>
        </li>
        <li>
          <section>
            <a
              href={`https://publicentrale-ext-dev.agr.gc.ca/pub_adv_search_res-pub_avan_rech_res-eng.cfm?search_criteria_list=publication~l_and~f_publication_subject~l_equal~WHN&LISTTYPE=compact&SHOW_ENTRIES=10&SORT_BY=by_title&more=1&whatsnew=1`}
            >
              {t("whatsNewEntry")}
            </a>
          </section>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_adv_search_res-pub_avan_rech_res-eng.cfm?search_criteria_list=publication~l_and~f_publication_subject~l_equal~MOP&LISTTYPE=compact&SHOW_ENTRIES=10&SORT_BY=by_title&more=1&mostpopular=1`}
          >
            {t("popularEntry")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/howto_order-comment_commander-eng.cfm`}
          >
            {t("howToOrderEntry")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/order_content-commande_contenu-eng.cfm`}
          >
            {t("orderContentEntry")}
          </a>
        </li>
        <li>
          <a
            href={`/${currentLanguage}/contact`}
          >
            {t("contactPubEntry")}
          </a>
        </li>
      </ul>
      <ul>
        <H2>{t("whatsNewEntry")} </H2>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=13078E`}
          >
            {t("whatsNewLink1")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=13072E`}
          >
            {t("whatsNewLink2")}
          </a>
        </li>
        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=13072E`}
          >
            {t("whatsNewLink3")}
          </a>
        </li>

        <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=13072E`}
          >
            {t("whatsNewLink4")}
          </a>
        </li>

      </ul>

      <ul>
      <H2>{t("mostPopularTitle")} </H2>
      <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=11245E`}
          >
            {t("mostPopularLink1")}
          </a>
          </li>

          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=2218E`}
          >
            {t("mostPopularLink2")}
          </a>
          </li>
          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/pub_view-pub_affichage-eng.cfm?publication_id=12481E`}
          >
            {t("mostPopularLink3")}
          </a>
          </li>
      </ul>
      <ul>
      <H2>{t("otherLinksTitle")} </H2>
      <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/dist_policy-dist_police-eng.cfm`}
          >
            {t("otherLinksTitleLink1")}
          </a>
          </li>

          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/press_note-medias_intention-eng.cfm`}
          >
            {t("otherLinksTitleLink2")}
          </a>
          </li>
          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/disclaimers-exoneration-eng.cfm`}
          >
            {t("otherLinksTitleLink3")}
          </a>
          </li>
          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/languages-langues-eng.cfm`}
          >
            {t("otherLinksTitleLink4")}
          </a>
          </li>
          <li>
          <a
            href={`https://publicentrale-ext-dev.agr.gc.ca/gender_neutr-sexe_neutr-eng.cfm`}
          >
            {t("otherLinksTitleLink5")}
          </a>
          </li>
      </ul>

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
      "publication-home",
    ])),
  },
});
