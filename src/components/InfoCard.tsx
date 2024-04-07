import { FaArrowRightLong } from 'react-icons/fa6'
import backicon from '../assets/back-icon.png';
import checkicon from '../assets/check-icon.png';
import webicon from '../assets/web-icon.png';
import { Link } from 'react-router-dom'

function InfoCard() {
	return (
		<div className='in-cards'>
			<Link to="/check-url" className='in-card-item'>
				<p>URL tekshirish</p>
				<span className='ic-icon'>
					<img src={checkicon} alt='icon' />
				</span>
				<span className='ic-arrow'>
					<FaArrowRightLong />
				</span>
			</Link>
			<Link to="/about" className='in-card-item'>
				<p>Sayt haqida ma'lumot</p>
				<span className='ic-icon'>
					<img src={webicon} alt='icon' />
				</span>
				<span className='ic-arrow'>
					<FaArrowRightLong />
				</span>
			</Link>
			<Link to="/check-url" className='in-card-item'>
				<p>Sayt ma'lumotlarini olish</p>
				<span className='ic-icon'>
					<img src={backicon} alt='icon' />
				</span>
				<span className='ic-arrow'>
					<FaArrowRightLong />
				</span>
			</Link>
		</div>
	)
}

export default InfoCard
