import { useContext, useEffect } from "react";
import { FormStepperContext } from "../../context/FormStepperContext";

const PersonalInfoSection = () => {
  const { userData, setUserData } = useContext(FormStepperContext);

  const handleChildren = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleHobbies = (event) => {
    const { name, options } = event.target;
    const hobbies = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        hobbies.push(options[i].value);
      }
    }
    setUserData({ ...userData, [name]: hobbies });
  };

  useEffect(() => {
    const updateData = () => {
      setUserData((user) => {
        return { ...user, page: 2 };
      });
    };
    updateData();
  }, [setUserData]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mt-4 mb-2 text-center">Children?</h1>
        <select
          onChange={handleChildren}
          value={userData["children"] || "Select"}
          name="children"
          className="py-2 px-3 rounded-md border border-gray-400 w-full md:w-3/5 lg:w-2/5"
        >
          <option disabled>Select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <h1 className="text-xl mt-4 mb-2 text-center">Hobbies:</h1>
        <select
          onChange={handleHobbies}
          value={userData["hobbies"] || []}
          name="hobbies"
          className="py-2 px-3 rounded-md border border-gray-400 w-full md:w-3/5 lg:w-2/5"
          multiple
        >
          <option disabled>Select</option>
          <option value="hiking">Hiking</option>
          <option value="music">Music</option>
          <option value="programming">Programming</option>
        </select>
      </div>
    </>
  );
};

export default PersonalInfoSection;
