import MainSection from '@/components/profile/MainSection';
import TopProfileDetails from '@/components/profile/TopProfileDetails';
import LoyaltyCard from '@/components/profile/loyalty/LoyaltyCard';
import LoyaltyInfo from '@/components/profile/loyalty/LoyaltyInfo';
import Transactions from '@/components/profile/wallet/Transactions';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';

const LoyaltyPage = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in?redirect_url=/profile/coupons");
  }

  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
      <h4 className='font-semibold pb-2 lg:hidden'>Loyalty Points</h4>
      <div className='lg:flex items-start'>
        <div className='w-full flex flex-col gap-10 items-center md:flex-row lg:flex-col lg:w-[40%]'>          
          <LoyaltyCard/>
          <LoyaltyInfo/>
        </div>
        <div className='w-full lg:flex'>
          <div className='lg:h-[23rem] h-[0.15rem] w-full md:mt-5 lg:mt-0 lg:w-[0.15rem] bg-primary opacity-30 lg:mx-10'></div>
          <div className='w-full p-2'>
            <div className='flex justify-between items-center my-5'>
              <h4 className='font-semibold lg:text-lg'>Transaction History</h4>
            </div>
            <Transactions/>
          </div>
        </div>          
      </div>
      </MainSection>
    </>
  )
}
export default LoyaltyPage