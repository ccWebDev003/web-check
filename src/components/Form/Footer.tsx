import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className='Footer' style={{ backgroundColor: '#1a2332' }}>
			<div className='footer-container'>
				<div className='foo-grids'>
					<div className='foo-nav  foo-gr-item'>
						<a href='/' className='img-box'>
							<img width='50' src='/web-check.png' alt='Web Check Icon' />
							<p style={{ fontSize: '20px' }}>Web Check</p>
							<p>
								Web-Check - bu veb-sayt/xost haqidagi ma'lumotlarni topish uchun
								kuchli vosita.
							</p>
						</a>
					</div>
					<div className='foo-gr-item'>
						<h1 className='foo-info-title'>Sahifalar</h1>
						<ul>
							<li>
								<Link to='/'>Bosh sahifa</Link>
							</li>
							<li>
								<Link to='/about'>Sayt haqida</Link>
							</li>
							<li>
								<Link to='/check-url'>URL tekshirish</Link>
							</li>
						</ul>
					</div>
					<div className='foo-gr-item'>
						<h1 className='foo-info-title'>Aloqa</h1>
						<ul>
							<li className='phone-items'>
								<FaPhoneAlt />
								<span>
									<a href='tel:+998906181216'>+998 (90) 618 1216</a>
									<hr />
									<a href='tel:+998770332426'>+998 (77) 033 2426</a>
								</span>
							</li>
							<li>
								<a href='mailto:a.i.rustamov.web@gmail.com'>
									<IoIosMail />
									a.i.rustamov.web@gmail.com
								</a>
							</li>
							<li>
								<FaLocationDot />
								Navoiy vil., Navbahor tuman
							</li>
						</ul>
					</div>
				</div>
				<div className='foo-info'>
					<span>
						<hr />
					</span>
					<p>
						&copy; {new Date().getFullYear()}.{' '}
						<a style={{ color: '#fff' }} href='https://riacoders.uz'>
							riacoders.uz
						</a>{' '}
						barcha huquqlar himoyalangan
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
