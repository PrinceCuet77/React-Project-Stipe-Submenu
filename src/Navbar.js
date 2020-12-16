import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
	let { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

	let displaySubmenu = (e) => {
		let page = e.target.textContent
		let tempBtn = e.target.getBoundingClientRect()
		let center = (tempBtn.left + tempBtn.right) / 2
		let bottom = tempBtn.bottom - 3
		openSubmenu(page, { center, bottom })
  }
  
  let handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

	return (
		<nav className='nav' onMouseOver={handleSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='stripe' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button
							className='link-btn'
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className='link-btn'
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className='link-btn'
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>Sign in</button>
			</div>
		</nav>
	)
}

export default Navbar
