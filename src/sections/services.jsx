import styles from '../styles/Services.module.css'
import servicesImage from '../assets/services.png'

export default function Services() {

  return (
    <div className={styles.container}> 
      <div>
        <h1>Quais as vantagens de Empreender com a Avon?</h1>

        <ul>
          <li>Na Avon você vende sem sair de casa com a Revista Digital</li>
          <li>Loja online grátis com entrega direta para suas clientes em todo Brasil</li>
          <li>Aprovamos o cadastro, mesmo com restrição no CPF</li>
          <li>Não é necessário comprar Kit Inicial</li>
          <li>Pedido mínimo apenas R$110,00</li>
          <li>Oferecemos suporte e treinamentos</li>
          <li>Reconhecimento e premiações</li>
        </ul>
      </div>
      <img src={servicesImage} alt="" />
    </div>
  )
}
