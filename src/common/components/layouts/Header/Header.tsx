import { SearchInput } from "../../form";
import { Logo } from "../../ui";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-5 shadow-md md:px-20">
      <Logo />
      <SearchInput />
    </header>
  );
};

export default Header;
