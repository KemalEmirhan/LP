import { NextRequest, NextResponse } from 'next/server';

type RequestData = {
  name: string;
  surname: string;
  email: string;
  signupId: string;
};

export type ApiResponse = {
  status: string;
  data?: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: RequestData = await request.json();
    const { name, surname, email, signupId } = body;

    // Validate signupId first
    if (!signupId || signupId.trim() === '') {
      return NextResponse.json(
        { status: "error", message: "This signup ID is required for form submission. Please ensure you have a valid signup link." },
        { status: 400 }
      );
    }

    // Validate other fields
    if (!name || !surname || !email) {
      return NextResponse.json(
        { status: "error", message: "Please check your form credentials" },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { status: "error", message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = { 
      id: Math.random().toString(36).substr(2, 9), 
      name, 
      surname, 
      email 
    };

    return NextResponse.json({
      status: "success",
      data: user,
    });

  } catch (error) {
    throw new Error(error as string);
  }
}
