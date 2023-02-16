import Image from "next/image";

export default function RightMenu() {
  return (
    <div className="hidden basis-1/3 justify-center space-x-6 md:inline-flex">
      <p className="mt-1 text-center font-bold hover:cursor-pointer hover:underline">
        Dashboard
      </p>
      <p className="mt-1 text-center font-bold hover:cursor-pointer hover:underline">
        Editor
      </p>
      <img
        className="h-8 cursor-pointer rounded-full hover:ring-2 hover:ring-slate-300"
        src="/img/profile.png"
        alt=""
      />
    </div>
  );
}
