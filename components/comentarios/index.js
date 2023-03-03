import styles from './comentarios.module.css'
import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import { loaderImg } from '@/utils'
import Image from 'next/image'

export default function Comentarios(){
    return(
        <div className={styles.container}>
            <div className={`${styles.containerDentro} containerTela`}>
                <div className={styles.containerTituloPages}>
                    <div className={styles.containerTitulo}>
                        Relatos de nossos assegurados
                    </div>
                    <div className={styles.containerPages}>
                        1 / 4
                    </div>
                </div>
                <div className={styles.containerComentarioAspas}>
                    <div className={styles.aspasLeft}>
                        <ImQuotesLeft size={30} color={'#EAC774'} />
                    </div>
                    
                    <div className={styles.containerComentario}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                    <div className={styles.aspasRight}>
                        <ImQuotesRight size={30} color={'#EAC774'} style={{position: 'absolute', bottom: 0}}/>
                    </div>
                </div>
                <div className={styles.containerPessoa}>
                    <Image
                        src={"/comentarios/pessoa1.jpg"}
                        loader={loaderImg}
                        width={60}
                        height={60}
                        className={styles.foto}
                    />
                    <div className={styles.containerNomeCidade}>
                        <div className={styles.containerNome}>
                            Erick Almeida Ricardo
                        </div>
                        <div className={styles.containerCidade}>
                            Campo Grande - MS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
