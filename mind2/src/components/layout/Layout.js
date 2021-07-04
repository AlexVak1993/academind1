import MainNavigation from './MainNavigation'
import cls from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={cls.main}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;