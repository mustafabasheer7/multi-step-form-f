import React, { useContext, useEffect } from "react";
import { FormStepperContext } from "../../context/FormStepperContext";

const ConfirmationSection = () => {
  const { userData, setUserData } = useContext(FormStepperContext);

  useEffect(() => {
    const updateData = () => {
      setUserData((user) => {
        return { ...user, page: 4 };
      });
    };
    updateData();
  }, [setUserData]);

  return (
    <div className="relative overflow-x-auto border border-gray-400 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-purple-500 dark:text-purple-400">
        <thead className="text-xs text-purple-700 uppercase bg-purple-50 dark:bg-purple-700 dark:text-purple-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              Field
            </th>
            <th scope="col" className="px-3 py-3">
              Entered Value
            </th>
          </tr>
        </thead>
        {Object.keys(userData).map((field) => (
          <tbody key={field}>
            <tr className="border-b dark:bg-purple-800 dark:border-purple-700 odd:bg-white even:bg-purple-50 odd:dark:bg-purple-800 even:dark:bg-purple-700">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-purple-900 dark:text-white whitespace-nowrap"
              >
                {field}
              </th>
              {field === "hobbies" ? (
                <td className="px-3 py-4">
                  {Object.values(userData[field]).map((value, idx) => (
                    <div key={value}>
                      {value}
                      {idx < userData[field].length - 1 && <span>, </span>}
                    </div>
                  ))}
                </td>
              ) : (
                <td className="px-3 py-4">{userData[field]}</td>
              )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ConfirmationSection;
