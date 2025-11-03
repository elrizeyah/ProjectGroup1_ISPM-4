import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div
                className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
                style={{
                    backgroundImage: "url('/images/1.png')", // 🟤 your background image path
                }}
            >
                {/* Top right buttons */}
                <div className="absolute top-6 right-8 flex space-x-3">
                   <Link
  href={route("login")}
  className="border border-black text-black px-5 py-2 rounded-md text-sm font-semibold transition"
  style={{ backgroundColor: 'transparent' }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(243, 244, 246, 0.6)'; // gray-100 at 50% opacity
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  }}
>
  LOG IN
</Link>


                    <Link
                        href={route("register")}
                        className="bg-[#563d28] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#3d1c00ff] transition"
                    >
                        SIGN UP
                    </Link>
                </div>

                {/* Center content */}
                <div className="text-center mt-10">
                    <img style={{marginTop:"-3rem"}}
                        src="/images/2.png" // 🟤 your logo image path
                        alt="88 Chocolates & More Logo"
                        className="mx-auto w-90 mb-6"
                    />
                  <p
  className="text-center text-2xl font-extrabold text-[#3d1c00ff] 
             tracking-wide leading-snug px-4"
  style={{
    WebkitTextStroke: '.5px white', // slightly thicker white outline
    WebkitTextFillColor: '#3d1c00ff', // dark brown fill
    textShadow: '1px 2px rgba(0,0,0,0.5)', // dark shadow below
  }}
>
  "Bringing you quality chocolates at an<br/>
  affordable price, always near your place."
</p>




                </div>
            </div>
        </>
    );
}
