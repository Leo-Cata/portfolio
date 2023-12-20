const Hero = () => {
  return (
    <div className="relative flex h-[800px] items-center justify-center">
      <img
        src="public\19333449.jpg"
        alt="asd"
        className="absolute -z-10 h-full w-full self-start object-cover"
      />
      <div className="flex items-center">
        <h1 className="text-3xl text-white">
          Hey, I'm Leo, an aspiring Frontend web developer from Argentina!
        </h1>
        <img src="public\undraw_hello_re_3evm.svg" alt="" className="w-52" />
      </div>
    </div>
  );
};

export default Hero;
