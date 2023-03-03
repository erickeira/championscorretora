import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { loaderImg } from '@/utils'
import { MdFavoriteBorder } from 'react-icons/md'
import Comentarios from '@/components/comentarios'



export default function Home() {

  const CardSeguro = (props) => {
    const { titulo, descricao, icone } = props
    let Icone = icone
    return(
      <div className={styles.containerCardSeguro}>
        <Icone size={25} color={'#EAC774'}/>
        <div className={styles.tituloSeguro}>
          {titulo || ''}
        </div>
        <div className={styles.descricaoSeguro}>
         {descricao || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
        </div>
      </div>
    )
  }

  const CardSeguroTopo = () => {
    return(
        <div className={`${styles.containerCardSeguroTopo}`}>
            <div className={`${styles.containerTituloDescricaoCardSeguroTopo}`}>
                <div className={`${styles.tituloCardSeguroTopo}`}>Seguro de vida</div>
                <div className={`${styles.descricaoCardSeguroTopo}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
            </div>
            <div className={`${styles.imagemCardSeguroTopo}`}>
                <Image
                    src={"/seguros/casa.jpg"}
                    loader={loaderImg}
                    fill
                    className={`${styles.imagemTopo}`}
                />
            </div>

        </div>
    )
}

  return (
    <>
      <Head>
        <title>Champions Corretora</title>
        <meta name="description" content="Seguros, vida, previdência e capitalização" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.containerForaFraseBotaoCards}`}>
        <div className={`${styles.containerFraseBotao} containerTela`}>
            <div className={`${styles.containerFrase}`}>
                22 anos mantendo sua família segura.
            </div>
            <div className={`${styles.containerBotaoCotacao}`}>
                Fazer cotação
            </div>
        </div>
        <div className={`${styles.containerSeguros} containerTela`}>
            <CardSeguroTopo/>
            <CardSeguroTopo/>
            <CardSeguroTopo/>
        </div>
      </div>
      <main className={`${styles.main} containerTela`}>
        <div className={styles.containerParceiros}>
          <div className={styles.tituloParceiros}>
            Seguradoras Parceiras
          </div>
          <div className={styles.containerLogosParceiros}>
            <Image
                src={"/parceiros/portoseguros.png"}
                loader={loaderImg}
                width={100}
                height={80}
                className={styles.logoParceiros}
            />
            <Image
                src={"/parceiros/portoseguros.png"}
                loader={loaderImg}
                width={100}
                height={80}
                className={styles.logoParceiros}
            />
            <Image
                src={"/parceiros/portoseguros.png"}
                loader={loaderImg}
                width={100}
                height={80}
                className={styles.logoParceiros}
            />
          </div>
        </div>

        <div className={styles.containerSeguros}>
          <CardSeguro titulo={'Seguro 01'} descricao={''} icone={MdFavoriteBorder}/>
          <CardSeguro titulo={'Seguro 02'} descricao={''} icone={MdFavoriteBorder}/>
          <CardSeguro titulo={'Seguro 03'} descricao={''} icone={MdFavoriteBorder}/>
          <CardSeguro titulo={'Seguro 04'} descricao={''} icone={MdFavoriteBorder}/>
          <CardSeguro titulo={'Seguro 05'} descricao={''} icone={MdFavoriteBorder}/>
          <CardSeguro titulo={'Seguro 06'} descricao={''} icone={MdFavoriteBorder}/>
        </div>
      </main>
      <Comentarios/>
    </>
  )
}
