import Head from "next/head";

const posts = [
  {
    title: "أهم 5 خطوات لتحسين ظهورك في نتائج قوقل",
    slug: "seo-steps",
    excerpt: "إذا كنت تمتلك موقعًا، فهذه الخطوات ستساعدك على رفع ترتيبك وزيادة زياراتك من محركات البحث.",
    date: "مايو 2025",
    image: "/images/blog/seo.jpg",
  },
  {
    title: "كيف تختار وكالة تسويق فعلاً ترفع مبيعاتك؟",
    slug: "choose-marketing-agency",
    excerpt: "ليست كل الوكالات متشابهة… تعرّف على الفروقات الحقيقية بين وكالة تبيع كلام ووكالة تصنع نتائج.",
    date: "أبريل 2025",
    image: "/images/blog/agency.jpg",
  },
];

export default function Blog() {
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
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
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
