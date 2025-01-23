import { CommonModal } from "./CommonModal";
import { RxCross2 } from "react-icons/rx";

import { IoClipboardOutline } from "react-icons/io5";

const AskModal = ({ isAskModalOpen, closeAskModal }) => {
	return (
		<CommonModal isOpen={isAskModalOpen} onClose={closeAskModal}>
			<div className="flex flex-col  gap-3 justify-center items-center">
				<div className="flex items-center justify-between w-full">
					<div className="text-black font-bold text-[23px]">Ask anything</div>
					<div onClick={closeAskModal} className="text-black cursor-pointer">
						<RxCross2 />
					</div>
				</div>

				<form className="w-full ">
					<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<input
							type="search"
							id="default-search"
							className="block w-full py-3.5 ps-5 text-sm text-gray-900  rounded-md bg-gray-100 "
							placeholder="Search Profiles"
							required
						/>
						<div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer text-black">
							<div className=" p-2 flex items-center font-semibold text-[16px] bg-white border border-gray-300 rounded-full text-black transition duration-300">
								<IoClipboardOutline />
							</div>
						</div>
					</div>
				</form>

				<div className="flex items-center justify-end w-full">
					<span className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-md cursor-pointer" onClick={closeAskModal}>
						Ask
					</span>
				</div>

				{/* Profile Section */}
			</div>
		</CommonModal>
	);
};

export default AskModal;
