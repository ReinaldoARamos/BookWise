import { SideBar } from "@/components/SideBar";
import { ProfileContainer } from "./style";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileHeader } from "./components/ProfileHeader";

export default function Profile() {
    return (
      <ProfileContainer>
        <SideBar />
       <ProfileCard />
      </ProfileContainer>
    )
}