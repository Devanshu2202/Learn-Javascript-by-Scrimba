import logo from "../assets/chefClaude.png";

const Header = () => {
  return (
    <header className="flex justify-center gap-3 p-10 drop-shadow-xs bg-white ">
      <img src={logo} alt="Company Logo" className="app-logo" />
      <h2 className="text-4xl mt-2">Chef Claude</h2>
    </header>
  );
};

export default Header;
