import Image from "next/image";

export default function Mission() {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 place-items-center p-4 md:grid-cols-2">
        <div className="text-center md:order-2 md:text-left">
          <h1 className="mb-4 text-3xl font-bold">Our Mission</h1>
          <p className="mt-4 text-xl">
            Greetings! 👋 <br />
            {"We're"} Anki and Dominik and with snappify we want to provide you
            the possibility to easily show-off your code snippets in a beautiful
            way. {"Doesn't"} matter if you provide your social media audience
            with your latest findings or just want to pimp up the code snippets
            in your presentation, we hope you find snappify a valuable
            companion.
          </p>
        </div>
        <div className="justify-center md:order-1">
          <Image
            width={500}
            height={400}
            src="/img/anki-dominik.webp"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>
      {/* Create beautiful images of your code */}
      <div className=" mt-8 grid grid-cols-1 rounded-xl bg-gradient-to-tl from-red-400 to-purple-500 pt-20 pl-12 md:mx-20 md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Create beautiful images of your code
            </h1>
            <p className="mt-5 text-xl text-white">
              snappify will help you to create and manage your code snippets
            </p>
            <button className="mt-4 rounded-md bg-blue-600 py-3 px-6 text-xl font-bold text-white">
              Start now
            </button>
          </div>
        </div>
        <div className="mt-5 w-full rounded-tl bg-white md:mt-1">
          <img src="/img/cta-editor.webp" alt="" />
        </div>
      </div>
    </>
  );
}
