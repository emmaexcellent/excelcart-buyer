import MainSection from '@/components/profile/MainSection';
import TopProfileDetails from '@/components/profile/TopProfileDetails';
import ReferCode from '@/components/profile/referral/ReferCode';
import ShareBtns from '@/components/profile/referral/ShareBtns';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const ReferralPage = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in?redirect_url=/profile/coupons");
  }

  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
        <div className='w-full flex flex-col justify-center space-y-5 items-center py-7 px-2 md:p-10 lg:p-12 md:px-28 lg:px-32 max-w-3xl mx-auto'>
          <div className='w-full flex flex-col justify-center items-center'>
            <Image src='/profile/refer.svg' width={300} height={200} alt='referral'/>
            <p className='text-xs md:text-sm pt-2 text-center'>Refer your code to your friends and get <span className='text-primary font-semibold'>$5.00</span> for every referral!</p>
          </div>
          <ReferCode/>
          <div className='w-full flex flex-col justify-center items-center gap-3'>
            <p className='font-semibold text-center'>OR SHARE</p>
            <ShareBtns url ='Referral' title='Please join excelcart to earn from referral!'/>
          </div>
          <div className='bg-primary/10 p-3 rounded-xl'>
            <h4 className='font-semibold py-2'>How it works?</h4>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-sm'>
                <div className='h-8 w-8 rounded-full bg-background flex justify-center items-center'>
                  <span className='text-center px-[12px]'>1</span>
                </div>
                <p>Invite and share your code to your friends & family members</p>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <div className='h-8 w-8 rounded-full bg-background flex justify-center items-center'>
                  <span className='text-center px-[12px]'>2</span>
                </div>
                <p>They create a account on Excelcart using your code and place their first order</p>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <div className='h-8 w-8 rounded-full bg-background flex justify-center items-center'>
                  <span className='text-center px-[10px]'>3</span>
                </div>
                <p>You made your earning when the order is complete</p>
              </div>
            </div>
          </div>
        </div>       
        
      </MainSection>
    </>
  )
}

export default ReferralPage