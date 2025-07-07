import React from "react";
import SwarnaSakthiSection1 from "../components/SwarnaSakthi/SwarnaSakthiSection1";
import SwarnaSakthiSection2 from "../components/SwarnaSakthi/SwarnaSakthiSection2";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import GoldPlans from "./GoldPlans";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Swarna Sakthi Gold Purchase Plan - Jewel One",
  description:
    "Explore Swarna Sakthi, Jewel One’s exclusive gold ornaments purchase plan. Discover flexible options and benefits to invest in gold and fulfill your dreams effortlessly.",
};

const page = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen SwarnaSakthi">
        <section>
          <div className="grid md:grid-cols-[55%_45%]">
            <div>
              <Image
                height={1231}
                width={973}
                className="h-full object-cover object-top max-h-screen"
                src="/home/section4/section4-img1.webp"
                alt="banner"
              />
            </div>
            <div className="bg-[#F2EDE4] py-5 px-10 flex flex-col items-center justify-center max-h-screen">
              <div>
                <Image
                  height={340}
                  width={250}
                  className="mx-auto"
                  src="/home/section4/section4-img2.webp"
                  alt="banner"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <div>
                    <a
                      target="__blank"
                      href="https://apps.apple.com/in/app/jewelone/id1507128724"
                    >
                      <Image
                        className="img-fluid"
                        width="136"
                        height="44"
                        src="/app-store.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="__blank"
                      href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US"
                    >
                      <Image
                        className="img-fluid"
                        width="136"
                        height="44"
                        src="/google-play.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link
                    href="#"
                    className="!text-[#964A26] !text-base uppercase font-semibold flex items-center gap-2 !no-underline w-fit mx-auto border-b justify-center"
                  >
                    Enroll Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M10.8371 4.19204L1.52916 13.5L0 11.9708L9.30688 2.66288H1.10415V0.5H13V12.3958H10.8371V4.19204Z"
                        fill="#964A26"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SwarnaSakthiSection2/>
        {/* <GoldPlans /> */}
      </main>

      <Footer />
    </div>
  );
};

export default page;
