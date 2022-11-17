import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Centered from './components/UI/Centered'
import Loader from './components/UI/Loader'
import RequireAuth from './hoc/require'
import Home from './pages/main/Home'

const FormwomenUp = React.lazy(() => import('./pages/login/FormWomenUp'))
const WomenUpMain = React.lazy(() => import('./pages/WomenUpMain/WomenUpMain'))
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp'))
const NotFoundPage = React.lazy(() => import('./pages/notFound/NotFoundPage'))

function App() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<Centered>
						<Loader />
					</Centered>
				}
			>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<FormwomenUp />} />
					<Route
						path='/trelloMain/*'
						element={
							<RequireAuth>
								<WomenUpMain />
							</RequireAuth>
						}
					/>
					<Route path='/signup' element={<SignUp />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
