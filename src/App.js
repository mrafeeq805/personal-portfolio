import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";


const Body = () => {


	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},

	]);
	return (
		<div>
			<RouterProvider router={router}>
        
      </RouterProvider>
		</div>
	);
};

export default Body;
