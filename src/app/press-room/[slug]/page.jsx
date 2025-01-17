import "@/styles/articles.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";
import ArticleHero from "./_components/ArticleHero";
import Article1Second from "./_components/Article1Second";
import ArticleCta from "./_components/ArticleCta";
import Article3Second from "./_components/Article3Second";

export async function generateStaticParams() {
  const slugs = await getSlugs();
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

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: "https://airis.space/images/meta.png",
    },
  };
}

const BlogSingle = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const post = await getPost(slug, locale);
  const slugs = await getSlugs();
  const currentIndex = slugs.indexOf(slug);

  const prevSlug =
    slugs.length > 0
      ? slugs[(currentIndex - 1 + slugs.length) % slugs.length] // Cycles to the last slug if currentIndex is 0
      : null;

  const nextSlug =
    slugs.length > 0
      ? slugs[(currentIndex + 1) % slugs.length] // Cycles to the first slug if currentIndex is the last
      : null;

  return (
    <div className="article">
      <ArticleHero
        title={post.title}
        subtitle={post.subtitle}
        articleClass={slug}
        img={post.thumbnail}
        short={post.short_description}
      />

      {slug == "boosting-call-center-efficiency-with-airis" && (
        <>
          <Article1Second />
          <ArticleCta
            text={"Ready to Achieve Similar <br/>Results for Your Business?"}
          />
        </>
      )}

      {slug == "ai-trends-in-business-process-optimization" && (
        <>
          <ArticleCta
            text={
              "Ready to learn more about <br/>AI-driven business process <br/>optimization?"
            }
          />
        </>
      )}

      {slug == "comparing-human-call-center-efficiency-vs-airis" && (
        <>
          <Article3Second />
          <ArticleCta text={"Ready to Transform <br/>Your Call Center?"} />
        </>
      )}

      {slug ==
        "how-ai-call-centers-improve-customer-experience-and-satisfaction-through-outbound-calls" && (
        <>
          <ArticleCta
            text={"Interested in elevating your <br/>outbound calls with AI?"}
          />
        </>
      )}
    </div>
  );
};

export default BlogSingle;
