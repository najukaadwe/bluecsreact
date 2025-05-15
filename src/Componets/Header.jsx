// import { FaSearch, FaUser } from "react-icons/fa";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { HiMenu } from "react-icons/hi";

export default function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-between px-36 py-3 ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">BLUE</span>
        <span className="text-blue-500">ERA</span>
      </div>

      {/* Search Bar */}
      {/* <div className="flex items-center bg-white text-black rounded-full overflow-hidden w-[400px]">
        <div className="flex items-center px-4">
          <FaSearch className="text-blue-600" />
        </div>
        <input
          type="text"
          placeholder="How to start freelancing?"
          className="flex-1 py-2 outline-none"
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium ">
          Search
        </button>
      </div> */}

<div className="bg-black py-4 px-6 flex justify-center">
      <div className="flex items-center bg-white rounded-full w-full max-w-3xl overflow-hidden shadow">
        {/* Search Icon */}
        <div className="pl-4 pr-2 text-blue-600">
          {/* <FaSearch /> */}
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="How to become a project manager"
          className="flex-1 py-3 text-blue-600 placeholder-blue-600 outline-none bg-white"
        />

        {/* Search Button */}
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full m-1">
          Search
        </button>
      </div>
    </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {/* Download App */}
        <div className="flex items-center border border-blue-600 rounded-full px-4 py-2 text-sm">
          {/* <FaGooglePlay className="mr-2" /> */}
          <span className="font-semibold">Download App</span>
          <div className="ml-2 text-xs text-white/80 leading-tight">
            Access the network and get exclusive benefits
          </div>
          {/* <FaApple className="ml-2" /> */}
        </div>

        {/* Login Button */}
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
          {/* <FaUser className="mr-2" /> Login */}
        </button>

        {/* Menu Icon */}
        <button className="text-white text-2xl">
          {/* <HiMenu /> */}
        </button>
      </div>
    </header>
  );
}
