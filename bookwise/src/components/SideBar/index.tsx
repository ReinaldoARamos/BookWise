import Image from "next/image";
import BookWiseLogo from "../../../public/logo.svg";
import {
  SideBarContainer,
  SideBarSection,
  SideBarItems,
  ExploreButton,
  HomeButton,
  LoginButton,
  ProfileButton,
  SingUpButton,
  Teste,

} from "./style";
import { ChartLineUp, Binoculars, SignIn, User } from "phosphor-react";
import { useRouter } from "next/router";
import AvatarExample from '../../../public/Shikabane.png'

interface SideBarProps {
  isSingIn?: boolean
}
export function SideBar({isSingIn} : SideBarProps) {

  const IsSingIn = isSingIn
  const router = useRouter();
  

  function SendToStart() {
    router.push("/home");
  }

  function SendToExplorer() {
    router.push("/explorer");
  }

  function SendToProfile() {
    router.push(`/profile/1aa75906-6076-40f7-ab44-e243074830c9`);
  }
 
  var  routerName : string = router.pathname
  console.log(routerName)
  
  return (
   <>
   {routerName === "/" ? <div></div> :
   <SideBarContainer>

   <SideBarSection>

     <Image src={BookWiseLogo} alt="" width={128} height={32} className="Logo" />
     <SideBarItems>
       <HomeButton onClick={SendToStart}>
         <section>
           <ChartLineUp size={24} />
           Início {"  "}
         </section>
       </HomeButton>
       <ExploreButton onClick={SendToExplorer}>
         <section>
           <Binoculars size={26} />
           Explorar
         </section>
       </ExploreButton>
       <ProfileButton onClick={SendToProfile} >
         <section>
           <User size={26} />
           Perfil
         </section>

       </ProfileButton>

     </SideBarItems>
     {IsSingIn ? <SingUpButton>
       
       <div> 
       <Image src={AvatarExample} alt="" width={32} height={32} className="Avatar" />
           Reinaldo  <SignIn size={24} />
       </div>
     </SingUpButton> : 
      <LoginButton>
       <div>
         Fazer Login <SignIn size={24} />
       </div>
     </LoginButton>}

   </SideBarSection>
 </SideBarContainer>
   } 
   </>

  
  );
}


/*
<SideBarContainer>

      <SideBarSection>

        <Image src={BookWiseLogo} alt="" width={128} height={32} className="Logo" />
        <SideBarItems>
          <HomeButton onClick={SendToStart}>
            <section>
              <ChartLineUp size={24} />
              Início {"  "}
            </section>
          </HomeButton>
          <ExploreButton onClick={SendToExplorer}>
            <section>
              <Binoculars size={26} />
              Explorar
            </section>
          </ExploreButton>
          <ProfileButton onClick={SendToProfile} >
            <section>
              <User size={26} />
              Perfil
            </section>

          </ProfileButton>

        </SideBarItems>
        {IsSingIn ? <SingUpButton>
          
          <div> 
          <Image src={AvatarExample} alt="" width={32} height={32} className="Avatar" />
              Reinaldo  <SignIn size={24} />
          </div>
        </SingUpButton> : 
         <LoginButton>
          <div>
            Fazer Login <SignIn size={24} />
          </div>
        </LoginButton>}

      </SideBarSection>
    </SideBarContainer>
* */