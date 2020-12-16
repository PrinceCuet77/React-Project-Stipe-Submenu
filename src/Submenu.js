import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
	let {
		isSubmenuOpen,
		location,
		page: { page, links }
	} = useGlobalContext()
  let container = useRef(null)
  let [columns, setColumns] = useState('col-2')

	useEffect(() => {
    setColumns('col-2')
		let submenu = container.current
		let { center, bottom } = location
		submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
	}, [location])

	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					let { label, icon, url } = link
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					)
				})}
			</div>
		</aside>
	)
}

export default Submenu
