import { FC } from 'react'
import styles from './Social.module.scss'
import { ISocial } from './interface/social.interface'
import SocialItem from './item/SocialItem'

const Social: FC<{ social: ISocial }> = ({ social: { items } }) => {
	console.log(items)
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<SocialItem item={item} key={item.link} />
			))}
		</ul>
	)
}

export default Social
