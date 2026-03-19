const ManinText = () => {
  return (
    <main className="grow bg-black text-white bg-[url('/public/reactjsicon.png')] bg-no-repeat  bg-right">
      <h1 className="w-full text-2xl ml-12 p-5">Fun facts about React</h1>

      <ul className="ml-20 list-disc marker:text-blue-400">
        <li className="text-lg mb-2">Was first released in 2013</li>
        <li className="text-lg mb-2">Was originally created by Jordan Walke</li>
        <li className="text-lg mb-2">Has well over 200K stars on GitHub</li>
        <li className="text-lg mb-2">Is maintained by Meta</li>
        <li className="text-lg mb-2">Powers thousands of enterprise apps</li>
      </ul>
    </main>
  );
};

export default ManinText;
