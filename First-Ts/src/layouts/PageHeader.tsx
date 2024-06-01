import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useState } from "react";

function PageHeader() {
  const [showFullSearch, setShowFullSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 text-center justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 text-center ${
          showFullSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="">
          <img src={logo} alt="" className="w-[150px]" />
        </a>
      </div>

      <form
        className={`flex-grow gap-4 justify-center ${
          showFullSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-grow justify-center max-w-[600px]">
          <Button
            onClick={() => setShowFullSearch(false)}
            size="icon"
            variant="ghost"
            className={`flex-shrink-0 rouned ${
              showFullSearch ? "block" : "hidden"
            }`}
          >
            <ArrowLeft />
          </Button>
          <input
            type="search"
            placeholder="Search"
            className="border-2 border-gray-200 rounded-l-full rounded-lg py-1 px-2 w-full focus:border-blue-500 outline-none"
          />

          <Button className="rounded-r-full border-secondary-border flex-shrink-0 ">
            <Search className="rounded-r-full" />
          </Button>
        </div>
        <Button size="icon" variant="ghost" className="flex-shrink-0 rouned">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
