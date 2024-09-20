// @ts-ignore

"use server";

import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export async function getUserDetail(){
    const session : any = await getServerSession(authOptions);
    if(session){
        const token = session.user.accessToken;
        return token;
    }
    return null;
}