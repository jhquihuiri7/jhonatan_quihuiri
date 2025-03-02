import ComputersCanvas from "./Computers";

import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("./Earth"), { ssr: false });
//import EarthCanvas from "./Earth";

export { ComputersCanvas, EarthCanvas};