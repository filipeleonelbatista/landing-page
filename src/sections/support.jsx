import styles from '../styles/Support.module.css'
import support from '../assets/support.png'

export default function Support() {
  function handleClick() {
    window.open("https://wa.me/5511941536754?text=Oi%20Bela%2C%20fui%20indicada%20pela%2077933549", "_blank")
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={support} alt="" className={styles.desktop}/>
        <div>
          <h1><span>Suporte Pronto 24hs</span> para te ajudar no <span>Cadastro</span> </h1>
          <img src={support} alt="" className={styles.mobile}/>

          <p>
            Se preferir poderá fazer seu cadastro agora, seguindo o
            passo a passo pelo WhatsApp.
            <br />
            <br />
            Estamos prontos para te ajudar!
          </p>
          <button onClick={handleClick} >Cadastro pelo Whatsapp</button>
        </div>
      </div>

    </div>
  )
}

