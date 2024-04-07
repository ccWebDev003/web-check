import styled from 'styled-components'

import { StyledCard } from 'components/Form/Card'
import Heading from 'components/Form/Heading'
import colors from 'styles/colors'
import { ReactNode } from 'react'

const Header = styled(StyledCard)`
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	align-items: baseline;
	justify-content: space-between;
	padding: 0.5rem 2rem;
	align-items: center;
	width: 100vw;
	position: sticky;
	top: 0;
	width: 100vw;
	z-index: 1000;
	flex: 1 1 auto;
`

const Nav = (props: { children?: ReactNode }) => {
	return (
		<Header as='header'>
			<Heading color={colors.primary} size='medium'>
				<img width='50' src='/web-check.png' alt='Web Check Icon' />
				<a style={{ fontSize: '20px' }} href='/'>
					Web Check
				</a>
			</Heading>
			{props.children && props.children}
		</Header>
	)
}

export default Nav
