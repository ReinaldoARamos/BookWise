import { ProfileHeader } from "../ProfileHeader";
import { UserReviewCard } from "../UserReviewCard";
import { ProfileCardContainer } from "./style";

export function ProfileCard() {
    return (
        <ProfileCardContainer>
           <ProfileHeader />
           <UserReviewCard />
        </ProfileCardContainer>
    )
}