import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("terms-of-use", locale);
  const pageTitle = `${page.title} | Airis`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

const TermsAndConditions = async () => {
  const page = await getPage("terms-of-use");
  return (
    <>
      <section className="policy-hero">
        <img src="/images/about/ellipse1.png" />
        <div className="_container">
          <div className="policy-hero__body">
            <div>
              <Image
                alt="hero1"
                src={"/images/standarts/hero1.png"}
                width={330}
                height={300}
              />
            </div>
            <div>
              <h1>{page.title}</h1>
              {page.date ? <h2>Last updated: {page.date}</h2> : ""}
            </div>
            <div>
              <Image
                alt="hero1"
                src={"/images/standarts/hero2.png"}
                width={330}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="policy">
        <div className="_container">
          <div className="policy__body">
            <article
              dangerouslySetInnerHTML={{ __html: page.body }}
              className="policy__content"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
