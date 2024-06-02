import { NavLink } from 'react-router-dom'
import p1 from '../../assets/images/welcome4.svg'
import Styles from './index.module.scss'

export const Welcome4: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <img className={Styles.wrapper__logo} src={p1} />
      <h2 className={Styles.wrapper__title}>
        云备份
        <br />
        再也不怕数据丢失
      </h2>
    </div>
  )
}
