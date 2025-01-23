import { BiMessageRounded } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiSparkling2Fill } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

import { useState } from "react";
import { HOME_TABS } from "../../helper/tabs";
import { HOME_ITEMS } from "../../data";
import { Link } from "react-router-dom";
import ShereModal from "../modal/ShereModal";

const HomeContent = () => {
	const [activeTab, setActiveTab] = useState("for-you");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const tabStyle = {
		width: "120px",
		height: "32px",
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className="h-full p-4 flex flex-col items-start gap-y-6 overflow-y-auto">
			{/* Tab Navigation */}
			<div className="flex px-2 py-1.5 bg-gray-100 rounded-full select-none">
				{HOME_TABS.map((tab) => (
					<span
						key={tab.value}
						value={tab.value}
						className={`flex justify-center items-center text-sm font-medium rounded-full z-20 hover:cursor-pointer h-8 text-black ${
							activeTab === tab.value ? "font-bold bg-white" : ""
						}`}
						style={tabStyle}
						onClick={() => handleTabClick(tab.value)}
					>
						{tab.label}
					</span>
				))}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{HOME_ITEMS.map((item) => (
					<Link
						key={item.id}
						to={`/items/${item.id}`}
						className="flex flex-col gap-y-4 p-4 group border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300"
					>
						<h2 className="text-lg font-bold">{item.title}</h2>
						<p className="text-sm text-gray-600">{item.description}</p>
						<img alt="Preview" loading="lazy" className="w-full h-48 object-cover rounded-md" src={item.imageUrl} />
						<div className="flex items-center justify-between gap-x-2 mt-2">
							<div className=" flex gap-1 items-center">
								<div className="w-8 h-8 rounded-full text-white flex justify-center items-center" style={{ backgroundColor: item.avatarColor }}>
									{item.avatarInitial}
								</div>
								<span className="text-sm">{item.user}</span>
							</div>
							<div className=" flex gap-1 items-center">
								<BiMessageRounded />
								<span>{item.comment}</span>
							</div>
							<div className=" flex gap-1 items-center  ">
								<IoEyeOutline />
								<span>{item.view}</span>
							</div>
							<div className=" flex gap-1 items-center ">
								<RiSparkling2Fill />
								<span>{item.open}</span>
							</div>
							<div className=" ">{item.time}</div>
							<div onClick={openModal} className=" flex gap-1 items-center">
								<FiShare2 />
							</div>
						</div>
					</Link>
				))}
				<ShereModal isModalOpen={isModalOpen} closeModal={closeModal} />
			</div>
		</div>
	);
};

export default HomeContent;
