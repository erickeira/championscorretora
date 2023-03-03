import styles from './rodape.module.css'
import { BsInstagram, BsWhatsapp} from 'react-icons/bs'

export default function Rodape(){
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
                        <div className={`${styles.texto}`}>
                            @championscorretora
                        </div>
                    </div>
                    <div className={`${styles.containerSocial}`}>
                        <BsWhatsapp size={20} color={'#fff'}/>
                        <div className={`${styles.texto}`}>
                            (67) 9 9851-2650
                        </div>
                    </div>

                </div>
                <div className={`${styles.containerSetor}`}>
                    <div className={`${styles.titulo}`}>
                        Seguros
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro de vida
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro auto
                    </div>
                    <div className={`${styles.texto}`} style={{paddingTop: 15}}>
                        Seguro saúde
                    </div>    
                </div>
            </div>
            
        </div>
    )
}