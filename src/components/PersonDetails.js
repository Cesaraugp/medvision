import React from "react";

const PersonDetails = ({ person }) => {
  return (
    <>
      {person && (
        <div className="flex-1">
          <div class="flex flex-col w-full">
            <div class="grid flex-grow card bg-gray-600	 rounded-box place-items-center">
              <img
                className=" w-52		"
                src="https://picsum.photos/id/1005/400/250"
                class="rounded-xl"
              />
              <div class="overflow-x-auto">
                <h3 className=" text-2xl ">
                  {" "}
                  {person.fisrstName} {person.lastName}
                </h3>
              </div>
            </div>
            <div class="divider"></div>
            <div class="grid card bg-base-300 rounded-box place-items-center">
              <div>
                <h4 className=" inline">{"Birthdate:"}</h4>
                <p className=" text-xs inline">
                  {" "}
                  {person.birthDate.substring(0, 10)}
                </p>
              </div>
              <div>
                <h4 className=" inline">{"Height:"}</h4>
                <p className=" text-xs inline"> {person.height} cm</p>
              </div>
              <div>
                <h4 className=" inline">{"Married:"}</h4>
                <p className=" text-xs inline">
                  {" "}
                  {person.isMarried ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <h4 className=" inline">{"Document:"}</h4>
                <p className=" text-xs inline"> {person.document}</p>
              </div>
              <div>
                <h4 className=" inline">{"Houses:"}</h4>
                <p className=" text-xs inline"> {person.houses.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonDetails;
