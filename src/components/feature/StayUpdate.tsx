import { BsEnvelope } from "react-icons/bs";

export default function StayUpdate() {
  return (
    <div className="mt-10 bg-gradient-to-r from-orange-50 to-red-100 p-10 text-center">
      <h1 className="my-8 text-5xl font-bold">Wanna stay up-to-date?</h1>
      <p className="mb-4 text-xl">
        Sign up for our newsletter and {"we'll"} keep you updated with news about
        <b>snappify</b>
      </p>
      <button className="rounded-md bg-purple-700 py-2 px-5 font-bold text-white">
        <BsEnvelope className="mb-1 inline-flex" /> Subscribe
      </button>
    </div>
  );
}
