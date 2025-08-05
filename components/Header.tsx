/* components/Header.tsx */
export default function Header() {
  return (
    <header
      className="w-full shadow-lg relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgba(67,98,79,.9) 0%, rgba(83,49,23,.8) 100%), url("/pham.jpg") center/cover',
        minHeight: '200px',
      }}
    >
      {/* subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 py-8 px-4 relative z-10">
        {/* crest */}
        <img
          src="/arrowhead.png"
          alt="36th Infantry Division Crest"
          className="h-24 sm:h-32 md:h-40 animate-[float_6s_ease-in-out_infinite] drop-shadow-2xl"
        />

        {/* title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white drop-shadow-lg">
            Lone Star Band AMPA
          </h1>
          <p className="text-lg sm:text-xl text-yellow-200 font-semibold drop-shadow-md">
            36th Infantry Division Band
          </p>
        </div>

        {/* external link */}
        <a
          href="https://www.lonestarband.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block rounded-full bg-odgreen/90 px-5 py-2 text-sm sm:text-base font-semibold
                     text-white ring-1 ring-white/20 transition
                     hover:bg-tpatch hover:-translate-y-0.5 hover:shadow-lg"
        >
          Visit&nbsp;lonestarband.org&nbsp;→
        </a>
      </div>
    </header>
  );
}
