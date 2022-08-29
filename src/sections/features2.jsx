import styles from  '../styles/Features2.module.css'


import globe from '../assets/features2/globe.gif'
import testtube from '../assets/features2/test-tube.gif'
import rocket from '../assets/features2/rocket.gif'
import calcculator from '../assets/features2/calculator01.gif'
import tablet from '../assets/features2/illustrator-tablet.gif'
import star from '../assets/features2/star.gif'

export default function Features2() {

  return (
    <div className={styles.container}>
      <h1><span>Descubra</span>por que a <span>Avon é apaixonante</span></h1>

      <div>
        <div className={styles.card}>
          <img src={globe} alt="" style={{marginBottom: '-50px', marginTop: '-50px'}} />
          <h2>Empresa com <span>+ de 100</span> anos em + de 100 países e com + de 6 milhões de empreendedores.</h2>
        </div>

        <div className={styles.card}>
          <img src={testtube} alt="" style={{marginBottom: '-40px', marginTop: '-50px'}}  />
          <h2>Produtos de <span>altíssima qualidade</span>. Benefícios comprovados cientificamente.</h2>
        </div>

        <div className={styles.card}>
          <img src={rocket} alt=""  style={{marginBottom: '-130px', marginTop: '-100px'}} />
          <h2><span>Ferramentas modernas</span> para acelerar seu crescimento.</h2>
        </div>

        <div className={styles.card}>
          <img src={calcculator} alt=""  style={{marginBottom: '-40px', marginTop: '-50px'}}  />
          <h2>Grande <span>potencial de retorno</span> com baixo investimento inicial.</h2>
        </div>

        <div className={styles.card}>
          <img src={tablet} alt="" style={{width:'140%', marginBottom: '-10px', marginTop: '-50px'}}  />
          <h2><span>Modelo de negócios</span> que promove o crescimento profissional.</h2>
        </div>

        <div className={styles.card}>
          <img src={star} alt=""  style={{width:'150%', marginBottom: '-40px', marginTop: '-50px'}} />
          <h2><span>Ganhos extras</span> com bônus, prêmios e reconhecimento.</h2>
        </div>
      </div>

    </div>
  )
}
