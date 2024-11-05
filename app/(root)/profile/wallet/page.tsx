import TopProfileDetails from '@/components/profile/TopProfileDetails';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import Filter from '@/components/Filter'
import WalletCard from '@/components/profile/wallet/WalletCard';
import WalletInfo from '@/components/profile/wallet/WalletInfo';
import MainSection from '@/components/profile/MainSection';
import Transactions from '@/components/profile/wallet/Transactions';


const filters = [
  {
    value: "all",
    label: "All Transactions",
  },
  {
    value: "order",
    label: "Order Transactions",
  },
  {
    value: "add",
    label: "Add Funds",
  },
  {
    value: "loyalty",
    label: "Loyalty Transactions",
  },
]

const WalletPage = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in?redirect_url=/profile/coupons");
  }

  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
        <div className='flex justify-between p-2 lg:hidden'>
          <h4 className='font-semibold pb-2'>Wallet</h4>
        </div>
        <div className='lg:flex items-start'>
          <div className='w-full flex flex-col gap-10 items-center md:flex-row lg:flex-col lg:w-[40%]'>          
            <WalletCard/>
            <WalletInfo/>
          </div>
          <div className='w-full lg:flex'>
            <div className='lg:h-[23rem] h-[0.15rem] w-full md:mt-5 lg:mt-0 lg:w-[0.15rem] bg-primary opacity-30 lg:mx-10'></div>
            <div className='w-full p-2'>
              <div className='flex justify-between items-center my-5'>
                <h4 className='font-semibold lg:text-lg'>Transaction History</h4>
                <Filter filters={filters}/>          
              </div>
              <Transactions/>
            </div>
          </div>          
        </div>
      </MainSection>
    </>
  )
}

export default WalletPage