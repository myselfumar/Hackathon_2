import Image from "next/image";

export default function Header() {
  return (
    <section className="relative overflow-hidden bg-[#00C1FD]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Summer 2020
          </p>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white lg:text-6xl">
            NEW COLLECTION
          </h1>
          <p className="mb-8 max-w-md text-base md:text-lg text-white/90">
            We know how large objects will act, but things on a small scale.
          </p>
          <div>
            <button className="rounded bg-[#2DC071] px-6 md:px-8 lg:px-10 py-2 md:py-3 font-bold text-white transition-colors hover:bg-[#2DC071]/90">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <Image
            src="/shop1.jpeg" // Corrected path
            alt="Fashion model with shopping bags"
            layout="responsive" // Responsive layout
            width={16}
            height={9}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
