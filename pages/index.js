import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaBullhorn, FaSearch, FaStore, FaPenNib, FaPalette, FaChartLine } from "react-icons/fa";
import { useRef } from "react";



const services = [
  { icon: <FaBullhorn size={28} />, title: "إدارة الحملات الإعلانية", desc: "نقود ظهورك وتحويلك باحتراف عبر قوقل ومنصات التواصل الاجتماعي" },
  { icon: <FaSearch size={28} />, title: "تحسين محركات البحث", desc: "نرفع ترتيب موقعك في نتائج قوقل لزيادة الظهور والزيارات المستهدفة" },
  { icon: <FaStore size={28} />, title: "إنشاء المتاجر الإلكترونية", desc: "نؤسس متجرك على سلة، زد، شوبيفاي - بشكل احترافي" },
  { icon: <FaPenNib size={28} />, title: "كتابة المحتوى", desc: "نكتب نصوصًا تُقنع، تُباع، وتبني الثقة" },
  { icon: <FaPalette size={28} />, title: "التصميم الإبداعي", desc: "هويات بصرية وصفحات تبهر وتُميزك عن الجميع" },
  { icon: <FaChartLine size={28} />, title: "تحليل الأداء والتقارير", desc: "نراقب ونقود حملتك باستخدام البيانات والتحسين المستمر" },
];

const reasons = [
  { title: "نتائج ملموسة", desc: "93٪ من عملائنا شهدوا تحسنًا واضحًا خلال أول 30 يوم." },
  { title: "فهم السوق المحلي", desc: "نحن لا نترجم أفكارك… نحن نولدها من الداخل وبلهجة جمهورك." },
  { title: "خدمات مترابطة", desc: "من المحتوى إلى الإعلانات… نغطي كل ما تحتاجه في مكان واحد." },
  { title: "هوية وتجربة راقية", desc: "نصنع لك صفحات وهويات لا تُنسى، وتدفع للشراء." }
];

const partners = [
  "/images/12.png",
  "/images/13.png",
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/17.png"
];

export default function Home() {
 const controls = useAnimation();

 useEffect(() => {
  controls.start({
    x: [0, -1000],
    transition: {
      repeat: Infinity,
      duration: 25, // 🔄 تحكم في السرعة (كل ما قل الرقم زادت السرعة)
      ease: "linear",
    },
  });
}, [controls]);

const servicesRef = useRef(null);

const scrollToServices = () => {
  if (servicesRef.current) {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <>
      <main className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-6 relative">
        <img src="/images/logo.png" alt="شعار وكالة سطر" className="w-32 md:w-40 mb-6" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center max-w-2xl"
        >
          من سطر تبدأ الحكاية…
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-xl"
        >
          وشراكتنا تكتب النجاح.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 px-8 py-4 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition"
        >
          احجز استشارتك المجانية
        </motion.a>

        <div className="mt-12 flex justify-center animate-bounce">
  <button onClick={scrollToServices} className="text-[#87daca] hover:text-[#6cc0b0] transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>

      </main>

      {/* قسم خدماتنا */}
      <section id="services" ref={servicesRef} className="bg-[#030712] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا</h2>
            <p className="text-gray-400 text-lg">خدمات متكاملة تبني حضورك وتحقق أهدافك.</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-[#111827] rounded-2xl p-8 w-full max-w-[320px] h-full text-center shadow-lg hover:shadow-2xl hover:scale-105 transition min-h-[340px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#1f2937] text-[#87daca]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم لماذا يختارون سطر؟ */}
      <section className="bg-slate-900 py-24" dir="rtl">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#ffffff]">كيف نُحدث الفرق؟</h2>
      <p className="text-gray-500 text-lg">نقيس، نحسّن، ونقودك بأرقام حقيقية</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      
      {/* يسار - تقرير شامل عن الأداء */}
      <div className="md:col-span-5 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
        <img
          src="/images/111.png"
          alt="تقرير أداء Google Search Console"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 text-right">نتائجك الرقمية في محرك البحث</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-right">
            نقيس عدد النقرات والانطباعات ومعدلات الظهور لتقييم أداءك الحقيقي في Google. نكشف نقاط القوة والفرص للتحسين.
          </p>
        </div>
      </div>

      {/* يمين - حاويتان */}
      <div className="md:col-span-7 flex flex-col justify-between gap-6">

        {/* البطاقة العلوية - بيانات Google Ads */}
        <div className="flex bg-white rounded-xl shadow-sm overflow-hidden flex-1">
          <div className="p-5 flex-1 flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-1 text-right">تحليل أداء حملات Google</h4>
            <p className="text-gray-600 text-sm leading-relaxed text-right">
              نتابع ظهور إعلاناتك وتكلفتها على مدار الشهور ونقيس الأثر المالي مقابل نتائج التحويل، لتحسين الإنفاق الإعلاني.
            </p>
          </div>
          <img
            src="/images/222.png"
            alt="Google Ads Performance"
            className="w-1/3 h-auto object-cover"
          />
        </div>

        {/* البطاقة السفلية - لوحة تقارير ROAS */}
        <div className="flex bg-white rounded-xl shadow-sm overflow-hidden flex-1">
          <div className="p-5 flex-1 flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-1 text-right">تقارير دقيقة لمعدل العائد</h4>
            <p className="text-gray-600 text-sm leading-relaxed text-right">
              نستعرض مؤشرات مثل ROAS وCPA ومتوسط قيمة الطلب، ونوفر لوحة تحكم تساعدك على اتخاذ قرارات مبنية على أرقام دقيقة.
            </p>
          </div>
          <img
            src="/images/333.png"
            alt="ROAS Dashboard"
            className="w-1/3 h-auto object-cover"
          />
        </div>

      </div>
    </div>
  </div>
</section>







      {/* قسم من نحن */}
      <section id="about" className="bg-[#030712] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="من نحن"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#87daca]">من نحن</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              سطر هي وكالة تسويق رقمية تنطلق من عمق السوق المحلي، وتكتب قصص نجاح عملائها سطرًا سطرًا.
              لا نبيع وعودًا… بل نخلق نتائج. بفريق متخصص في المحتوى، والإعلانات، والتصميم، نقدم حلولًا
              متكاملة تصنع التأثير وتحقق أهدافك التجارية.
            </p>
          </div>
        </div>
      </section>

 <section id="partners" className="bg-[#030712] text-white py-24 px-4 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">شركاء النجاح</h2>
    <p className="text-gray-400 text-lg mb-12">نفخر بالتعاون مع علامات مميزة تركنا بصمتنا معها.</p>

    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 cursor-grab"
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        animate={controls}
        whileTap={{ cursor: "grabbing" }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: [0, -1000],
            transition: {
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            },
          })
        }
      >
        {[...partners, ...partners].map((logo, index) => (
          <div
            key={index}
            className="min-w-[100px] h-[100px] bg-white rounded-full overflow-hidden shadow-md"
          >
            <img
              src={logo}
              alt={`شعار ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

<section className="bg-[#0f172a] py-24 px-4" dir="rtl">
  <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-right text-[#030712]">راسلنا مباشرة</h2>
    <p className="text-gray-600 mb-8 text-right">نرحب باستفساراتك، وسنعود إليك بأقرب وقت.</p>

    <form className="grid gap-6">
      <input
        type="text"
        name="name"
        placeholder="اسمك"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-[#87daca]"
      />
      <input
        type="email"
        name="email"
        placeholder="بريدك الإلكتروني"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-[#87daca]"
      />
      <textarea
        name="message"
        placeholder="رسالتك"
        rows="5"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-[#87daca]"
      ></textarea>
      <button
        type="submit"
        className="bg-[#87daca] text-black font-semibold py-3 rounded-lg hover:bg-[#6cc0b0] transition"
      >
        إرسال
      </button>
    </form>
  </div>
</section>

     <footer className="bg-[#020407] text-white px-6 pt-12 pb-6">
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

    {/* الشعار */}
    <div>
      <img src="/images/logo.png" alt="شعار وكالة سطر" className="w-32 md:w-40" />
    </div>

    {/* روابط التنقل */}
    <div className="flex flex-wrap gap-4 justify-center text-gray-300 text-sm">
      <a href="#about" className="hover:text-white">من نحن</a>
      <a href="#contact" className="hover:text-white">تواصل</a>
      <a href="#services" className="hover:text-white">الخدمات</a>
    </div>

    {/* الحقوق */}
    <div className="text-xs text-gray-500 mt-4">
      © {new Date().getFullYear()} وكالة سطر – جميع الحقوق محفوظة
    </div>
  </div>
</footer>
    </>
  );
}

