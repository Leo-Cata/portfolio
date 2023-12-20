import { FaLinkedin, FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-[#43257e] p-5 font-roboto text-white shadow-xl">
      <div>
        <h2 className="text-lg font-medium">Leo Catá</h2>
        {/* cat logo and name */}
      </div>

      {/* links */}
      <ul className="flex space-x-2 text-base text-blue-300  lg:text-lg [&_li]:cursor-pointer [&_li]:rounded-md [&_li]:px-2 [&_li]:py-1 [&_li]:text-center [&_li]:transition-colors [&_li]:duration-200">
        <li className="hover:bg-white/20">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:bg-white/20">About Me</li>
        {/* links either to pages or to sections */}
      </ul>

      {/* icons for linkedin and github */}
      <div className="flex space-x-2 ">
        <a
          href="https://www.linkedin.com/in/leonel-cata/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="22px" />
        </a>

        <a
          href="https://github.com/leo-cata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="22px" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
