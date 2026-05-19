function CardServico({titulo, descricao, icone: Icon}) {

return(

<div className="card">

<Icon size={40}/>

<h3>{titulo}</h3>

<p>{descricao}</p>

<button>Saiba mais</button>

</div>

)

}

export default CardServico;