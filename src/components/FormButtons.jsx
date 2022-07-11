import { useContext } from "react";
import { FormStepperContext } from "../context/FormStepperContext";

const FormButtons = ({ handleClick, currentSection, sections }) => {
  const { userData } = useContext(FormStepperContext);

  // validations to disable/enable buttons
  const disableButtons = () => {
    return (
      (userData.page === 1 && (!userData.firstname || !userData.lastname)) ||
      (userData.page === 2 && (!userData.children || !userData.hobbies)) ||
      (userData.page === 3 &&
        (!userData.drive ||
          (userData.drive === "no" && userData.experience) ||
          (userData.drive === "yes" && !userData.experience)))
    );
  };

  return (
    <div className="flex items-center justify-center w-full gap-4">
      <button
        onClick={() => handleClick()}
        className="py-2 px-4 border-2 text-lg font-medium text-white bg-purple-700 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-purple-400 hover:text-black border-purple-700 duration-300 ease-in-out rounded-md cursor-pointer w-1/2 mt-6 overflow-hidden"
        type="submit"
        disabled={userData.page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => handleClick("next")}
        className={
          "py-2 px-4 border-2 text-lg font-medium text-white bg-purple-700 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-purple-400 hover:text-black border-purple-700 duration-300 ease-in-out rounded-md cursor-pointer w-1/2 mt-6"
        }
        type="submit"
        disabled={disableButtons()}
      >
        {currentSection === sections.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default FormButtons;
