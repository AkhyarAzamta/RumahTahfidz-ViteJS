import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url(/hero.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-white/50 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Rumah Tahfidz Ummi Samsah.
            <strong className="block font-extrabold text-rose-700">
              Generasi Terbaik Qurani
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Mari salurkan donasi terbaik anda sebagai investasi akhirat
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Donasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
