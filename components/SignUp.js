"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { ImAppleinc } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState("");
  const router = useRouter();
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
    const phone = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await axios.post("/api/register", {
        email,
        phone,
        password,
      });

      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
        setError("");
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.error(error);
    }
  };

  // if (sessionStatus !== "loading") {
  //     return <h1>Loading...</h1>;
  // }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="p-8 rounded shadow-md w-96">
          <h1 className="text-3xl text-center font-semibold mb-8 text-rh-blue">
            Sign up
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              className="w-full border border-rh-blue text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-rh-blue focus:text-black focus:border-2"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phone"
              className="w-full border border-rh-blue text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-rh-blue focus:text-black focus:border-2"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              name="password"
              className="w-full border border-rh-blue text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-rh-blue focus:text-black focus:border-2"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="w-1/2 lg:w-full py-3  bg-[#187EB4] text-[#FFFFFF] flex items-center justify-center text-sm"
            >
              Sign up
            </button>

            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <span className="flex items-center justify-center space-x-5 text-[20px] py-3">
            <ImAppleinc /> <FcGoogle /> <BsFacebook className="text-rh-blue" />
          </span>
          <Link
            className="block text-center text-rh-blue hover:underline mt-2"
            href="/login"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default SignUp;
