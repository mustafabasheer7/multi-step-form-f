import FormButtons from "./components/FormButtons";
import NameInfoSection from "./components/formSections/NameInfoSection";
import { FormStepperContext } from "./context/FormStepperContext";
import PersonalInfoSection from "./components/formSections/PersonalInfoSection";
import DrivingInfoSection from "./components/formSections/DrivingInfoSection";
import FormStepper from "./components/FormStepper";
import { useState } from "react";
import ConfirmationSection from "./components/formSections/ConfirmationSection";

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [userData, setUserData] = useState({
    page: 1,
  });

  const sections = ["Name", "Personal Information", "Driving", "Confirmation"];

  const displaySection = (section) => {
    switch (section) {
      case 1:
        return <NameInfoSection />;
      case 2:
        return <PersonalInfoSection />;
      case 3:
        return <DrivingInfoSection />;
      case 4:
        return <ConfirmationSection />;
      default:
        break;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentSection;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= sections.length && setCurrentSection(newStep);

    if (newStep > sections.length) {
      alert(
        "*This data is collected from the user and is stored in an object that can be used anywhere in the application* \n\n" +
          JSON.stringify(userData, null, 4)
      );
    }
  };

  return (
    <div className="relative h-screen w-screen bg-black flex justify-center items-center">
      <div className="h-full w-full filter bg-login-image bg-center bg-cover z-0"></div>
      <div className="absolute p-8 w-3/4 md:w-2/4 xl:w-2/6 rounded-md shadow-2xl bg-gray-50 border border-gray-300 h-11/12 md:h-4/5 lg:h-3/5 flex flex-col overflow-y-auto inset-y-10 md:inset-y-auto">
        <div className="container horizontal mb-10 flex-1 hidden md:block">
          <FormStepper sections={sections} currentSection={currentSection} />
        </div>
        <div className="flex-[5] flex justify-between flex-col">
          <FormStepperContext.Provider value={{ userData, setUserData }}>
            {displaySection(currentSection)}
            <FormButtons
              handleClick={handleClick}
              currentSection={currentSection}
              sections={sections}
            />
          </FormStepperContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
