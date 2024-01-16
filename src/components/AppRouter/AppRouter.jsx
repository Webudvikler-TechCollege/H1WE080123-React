import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { ListArrays } from "../../Pages/ListArrays/ListArrays"
import { About } from "../../pages/About/About"

export const AppRouter = () => {
  return (
	<Routes>
		<Route index element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/list" element={<ListArrays />} />

	</Routes>
  )
}
