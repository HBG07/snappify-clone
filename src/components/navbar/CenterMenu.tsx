export default function CenterMenu() {
  return (
    <div className="hidden basis-1/3 justify-center space-x-14 md:inline-flex">
      <p className="text-center font-bold hover:cursor-pointer hover:underline">
        Pricing
      </p>
      <p className="text-center font-bold hover:cursor-pointer hover:underline">
        Product
      </p>
      <p className="text-center font-bold hover:cursor-pointer hover:underline">
        Resource
      </p>
    </div>
  );
}
