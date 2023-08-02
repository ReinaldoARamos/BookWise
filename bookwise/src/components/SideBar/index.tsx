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
  LoginOrSingInContainer,
} from "./style";
import { ChartLineUp, Binoculars, SignIn, User } from "phosphor-react";
import { useRouter } from "next/router";
import AvatarExample from "../../../public/Shikabane.png";
import { signOut, useSession } from "next-auth/react";

export function SideBar() {
  const { data: session } = useSession();
  const handleSignOut = () => {
    // Call the signOut function to end the session
    signOut();
  };

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
              {session ? (
                <SingUpButton onClick={handleSignOut}>
                  <div>
                    <Image
                      src={session.user.avatar_url}
                      alt=""
                      width={32}
                      height={32}
                      className="Avatar"
                    />
                    {session.user.name} <SignIn size={24} />
                  </div>
                </SingUpButton>
              ) : (
                <LoginButton onClick={sendToLogin}>
                  <div>
                    Fazer Login <SignIn size={24} />
                  </div>
                </LoginButton>
              )}
            </LoginOrSingInContainer>
          </SideBarSection>
        </SideBarContainer>
      )}
    </>
  );
}
