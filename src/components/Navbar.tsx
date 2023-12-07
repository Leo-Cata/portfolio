const Navbar = () => {
  return (
    <nav className="flex w-full items-baseline justify-between border-b-4 border-black p-5">
      <div>
        <h2 className="text-xl">Leo Catá</h2>
        {/* cat logo and name */}
      </div>

      {/* links */}
      <ul className="flex space-x-2 [&_li]:cursor-pointer [&_li]:rounded-md [&_li]:px-2 [&_li]:py-1 [&_li]:transition-colors [&_li]:duration-200">
        <li className="hover:bg-slate-300 hover:text-purple-500">Projects</li>
        <li className="hover:bg-slate-300 hover:text-purple-500">About Me</li>
        <li className="hover:bg-slate-300 hover:text-purple-500">
          Get In Touch
        </li>
      </ul>
      {/* links either to pages or to sections */}
    </nav>
  );
};

export default Navbar;
