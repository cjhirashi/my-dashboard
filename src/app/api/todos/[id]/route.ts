import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import { MdDescription } from 'react-icons/md';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, {params}:Segments) { 

    const {id} = params;

    const todo = await prisma.todo.findFirst({where: {id: id}})

    if (!todo){
        return NextResponse.json({message:`Objeto ${id} no encontrado`}, {status: 404});
    }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
})

export async function PUT(request: Request, {params}:Segments) { 

    const {id} = params;

    const todo = await prisma.todo.findFirst({where: {id: id}})

    if (!todo){
        return NextResponse.json({message:`Objeto ${id} no encontrado`}, {status: 404});
    }

    try {
        
        const {description, complete} = await request.json();
    
        const updatedTodo = await prisma.todo.update({
            where: {id},
            data: {description,complete},
        })
    
      return NextResponse.json(updatedTodo);

    } catch (error) {
      return NextResponse.json(error,{status: 400})  
    }

}