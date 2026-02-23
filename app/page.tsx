import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";

export default function Home() {
  return (
    <main className="bg-[#2b060d] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#2b060d]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Haji Hakim Ali Gulab Jamun"
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
            <span className="font-bold text-xl">HAJI HAKIM ALI</span>
          </div>

          {/* Menu Links */}
          <div className="space-x-6 hidden md:flex font-semibold">
            <a href="#hero" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#products" className="hover:text-gray-300">Products</a>
            <a href="#gallery" className="hover:text-gray-300">Gallery</a>

            {/* FIXED CONTACT LINK */}
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section id="hero" className="mt-[72px]">
        <HeroSlider />
      </section>

      {/* BRAND IMAGE STRIP */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto flex justify-center px-6">
          <img
            src="/section-bg.jpg"
            alt="Haji Hakim Ali Traditional Gulab Jamun"
            className="max-h-[180px] w-auto object-contain"
          />
        </div>
      </section>

       {/* PRODUCTS SECTION */}
      <section id="products" className="py-16 bg-[#fff7f5]">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4b0f1a] mb-12">
  Buy Fresh Gulab Jamun
</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PRODUCT CARD */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/products/1111.png"
                alt="SPECIAL KUJA PACKING Gulab Jamun"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#4b0f1a] mb-2">
                  SPECIAL KUJA GULAB JAMUN
                </h3>
                <p className="mb-4 text-gray-600">Pure Desi Taste</p>
                <Link
                  href="/products"
                  className="inline-block bg-[#4b0f1a] text-white px-6 py-2 rounded-full hover:bg-[#6a1625]"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/products/2222.png"
                alt="VIP BOX PACKING Gulab Jamun"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#4b0f1a] mb-2">
                  VIP BOX PACKING GULAB JAMUN
                </h3>
                <p className="mb-4 text-gray-600">Family Pack</p>
                <Link
                  href="/products"
                  className="inline-block bg-[#4b0f1a] text-white px-6 py-2 rounded-full hover:bg-[#6a1625]"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/products/gulab_jaman1.png"
                alt="PLASTIC PACKING GULAB JAMUN"
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#4b0f1a] mb-2">
                  PLASTIC PACKING GULAB JAMUN
                </h3>
                <p className="mb-4 text-gray-600">Party Special</p>
                <Link
                  href="/products"
                  className="inline-block bg-[#4b0f1a] text-white px-6 py-2 rounded-full hover:bg-[#6a1625]"
                >
                  View More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
     {/* ABOUT SECTION */}
{/* ABOUT SECTION */}
<section
  id="about"
  className="relative py-20 px-6 bg-[#f9f5f2]"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">
      <Image
        src="/darbar.jpg"   // put Hazrat Sher Muhammad image in public folder
        alt="Hazrat Mian Sher Muhammad Sharaqpuri"
        width={600}
        height={700}
        className="rounded-2xl shadow-2xl object-cover w-full"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-[#4b0f1a] mb-6">
        Our Legacy Since 1920
      </h2>

      <p className="text-gray-700 leading-relaxed mb-5">
        <strong>Haji Hakim Ali Gulab Jamun Wale</strong> is the famous
        Sharaqpuri Gulab Jamun shop known across Pakistan and worldwide.
        Founded in 1920 by Haji Hakim Ali, this shop has proudly served
        customers for over 100 years. Today, his grandchildren continue
        this blessed tradition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-5">
        Haji Hakim Ali spent much of his time with
        <strong> Mian Sher Muhammad Rehmatullah Aleh</strong>.
        Under his guidance, he was sent to Hafizabad to learn
        the art of confectionery. After mastering the craft,
        he returned to Sharaqpur and began his work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-5">
        It was Mian Sher Muhammad Rehmatullah Aleh who shared
        the blessed recipe of Gulab Jamun and advised him:
        <em> “Keep making it and keep eating it.” </em>
        From that moment, Gulab Jamun gained immense popularity,
        and over time it became the heart of the business.
      </p>

      <p className="text-gray-700 leading-relaxed">
        For nearly a century, the demand for our Gulab Jamun
        has continued to grow day by day — and will continue,
        InshaAllah.
      </p>
    </div>

  </div>
</section>


{/* PROMOTIONAL BANNER */}
<section className="py-16 bg-[white]">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <Image
      src="/promo-banner.jpg"   // put your image inside public folder
      alt="Haji Hakim Ali Special Banner"
      width={1200}
      height={500}
      className="mx-auto rounded-2xl shadow-2xl object-contain"
    />

  </div>
</section>


      {/* GALLERY */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4b0f1a] mb-10">
            Our Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["abid.jpg", "gulab_jaman.jpg", "zahid22.jpg", "working_2.jpg", "444.jpeg", "work.jpg"].map(
              (img, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                  <Image
                    src={`/gallery/${img}`}
                    alt="Gulab Jamun Gallery"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
{/* MULTIPLE YOUTUBE VIDEOS SECTION */}
<section className="py-16 bg-[#2b060d]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-fadeInUp">
      Watch Our Special Gulab Jamun Preparation
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* VIDEO 1 */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/2Puc5CGfPL0"
          title="Gulab Jamun Preparation 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* VIDEO 2 */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/9OaJ7JbbPQs"
          title="Gulab Jamun Preparation 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* VIDEO 3 */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/9EZVopHHowo"
          title="Gulab Jamun Preparation 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* ADD MORE VIDEOS BELOW AS NEEDED */}
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-[#2b060d] text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <img
              src="/logo.png"
              alt="Haji Hakim Ali Gulab Jamun"
              className="h-40 w-40 rounded-full border-2 border-white mb-3"
            />
            <h1 className="text-xl font-bold mb-2">Haji Hakim Ali</h1>
            <p className="text-sm text-gray-300">
              Haji Hakim Ali Gulab Jamun is a legendary name from Sharaqpur Shareef,famous for its pure 
              desi ghee, soft texture, and unforgettable taste. Our recipe is passed down through generations.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-sm mb-2">📍 Main Bazar Sharaqpur Shareef, Pakistan</p>
            <p className="text-sm mb-2">📍 Thokar Naiz Baig Raiwind Road Lahore, Pakistan</p>
            <p className="text-sm mb-2">📞 +92 321 4572786,   03228410910</p>
            <a
              href="https://wa.me/923245050786"
              className="inline-block mt-2 bg-white text-[#4b0f1a] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
          © {new Date().getFullYear()} Haji Hakim Ali All rights reserved.
          <span className="mx-2">|</span>
          Powered by{" "}
          <a
            href="https://www.sabsekho.co/"
            target="_blank"
            className="font-semibold hover:underline text-white"
          >
            SabSekho Networks
          </a>
        </div>
      </footer>
    </main>
  );
}
