import { SideBar } from "@/components/SideBar";
import { ProfileContainer } from "./style";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileHeader } from "./components/ProfileHeader";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect } from "react";

export default function Profile() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ProfileContainer>
      {isClient ? (
        <>
          <SideBar />
          <ProfileCard />
          <UserInfo />
        </>
      ) : (
        "notGood"
      )}
    </ProfileContainer>
  );
}
