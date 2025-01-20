import "@/styles/articles.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";
import ArticleHero from "./_components/ArticleHero";
import Article1Second from "./_components/Article1Second";
import ArticleCta from "./_components/ArticleCta";
import Article3Second from "./_components/Article3Second";
import ArticleLast from "./_components/ArticleLast";
import Article1Content from "./_components/Article1Content";
import Article3Content from "./_components/Article3Content";
import Article2Content from "./_components/Article2Content";
import Article4Content from "./_components/Article4Content";
import Article1Timeline from "./_components/Article1Timeline";
import Article1Results from "./_components/Article1Results";

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
          <Article1Content />
          <Article1Timeline />
          <Article1Results />
          <ArticleCta
            text={"Ready to Achieve Similar <br/>Results for Your Business?"}
          />
          <ArticleLast
            slug1={"ai-trends-in-business-process-optimization"}
            title1={
              "AI Trends in Business Process Optimization 2025 and Beyond"
            }
            img1={"/images/blog/article3.png"}
            slug2={"comparing-human-call-center-efficiency-vs-airis"}
            title2={"Case Study: Human vs. Airis"}
            img2={"/images/blog/article2.png"}
          />
        </>
      )}

      {slug == "ai-trends-in-business-process-optimization" && (
        <>
          <Article2Content />
          <ArticleCta
            text={
              "Ready to learn more about <br/>AI-driven business process <br/>optimization?"
            }
          />
          <ArticleLast
            slug1={"comparing-human-call-center-efficiency-vs-airis"}
            title1={"Case Study: Human vs. Airis"}
            img1={"/images/blog/article2.png"}
            slug2={
              "how-ai-call-centers-improve-customer-experience-and-satisfaction-through-outbound-calls"
            }
            title2={
              "How AI Outbound Call Centers Elevate Customer Satisfaction"
            }
            img2={"/images/blog/article4.png"}
          />
        </>
      )}

      {slug == "comparing-human-call-center-efficiency-vs-airis" && (
        <>
          <Article3Second />
          <Article3Content />
          <ArticleCta text={"Ready to Transform <br/>Your Call Center?"} />
          <ArticleLast
            slug1={
              "how-ai-call-centers-improve-customer-experience-and-satisfaction-through-outbound-calls"
            }
            title1={
              "How AI Outbound Call Centers Elevate Customer Satisfaction"
            }
            img1={"/images/blog/article4.png"}
            slug2={"boosting-call-center-efficiency-with-airis"}
            title2={"Case Study: Financial Firm Transforms Call Center "}
            img2={"/images/blog/article1.png"}
          />
        </>
      )}

      {slug ==
        "how-ai-call-centers-improve-customer-experience-and-satisfaction-through-outbound-calls" && (
        <>
          <Article4Content />
          <ArticleCta
            text={"Interested in elevating your <br/>outbound calls with AI?"}
          />
          <ArticleLast
            slug1={"boosting-call-center-efficiency-with-airis"}
            title1={"Case Study: Financial Firm Transforms Call Center "}
            img1={"/images/blog/article1.png"}
            slug2={"ai-trends-in-business-process-optimization"}
            title2={
              "AI Trends in Business Process Optimization 2025 and Beyond"
            }
            img2={"/images/blog/article3.png"}
          />
        </>
      )}
    </div>
  );
};

export default BlogSingle;
