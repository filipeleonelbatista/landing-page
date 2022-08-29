import styles from '../styles/Hero.module.css'

import heroFaceImg from '../assets/hero/hero_face.png'

export default function Hero() {
  function handleClick() {
    window.open("https://www.avon.com.br/institucional/seja-representante/cadastro?codigo-self-appointment=77933549", "_blank")
  }

  return (
    <div className={styles.container}>
      <div>
        <h4>Conquiste sua liberdade financeira</h4>
        <h1>Seja representante da beleza Avon</h1>
        <p>Voce inicia a jornada com 20% de lucro e pode chegar até 39%!</p>
        <div>
          <img src={heroFaceImg} alt="Empresária" className={styles.mobile} />
          <button onClick={handleClick}>Quero Iniciar Agora</button>
        </div>
      </div>

      <img src={heroFaceImg} alt="Empresária" className={styles.desktop} />
    </div>
  )
}

