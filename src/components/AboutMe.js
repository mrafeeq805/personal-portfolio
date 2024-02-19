import React from 'react'
import Summary from './Summary';

const AboutMe = () => {
  return (
	<div className='px-3 -mt-20'>
		<div className="bg-white p-4 rounded-xl  w-full shadow-md shadow-gray-500 my-5 md:flex md:gap-6">
			<div className="border-2 bg-slate-50 rounded-xl p-4 md:w-2/4">
				<span>Personal Details</span>
				<div></div>
				<div className="flex flex-col gap-2 mt-2">
					<span className="text-sm text-gray-500">
						Email:{" "}
						<span className="text-sm text-gray-400">
							muhammedrafeeqvr805@gmail.com
						</span>
					</span>
					<span className="text-sm text-gray-500">
						Phone: <span className="text-sm text-gray-400">+91 799402859</span>
					</span>
					<span className="text-sm text-gray-500">
						Place: <span className="text-sm text-gray-400">Malappuram</span>
					</span>
				</div>
			</div>
			<Summary/>
		</div>
	</div>
		
	);
}

export default AboutMe