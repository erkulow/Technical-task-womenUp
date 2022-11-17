import React from 'react'
import styled from 'styled-components'

const LogoTrello = () => {
	return (
		<WomanUP className='WomanUP'>
			<h1>WomanUP</h1>{' '}
		</WomanUP>
	)
}

const WomanUP = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	/* position: relative; */
	/* top: 50px; */
	h1 {
		font-size: 60px;
		color: #253858;
	}
`

export default LogoTrello
