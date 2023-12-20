const Hero = () => {
  return (
    <div className="my-20 flex  justify-center">
      <section className="flex w-full max-w-[95%] flex-col items-center rounded-xl bg-white p-4 shadow-xl lg:max-w-[70%]">
        {/* img */}
        <img
          src="/pfp.png"
          alt="profile picture"
          className="h-[300px] w-[310px] rounded-xl"
        />

        {/* description */}
        <div className="space-y-1 pt-4">
          <h5 className="font-roboto md:text-lg">
            Hey there, I'm Matías, From a city in the south of Argentina!
          </h5>

          {/* description */}
          <p className="whitespace-pre-line md:text-xl">
            I'm an aspiring{" "}
            <span className="gradient-text animate-gradient background-clip text-lg font-semibold text-transparent md:text-2xl">
              React Front-End Developer
            </span>
            , passionate about technology for as long as I can remember.&#10; At
            the end of September of 2023, I completed a React Front-End
            Bootcamp, and since then I've been learning and doing projects on my
            own.&#10; My goal is to become developer, building interactive
            websites that bring value to the businesses through my work while
            leveling my skills as a developer.&#10; I have studied English for 7
            years, graduating with a B2 level through the Cambridge FCE
            Examination and I use English in my day to day, from listening to
            music, watching movies, tv series to learning.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/leonel-cata/"
          target="_blank"
          rel="noopener noreferrer"
          className="m-10 rounded-full bg-[#43257e] px-6 py-4  text-center text-2xl  text-white transition-all hover:bg-[#43257e]/70"
        >
          Get In Contact
        </a>
      </section>
    </div>
  );
};

export default Hero;
