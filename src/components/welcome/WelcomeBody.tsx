import Image from "next/image";

export default function WelcomeBody() {
  const contributors = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-24 grid grid-cols-1 md:mx-60 md:grid-cols-2 md:gap-12">
      <div>
        <p className="mx-4 text-3xl font-light">
          Take your technical content to the next level with {"snappify's"} powerful
          design features.
        </p>
        <button className="m-5 rounded-md bg-blue-500 py-3 px-6 text-lg text-white">
          <span className="font-semibold">Get started</span> - {"It's"} free
        </button>
        <div className="m-5 flex">
          {contributors.map((i) => (
            <img key={i} className="h-10 rounded-full" src="/img/profile.png" alt="" />
          ))}
        </div>
        <p className="text-sm text-gray-500 md:ml-5">Join a community of 7k+ developers spicing up their content</p>
      </div>
      <div>
        <img src="/img/code.png" alt="" />
      </div>
    </div>
  );
}
