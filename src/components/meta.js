/* eslint-disable import/first */

/* headタグ設定 */
import { Helmet } from "react-helmet-async";

import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteIcon } = siteMeta;

import { useLocation } from "react-router-dom";

const Meta = ({ pageTitle, pageDesc }) => {
  // ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  // ページの説明
  const desc = pageDesc ?? siteDesc;

  // ページのURL
  const router = useLocation().pathname;
  const url = `${siteUrl}${router}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Helmet>
  );
};
