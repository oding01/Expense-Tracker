import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Analyze } from '@/pages/Analyze'
import Home from '@/pages/Home'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='analyze' element={<Analyze />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
