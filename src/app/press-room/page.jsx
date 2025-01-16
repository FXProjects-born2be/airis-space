import React from "react";
import "@/styles/press-room.scss";
import { getPosts } from "@/utils/blogUtils";

export const metadata = {
  title: "Press Room | Airis",
  description:
    "Explore the latest news, updates, and insights on AI-driven call center automation. Stay informed about industry trends and innovations.",
  openGraph: {
    title: "Press Room | Airis",
    description:
      "Explore the latest news, updates, and insights on AI-driven call center automation. Stay informed about industry trends and innovations.",
    //images: "",
  },
};

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

const Resources = async () => {
  const posts = await getPosts();
  return (
    <>
      
    </>
  );
};

export default Resources;
