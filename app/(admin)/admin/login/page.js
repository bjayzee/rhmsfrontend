"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminSignin = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/admin");
    } else {
      setError("");
    }
  };

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl text-center font-semibold mb-8 text-rh-blue">
          Sign in
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            className="w-full border border-rh-blue text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-rh-blue focus:border-2 focus:text-black"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="w-full border border-rh-blue text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-rh-blue focus:border-2 focus:text-black"
            placeholder="Password"
            required
          />
    

          <button
            type="submit"
            className="w-1/2 lg:w-full py-3  bg-[#187EB4] text-[#FFFFFF] flex items-center justify-center text-sm"
          >
            Sign in
          </button>

          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
       
      </div>
    </div>
  );
};

export default AdminSignin;
