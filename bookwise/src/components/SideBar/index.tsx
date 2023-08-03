import Image from "next/image";
import BookWiseLogo from "../../../public/logo.svg";
import {
  SideBarContainer,
  SideBarSection,
  SideBarItems,
  ExploreButton,
  HomeButton,
  ProfileButton,
  LoginOrSingInContainer,
  LogoutDiv,
} from "./style";
import { ChartLineUp, Binoculars, User, SignIn } from "phosphor-react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export function SideBar() {
  const { data: session } = useSession();

  const router = useRouter();

  function SendToStart() {
    router.push("/home");
  }
  function sendToLogin() {
    router.push("/login");
  }

  function SendToExplorer() {
    router.push("/explorer");
  }

  function SendToProfile() {
    router.push(`/profile/${session?.user.id}`);
  }

  var routerName: string = router.pathname;
  console.log(routerName);

  return (
    <>
      {routerName === "/login" ? (
        <></>
      ) : (
        <SideBarContainer>
          <SideBarSection>
            <Image
              src={BookWiseLogo}
              alt=""
              width={128}
              height={32}
              className="Logo"
            />
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
              {session ? (
                <ProfileButton onClick={SendToProfile}>
                  <section>
                    <User size={26} />
                    Perfil
                  </section>
                </ProfileButton>
              ) : (
                <></>
              )}
            </SideBarItems>

            <LoginOrSingInContainer>
              {!session ? (
                <div onClick={sendToLogin}>
                  Fazer Login <SignIn size={24} />
                </div>
              ) : (
                <LogoutDiv>
                  <img src={session.user.avatar_url} className="Avatar"></img>
                  {session.user.name}
                  <SignIn
                    className="Logout"
                    size={24}
                    onClick={() => {
                      signOut();
                    }}
                  />
                </LogoutDiv>
              )}
            </LoginOrSingInContainer>
          </SideBarSection>
        </SideBarContainer>
      )}
    </>
  );
}
