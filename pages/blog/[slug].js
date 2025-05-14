import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content', 'blog'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('content', 'blog', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter,
      content: contentHtml,
    },
  };
}

export default function BlogPost({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | سطر</title>
      </Head>

      <section className="bg-[#030712] text-white min-h-screen py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold mb-4 text-right">{frontmatter.title}</h1>
          <p className="text-sm text-gray-400 mb-8 text-right">{frontmatter.date}</p>
          <div
            className="prose prose-invert prose-lg text-right"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </section>
    </>
  );
}