import { connectDB } from "@/lib/mongo";
import Todo from "@/models/Todo";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export const POST = async (req: NextResponse) => {
    try {
        // console.log(await req.json());
        const todoData = await req.json()
        await connectDB()
        await Todo.create(todoData)
        return NextResponse.json({
            message: "todo create success"
        }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
export const GET = async (req: NextResponse) => {
    try {
        await connectDB()
        const result = await Todo.find()
        return NextResponse.json({
            message: "todo fetch success",
            result
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
