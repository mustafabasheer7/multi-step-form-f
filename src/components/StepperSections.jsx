export const StepperSections = ({ newSection }) => {
  return (
    <>
      {newSection.map((section, i) => (
        <div
          className={`flex items-center ${
            i === newSection.length - 1 ? "" : "w-full"
          }`}
          key={i}
        >
          <div className="relative flex flex-col items-center text-purple-500 mb-2">
            {/* Section Number */}
            <div
              className={`flex items-center justify-center rounded-full transition duration-300 ease-in-out border-2 bg-purple-100 border-purple-700 w-12 p-2 text-xl font-semibold ${
                section.selected
                  ? "bg-purple-500 border-purple-700 text-white border-2 "
                  : ""
              }`}
            >
              {section.completed ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
              ) : (
                i + 1
              )}
            </div>
            {/* Section Title */}
            <div
              className={`absolute top-0 mt-14 w-28 text-center uppercase font-semibold text-[0.7rem] ${
                section.highlightedTitle ? "text-purple-700" : "text-gray-400"
              }`}
            >
              {section.title}
            </div>
          </div>
          {/* Connecting Line */}
          <div
            className={`flex-auto border-b-2 transition duration-300 ease-in-out ${
              section.completed ? "border-purple-700" : "border-gray-200"
            }`}
          ></div>
        </div>
      ))}
    </>
  );
};
