import React from "react";

const Intro = () => {
	return (
		<div className="bg-slate-300 relative">
			<img
				className="h-[600px] w-full object-cover bg-gradient-to-r  from-black"
				src="/images/bg.jpg"
				alt="bg"
			/>
			<div className="absolute top-5 w-full flex justify-center items-center flex-col">
				<div className=" bg-white border-white rounded-full h-56 w-56 flex justify-center items-center p-1">
					<img
						className="h-full w-full rounded-full object-cover"
						src="/images/personal.jpg"
						alt="perso"
					/>
				</div>
				<div className="px-8 ">
					<span className="text-white font-bold block text-3xl">
						Here I'am Muhammed Rafeeq K
					</span>
					<span className="text-lg text-white font-">
						I am Passionate{" "}
						<span className="text-blue-500">Full stack web developer</span>
					</span>
					<div className="flex gap-3 mt-4 px-6 w-full">
						<button className="bg-blue-500 rounded-lg p-2 text-white text-sm px-6">
							Hire Me
						</button>
						<button className="bg-blue-500 rounded-lg p-2 px-6 flex gap-2 items-center">
							<span className="text-white text-sm">Download CV </span>
							<span className="material-symbols-outlined text-white text-">download</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
