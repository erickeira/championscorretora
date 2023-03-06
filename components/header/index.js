import { loaderImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import React, { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    return(
        <div className={`${styles.container}`}>
            <nav className={`${styles.containerNav} containerTela`}>
                <ul className={`${styles.containerLinks}`}>
                    <Link href={'/'} className={`${styles.link}`}>
                        INÍCIO
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        SOBRE NÓS
                    </Link>
                    <Link href={'/'} className={`${styles.logo}`}>
                        <Image
                            src={"/logo.png"}
                            loader={loaderImg}
                            fill
                        />
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        SEGUROS
                    </Link>
                    <Link href={'/'} className={`${styles.link}`}>
                        FALE CONOSCO
                    </Link>
                    <div className={styles.botaoMenuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}> 
                        <BiMenuAltRight size={40} color={'#EAC774'} />
                    </div>
                </ul>
                <div className={`${isMenuOpen ? styles.containerLinksMobile : styles.containerLinksMobileFechado}`}>
                    <Link href={'/'} className={`${styles.linkMobile}`}>
                        INÍCIO
                    </Link>
                    <Link href={'/'} className={`${styles.linkMobile}`}>
                        SOBRE NÓS
                    </Link>
                    <Link href={'/'} className={`${styles.linkMobile}`}>
                        SEGUROS
                    </Link>
                    <Link href={'/'} className={`${styles.linkMobile}`}>
                        FALE CONOSCO
                    </Link>
                </div>
            </nav>
        </div>
    )
}