import styles from '../styles/Footer.module.css'

export default function Footer() {
  const currentTime = new Date()
  return (
    <div className={styles.container}>
      <div>
        <p>
          Este é um Site Independente Não-Oficial  <b>Todos os Direitos Reservados {currentTime.getFullYear()} © Avon</b>
        </p>
        <p>Desenvolvido com 💖 por  <a href="http://desenvolvedordeaplicativos.com.br">Filipe Batista</a> </p>
      </div>
    </div>
  )
}

