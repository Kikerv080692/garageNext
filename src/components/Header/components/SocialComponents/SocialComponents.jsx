import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function SocialComponents() {
    const phoneNumber = "+420773612198"; 

  const viberLink = `viber://chat?number=${phoneNumber}`;
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`; 
    return (
        <>
        <a href={viberLink} target="_blank" rel="noopener noreferrer"><FaViber size={30} fill={'red'} /></a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} fill={'red'} /></a>
        </>
    )
}