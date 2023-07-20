import { SideBar } from "@/components/SideBar";
import { ProfileContainer } from "./style";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileHeader } from "./components/ProfileHeader";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import Router, {useRouter} from "next/router";

export default function Profile() {
  const [isClient, setIsClient] = useState(false);

  //------------------------------------------------
  
 const {query} = Router
 const [data, setData] = useState([]);

 const fetchData = async () => {
  try {
    // Build the API endpoint URL with the query parameter from the URL


    // Make the API request using Axios
    const response = await api.get(`/api/profile/${query.id}`);

    // Set the fetched data in the state
    console.log(response.data)
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, []);

  //------------------------------------------------
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>Loading...</p>;
  }
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
