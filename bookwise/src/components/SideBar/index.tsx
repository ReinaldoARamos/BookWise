import Image from "next/image";
import BookWiseLogo from '../../../public/logo.svg'
import {
  SideBarContainer,
  SideBarSection,
  SideBarItems,
  ExploreButton,
  HomeButton,
  LoginButton,
} from "./style";
import { ChartLineUp, Binoculars, SignIn } from "phosphor-react";
export function SideBar() {
  return (
    <SideBarContainer>
      <SideBarSection>
        <Image src={BookWiseLogo} alt="" width={128} height={32} />
        <SideBarItems>
          <HomeButton>
            <section>
              <ChartLineUp size={24} />
              Início {"  "}
            </section>
          </HomeButton>
          <ExploreButton>
            <section>
              <Binoculars size={26} />
              Explorar
            </section>
          </ExploreButton>
        </SideBarItems>
        <LoginButton>
          <div>
            Fazer Login <SignIn size={24} />
          </div>
        </LoginButton>
      </SideBarSection>
    </SideBarContainer>
  );
}
