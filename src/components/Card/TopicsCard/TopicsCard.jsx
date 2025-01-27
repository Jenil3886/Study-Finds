import { PiStarFourBold } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";
import AskModal from "../../modal/AskModal";
import { useState } from "react";
import { TOPICS_ITEMS } from "../../../data/topics";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const TopicsCard = () => {
  // State to track starred status for each cache
  const [starredCaches, setStarredCaches] = useState([]);

  // Function to toggle star status for a specific cache
  const starToggle = (name) => {
    if (starredCaches.includes(name)) {
      setStarredCaches(starredCaches.filter((c) => c !== name));
    } else {
      setStarredCaches([
        ...starredCaches,
        name, // Toggle the current cache's starred state
      ]);
    }
  };

  console.log('topics component rendered')

  // Ask modal

  const [isAskModalOpen, setIsAskModalOpen] = useState(false);

  const openAskModal = () => setIsAskModalOpen(true);
  const closeAskModal = useCallback(() => setIsAskModalOpen(false), [setIsAskModalOpen]);

  return (
    <div>
      <div className="grid grid-cols-4 m-4 gap-2 select-none">
        {TOPICS_ITEMS.map((item) => (
          <Link
            key={item.name}
            className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
          >
            <div className="w-full flex justify-between">
              <div className="h-16 w-16">
                <img src={item.img} alt={item.name} />
              </div>
              <div onClick={() => starToggle(item.name)}>
                {starredCaches.includes(item.name) ? (
                  <FaStar className="text-primary" /> // Saved Icon
                ) : (
                  <FaRegStar /> // Unsaved Icon
                )}
              </div>
            </div>
            <div className="font-bold text-xl">{item.name}</div>
            <div className="w-full flex justify-between">
              <div className="text-gray-600 text-sm">{item.count} items</div>
              <div onClick={openAskModal} className="">
                <PiStarFourBold />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Ask Modal */}
      <AskModal isAskModalOpen={isAskModalOpen} closeAskModal={closeAskModal} />
    </div>
  );
};

export default TopicsCard;
