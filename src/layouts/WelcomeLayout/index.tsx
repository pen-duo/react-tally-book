import { animated, useTransition } from '@react-spring/web'
import { type ReactNode, useRef } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import Styles from './index.module.scss'

const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  const map = useRef<Record<string, ReactNode>>({})
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
  })
  return transitions((style, pathname) => {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.wrapper__rbutton}>跳过</div>
        <header className={Styles.wrapper__header}>
          <img className={Styles['wrapper__header--logo']} src={logo} />
          <h1 className={Styles['wrapper__header--title']}>山竹记账</h1>
        </header>
        <main>
          <animated.div key={pathname} style={style}>
            {map.current[pathname]}
          </animated.div>
        </main>
        <footer className={Styles.wrapper__footer}>
          <Link to={linkMap[location.pathname]}>下一页</Link>
        </footer>
      </div>
    )
  })
}
