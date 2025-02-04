import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Analyze } from '@/pages/Analyze'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='' element={<App />} />
				<Route path='analyze' element={<Analyze />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
