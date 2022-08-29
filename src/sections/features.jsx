import styles from '../styles/Features.module.css'

import familyImg from '../assets/features/family.png'
import lifeImg from '../assets/features/hands_up.png'
import moneyImg from '../assets/features/money_baloon.png'

export default function Features() {

  return (
    <div className={styles.container}>
      <h1><span>AVON</span> é o que você precisa pra <span>mudar de vida</span></h1>

      <div>
        <div className={styles.card}>
          <img src={moneyImg} alt="" />
          <h2>Conquiste sua <span>independência financeira</span></h2>
        </div>

        <div className={styles.card}>
          <img src={familyImg} alt="" />
          <h2>Tenha mais tempo para <span>Aproveitar a sua familia</span></h2>
        </div>

        <div className={styles.card}>
          <img src={lifeImg} alt="" />
          <h2>Melhore sua <span>qualidade de vida</span> com a <span>Avon</span></h2>
        </div>
      </div>

    </div>
  )
}
