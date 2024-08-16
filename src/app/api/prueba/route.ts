import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return new Response(JSON.stringify({
    message: 'Carlos Jiménez'
  }), { status: 200 } );
}