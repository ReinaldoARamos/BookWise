import Image from "next/image";
import { LogoContainer, LogoSection } from "./style";
import Logo from '../../../public/logo.svg'

export default function Login() {
return (
    <LogoContainer>
        <LogoSection>
        <Image src={Logo} alt=""/>
        </LogoSection>
    </LogoContainer>
)
}