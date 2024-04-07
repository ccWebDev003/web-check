import { Link } from 'react-router-dom'
import bannerimg from './banner.png'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Nav from '../components/Form/Nav'
import InfoCard from '../components/InfoCard'
import Footer from '../components/Form/Footer'

import DropDown from 'components/Form/DropDown'


function Main() {
	return (
		<main>
			<Nav>
				<div className='lg-menu' style={{ flex: '1 1 auto', marginRight: '30px' }}>
					<ul
						style={{
							display: 'flex',
							gap: '20px',
							justifyContent: 'flex-end',
							listStyle: 'none',
						}}
					>
						<li>
							<Link
								style={{ color: '#fff', textDecoration: 'none' }}
								to='/check-url'
							>
								URL tekshirish
							</Link>
						</li>
						<li>
							<Link style={{ color: '#fff', textDecoration: 'none' }} to='/about'>
								Sayt haqida
							</Link>
						</li>
					</ul>
				</div>
				<div className='drop-box'>
				<DropDown />
				</div>
			</Nav>
			<div className='main-container'>
				<div className='main-info'>
					<h1 className='title-h1'>
						Web-Check saytlar haqida ma'lumot olish uchun kuchli vosita. Web-Check yordamida saytlaringizni tekshiring.
					</h1>
					<Stack className='main-btns' spacing={2} direction='row'>
						<Button href='/about'  variant='contained'>
							Sayt haqida
						</Button>
						<Button href='/check-url'  variant='outlined'>
							URL tekshiruv
						</Button>
					</Stack>
				</div>
				<div className='banner-img'>
					<img src={bannerimg} alt='banner pic' />
				</div>
			</div>
			<div className="info-container">
				<h1>Web-Check imkoniyatlari</h1>
				<div className="cards">
					<InfoCard />
				</div>
			</div>
			<Footer />
		</main>
	)
}

export default Main
 
