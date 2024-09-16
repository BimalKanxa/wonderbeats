

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/modern-three-dimensional-spheres-background_79603-1448.jpg?w=740&t=st=1696895959~exp=1696896559~hmac=d6c949419d0d31c0d612045c2cd81472971469c185c4c288517a790ab9f8d701')"
        }}
      >
        <header>
          <div className="container mx-auto px-[var(--padding-inline-section)] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
            <div className="max-w-[80vw] lg:max-w-[40vw] mb-8 lg:mb-0 pl-[2rem]">
              <h1 className="mt-8 font-bold text-2xl text-gray-900">
                Let&apos;s Build The Better World Together.
              </h1>
              <h4 className="font-bold text-xl text-gray-700">
                Breaking Barriers, Building Futures
              </h4>
              <br />
              <p className="mb-8 text-gray-600">
                The Wonder Beats Foundation is a non-profit organization committed to empowering individuals to break free from poverty&apos;s cycle and reach their full potential. Through scholarships, mentorship, and skill development programs, we strive to create a level playing field in education and employment.
              </p>
              <a
                href="/about"
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md shadow-md transition ease-out duration-200 text-center inline-block"
              >
                Learn More!
              </a>
            </div>
            <div className="w-full lg:w-[50%]">
              <img
                // src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1018&h=584"
                src="/heroImg.jpg"
                className="rounded-md w-full h-[27rem]"
                alt="banner image"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Hero;
