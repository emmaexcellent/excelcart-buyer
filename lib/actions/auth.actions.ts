"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";


// Sign up function with improved security, TypeScript, and error handling
export async function signUp(values: SignUpValues){
  const { username, email, phone, password } = values;

  // Ensure required fields are present
  if (!username || !email || !phone || !password) {
    throw new Error("All fields are required");
  }

  try {
    const { users } = await createAdminClient();

    await users.create(
      ID.unique(),
      email,
      phone,
      password,
      username
    );
    return { message: "Account Registration successful!" };
  } catch (error: any) {
    // Return error message
    return { error: error.response ? error.response.message : error.message };
  }
}

// Sign in function with improved security, TypeScript, and error handling
export async function signIn(email: string, password: string) {
  // Validate inputs
  if (!email || !password) {
    throw new Error("User ID and code are required");
  }

  try {
    const { account } = await createAdminClient();

    // Create session
    const session = await account.createEmailPasswordSession(email, password);

    // Set secure cookie with session secret
    cookies().set("auth_token", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // Return success message
    return { message: "Sign in successful" };
  } catch (error: any) {
    // Return error message
    return { error: error.response ? error.response.message : error.message };
  }
}

export async function updateDetails(userID: string, username: string, email: string, phone: string) {
  if (!email) {
    throw new Error("Email is required!");
  }
  if (!username) {
    throw new Error("Username is required!");
  }
  if (!phone) {
    throw new Error("Phone number is required!");
  }

  try {
    const { users } = await createAdminClient();
    await users.updateName(userID, username);
    await users.updateEmail(userID, email)
    await users.updatePhone(userID, phone)

    return { message: "Profile Details updated successfully!" };
  } catch (error: any) {
    // Return error message
    console.log(error.response.message)
    return { error: error.response ? error.response.message : error.message };
  }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export async function logoutUser() {
  try {
    const { account } = await createSessionClient();
    cookies().delete('auth_token');
    await account.deleteSession(
      'current'
    );
  } catch (error) {
    console.log(error)
  }
}


// async function UpdateUser(
//   userCreatedId : string, 
//   username: string, 
//   email: string, 
//   password: string
// ) {
//   const {  users } = await createAdminClient();
//   const { account } = await createSessionClient()

//   await account.updatePassword(
//     password, // password
//     '' // oldPassword (optional)
// );

//   // await users.updateEmail(
//   //   userCreatedId,
//   //   email
//   // )

//   // await users.updateName(
//   //   userCreatedId,
//   //   username
//   // )

//   // await users.updatePassword(
//   //   userCreatedId,
//   //   password
//   // )

//   return await users.get(
//     userCreatedId
//   )

// }