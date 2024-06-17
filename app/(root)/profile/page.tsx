import PersonalDetails from '@/components/profile/PersonalDetails';
import TopProfileDetails from '@/components/profile/TopProfileDetails';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';


const Profile = async () => {
  const user = await getLoggedInUser();

  if (!user) redirect("/auth/sign-in?redirect_url=/profile");

  return (
    <>
      <TopProfileDetails user = {user}/>
      <PersonalDetails/>
    </>
  )
}

export default Profile