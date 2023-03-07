import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import { loaderImg } from '@/utils'
import { MdFavoriteBorder } from 'react-icons/md'
import Comentarios from '@/components/comentarios'
import { Slide, Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

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

  const CardSeguroTopo = (props) => {
    const { titulo, descricao, icone, imagem} = props
    let Icone = icone
    return(
        <div className={`${styles.containerCardSeguroTopo}`}>
            <div className={`${styles.containerTituloDescricaoCardSeguroTopo}`}>
                {/* <Icone size={25} color={'#EAC774'} /> */}
                <div className={`${styles.tituloCardSeguroTopo}`}>{titulo}</div>
                <div className={`${styles.descricaoCardSeguroTopo}`}>
                   { descricao || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'}
                </div>
            </div>
            <div className={`${styles.imagemCardSeguroTopo}`}>
                <Image
                    src={`/seguros/${imagem || 'casa.jpg'}`}
                    loader={loaderImg}
                    fill
                    className={`${styles.imagemTopo}`}
                />
            </div>

        </div>
    )
  }

  const FraseBotao = () =>{ 
    return(
    <div className={`${styles.containerFraseBotao} containerTela`}>
      <div className={`${styles.containerFrase}`}>
          22 anos mantendo sua família segura.
      </div>
      <div className={`${styles.containerBotaoCotacao}`}>
          Fazer cotação
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
        <meta name="og:image" property="og:image" content={`/share.png`} />
        <meta name="og:image:width" property="og:image:width" content="300" />
        <meta name="og:image:height" property="og:image:height" content="300" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.containerForaFraseBotaoCards}`}>
        <div className={`${styles.containerCinza}`}/>
        {/* <div className={`${styles.containerFraseBotao} containerTela`}>
            <div className={`${styles.containerFrase}`}>
                22 anos mantendo sua família segura.
            </div>
            <div className={`${styles.containerBotaoCotacao}`}>
                Fazer cotação
            </div>
        </div> */}
        <Fade
          indicators={true}
          cssClass={`${styles.containerSlider}`}
          arrows={false}
          autoplay={true}
        >
          <div className={`${styles.containerImagemSlider} ${styles.imagem1Slide}`} >
            <FraseBotao/>
          </div>
          <div className={`${styles.containerImagemSlider} ${styles.imagem2Slide}`} >
            <FraseBotao/>
          </div>
          <div className={`${styles.containerImagemSlider} ${styles.imagem3Slide}`} >
            <FraseBotao/>
          </div>
        </Fade>
        <div className={`${styles.slideSeguro} containerTela`}>
          <Slide
            cssClass={` containerTela`}
            transitionDuration={900}
            autoplay={false}
          >
            <div className={`${styles.containerSeguros} containerTela`}>
                <CardSeguroTopo titulo={`Previdência privada ( PGBL, VGBL ) `} imagem={`previdencia.png`} descricao={'A Previdência Privada é o investimento ideal para garantir que você tenha qualidade de vida no futuro'} icone={MdFavoriteBorder}/>
                <CardSeguroTopo titulo={`Seguro de Vida `} imagem={`seguromorte.png`} descricao={'O Seguro de Vida individual oferece proteção financeira para você, em vida, e para sua família em caso de seu falecimento.'} />
                <CardSeguroTopo titulo={`Seguro Resgatável `}   imagem={`resgatavel.png`} descricao={'O seguro resgatável oferece cobertura financeira para o segurado em vida, permitindo que ele resgate parte do valor investido em momentos de necessidade.'}/>
                <CardSeguroTopo titulo={`Responsabilidade Civíl `} imagem={`civil.png`} descricao={'O seguro de Responsabilidade Civil Profissional da Champions é um produto completo para eventuais falhas profissionais.'} />
            </div>
          </Slide>
        </div>

        <div className={`${styles.containerSegurosMobile} containerTela`}>
            <CardSeguroTopo titulo={`Previdência privada ( PGBL, VGBL ) `} imagem={`previdencia.png`} descricao={'A Previdência Privada é o investimento ideal para garantir que você tenha qualidade de vida no futuro'} icone={MdFavoriteBorder}/>
            <CardSeguroTopo titulo={`Seguro de Vida `} imagem={`seguromorte.png`} descricao={'O Seguro de Vida individual oferece proteção financeira para você, em vida, e para sua família em caso de seu falecimento.'} />
            <CardSeguroTopo titulo={`Seguro Resgatável `}   imagem={`resgatavel.png`} descricao={'O seguro resgatável oferece cobertura financeira para o segurado em vida, permitindo que ele resgate parte do valor investido em momentos de necessidade.'}/>
            <CardSeguroTopo titulo={`Responsabilidade Civíl `} imagem={`civil.png`} descricao={'O seguro de Responsabilidade Civil Profissional da Champions é um produto completo para eventuais falhas profissionais.'} />
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
      </main>
      <Comentarios/>
    </>
  )
}
