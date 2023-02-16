import Image from "next/image";

export default function Brand() {
  return (
    <div className="inline-flex basis-1/3 justify-center">
      <img src="/img/brand.png" alt="" className="mr-2 w-12" />
      <p className="mt-1 text-xl font-bold">snappify</p>
    </div>
  );
}
