import AuthForm from '@/components/auth/AuthForm'
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';

const SignIn = async (
  { searchParams }:{ searchParams: { redirect_url: string }}
) => {
  const redirect_url = searchParams.redirect_url
  const user = await getLoggedInUser();

  if (user) redirect(redirect_url);

  return (
    <>
      <AuthForm page='sign-in' redirect_url={redirect_url}/>
    </>
  )
}

export default SignIn