// import { PiStarFourBold } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";
// import { PiStarDuotone } from "react-icons/pi";

import { useState } from "react";
import AskModal from "../../modal/AskModal";
import { PiStarFourBold } from "react-icons/pi";
import UnfollowModal from "../../modal/UnfollowModal";

const caches = [
	{ name: "Animal", count: 1557, img: "/src/components/img/Topics/animal.webp", category: "caches" },
	{ name: "astronomy", count: 1557, img: "/src/components/img/Topics/astronomy.webp", category: "caches" },
	{ name: "Automotive", count: 45324, img: "/src/components/img/Topics/automotive.webp", category: "caches" },
	{ name: "Beuaty", count: 24254, img: "/src/components/img/Topics/beauty.webp", category: "caches" },
	{ name: "Best Of The Best", count: 452343, img: "/src/components/img/Topics/best of the best.webp", category: "caches" },
	{ name: "Brain", count: 453435, img: "/src/components/img/Topics/brain.webp", category: "caches" },
	{ name: "Bussiness", count: 4543, img: "/src/components/img/Topics/bussiness.webp", category: "caches" },
	{ name: "Children", count: 54534, img: "/src/components/img/Topics/children.webp", category: "caches" },
	{ name: "Earth", count: 14557547, img: "/src/components/img/Topics/earth.webp", category: "caches" },
	{ name: "Education", count: 1251351, img: "/src/components/img/Topics/education.webp", category: "caches" },
	{ name: "Enviroment", count: 133545, img: "/src/components/img/Topics/entertainment.webp", category: "caches" },
	{ name: "Family", count: 1563, img: "/src/components/img/Topics/family.webp", category: "caches" },
	{ name: "Fitness", count: 150, img: "/src/components/img/Topics/fitness.webp", category: "caches" },
	{ name: "Food", count: 150, img: "/src/components/img/Topics/food.webp", category: "caches" },
	{ name: "Happiness", count: 150, img: "/src/components/img/Topics/happiness.webp", category: "caches" },
	{ name: "Historical", count: 150, img: "/src/components/img/Topics/historical.webp", category: "caches" },
	{ name: "Home & Gardan", count: 150, img: "/src/components/img/Topics/home & garden.webp", category: "caches" },
	{ name: "Intelligence", count: 150, img: "/src/components/img/Topics/intelligence.webp", category: "caches" },
	{ name: "Longer Life", count: 150, img: "/src/components/img/Topics/longer life.webp", category: "caches" },
	{ name: "Men", count: 150, img: "/src/components/img/Topics/men.webp", category: "caches" },
	{ name: "Money", count: 150, img: "/src/components/img/Topics/money.webp", category: "caches" },
	{ name: "Parenting", count: 150, img: "/src/components/img/Topics/parenting.webp", category: "caches" },
	{ name: "Politics", count: 150, img: "/src/components/img/Topics/politics.webp", category: "caches" },
	{ name: "Psychology", count: 150, img: "/src/components/img/Topics/psychology.webp", category: "caches" },
	{ name: "Realtionship", count: 150, img: "/src/components/img/Topics/reletionship.webp", category: "caches" },
	{ name: "Sciences", count: 150, img: "/src/components/img/Topics/sciences.webp", category: "caches" },
	{ name: "Society", count: 150, img: "/src/components/img/Topics/society.webp", category: "caches" },
	{ name: "Sport", count: 150, img: "/src/components/img/Topics/sport.webp", category: "caches" },
	{ name: "Travel", count: 150, img: "/src/components/img/Topics/travel.webp", category: "caches" },
	{ name: "Weight Loss", count: 150, img: "/src/components/img/Topics/weight loss.webp", category: "caches" },
	{ name: "Weird", count: 150, img: "/src/components/img/Topics/weird.webp", category: "caches" },
	{ name: "Wellness", count: 150, img: "/src/components/img/Topics/wellness.webp", category: "caches" },
	{ name: "Women", count: 150, img: "/src/components/img/Topics/women.webp", category: "caches" },
	{ name: "Work Places", count: 150, img: "/src/components/img/Topics/workplaces.webp", category: "caches" },
];

const profiles = [
	{ name: "studysam", followers: 1, img: "/src/components/img/image.webp", category: "profiles" },
	{ name: "astronomy", followers: 5, img: "/src/components/img/Topics/astronomy.webp", category: "profiles" },
	{ name: "Automotive", followers: 10, img: "/src/components/img/Topics/automotive.webp", category: "profiles" },
];

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

	const openUnfollowModal = () => setIsUnfollowModalOpen(true);
	const closeUnfollowModal = () => setIsUnfollowModalOpen(false);

	// Filter items based on activeTab
	const filteredCache = caches.filter((caches) => caches.category === activeTab || activeTab === "all");
	const filteredProfiles = profiles.filter((profiles) => profiles.category === activeTab || activeTab === "all");

	return (
		// old save contant
		// <div>
		// 	<div className="grid grid-cols-4 m-3 gap-2 select-none">
		// 		{items.map((item, index) => (
		// 			<div
		// 				key={index}
		// 				className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
		// 			>
		// 				<div className="w-full flex justify-between">
		// 					<div className="h-16 w-16">
		// 						<img src={item.img} alt={item.name} />
		// 					</div>
		// 					<div onClick={starToggle}>
		// 						{/* <FaRegStar /> */}
		// 						{isStrOpen ? (
		// 							<FaStar className="text-primary" /> // save Icon
		// 						) : (
		// 							<FaRegStar /> // unsave Icon
		// 						)}
		// 					</div>
		// 				</div>
		// 				<div className="font-bold text-xl">{item.name}</div>
		// 				<div className="w-full flex justify-between">
		// 					<div className="text-gray-600 text-sm">{item.count} items</div>
		// 					<div onClick={openModal} className="">
		// 						<PiStarFourBold />
		// 					</div>
		// 				</div>
		// 			</div>
		// 		))}
		// 	</div>
		// 	<AskModal isModalOpen={isModalOpen} closeModal={closeModal} />
		// </div>

		// new save content

		<div className="grid grid-cols-4 m-3 gap-2 select-none">
			{/* Caches Filter.*/}
			{filteredCache.map((caches, index) => (
				<div
					key={index}
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
			{filteredProfiles.map((profiles, index) => (
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
						{/* <div onClick={openUnfollowModal} className=""> */}
						{/* Add another icon if needed */}
						{/* </div> */}
					</div>
					<div className=" text-sm">is this required?</div>
				</div>
			))}
			<AskModal isAskModalOpen={isAskModalOpen} closeAskModal={closeAskModal} />
			<UnfollowModal isUnfollowModalOpen={isUnfollowModalOpen} closeUnfollowModal={closeUnfollowModal} />
		</div>
	);
};

export default SaveContant;

// import { useState } from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import AskModal from "../../modal/AskModal";

// // Items array
// const items = [
// 	{ name: "Animal", count: 1557, img: "/src/components/img/Topics/animal.webp", category: "caches" },
// 	{ name: "Astronomy", count: 1557, img: "/src/components/img/Topics/astronomy.webp", category: "caches" },
// 	{ name: "Automotive", count: 45324, img: "/src/components/img/Topics/automotive.webp", category: "caches" },
// 	{ name: "Beauty", count: 24254, img: "/src/components/img/Topics/beauty.webp", category: "caches" },
// 	// Add more items with relevant categories...
// ];

// const SaveContent = ({ activeTab }) => {
// 	// Star toggle state
// 	const [isStrOpen, setIsStrOpen] = useState(false);

// 	const starToggle = () => {
// 		setIsStrOpen((prevState) => !prevState); // Toggle the state
// 	};

// 	// Modal state
// 	const [isModalOpen, setIsModalOpen] = useState(false);

// 	const openModal = () => setIsModalOpen(true);
// 	const closeModal = () => setIsModalOpen(false);

// 	// Filter items based on activeTab
// 	const filteredItems = items.filter((item) => item.category === activeTab || activeTab === "all");

// 	return (
// 		<div className="grid grid-cols-4 m-3 gap-2 select-none">
// 			{filteredItems.map((item, index) => (
// 				<div
// 					key={index}
// 					className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
// 				>
// 					<div className="w-full flex justify-between">
// 						<div className="h-16 w-16">
// 							<img src={item.img} alt={item.name} />
// 						</div>
// 						<div onClick={starToggle}>
// 							{isStrOpen ? (
// 								<FaStar className="text-primary" /> // Saved Icon
// 							) : (
// 								<FaRegStar /> // Unsaved Icon
// 							)}
// 						</div>
// 					</div>
// 					<div className="font-bold text-xl">{item.name}</div>
// 					<div className="w-full flex justify-between">
// 						<div className="text-gray-600 text-sm">{item.count} items</div>
// 						<div onClick={openModal} className="">
// 							{/* Add another icon if needed */}
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 			<AskModal isModalOpen={isModalOpen} closeModal={closeModal} />
// 		</div>
// 	);
// };

// export default SaveContent;
