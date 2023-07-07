import { Avatar } from "@ignite-ui/react";
import { Star } from "phosphor-react";
import { AvaliationBox, ProfileBox, Profile } from "./style";

export function  RatingCard() {
    const AvatarExample = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwHDtLutJuxtY8O04noomdI703r42sKhwxecLHu5H-A&s'
    return (
        <AvaliationBox>
        <ProfileBox>
          <Profile>
            <Avatar src={AvatarExample}/>
            <section>
              Kiriko  Kamori 
              <div>Hoje</div>
            </section>
          </Profile>

          <div>
            <Star  weight="fill" color="#8381D9"/>
            <Star weight="fill" color="#8381D9"/>
            <Star weight="fill" color="#8381D9"/>
            <Star weight="fill" color="#8381D9"/>
            <Star />
          </div>

        
        </ProfileBox>

            
      </AvaliationBox>
    )
}