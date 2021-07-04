import cls from './Card.module.css'

function Card(props) {
  return <div className={cls.card}>
    {props.children}
  </div>
}

export default  Card;