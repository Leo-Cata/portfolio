import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
const Hero = () => {
  // gets language
  const lang = useParams().lang;

  const [Introduction, setIntroduction] = useState<string | null>(null);

  // classes for the a tag and span
  const spanClasses =
    "gradient-text background-clip animate-gradient text-lg font-semibold text-transparent md:text-2xl";
  const linkClasses = "underline text-blue-500";

  useEffect(() => {
    const fetchIntroduction = async () => {
      try {
        //gets the data
        const data = await fetch(`/data/${lang}/introduction.json`);

        // parses it
        const parsedData = await data.json();

        // replaces the keyword with a span with classes
        const introWithClasses = parsedData.introduction
          .replace(
            /\b(React Front-End Developer|Desarrollador Front-End en React)\b/g,
            `<span class="${spanClasses}">$1</span>`,
          )
          //then replaces the english level with a 'a' tag
          .replace(
            /B2 'upper intermediate'/g,
            `<a href='https://www.linkedin.com/in/leonel-cata/overlay/1635494546270/single-media-viewer/?profileId=ACoAADj2fWcBG2Bv5eNky6Us1r8bOP_6vsGTcAQ' target='_blank' rel='noopener noreferrer' class="${linkClasses}">B2 'upper intermediate'</a>`,
          );
        //sanitizes it and then sets it
        setIntroduction(
          DOMPurify.sanitize(introWithClasses, {
            ADD_ATTR: ["target"], // adds target='_blank' to the a tag
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchIntroduction();
  }, [lang]);

  return (
    <div className=" flex  justify-center">
      <section className="mx-1 flex w-full  flex-col items-center rounded-xl bg-white p-4 shadow-xl lg:max-w-[70%]">
        {/* img */}

        <img
          src="/pfp.png"
          alt="profile picture"
          className="h-[300px] w-[310px] rounded-xl"
        />

        {/* description */}
        <div className="space-y-1 pt-4 font-roboto">
          {/* description */}
          {Introduction && (
            <p
              className="md:text-xl"
              dangerouslySetInnerHTML={{
                __html: Introduction,
              }}
            />
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/leonel-cata/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple hover:bg-purple/70 m-10 flex items-center space-x-2 rounded-full px-6 py-4 text-white transition-all"
        >
          <FaLinkedin size="24px" className="mt-1" />
          <p className=" h-fit text-center text-2xl">
            {lang === "en" ? "Get In Contact" : "Contáctame!"}
          </p>
        </a>
      </section>
    </div>
  );
};

export default Hero;
