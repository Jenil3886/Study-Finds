import { BiMessageRounded } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiSparkling2Fill } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuDot } from "react-icons/lu";

const cardData = [
	{
		title: "7 Best All-Season Tires Most Recommended By Experts",
		description:
			"The article reviews the evolution and performance of all-season tires, highlighting their ability to adapt to varying weather conditions without seasonal tire changes.",
		imageUrl: "https://studyfinds.org/wp-content/uploads/2023/02/kqhf9kf6j0a.jpg",
		user: "@StudyFinds",
		avatarColor: "#7E3794",
		avatarInitial: "S",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "Top 5 SUVs That Offer Great Mileage",
		description: "Exploring the top SUVs that combine power and efficiency, making them a great choice for long trips and everyday commutes.",
		imageUrl: "https://example.com/suv-image.jpg",
		user: "@AutoExpert",
		avatarColor: "#FF5722",
		avatarInitial: "A",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "7 Best All-Season Tires Most Recommended By Experts",
		description:
			"The article reviews the evolution and performance of all-season tires, highlighting their ability to adapt to varying weather conditions without seasonal tire changes.",
		imageUrl: "https://studyfinds.org/wp-content/uploads/2023/02/kqhf9kf6j0a.jpg",
		user: "@StudyFinds",
		avatarColor: "#7E3794",
		avatarInitial: "S",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "Top 5 SUVs That Offer Great Mileage",
		description: "Exploring the top SUVs that combine power and efficiency, making them a great choice for long trips and everyday commutes.",
		imageUrl: "https://example.com/suv-image.jpg",
		user: "@AutoExpert",
		avatarColor: "#FF5722",
		avatarInitial: "A",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "7 Best All-Season Tires Most Recommended By Experts",
		description:
			"The article reviews the evolution and performance of all-season tires, highlighting their ability to adapt to varying weather conditions without seasonal tire changes.",
		imageUrl: "https://studyfinds.org/wp-content/uploads/2023/02/kqhf9kf6j0a.jpg",
		user: "@StudyFinds",
		avatarColor: "#7E3794",
		avatarInitial: "S",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "Top 5 SUVs That Offer Great Mileage",
		description: "Exploring the top SUVs that combine power and efficiency, making them a great choice for long trips and everyday commutes.",
		imageUrl: "https://example.com/suv-image.jpg",
		user: "@AutoExpert",
		avatarColor: "#FF5722",
		avatarInitial: "A",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "7 Best All-Season Tires Most Recommended By Experts",
		description:
			"The article reviews the evolution and performance of all-season tires, highlighting their ability to adapt to varying weather conditions without seasonal tire changes.",
		imageUrl: "https://studyfinds.org/wp-content/uploads/2023/02/kqhf9kf6j0a.jpg",
		user: "@StudyFinds",
		avatarColor: "#7E3794",
		avatarInitial: "S",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	{
		title: "Top 5 SUVs That Offer Great Mileage",
		description: "Exploring the top SUVs that combine power and efficiency, making them a great choice for long trips and everyday commutes.",
		imageUrl: "https://example.com/suv-image.jpg",
		user: "@AutoExpert",
		avatarColor: "#FF5722",
		avatarInitial: "A",
		comment: "5",
		view: "2",
		open: "9",
		time: "2 month ago",
	},
	// Add more card objects as needed
];

const LikeContant = () => {
	return (
		<div className="p-4">
			<div className="flex gap-2.5 items-center ">
				<div className="font-bold text-2xl">Likes</div>
				<form className="max-w-[350px] ">
					<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-black">
							<CiSearch />
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full py-2 ps-10  text-gray-900 border border-gray-300 rounded-full bg-gray-100 placeholder:font-semibold text-md"
							placeholder="Search"
							required
						/>
					</div>
				</form>
			</div>

			<div className=" flex items-center justify-start font-semibold text-gray-500 mb-5">
				<div className="">@jenilgajera </div>
				<LuDot className="text-gray-500 text-2xl" />
				<div className="">5 items </div>
			</div>

			<div className=" flex flex-col items-start gap-y-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{cardData.map((card, index) => (
						<div
							key={index}
							className="flex flex-col gap-y-4 p-4 group border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300"
						>
							<h2 className="text-lg font-bold">{card.title}</h2>
							<p className="text-sm text-gray-600">{card.description}</p>
							<img alt="Preview" loading="lazy" className="w-full h-48 object-cover rounded-md" src={card.imageUrl} />
							<div className="flex items-center justify-between gap-x-2 mt-2">
								<div className=" flex gap-1 items-center">
									<div className="w-8 h-8 rounded-full text-white flex justify-center items-center" style={{ backgroundColor: card.avatarColor }}>
										{card.avatarInitial}
									</div>
									<span className="text-sm">{card.user}</span>
								</div>
								<div className=" flex gap-1 items-center">
									<BiMessageRounded />
									<span>{card.comment}</span>
								</div>
								<div className=" flex gap-1 items-center  ">
									<IoEyeOutline />
									<span>{card.view}</span>
								</div>
								<div className=" flex gap-1 items-center ">
									<RiSparkling2Fill />
									<span>{card.open}</span>
								</div>
								<div className=" ">{card.time}</div>
								<div className=" flex gap-1 items-center">
									<FiShare2 />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LikeContant;
