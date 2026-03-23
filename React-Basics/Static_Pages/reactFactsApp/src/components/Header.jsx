const Header = () => {
  return (
    <header className=" flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <div className="flex items-center gap-2">
        <img src="Group.png" alt="react-logo" className="w-10" />
        <h1 className="text-xl font-bold">ReactFacts</h1>
      </div>

      <nav>
        <ul className="flex gap-6 ">
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
