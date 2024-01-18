import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { ListArrays } from "../../Pages/ListArrays/ListArrays"
import { About } from "../../pages/About/About"
import { Counter } from "../Counter/Counter"
import { Effects } from "../Effects/Effects"
import { FetchData } from "../FetchData/FetchData"

export const AppRouter = () => {
  return (
	<Routes>
		<Route index element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/list" element={<ListArrays />} />
		
		<Route path="/counter" element={<Counter />} />

		<Route path="/effects" element={<Effects />} />
		<Route path="/fetchdata" element={<FetchData />} />
	</Routes>
  )
}
