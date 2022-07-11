import { useContext, useEffect, useState } from "react";
import { FormStepperContext } from "../../context/FormStepperContext";

const DrivingInfoSection = () => {
  const [driveSelect, setDriveSelect] = useState("");
  const { userData, setUserData } = useContext(FormStepperContext);
  const [showExperienceErrorMessage, setShowExperienceErrorMessage] = useState(
    false
  );

  const handleExperienceChange = (event) => {
    const { name, value } = event.target;
    if (value && (value < 1 || value > 100)) {
      setShowExperienceErrorMessage(true);
    } else {
      setShowExperienceErrorMessage(false);
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleDrive = (event) => {
    const { name, value } = event.target;
    setDriveSelect(value);
    if (value === "no") {
      const copy = { ...userData };
      delete copy.experience;
      setUserData({ ...copy, [name]: value });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  useEffect(() => {
    const updateData = () => {
      setUserData((user) => {
        return { ...user, page: 3 };
      });
    };
    updateData();
  }, [setUserData]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mt-4 mb-2 text-center">Drive a Car?</h1>
        <div className="flex items-center justify-center gap-8 text-lg">
          <label>
            <input
              onChange={handleDrive}
              type="radio"
              id="drive"
              value="yes"
              name="drive"
              checked={userData["drive"] === "yes" || driveSelect === "yes"}
              className="flex-1 min-w-2/5 mr-2 p-3 border-2 rounded-md text-lg outline-none"
            />
            Yes
          </label>
          <label>
            <input
              onChange={handleDrive}
              type="radio"
              id="drive"
              value="no"
              name="drive"
              checked={userData["drive"] === "no" || driveSelect === "no"}
              className="flex-1 min-w-2/5 mr-2 p-3 border-2 rounded-md text-lg outline-none"
            />
            No
          </label>
        </div>
        {(userData["drive"] === "yes" || driveSelect === "yes") && (
          <>
            <label
              htmlFor="experience"
              className="text-xl mt-4 mb-2 text-center"
            >
              Driving Experience?
            </label>
            <input
              onChange={handleExperienceChange}
              type="number"
              value={userData["experience"] || ""}
              placeholder="Experience"
              name="experience"
              required
              className="flex-1 min-w-2/5 mr-3 p-3 border-2 rounded-md text-lg outline-none"
              min={1}
              max={100}
            />
            {showExperienceErrorMessage && (
              <p className="text-red-500 font-semibold text-center mt-2">
                experience can only be between 1 and 100!
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DrivingInfoSection;
