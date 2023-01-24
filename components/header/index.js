import { loaderImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'

export default function Header(){
    return(
        <div className={`${styles.container}`}>

            <nav className={`${styles.containerNav} containerTela`}>

                <Link href={'/'}>
                    <Image
                        src={"/logo.png"}
                        loader={loaderImg}
                        width={250}
                        height={130}
                    />
                </Link>
                <ul className={`${styles.containerLinks}`}>
                    <Link href={'/'} className={`${styles.link}`}>
                        SOBRE NÓS
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        SEGUROS
                    </Link>
                    <Link href={'/'} className={`${styles.faleConosco}`}>
                        FALE CONOSCO
                    </Link>
                </ul>
                <div className={`${styles.circuloCinza}`}/>
                <div className={`${styles.circuloRoxo}`}/>
            </nav>
            <div className={`containerTela ${styles.containerSloganFoto}`}>
                <div className={`${styles.containerSloganBotao}`}>
                    <span className={`${styles.containerSlogan}`}>
                        22 anos mantendo sua família segura.
                    </span>
                    <div className={`${styles.containerBotaoCotacao}`}>FAÇA UMA COTAÇÃO</div>
                </div>
                <div className={`${styles.containerImagemHome}`}>
                    <Image
                        src={"/imagemHome.png"}
                        loader={loaderImg}
                        fill
                    />
                </div>
            </div>

        </div>
    )
}