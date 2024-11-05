import MainSection from '@/components/profile/MainSection';
import TopProfileDetails from '@/components/profile/TopProfileDetails';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';

const CouponPage = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in?redirect_url=/profile/coupons");
  }
  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
      <h4 className='font-semibold pb-2 lg:hidden'>Coupons</h4>
      </MainSection>
    </>
  )
}

export default CouponPage