import { PiStarFourBold } from "react-icons/pi";
import { FaRegStar, FaStar } from "react-icons/fa";
import AskModal from "../../modal/AskModal";
import { useState } from "react";

const items = [
	{ name: "Animal", count: 1557, img: "/src/components/img/Topics/animal.webp" },
	{ name: "astronomy", count: 1557, img: "/src/components/img/Topics/astronomy.webp" },
	{ name: "Automotive", count: 45324, img: "/src/components/img/Topics/automotive.webp" },
	{ name: "Beuaty", count: 24254, img: "/src/components/img/Topics/beauty.webp" },
	{ name: "Best Of The Best", count: 452343, img: "/src/components/img/Topics/best of the best.webp" },
	{ name: "Brain", count: 453435, img: "/src/components/img/Topics/brain.webp" },
	{ name: "Bussiness", count: 4543, img: "/src/components/img/Topics/bussiness.webp" },
	{ name: "Children", count: 54534, img: "/src/components/img/Topics/children.webp" },
	{ name: "Earth", count: 14557547, img: "/src/components/img/Topics/earth.webp" },
	{ name: "Education", count: 1251351, img: "/src/components/img/Topics/education.webp" },
	{ name: "Enviroment", count: 133545, img: "/src/components/img/Topics/entertainment.webp" },
	{ name: "Family", count: 1563, img: "/src/components/img/Topics/family.webp" },
	{ name: "Fitness", count: 150, img: "/src/components/img/Topics/fitness.webp" },
	{ name: "Food", count: 150, img: "/src/components/img/Topics/food.webp" },
	{ name: "Happiness", count: 150, img: "/src/components/img/Topics/happiness.webp" },
	{ name: "Historical", count: 150, img: "/src/components/img/Topics/historical.webp" },
	{ name: "Home & Gardan", count: 150, img: "/src/components/img/Topics/home & garden.webp" },
	{ name: "Intelligence", count: 150, img: "/src/components/img/Topics/intelligence.webp" },
	{ name: "Longer Life", count: 150, img: "/src/components/img/Topics/longer life.webp" },
	{ name: "Men", count: 150, img: "/src/components/img/Topics/men.webp" },
	{ name: "Money", count: 150, img: "/src/components/img/Topics/money.webp" },
	{ name: "Parenting", count: 150, img: "/src/components/img/Topics/parenting.webp" },
	{ name: "Politics", count: 150, img: "/src/components/img/Topics/politics.webp" },
	{ name: "Psychology", count: 150, img: "/src/components/img/Topics/psychology.webp" },
	{ name: "Realtionship", count: 150, img: "/src/components/img/Topics/reletionship.webp" },
	{ name: "Sciences", count: 150, img: "/src/components/img/Topics/sciences.webp" },
	{ name: "Society", count: 150, img: "/src/components/img/Topics/society.webp" },
	{ name: "Sport", count: 150, img: "/src/components/img/Topics/sport.webp" },
	{ name: "Travel", count: 150, img: "/src/components/img/Topics/travel.webp" },
	{ name: "Weight Loss", count: 150, img: "/src/components/img/Topics/weight loss.webp" },
	{ name: "Weird", count: 150, img: "/src/components/img/Topics/weird.webp" },
	{ name: "Wellness", count: 150, img: "/src/components/img/Topics/wellness.webp" },
	{ name: "Women", count: 150, img: "/src/components/img/Topics/women.webp" },
	{ name: "Work Places", count: 150, img: "/src/components/img/Topics/workplaces.webp" },
];

const TopicsCard = () => {
	// icon toggal

	//star
	const [isStrOpen, setIsStrOpen] = useState(false);

	const starToggle = () => {
		setIsStrOpen((prevState) => !prevState); // Toggle the state
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return (
		<div>
			<div className="grid grid-cols-4 m-4 gap-2 select-none">
				{items.map((item, index) => (
					<div
						key={index}
						className="shadow-sm cursor-pointer border rounded-2xl p-3 phone:p-4 flex flex-col items-start justify-between text-center hover:shadow-md transition-all duration-300 ease-in-out min-h-40 overflow-hidden"
					>
						<div className="w-full flex justify-between">
							<div className="h-16 w-16">
								<img src={item.img} alt={item.name} />
							</div>
							<div onClick={starToggle}>
								{/* <FaRegStar /> */}
								{isStrOpen ? (
									<FaStar className="text-primary" /> // save Icon
								) : (
									<FaRegStar /> // unsave Icon
								)}
							</div>
						</div>
						<div className="font-bold text-xl">{item.name}</div>
						<div className="w-full flex justify-between">
							<div className="text-gray-600 text-sm">{item.count} items</div>
							<div onClick={openModal} className="">
								<PiStarFourBold />
							</div>
						</div>
					</div>
				))}
			</div>
			<AskModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</div>
	);
};

export default TopicsCard;
