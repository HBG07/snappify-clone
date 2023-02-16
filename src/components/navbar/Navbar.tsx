import Brand from "./Brand";
import CenterMenu from "./CenterMenu";
import RightMenu from "./RightMenu";

export default function Navbar() {
  return (
    <nav className="container flex w-full flex-row items-center justify-around border-black py-3">
      <Brand></Brand>
      <CenterMenu></CenterMenu>
      <RightMenu></RightMenu>
    </nav>
  );
}
