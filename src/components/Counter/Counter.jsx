import React, { useState } from 'react'
import Button from '@mui/material/Button'

export function Counter (props) {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		// this.setState({ counter: this.state.counter + this.props.add })
		setCounter(counter + props.add)
	}

		return (
		<React.Fragment>
			<Button onClick={handleClick} variant="contained">{props.add}</Button>
			<div>{counter}</div>
		</React.Fragment>
		)
	}