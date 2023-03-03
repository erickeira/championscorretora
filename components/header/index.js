import { loaderImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'

export default function Header(){


    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerFundoPreto}`}>
                <div className={`${styles.fundoPreto}`}/>
            </div>
            <nav className={`${styles.containerNav} containerTela`}>

                <ul className={`${styles.containerLinks}`}>
                    <Link href={'/'} className={`${styles.link}`}>
                        INÍCIO
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        SOBRE NÓS
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src={"/logo.png"}
                            loader={loaderImg}
                            width={250}
                            height={130}
                        />
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        SEGUROS
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        FALE CONOSCO
                    </Link>
                </ul>
            </nav>
        </div>
    )
}