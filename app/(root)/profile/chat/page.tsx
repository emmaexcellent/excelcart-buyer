import ChatSection from '@/components/profile/chat/ChatSection';
import MainSection from '@/components/profile/MainSection'
import TopProfileDetails from '@/components/profile/TopProfileDetails'
import { getLoggedInUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import React from 'react'

const ChatPage = async () => {
  const user = await getLoggedInUser();

  if (!user) {
    redirect("/auth/sign-in?redirect_url=/profile/chat");
  }
  
  return (
    <>
      <TopProfileDetails user = {user}/>
      <MainSection>
        <ChatSection/>
      </MainSection>
    </>
  )
}

export default ChatPage