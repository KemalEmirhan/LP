import { ApiResponse } from "@/app/api/signup/route";

export type FormData = {
  name: string;
  surname: string;
  email: string;
  signupId: string;
};

export const SignUpHandler = async (url: string, { arg }: { arg: FormData }): Promise<ApiResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }

  return data;
};