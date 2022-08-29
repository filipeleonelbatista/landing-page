import styles from '../styles/Me.module.css'
import me from '../assets/me.jpg'

export default function Me() {
  function handleClick() {
    window.open("https://wa.me/5551984941682", "_blank")
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={me} alt="" className={styles.desktop} />
        <div>
          <h1>Olá 👋 <br /> Meu nome é <span>Lisandra Batista</span> </h1>
          <img src={me} alt="" className={styles.mobile} />

          <p>
            Empresária da Beleza <b>AVON </b>
            Estou muito feliz com seu interesse em conhecer
            melhor a oportunidade de parceria com a empresa
            Nº1 em cosméticos no mundo!
            <br />
            <br />
            Estou à disposição para tirar todas as suas dúvidas e
            fornecer o melhor suporte!
            <br />
            <br />
            <b>Pode contar comigo!</b>
          </p>
          <button onClick={handleClick} >Atendimento via Whatsapp</button>
        </div>
      </div>

    </div>
  )
}

