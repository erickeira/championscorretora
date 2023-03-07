import styles from './comentarios.module.css'
import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import { loaderImg } from '@/utils'
import Image from 'next/image'
import { Slide, Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Comentarios(){
    const comentarios =[
        {
            nome: 'Erick Almeida Ricardo',
            localidade: 'Campo Grande - MS',
            foto:'pessoa1.jpg',
            mensagem: 'Estou muito satisfeito com a corretora de seguros Champions. Eles foram muito atenciosos desde o primeiro contato e me ajudaram a encontrar a melhor opção de seguro para as minhas necessidades. Além disso, o processo de contratação foi muito simples e rápido. Recomendo a Champions para quem procura um serviço de qualidade e confiança.'
        },
        {
            nome: 'Simone Lara',
            localidade: 'Campo Grande - MS',
            foto:'pessoa2.jpg',
            mensagem: 'Eu tive uma ótima experiência com a corretora de seguros Champions. Eles foram extremamente profissionais e prestativos durante todo o processo de contratação do meu seguro. Além disso, sempre me mantiveram informado sobre o status do meu pedido e responderam prontamente a todas as minhas dúvidas. Fiquei muito satisfeito com o atendimento e recomendo a Champions para quem busca um serviço de qualidade e confiável.'
        },
        {
            nome: 'Washington Carvalho',
            localidade: 'Campo Grande - MS',
            foto:'pessoa3.jpg',
            mensagem: 'Estou muito feliz por ter escolhido a corretora de seguros Champions para cuidar dos meus seguros. Eles me ofereceram um atendimento personalizado e me ajudaram a encontrar as melhores opções de cobertura para proteger minha família e meu patrimônio. Além disso, a equipe da Champions sempre se mostrou muito prestativa e transparente em todas as etapas do processo. Com certeza, recomendo a Champions para quem busca um serviço de qualidade e excelência.'
        },
        {
            nome: 'Nicolli',
            localidade: 'Campo Grande - MS',
            foto:'pessoa4.jpg',
            mensagem: 'Quero expressar minha gratidão à corretora de seguros Champions pela excelente assessoria prestada. Eles me ajudaram a encontrar o seguro ideal para meu negócio e me orientaram sobre todas as coberturas necessárias para proteger minha empresa de imprevistos. Além disso, o processo de contratação foi muito simples e eficiente. Estou muito satisfeito com o serviço prestado pela Champions e recomendo a todos que buscam uma corretora de seguros confiável e competente.'
        }
    ]
    const CardComentario = (props) => {
        const {comentario, index} = props
        return(
            <div>
                <div className={styles.containerTituloPages}>
                    <div className={styles.containerTitulo}>
                        Relatos de nossos assegurados
                    </div>
                    <div className={styles.containerPages}>
                        {index + 1} / {comentarios.length}
                    </div>
                </div>
                <div className={styles.containerComentarioAspas}>
                    <div className={styles.aspasLeft}>
                        <ImQuotesLeft className={styles.aspas} color={'#EAC774'} />
                    </div>
                    
                    <div className={styles.containerComentario}>
                        {comentario.mensagem}
                    </div>
                    <div className={styles.aspasRight}>
                        <ImQuotesRight className={styles.aspas} color={'#EAC774'}/>
                    </div>
                </div>
                <div className={styles.containerPessoa}>
                    <Image
                        src={`/comentarios/${comentario.foto}`}
                        loader={loaderImg}
                        width={60}
                        height={60}
                        className={styles.foto}
                    />
                    <div className={styles.containerNomeCidade}>
                        <div className={styles.containerNome}>
                            {comentario.nome}
                        </div>
                        <div className={styles.containerCidade}>
                            {comentario.localidade}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className={styles.container}>
            <div className={`${styles.containerDentro} containerTela`}>
                <Fade
                    arrows={false}
                    autoplay={true}
                    duration={10000}
                >
                    {
                        comentarios.map((comentario, index) => {
                            return(
                                <CardComentario
                                    key={index}
                                    index={index}
                                    comentario={comentario}
                                 />   
                            )
                        })
                    }
                
                </Fade>
            </div>
        </div>
    )
}
