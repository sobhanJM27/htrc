import { type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export type SeoTagsProps = {
  title: string;
  description?: string;
  keywords?: string;
  children?: ReactNode;
};

const SeoTags = ({ title, description, keywords, children }: SeoTagsProps) => {
  return (
    <Helmet>
      <title>{`HTRC | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </Helmet>
  );
};

export default SeoTags;
