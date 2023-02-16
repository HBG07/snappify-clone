import { BsAward } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="mt-8 grid grid-cols-1 bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex">
            <img className="mr-2 w-14" src="/img/brand.png" alt="" />
            <h1 className="mt-1 cursor-pointer text-2xl  font-bold hover:underline">
              snappify
            </h1>
          </div>
          <p className="mt-2">Create beautiful code snippets with ease.</p>
          <p className="mt-8 cursor-pointer hover:underline">
            © seriouscode GmbH
          </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div>
            <h1 className="text-2xl font-bold">Product</h1>
            <p className="mt-6 cursor-pointer hover:underline">Pricing</p>
            <p className="mt-2 cursor-pointer hover:underline">Editor</p>
            <p className="mt-2 cursor-pointer hover:underline">Templates</p>
            <p className="mt-2 cursor-pointer hover:underline">Features</p>
            <p className="mt-2 cursor-pointer hover:underline">Embedding</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Resources</h1>
            <p className="mt-6 cursor-pointer hover:underline">Documentation</p>
            <p className="mt-2 cursor-pointer hover:underline">Tutorials</p>
            <p className="mt-2 cursor-pointer hover:underline">Blog</p>
            <p className="mt-2 cursor-pointer hover:underline">Changelog</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Integrations</h1>
            <p className="mt-6 cursor-pointer hover:underline">
              VS Code Extension
            </p>
            <p className="mt-2 cursor-pointer hover:underline">
              IntelliJ Plugin
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">About</h1>
            <p className="mt-6 cursor-pointer hover:underline">Our Mission</p>
            <p className="mt-2 cursor-pointer hover:underline">Twitter</p>
            <p className="mt-2 cursor-pointer hover:underline">Imprint</p>
            <p className="mt-2 cursor-pointer hover:underline">Legal</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="flex rounded-xl bg-neutral-800 py-1 px-3 text-white">
          <div>
            <BsAward size={40} />
          </div>
          <div className="ml-2">
            <p className="text-sm">PRODUCT HUNT</p>
            <h1 className="font-bold">#2 Product of the Day</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
