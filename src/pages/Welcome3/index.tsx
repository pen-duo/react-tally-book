import { NavLink } from 'react-router-dom'
import p1 from '../../assets/images/welcome4.svg'
import Styles from './index.module.scss'

export const Welcome3: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <img className={Styles.wrapper__logo} src={p1} />
      <h2 className={Styles.wrapper__title}>
        数据可视化
        <br />
        收支一目了然
      </h2>
    </div>
  )
}
