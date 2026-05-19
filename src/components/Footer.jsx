import { Mail, Phone, MapPin } from "lucide-react";

function Footer(){

return(

<footer className="footer">

<div className="footer-content">

<div>

<h3>DigitalFlow</h3>

<p>
Soluções digitais inteligentes para impulsionar empresas
com tecnologia, automação e inovação.
</p>

</div>

<div>

<h3>Contato</h3>

<p>
<Mail size={16}/>
contato@digitalflow.com
</p>

<p>
<Phone size={16}/>
+55 (11) 98765-4321
</p>

<p>
<MapPin size={16}/>
São Paulo - SP, Brasil
</p>

</div>

</div>

<hr />

<p className="copyright">

© 2026 DigitalFlow - Todos os direitos reservados

</p>

</footer>

)

}

export default Footer