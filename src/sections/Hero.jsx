export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Main Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #123C4D 0%, #1A566E 45%, #2B6F8A 100%)",
          }}
        />

        {/* Left Glow */}
        <div
          className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full blur-[150px] opacity-30"
          style={{
            background: "#3A8FB7",
          }}
        />

        {/* Right Glow */}
        <div
          className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{
            background: "#5CAED6",
          }}
        />

        {/* Center Glow */}
        <div
          className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] opacity-10"
          style={{
            background: "#ffffff",
          }}
        />

        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-33 pb-20 px-6">

        <img
          src="/profile-photo.jpg"
          alt="Mekuannint"
          className="w-32 md:w-40 lg:w-44 object-cover select-none"
          draggable="false"
        />

        <h1 className="mt-16 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Software Engineer
        </h1>

        <p className="mt-4 text-xl md:text-2xl font-medium tracking-wide text-white/90">
          Web Development & AI Foundations
        </p>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;