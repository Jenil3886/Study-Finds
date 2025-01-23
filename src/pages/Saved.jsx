import { FaEyeSlash, FaStar } from "react-icons/fa";

import { useState } from "react";
import { SAVE_TABS } from "../helper/tabs";
import SaveContant from "../components/Card/save/SaveContant";
import { TbMessageDots } from "react-icons/tb";

const tabStyle = {
	width: "120px",
	height: "32px",
};

export const Save = () => {
	const [activeTab, setActiveTab] = useState("items");
	const [isPrivate, setIsPrivate] = useState(false);
	const [isAsked, setIsAsked] = useState(false);
	const [isStarred, setIsStarred] = useState(false);
	const [ownCreated, setOwnCreated] = useState(false);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const togglePrivate = () => {
		setIsPrivate(!isPrivate);
	};

	const toggleAsked = () => {
		setOwnCreated(false);
		setIsAsked(!isAsked);
	};

	const toggleStarred = () => {
		setOwnCreated(false);
		setIsStarred(!isStarred);
	};

	const toggleOwnCreated = () => {
		setIsAsked(false);
		setIsStarred(false);
		setOwnCreated(!ownCreated);
	};

	return (
		<div className="m-7 select-none">
			<h1 className="text-3xl font-bold">📚 Saved.</h1>

			<div className="flex justify-between items-start py-4">
				<div className=" flex items-start ">
					{/* old */}
					{/* Tab Navigation */}
					{/* <div className="flex px-2 py-1.5 bg-gray-100 rounded-full select-none">
						{SAVE_TABS.map((tab) => (
							<span
								key={""}
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
					</div> */}

					{/* // NEW */}

					{
						<div className="flex px-2 py-1.5 bg-gray-100 rounded-full select-none">
							{SAVE_TABS.map((tab) => (
								<span
									key={tab.value}
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
					}
				</div>

				<div className="flex items-center justify-center"></div>

				{(activeTab === "items" || activeTab === "caches") && (
					<div className="flex items-center justify-between gap-2">
						<div
							className={`flex items-center text-[14px] bg-gray-100 text-gray-500 gap-1.5 font-semibold px-6 py-2 rounded-full border-2 hover:cursor-pointer ${
								isPrivate ? "border-gray-900" : "border-transparent"
							}`}
							onClick={togglePrivate}
						>
							<FaEyeSlash />
							<span>Private</span>
						</div>

						{activeTab === "caches" ? (
							<div
								className={`flex items-center text-[14px] bg-gray-100 text-gray-500 gap-1.5 font-semibold px-6 py-2 rounded-full border-2 hover:cursor-pointer ${
									isStarred ? "border-gray-900" : "border-transparent"
								}`}
								onClick={toggleStarred}
							>
								<FaStar />
								<span>Starred</span>
							</div>
						) : (
							<div
								className={`flex items-center text-[14px] bg-gray-100 text-gray-500 gap-1.5 font-semibold px-6 py-2 rounded-full border-2 hover:cursor-pointer ${
									isAsked ? "border-gray-900" : "border-transparent"
								}`}
								onClick={toggleAsked}
							>
								<TbMessageDots />
								<span>Ask</span>
							</div>
						)}

						<div
							className={`flex items-center text-[14px] bg-gray-100 text-gray-500 gap-1.5 font-semibold px-6 py-2 rounded-full border-2 hover:cursor-pointer ${
								ownCreated ? "border-gray-900" : "border-transparent"
							}`}
							onClick={toggleOwnCreated}
						>
							<span>Created By You</span>
						</div>
					</div>
				)}
			</div>
			<main>
				<SaveContant activeTab={activeTab} />
			</main>
		</div>
	);
};

// import { useState } from "react";
// import { SAVE_TABS } from "../helper/tabs";
// import SaveContent from "../components/Card/save/SaveContant";

// const tabStyle = {
// 	width: "120px",
// 	height: "32px",
// };

// export const Save = () => {
// 	const [activeTab, setActiveTab] = useState("items");

// 	const handleTabClick = (tab) => {
// 		setActiveTab(tab);
// 	};

// 	return (
// 		<div className="m-7 select-none">
// 			<h1 className="text-3xl font-bold">📚 Saved.</h1>

// 			{/* Tab Navigation */}
// 			<div className="flex px-2 py-1.5 bg-gray-100 rounded-full select-none">
// 				{SAVE_TABS.map((tab) => (
// 					<span
// 						key={tab.value}
// 						className={`flex justify-center items-center text-sm font-medium rounded-full z-20 hover:cursor-pointer h-8 text-black ${
// 							activeTab === tab.value ? "font-bold bg-white" : ""
// 						}`}
// 						style={tabStyle}
// 						onClick={() => handleTabClick(tab.value)}
// 					>
// 						{tab.label}
// 					</span>
// 				))}
// 			</div>

// 			{/* Main Content */}
// 			<main>
// 				<SaveContent activeTab={activeTab} />
// 			</main>
// 		</div>
// 	);
// };
