import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";

import Form from "components/auth/Form";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <NextSeo title="Home" />
      <section data-testid="home-page">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold text-center ">
            Nextailwind-Starter
          </h1>
          <Form />
          {/* 
          <button
            className="px-4 py-2 mt-16 font-semibold text-white bg-black rounded-md dark:text-black dark:bg-white"
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </button> */}
        </div>
      </section>
    </>
  );
};

export default Home;
