import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CardServico from "./components/CardServico"
import Destaques from "./components/Destaques"
import Footer from "./components/Footer"

import { servicos } from "./data/servicos"

import "./styles/style.css"

function App(){

return(

<>

<Header/>

<HeroSection/>

<section className="cards">

{
servicos.map((item,index)=>(

<CardServico
key={index}
titulo={item.titulo}
descricao={item.descricao}
icone={item.icone}
/>

))
}

</section>

<Destaques/>

<Footer/>

</>

)

}

export default App