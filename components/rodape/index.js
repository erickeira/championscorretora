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