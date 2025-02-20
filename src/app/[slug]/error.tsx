"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function ErrorPage(data: {
  error: { message: string };
  reset: () => void;
}) {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      {" "}
      <div className="flex flex-col items-center text-center">
        <Logo />
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-4">
            We`re sorry, but an unexpected error occurred. Our team has been
            notified and is working on a fix.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Error details: {data.error.message || "Unknown error"}
          </p>
        </div>
        <Button
          onClick={goBack}
          className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium rounded-lg px-6 py-2"
        >
          Try again
        </Button>
      </div>
    </>
  );
}
