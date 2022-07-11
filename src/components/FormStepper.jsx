import { useState, useEffect, useRef } from "react";
import { StepperSections } from "./StepperSections";

const FormStepper = ({ sections, currentSection }) => {
  const [newSection, setNewSection] = useState([]);
  const sectionRef = useRef();

  const updateSection = (sectionNumber, sections) => {
    let count = 0;
    const newSections = [...sections];

    while (newSections.length > count) {
      // Current Section
      if (count === sectionNumber) {
        newSections[count] = {
          ...newSections[count],
          completed: false,
          highlightedTitle: true,
          selected: true,
        };
        count++;
      }
      // Completed Section
      else if (count < sectionNumber) {
        newSections[count] = {
          ...newSections[count],
          completed: true,
          highlightedTitle: false,
          selected: true,
        };
        count++;
      }
      // Next Section
      else {
        newSections[count] = {
          ...newSections[count],
          completed: false,
          highlightedTitle: false,
          selected: false,
        };
        count++;
      }
    }
    return newSections;
  };

  useEffect(() => {
    // Creating new sections as soon as component is mounted
    const sectionsState = sections.map((section, i) =>
      Object.assign(
        {},
        {
          title: section,
          completed: false,
          highlightedTitle: i === 0 ? true : false,
          selected: i === 0 ? true : false,
        }
      )
    );
    sectionRef.current = sectionsState;
    const current = updateSection(currentSection - 1, sectionRef.current);
    setNewSection(current);
  }, [sections, currentSection]);

  return (
    <div className="flex items-center justify-center lg:mx-4 mb-2 lg:p-5">
      <StepperSections newSection={newSection} />
    </div>
  );
};

export default FormStepper;
