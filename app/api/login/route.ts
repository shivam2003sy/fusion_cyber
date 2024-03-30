"use server"
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import {z} from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    try {
        const body = await req.json();
        console.log("Login data received");
        const data = body.body;
        const loginData = loginSchema.parse(data);
        const { email, password } = loginData;
        console.log('email: ', email);
        console.log('password: ', password);
        return new NextResponse(JSON.stringify({ message: "Login successful" }), {status:200,});
    }
    catch (error) {
        console.log("Error: ", error);
        return new NextResponse(JSON.stringify({ message: "Invalid data" }), {status:400,});
    }
   
}


