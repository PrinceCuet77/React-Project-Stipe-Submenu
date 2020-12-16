import React, { useState, useContext } from 'react'
import App from './App'
import sublinks from './data'

let AppContext = React.createContext()

export let AppProvider = ({ children }) => {
	let [isSidebarOpen, setIsSidebarOpen] = useState(false)
	let [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	let [location, setLocation] = useState({})
	let [page, setPage] = useState({ page: '', links: [] })

	let openSidebar = () => {
		setIsSidebarOpen(true)
	}

	let closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	let openSubmenu = (text, corodinates) => {
		let page = sublinks.find((link) => link.page === text)
		setPage(page)
		setLocation(corodinates)
		setIsSubmenuOpen(true)
	}

	let closeSubmenu = () => {
		setIsSubmenuOpen(false)
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
				location, 
				page
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export let useGlobalContext = () => {
	return useContext(AppContext)
}
