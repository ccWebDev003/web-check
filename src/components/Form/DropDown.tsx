import { Button, Fade, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

function DropDown() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<div className='drop-menu tab-menu'>
			<div>
				<Button
					id='fade-button'
					aria-controls={open ? 'fade-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					sx={{fontSize: '20px', color: '#fff', fontWeight: '600'}}
				>
					<CiMenuFries />
				</Button>
				<Menu
				sx={{color: '#000'}}
					id='fade-menu'
					MenuListProps={{
						'aria-labelledby': 'fade-button',
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={handleClose}>
						<Link
							style={{ color: '#fff', textDecoration: 'none' }}
							to='/'
						>
							Bosh sahifa
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link
							style={{ color: '#fff', textDecoration: 'none' }}
							to='/check-url'
						>
							URL tekshirish
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link style={{ color: '#fff', textDecoration: 'none' }} to='/about'>
							Sayt haqida
						</Link>
					</MenuItem>
				</Menu>
			</div>
		</div>
	)
}

export default DropDown
