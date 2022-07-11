import { useContext, useEffect, useState } from "react";
import { FormStepperContext } from "../../context/FormStepperContext";

const NameInfoSection = () => {
  const { userData, setUserData } = useContext(FormStepperContext);
  const [showFirstNameErrorMessage, setShowFirstNameErrorMessage] = useState(
    false
  );
  const [showLastNameErrorMessage, setShowLastNameErrorMessage] = useState(
    false
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstname") {
      if (value && !/^[a-zA-Z]+$/.test(value)) {
        setShowFirstNameErrorMessage(true);
      } else {
        setShowFirstNameErrorMessage(false);
        setUserData({ ...userData, [name]: value });
      }
    } else {
      if (value && !/^[a-zA-Z]+$/.test(value)) {
        setShowLastNameErrorMessage(true);
      } else {
        setShowLastNameErrorMessage(false);
        setUserData({ ...userData, [name]: value });
      }
    }
  };

  useEffect(() => {
    const updateData = () => {
      setUserData((user) => {
        return { ...user, page: 1 };
      });
    };
    updateData();
  }, [setUserData]);

  return (
    <>
      <div className="flex flex-col items-center justify-around">
        <label htmlFor="firstname" className="text-xl mt-4 mb-2 text-center">
          First Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="firstname"
          value={userData["firstname"] || ""}
          placeholder="First Name"
          name="firstname"
          className="flex-1 w-full md:w-3/5 mr-3 p-3 border-2 rounded-md text-lg outline-none"
          pattern="[A-Za-z]{2,50}"
        />
        {showFirstNameErrorMessage && (
          <p className="text-red-500 font-semibold text-center mt-2">
            Only Letters are allowed!
          </p>
        )}
        <label htmlFor="lastname" className="text-xl mt-4 mb-2 text-center">
          Last Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="lastname"
          value={userData["lastname"] || ""}
          placeholder="Last Name"
          name="lastname"
          className="flex-1 w-full md:w-3/5 mr-3 p-3 border-2 rounded-md text-lg outline-none"
        />
        {showLastNameErrorMessage && (
          <p className="text-red-500 font-semibold text-center mt-2">
            Only Letters are allowed!
          </p>
        )}
      </div>
    </>
  );
};

export default NameInfoSection;
