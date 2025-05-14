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
     <section className="bg-[#0f172a] py-24" dir="rtl">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">كيف نُحدث الفرق؟</h2>
      <p className="text-gray-400 text-lg">نقيس، نحسّن، ونقودك بأرقام حقيقية</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* تحليل محركات البحث */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-slate-800">تحليل محركات البحث</h3>
        <p className="text-gray-600 text-sm mb-4">
          نستعرض مؤشرات مثل ROAS وCPA ومتوسط قيمة الطلب، ونوفر لوحة بيانات تفاعلية تساعدك على اتخاذ قرارات مبنية على أرقام دقيقة.
        </p>
        <img
          src="/images/222.png"
          alt="تحليل محركات البحث"
          className="w-full h-auto max-h-[260px] object-contain rounded"
        />
      </div>

      {/* تحسين محركات البحث */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-slate-800">تحسين محركات البحث</h3>
        <p className="text-gray-600 text-sm mb-4">
          نقيس عدد النقرات والانطباعات ومعدلات الظهور لتقييم أداءك الحقيقي في Google، ونكتشف نقاط القوة والفرص للتحسين.
        </p>
        <img
          src="/images/333.png"
          alt="تحسين محركات البحث"
          className="w-full h-auto max-h-[260px] object-contain rounded"
        />
      </div>

      {/* نتائج الأداء المالي */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-slate-800">نتائج الأداء المالي</h3>
        <p className="text-gray-600 text-sm mb-4">
          تابع ظهور إعلاناتك وتكلفتها على مدار الشهور وقِس الأثر المالي مقابل نتائج التحويل لتحسين الإنفاق الإعلاني.
        </p>
        <img
          src="/images/111.png"
          alt="نتائج الأداء المالي"
          className="w-full h-auto max-h-[260px] object-contain rounded"
        />
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


     <footer className="bg-[#0f172a] text-white px-6 pt-12 pb-6">
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">

    {/* الشعار */}
    <div>
      <img src="/images/logo.png" alt="شعار وكالة سطر" className="w-32 md:w-40" />
    </div>

    {/* روابط التنقل */}
    <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
      <a href="#about" className="hover:text-white transition-colors duration-200">من نحن</a>
      <a href="#services" className="hover:text-white transition-colors duration-200">الخدمات</a>
      <a href="#contact" className="hover:text-white transition-colors duration-200">تواصل معنا</a>
    </nav>

    {/* حساب تويتر */}
    <div>
     <a
  href="https://x.com/satragency_"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M20.39 3H17.6L12.89 9.24 7.86 3H3l6.75 8.62L3 21h3.08l4.92-6.55L16.38 21H21l-7.16-9z"/>
  </svg>
</a>
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

