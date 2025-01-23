import { memo } from "react";
import { FaStar } from "react-icons/fa";

export const FilteredProfiles = memo(({ filteredProfiles, openUnfollowModal }) => {
  console.log('filtered profiles')
  return (
    filteredProfiles.map((profiles, index) => (
    <div
      key={index}
      className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
    >
      <div className="w-full flex justify-between">
        <div className="h-24 w-24">
          <img className=" rounded-full" src={profiles.img} alt={profiles.name} />
        </div>

        <FaStar onClick={openUnfollowModal} className="text-primary" />
      </div>
      <div className="font-semibold mt-2.5 text-xl">{profiles.name}</div>
      <div className="w-full flex justify-between">
        <div className="text-gray-600 text-sm">{profiles.followers} followers</div>
      </div>
      <div className=" text-sm">is this required?</div>
    </div>
  )));
});
