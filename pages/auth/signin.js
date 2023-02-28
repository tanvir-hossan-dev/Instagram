import Header from "@/components/Header";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://cdn-iaabh.nitrocdn.com/tHTxcWTdeDlIpZeRwZlVRQjTjcnGTyrk/assets/images/optimized/rev-d36b223/wp-content/uploads/2023/01/buy-instagram-followers-1-e1673084175944.png"
          alt="insta singin image"
        />
        <div>
          {Object.values(providers)?.map((provider) => (
            <div key={provider.id} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png"
                alt=""
              />
              <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
              <button
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in With {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
