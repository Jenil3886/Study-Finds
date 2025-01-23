import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdGridView } from "react-icons/md";

import NotificationDropdown from "./NotificationDropdown";
import { useState } from "react";
import Search from "./Search";

export const Header = () => {
	const [isGridIcon, setIsGridIcon] = useState(true);

	// Function to toggle between icons
	const toggleIcon = () => {
		setIsGridIcon(!isGridIcon);
	};

	// notifaction

	const notifications = [
		{
			initials: "JG",
			message: "jenilgajera following you",
			time: "Joined January 2025",
		},
		{
			initials: "SK",
			message: "SANKET following you",
			time: "Joined January 2029",
		},
		{
			initials: "BD",
			message: "DARSHAN following you",
			time: "Joined January 2084",
		},
	];

	return (
		<header
			className="w-full px-4 flex items-center justify-between gap-3 py-5 font-bold	text-white text-xl border-b border-gray-200"
			style={{
				height: "10vh",
			}}
		>
			<div className="flex items-center gap-5">
				<Search />

				<div className="flex border-2 border-black rounded-md overflow-hidden">
					<span className="h-6 w-7 flex justify-center items-center hover:cursor-pointer transition-all duration-300 border-r-2 border-black bg-extraGray">
						<MdGridView className="text-black" />
					</span>

					<span className="h-6 w-7 flex justify-center items-center hover:cursor-pointer transition-all duration-300">
						<FiMenu className="text-black" />
					</span>
				</div>
			</div>

			<div className="p-5">
				<NotificationDropdown notifications={notifications} />
			</div>
		</header>
	);
};
