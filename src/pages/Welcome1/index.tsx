import { NavLink } from 'react-router-dom'
import p1 from '../../assets/images/welcome1.svg'
import Styles from './index.module.scss'

export const Welcome1: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <img className={Styles.wrapper__logo} src={p1} />
      <h2 className={Styles.wrapper__title}>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  )
}
