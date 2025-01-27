import { BiMessageRounded } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiSparkling2Fill } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

import { useState } from "react";
import { HOME_ITEMS } from "../../data";
import { Link } from "react-router-dom";
import ShereModal from "../modal/ShereModal";
import { Masonry } from "@mui/lab";
import { IoIosLink } from "react-icons/io";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { HiDotsHorizontal } from "react-icons/hi";
import { ItemGridCard } from "../Item/ItemGridCard";
import { ItemLineCard } from "../Item/ItemLineCard";

const HomeContent = () => {
  const likedItemIds = useSelector((state) => state.data.likedItemIds);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  console.log(likedItemIds)

  // view toggle

  const activeButton = useSelector((state) => state.viewToggle);

  //star
  const [isStrOpen, setIsStrOpen] = useState(false);

  const starToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStrOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="h-full p-4 flex flex-col items-start gap-y-6 overflow-y-auto">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}

      {/* Grid View is there */}

      {activeButton === "grid" ? (
        <Masonry columns={3} spacing={3}>
          {HOME_ITEMS.map((item) => (
            <ItemGridCard
              key={item.id}
              item={item}
              isLiked={likedItemIds.includes(item.id)}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </Masonry>
      ) : (
        // Menu View is heare
        <div className="w-full">
          {HOME_ITEMS.map((item) => (
            <ItemLineCard
              key={item.id}
              item={item}
              isLiked={likedItemIds.includes(item.id)}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      )}

      <ShereModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HomeContent;
