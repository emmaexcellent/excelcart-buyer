import MainSection from '@/components/profile/MainSection';
import TopProfileDetails from '@/components/profile/TopProfileDetails';
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import OrderList from './OrderList';

const OrderPage = async () => {
  const user = await getLoggedInUser();

  if (!user) redirect("/auth/sign-in?redirect_url=/profile/wallet");
  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
        <OrderList/>
      </MainSection>
    </>
  )
}

export default OrderPage