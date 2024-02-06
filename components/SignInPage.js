"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ImAppleinc } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const SignInPage = () => {

  const router = useRouter();
  const [error, setError] = useState("");

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/checkoutPage");
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
      if (res?.url) router.replace("/checkoutPage");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl text-center font-semibold mb-8 text-rh-blue">Sign in</h1>
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
          <div className="flex justify-end">
            <span className="text-[#187EB4] font-bold text-sm">Forgot Password?</span>
          </div>

          <button
            type="submit"
            className="w-1/2 py-3  bg-[#187EB4] text-[#FFFFFF] flex items-center justify-center text-sm"
          >
            Sign in
          </button>

          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className="text-center text-gray-500 mt-4">- or login with -</div>
        <span className="flex items-center justify-center space-x-5 text-[20px] py-3"><ImAppleinc /> <FcGoogle /> <BsFacebook className="text-rh-blue" /></span>
        <Link
          className="block text-center text-rh-blue hover:underline mt-2"
          href="/checkoutPage"
        >
          proceed as Guest
        </Link>
        <Link
          className="block text-center text-rh-blue hover:underline mt-2"
          href="/register"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;




