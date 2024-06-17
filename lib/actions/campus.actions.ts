"use server"

import { createSessionClient, createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";


export const getCampusList = async () => {
  try {
    const { databases } = await createAdminClient();
    const { documents } = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_CAMPUS_COLLECTION_ID!,
    );
    return parseStringify(documents);
  } catch (error: any) {
    console.log(error.cause)    
  }
}