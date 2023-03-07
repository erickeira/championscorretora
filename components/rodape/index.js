import styles from './rodape.module.css'
import { BsInstagram, BsWhatsapp} from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Rodape(){
    const router = useRouter()

    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerDentro} containerTela`}>
                <div className={`${styles.containerSetor}`}>
                    <div className={`${styles.titulo}`}>
                        Contato
                    </div>
                    <div className={`${styles.subtitulo}`}>
                        Tel
                    </div>
                    <div className={`${styles.texto}`}>
                        (67) 9 9851-2650 
                    </div>
                    <div className={`${styles.subtitulo}`}>
                        E-Mail
                    </div>
                    <div className={`${styles.texto}`}>
                        teste@gmail.com
                    </div>
                    <div className={`${styles.subtitulo}`}>
                        Horários de atendimento
                    </div>
                    <div className={`${styles.texto}`}>
                        Segunda à sexta-feira das 8h às 18h
                    </div>
                </div>
                <div className={`${styles.containerSetor}`}>
                    <div className={`${styles.titulo}`}>
                        Siga-nos
                    </div>

                    <div className={`${styles.containerSocial}`}>
                        <BsInstagram size={20} color={'#fff'}/>
                        <Link href={'https://www.instagram.com/championscorretora/'} className={`${styles.texto}`}>
                            @championscorretora
                        </Link>
                    </div>
                    <div className={`${styles.containerSocial}`}>
                        <BsWhatsapp size={20} color={'#fff'}/>
                        <Link href={'https://wa.me/5567998512650?text=Gostaria+de+Saber+mais+sobre+os+Seguros+da+Corretora+Champions%21'} className={`${styles.texto}`}>
                            (67) 9 9851-2650
                        </Link>
                    </div>

                </div>
                <div className={`${styles.containerSetor}`}>
                    <div className={`${styles.titulo}`}>
                        Seguros
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        DIT - Diária por afastamento do trabalho 
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Previdência privada ( PGBL, VGBL ) 
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro por morte qualquer motivo 
                    </div>  
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Invalidez acidental e morte acidental 
                    </div>  
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro Resgatável 
                    </div>  
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Responsabilidade Civíl 
                    </div>  
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro de diagnóstico de doenças graves
                    </div>    
                </div>
            </div>
            
        </div>
    )
}