import { FaRegStar, FaStar } from "react-icons/fa";

import { useState } from "react";
import AskModal from "../../modal/AskModal";
import { PiStarFourBold } from "react-icons/pi";
import UnfollowModal from "../../modal/UnfollowModal";
import { SAVE_CACHES, SAVE_PROFILES } from "../../../data/save";
import { useMemo } from "react";
import { FilteredProfiles } from "./FilteredProfiles";
import { useCallback } from "react";

const SaveContant = ({ activeTab }) => {
  // icon toggal

  //star
  const [isStrOpen, setIsStrOpen] = useState(false);

  const starToggle = () => {
    setIsStrOpen((prevState) => !prevState); // Toggle the state
  };

  // modal contant

  // Ask modal

  const [isAskModalOpen, setIsAskModalOpen] = useState(false);

  const openAskModal = () => setIsAskModalOpen(true);
  const closeAskModal = () => setIsAskModalOpen(false);

  // Unfollow modal

  const [isUnfollowModalOpen, setIsUnfollowModalOpen] = useState(false);

  const openUnfollowModal = useCallback(
    () => setIsUnfollowModalOpen(true),
    [setIsUnfollowModalOpen]
  );
  const closeUnfollowModal = () => setIsUnfollowModalOpen(false);

  // Filter items based on activeTab
  const filteredCaches = SAVE_CACHES.filter(
    (SAVE_CACHES) => SAVE_CACHES.category === activeTab || activeTab === "all"
  );
  const filteredProfiles = SAVE_PROFILES.filter(
    (SAVE_PROFILES) => SAVE_PROFILES.category === activeTab || activeTab === "all"
  );

  return (
    <div className="grid grid-cols-4 m-3 gap-2 select-none">
      {/* Caches Filter.*/}
      {filteredCaches.map((caches, indx) => (
        <div
          key={caches.id}
          className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
        >
          <div className="w-full flex justify-between">
            <div className="h-16 w-16">
              <img src={caches.img} alt={caches.name} />
            </div>
            <div onClick={starToggle}>
              {isStrOpen ? (
                <FaStar className="text-primary" /> // Saved Icon
              ) : (
                <FaRegStar /> // Unsaved Icon
              )}
            </div>
          </div>
          <div className="font-bold text-xl">{caches.name}</div>
          <div className="w-full flex justify-between">
            <div className="text-gray-600 text-sm">{caches.count} items</div>
            <div onClick={openAskModal} className="">
              <PiStarFourBold />
            </div>
          </div>
        </div>
      ))}
      {/* Profile Filter.*/}
      <FilteredProfiles filteredProfiles={filteredProfiles} openUnfollowModal={openUnfollowModal} />
      <AskModal isAskModalOpen={isAskModalOpen} closeAskModal={closeAskModal} />
      <UnfollowModal
        isUnfollowModalOpen={isUnfollowModalOpen}
        closeUnfollowModal={closeUnfollowModal}
      />
    </div>
  );
};

export default SaveContant;
