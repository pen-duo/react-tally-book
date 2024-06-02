import { NavLink } from 'react-router-dom'
import p1 from '../../assets/images/welcome2.svg'
import Styles from './index.module.scss'

export const Welcome2: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <img className={Styles.wrapper__logo} src={p1} />
      <h2 className={Styles.wrapper__title}>
        每日提醒
        <br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
