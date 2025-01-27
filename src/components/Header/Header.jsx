import { FiMenu } from "react-icons/fi";
import { MdGridView } from "react-icons/md";

import NotificationDropdown from "./NotificationDropdown";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleToGrid, toggleToMenu } from "../../features/layoutslice";

export const Header = () => {
	const dispatch = useDispatch();
	const activeButton = useSelector((state) => state.viewToggle);

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
					{/* Grid View Button */}
					<span
						className={`h-6 w-7 flex justify-center items-center hover:cursor-pointer transition-all duration-300 border-r-2 border-black ${
							activeButton === "grid" ? "bg-gray-300" : "bg-extraGray"
						}`}
						onClick={() => dispatch(toggleToGrid())}
					>
						<MdGridView className="text-black" />
					</span>

					{/* Menu View Button */}
					<span
						className={`h-6 w-7 flex justify-center items-center hover:cursor-pointer transition-all duration-300 ${
							activeButton === "menu" ? "bg-gray-300" : "bg-extraGray"
						}`}
						onClick={() => dispatch(toggleToMenu())}
					>
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
