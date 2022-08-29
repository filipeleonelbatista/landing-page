import styles from '../styles/About.module.css'

import about from '../assets/about.jpg'


export default function About() {

  function handleClick() {
    window.open("https://www.avon.com.br/institucional/seja-representante/cadastro?codigo-self-appointment=77933549", "_blank")
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>POR QUE REPRESENTAR A AVON?</h1>
        <p>
          Ser Representante da Beleza Avon é fazer parte de uma constelação
          de estrelas, ter brilho e transformar a vida das mulheres para melhor.
          Nossa marca é referência no empoderamento feminino e na democratização
          da beleza, levando produtos inovadores a todo o Brasil.
        </p>

        <img src={about} alt="" />
        <button onClick={handleClick}>Quero Iniciar Agora</button>
      </div>

    </div>
  )
}

