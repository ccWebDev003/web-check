import { ChangeEvent, FormEvent, useState } from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from 'components/Form/Button'
import { StyledCard } from 'components/Form/Card'
import Heading from 'components/Form/Heading'
import Input from 'components/Form/Input'

import DropDown from 'components/Form/DropDown'
import Nav from 'components/Form/Nav'
import { Link } from 'react-router-dom'
import colors from 'styles/colors'
import { determineAddressType } from 'utils/address-type-checker'
import docs from 'utils/docs'
import Footer from 'components/Form/Footer'

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-family: 'PTMono';
	footer {
		z-index: 1;
	}
`

const UserInputMain = styled.form`
	background: ${colors.backgroundLighter};
	box-shadow: 4px 4px 0px ${colors.bgShadowColor};
	border-radius: 8px;
	padding: 1rem;
	z-index: 5;
	margin: 1rem;
	width: calc(100% - 2rem);
	max-width: 60rem;
	z-index: 2;
`

const SponsorCard = styled.div`
	background: ${colors.backgroundLighter};
	box-shadow: 4px 4px 0px ${colors.bgShadowColor};
	border-radius: 8px;
	padding: 1rem;
	z-index: 5;
	margin: 1rem;
	width: calc(100% - 2rem);
	max-width: 60rem;
	z-index: 2;
	.inner {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		p {
			margin: 0.25rem 0;
		}
	}
	a {
		color: ${colors.textColor};
	}
	img {
		border-radius: 0.25rem;
		box-shadow: 2px 2px 0px ${colors.fgShadowColor};
		transition: box-shadow 0.2s;
		margin: 0 auto;
		display: block;
		width: 200px;
		&:hover {
			box-shadow: 4px 4px 0px ${colors.fgShadowColor};
		}
		&:active {
			box-shadow: -2px -2px 0px ${colors.fgShadowColor};
		}
	}
	.cta {
		font-size: 0.78rem;
		a {
			color: ${colors.primary};
		}
	}
`

// const FindIpButton = styled.a`
//   margin: 0.5rem;
//   cursor: pointer;
//   display: block;
//   text-align: center;
//   color: ${colors.primary};
//   text-decoration: underline;
// `;

const ErrorMessage = styled.p`
	color: ${colors.danger};
	margin: 0.5rem;
`

const SiteFeaturesWrapper = styled(StyledCard)`
	margin: 1rem;
	width: calc(100% - 2rem);
	max-width: 60rem;
	z-index: 2;
	.links {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		a {
			width: 100%;
			button {
				width: calc(100% - 2rem);
			}
		}
		@media (max-width: 600px) {
			flex-wrap: wrap;
		}
	}
	ul {
		-webkit-column-width: 150px;
		-moz-column-width: 150px;
		column-width: 150px;
		list-style: none;
		padding: 0 1rem;
		font-size: 0.9rem;
		li {
			margin: 0.1rem 0;
			text-indent: -1.2rem;
			break-inside: avoid-column;
		}
		li:before {
			content: '✓';
			color: ${colors.primary};
			margin-right: 0.5rem;
		}
	}
	a {
		color: ${colors.primary};
	}
`

const Home = (): JSX.Element => {
	const defaultPlaceholder = 'e.g. https://duck.com/'
	const [userInput, setUserInput] = useState('')
	const [errorMsg, setErrMsg] = useState('')
	const [placeholder] = useState(defaultPlaceholder)
	const [inputDisabled] = useState(false)
	const navigate = useNavigate()

	/* Check is valid address, either show err or redirect to results page */
	const submit = () => {
		let address = userInput.endsWith('/') ? userInput.slice(0, -1) : userInput
		const addressType = determineAddressType(address)

		if (addressType === 'empt') {
			setErrMsg('Field must not be empty')
		} else if (addressType === 'err') {
			setErrMsg('Must be a valid URL, IPv4 or IPv6 Address')
		} else {
			// if the addressType is 'url' and address doesn't start with 'http://' or 'https://', prepend 'https://'
			if (addressType === 'url' && !/^https?:\/\//i.test(address)) {
				address = 'https://' + address
			}
			const resultRouteParams: NavigateOptions = {
				state: { address, addressType },
			}
			navigate(`/results/${encodeURIComponent(address)}`, resultRouteParams)
		}
	}

	/* Update user input state, and hide error message if field is valid */
	const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value)
		const isError = ['err', 'empt'].includes(
			determineAddressType(event.target.value)
		)
		if (!isError) setErrMsg('')
	}

	// const findIpAddress = () => {
	//   setUserInput('');
	//   setPlaceholder('Looking up your IP...');
	//   setInputDisabled(true);
	//   fetch('https://ipapi.co/json/')
	//     .then(function(response) {
	//       response.json().then(jsonData => {
	//         setUserInput(jsonData.ip);
	//         setPlaceholder(defaultPlaceholder);
	//         setInputDisabled(true);
	//       });
	//     })
	//     .catch(function(error) {
	//       console.log('Failed to get IP address :\'(', error)
	//     });
	// };

	const formSubmitEvent = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		submit()
	}

	return (
		<HomeContainer>
			<Nav>
				<div
					className='lg-menu'
					style={{ flex: '1 1 auto', marginRight: '30px' }}
				>
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
							<Link
								style={{ color: '#fff', textDecoration: 'none' }}
								to='/about'
							>
								Sayt haqida
							</Link>
						</li>
					</ul>
				</div>
				<div className='drop-box'>
					<DropDown />
				</div>
			</Nav>
			<UserInputMain className='check-wrapps' onSubmit={formSubmitEvent}>
				<Heading as='h1' size='large' align='center' color={colors.primary}>
					<img width='64' src='/web-check.png' alt='Web Check Icon' />
					Web Check
				</Heading>
				<Input
					id='user-input'
					value={userInput}
					label='URL kiriting'
					orientation='vertical'
					placeholder={placeholder}
					disabled={inputDisabled}
					handleChange={inputChange}
				/>
				{/* <FindIpButton onClick={findIpAddress}>Or, find my IP</FindIpButton> */}
				{errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
				<Button
					styles='width: calc(100% - 1rem);'
					onClick={submit}
				>
					Tahlil qilish!
				</Button>
			</UserInputMain>
			<SponsorCard className='check-wrapps'>
				<Heading as='h2' size='small' color={colors.primary}>
					Hamkorlarimiz
				</Heading>
				<div className="inner">
          <p>
            <a href="https://terminaltrove.com/?utm_campaign=github&utm_medium=referral&utm_content=web-check&utm_source=wcgh">
              Terminal Trove
            </a> - Terminaldagi $HOME barcha narsalar.
            <br />
            <span className="cta">
            orqali so'nggi CLI/TUI vositalari haqida yangilanishlarni <a className="cta" href="https://terminaltrove.com/newsletter?utm_campaign=github&utm_medium=referral&utm_content=web-check&utm_source=wcgh">
                Terminal Trove yangiliklar sahifasida oling
              </a>
            </span>
            
          </p>
          <a href="https://terminaltrove.com/?utm_campaign=github&utm_medium=referral&utm_content=web-check&utm_source=wcgh">
            <img width="120" alt="Terminal Trove" src="https://i.ibb.co/NKtYjJ1/terminal-trove-web-check.png" />
          </a>
        </div>
			</SponsorCard>
			<SiteFeaturesWrapper className='check-wrapps'>
				<div className='features'>
					<Heading as='h2' size='small' color={colors.primary}>
						Qo'llab-quvvatlanadigan tekshiruvlar
					</Heading>
					<ul>
						{docs.map((doc, index) => (
							<li key={index}>{doc.title}</li>
						))}
						<li>
							<a href='/about'>+ ko'proq!</a>
						</li>
					</ul>
				</div>
				<div className='links'>
					<a
						href='https://github.com/lissy93/web-check'
						title='Check out the source code and documentation on GitHub, and get support or contribute'
					>
						<Button>GitHub sahifasidan ko'rish</Button>
					</a>
					<a
						href='https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/web-check'
						title='Deploy your own private or public instance of Web-Check to Netlify'
					>
						<Button>Shaxsiy o'zingiznikini joylang</Button>
					</a>
					<a
						href='/about#api-documentation'
						title='View the API documentation, to use Web-Check programmatically'
					>
						<Button>API hujjatlari</Button>
					</a>
				</div>
			</SiteFeaturesWrapper>
      <Footer />
		</HomeContainer>
	)
}

export default Home
