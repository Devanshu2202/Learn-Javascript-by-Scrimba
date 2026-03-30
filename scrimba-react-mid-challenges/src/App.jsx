import "./App.css";

function App() {
  function userData(formData) {
    const data = Object.fromEntries(formData.entries());

    if (!data.username || !data.email || !data.mobile) {
      alert("Please fill all required fields");
      return;
    }

    console.log(data);
    // const userName = formData.get("username");
    // const userExperience = formData.get("experience");
    // const userYear = formData.get("year");
    // const userMonth = formData.get("Month");
    // const userCurrency = formData.get("currency");
    // const userSalary = formData.get("salary");
    // const userSalaryBreakdown = formData.get("salaryBreakdown");
    // const userlocation = formData.get("location");
    // const usermobile = formData.get("mobile");
    // const userEmail = formData.get("email");

    // console.log("userName", userName);
    // console.log("userExperience", userExperience);
    // console.log("userYear", userYear);
    // console.log("userMonth", userMonth);
    // console.log("userCurrency", userCurrency);
    // console.log("userSalary", userSalary);
    // console.log("userSalaryBreakdown", userSalaryBreakdown);
    // console.log("userlocation", userlocation);
    // console.log("usermobile", usermobile);
    // console.log("userEmail", userEmail);
  }

  return (
    <div className="max-w-3xl m-auto py-8 px-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-semibold mb-6">Basic details</h2>

      <form action={userData} className="space-y-6">
        <div>
          <label className="font-medium block mb-1">Name</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <fieldset>
          <legend className="font-medium mb-1">Work status</legend>
          <p className="text-sm text-gray-500 mb-3">
            We will personalise your experience
          </p>

          <div className="flex gap-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="experience" value="Fresher" />
              <span>Fresher</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="experience" value="Experience" />
              <span>Experience</span>
            </label>
          </div>
        </fieldset>

        <div>
          <p className="font-medium">Total experience</p>
          <p className="text-sm text-gray-500 mb-2">
            Helps recruiters know your experience
          </p>

          <div className="flex gap-4">
            <input
              type="text"
              name="year"
              placeholder="Year"
              className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="text"
              name="Month"
              placeholder="Month"
              className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <div>
          <p className="font-medium">Current salary</p>
          <p className="text-sm text-gray-500 mb-2">Helps find relevant jobs</p>

          <div className="flex gap-3">
            <select name="currency" className="border rounded-xl px-3 py-2">
              <option>$</option>
              <option>₹</option>
            </select>

            <input
              type="text"
              name="salary"
              placeholder="e.g 450000"
              className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <div>
          <p className="font-medium">Salary breakdown</p>
          <input
            type="text"
            name="salaryBreakdown"
            placeholder="Select salary components"
            className="w-full border rounded-xl px-3 py-2 mt-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <fieldset>
          <legend className="font-medium mb-1">Current location</legend>
          <p className="text-sm text-gray-500 mb-3">
            Helps match relevant jobs
          </p>

          <div className="flex gap-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="location" value="india" />
              <span>India</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="location" value="outsideindia" />
              <span>Outside India</span>
            </label>
          </div>
        </fieldset>

        <div>
          <p className="font-medium">Mobile number</p>
          <p className="text-sm text-gray-500">Recruiters will contact you</p>

          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            className="w-full border rounded-xl px-3 py-2 mt-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <p className="font-medium">Email Address</p>
          <p className="text-sm text-gray-500">We will send updates</p>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full border rounded-xl px-3 py-2 mt-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <p className="font-medium">Notice period</p>
          <p className="text-sm text-gray-500">
            Lets recruiters know availability
          </p>
          <input
            type="number"
            name="text"
            placeholder="Enter Notice"
            className="w-full border rounded-xl px-3 py-2 mt-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
