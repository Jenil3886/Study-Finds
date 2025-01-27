import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationDropdown = ({ notifications }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseDropdown = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			{/* Button to toggle dropdown */}
			<button
				onClick={toggleDropdown}
				className="relative w-8 h-10 flex justify-center text-[30px] text-black items-center rounded-full hover:cursor-pointer transition duration-300"
				id="dropdownDefaultButton"
			>
				<IoMdNotificationsOutline />
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div id="dropdown" className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-[500px] select-none">
					<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
						{notifications.length > 0 ? (
							notifications.map((notification, index) => (
								<li key={index} className="border-b border-gray-300">
									<a href="#" className="flex items-center gap-9 px-4 pt-1 pb-3">
										<div>
											<span
												className="w-12 h-12 rounded-full text-white text-2xl font-normal flex justify-center items-center"
												style={{ backgroundColor: "#a81563" }}
											>
												{notification.initials}
											</span>
										</div>
										<div className="flex flex-col justify-center items-start">
											<div className="text-xl font-bold">{notification.message}</div>
											<div className="font-semibold text-gray-700">{notification.time}</div>
										</div>
									</a>
								</li>
							))
						) : (
							<li className="px-4 py-3 text-center text-gray-500">No notifications</li>
						)}
					</ul>
				</div>
			)}

			{/* Click outside to close */}
			{isOpen && <div className="fixed inset-0 z-0" onClick={handleCloseDropdown} aria-hidden="true" />}
		</div>
	);
};

export default NotificationDropdown;
