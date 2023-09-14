// Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components
import { Home } from "./pages/Home"

// Styles
import "@/styles/index.scss"

function App() {
	return (
		<BrowserRouter>
			<main id="main">
				<Routes>
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
