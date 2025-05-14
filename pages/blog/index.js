import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content', 'blog'));

  console.log("📂 ملفات في blog/:", files);


  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('content', 'blog', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      ...frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>المدونة | سطر</title>
      </Head>

      <section className="min-h-screen bg-[#030712] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">المدونة</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-[#111827] rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-right">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-400 mb-4">{post.excerpt || ''}</p>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
