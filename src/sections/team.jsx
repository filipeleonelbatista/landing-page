import styles from '../styles/Team.module.css'
import team from '../assets/team.jpg'

export default function Team() {

  return (
    <div className={styles.container}>
      <div>
        <h1>VOCÊ NÃO ESTARÁ SOZINHO(A) </h1>
        <img src={team} alt="" className={styles.mobile} />

        <p>
          Nossa Equipe trabalha de maneira unida e colaborativa para o crescimento de todos.
          Após seu cadastro, você terá todo o acompanhamento passo a passo nessa nova jornada rumo ao sucesso!!
        </p>
      </div>

      <img src={team} alt="" className={styles.desktop} />
    </div>
  )
}

