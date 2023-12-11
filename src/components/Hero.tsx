const Hero = () => {
  return (
    <div className="relative flex h-[600px] items-center justify-center">
      <img
        src="/layered-steps-haikei.svg"
        alt="asd"
        className="absolute -z-10 max-h-[600px] w-full self-start object-cover"
      />
      <h1 className="text-3xl text-white">
        I'm Leo, an aspiring Frontend web developer
      </h1>
    </div>
  );
};

export default Hero;
