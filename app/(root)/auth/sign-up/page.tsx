import AuthForm from '@/components/auth/AuthForm'
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';


const SignUp = async () => {
  const user = await getLoggedInUser();

  if (user) redirect("/profile")

  return (
    <>
      <AuthForm page='sign-up'/>
    </>
  )
}

export default SignUp