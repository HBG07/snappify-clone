import { FaCheck } from "react-icons/fa";
import {
  BsEmojiSmile,
  BsEmojiWink,
  BsEmojiHeartEyes,
  BsEmojiSunglasses,
} from "react-icons/bs";

export default function Pricing() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-5xl font-bold">Pricing</h1>

      <div className="flex flex-col mx-2 md:mx-20">
        <table className="mt-5 w-full table-fixed text-center">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl hidden md:table-cell">Free</th>
              <th className="text-xl hidden md:table-cell">Personal</th>
              <th className="border-x-2 border-t-2 border-purple-400 text-xl">
                Pro
              </th>
              <th className="text-xl hidden md:table-cell">Advanced</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th className="py-4 hidden md:table-cell">
                <BsEmojiSmile size={60} className="mx-auto text-green-600" />{" "}
                <p className="text-3xl">$0</p>
                <button className="mt-2 rounded-md bg-gray-200 py-2 px-6">
                  Login
                </button>
              </th>
              <th className="py-4 hidden md:table-cell">
                <BsEmojiWink size={60} className="mx-auto text-blue-600" />{" "}
                <p className="text-3xl">
                  $8<span className="text-lg">/month</span>
                </p>
                <button className="mt-2 rounded-md bg-purple-600 py-2 px-6 text-white">
                  Upgrade
                </button>
              </th>
              <th className="border-x-2 border-purple-400 py-4">
                <BsEmojiHeartEyes
                  size={60}
                  className="mx-auto text-purple-600"
                />{" "}
                <p className="bg-gradient-to-br from-red-400 to-purple-600 bg-clip-text text-3xl text-transparent">
                  $14<span className="text-lg">/month</span>
                </p>
                <button className="mt-2 rounded-md bg-gradient-to-br from-red-400 to-purple-600 py-2 px-6 text-white">
                  Upgrade
                </button>
              </th>
              <th className="py-4 hidden md:table-cell">
                <BsEmojiSunglasses
                  size={60}
                  className="mx-auto text-amber-600"
                />{" "}
                <p className="text-3xl">
                  $39<span className="text-lg">/month</span>
                </p>
                <button className="mt-2 rounded-md bg-purple-600  py-2 px-6 text-white">
                  Upgrade
                </button>
              </th>
            </tr>
            <tr>
              <th className="py-4">Dashboard</th>
              <th className="hidden md:table-cell"></th>
              <th className="hidden md:table-cell"></th>
              <th className="border-x-2 border-purple-400"></th>
              <th className="hidden md:table-cell"></th>
            </tr>
            <tr>
              <td className="py-4 underline">Image upload limit</td>
              <td className="border-b-2 text-purple-400 hidden md:table-cell">-</td>
              <td className="hidden md:table-cell">100 MB</td>
              <td className="border-x-2 border-purple-400">1 GB</td>
              <td className="hidden md:table-cell">5 GB</td>
            </tr>
            <tr>
              <td className="py-4 underline">Snap Storage limit</td>
              <td className="border-b-2 hidden md:table-cell">3</td>
              <td className="hidden md:table-cell">500</td>
              <td className="border-2 border-purple-400">Unlimited</td>
              <td className="hidden md:table-cell">Unlimited</td>
            </tr>
            <tr>
              <td className="py-4 underline">Folder Storage limit</td>
              <td className="border-b-2 hidden md:table-cell">0</td>
              <td className="hidden md:table-cell">0</td>
              <td className="border-2 border-purple-400">Unlimited</td>
              <td className="hidden md:table-cell">Unlimited</td>
            </tr>
            <tr>
              <td className="py-4 underline">Sync snaps and folders</td>
              <td className="border-b-2 hidden md:table-cell">
                <FaCheck size={20} className="mx-auto text-purple-400" />
              </td>
              <td className="hidden md:table-cell">
                <FaCheck size={20} className="mx-auto text-purple-400" />
              </td>
              <td className="border-b-2 border-x-2 border-purple-400">
                <FaCheck size={20} className="mx-auto text-purple-400" />
              </td>
              <td className="hidden md:table-cell">
                <FaCheck size={20} className="mx-auto text-purple-400" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
