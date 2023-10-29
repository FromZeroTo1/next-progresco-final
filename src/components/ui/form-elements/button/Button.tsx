import { FC } from 'react'

import { IButton } from './interface/button.interface'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={className && className} {...rest}>
			{children}
		</button>
	)
}

export default Button
