import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Link from "next/link";
import { MainBanner } from "./components/Home/MainBanner/MainBanner";

export const metadata = {
  title: "JewelOne | Finest Gold & Diamond Jewellery Store",
  description:
    "Discover JewelOne, your premier destination for gold and diamond jewellery. Explore an extensive collection of over 600,000 exquisite designs in chains, bangles, and more.",
};

export default function Home() {
  return (
    <main className="text-[#3B4443] pelita-grande-font">
      <section className="bg-[#964A26] py-2 text-sm md:text-base">
        <div className="container">
          <div className="text-[#F2EDE4] text-center">
            50% OFF on Making Charges on Silver Jewellery!
          </div>
        </div>
      </section>
      {/* <Navbar /> */}

      <header className="bg-[#F2EDE4] shadow-sm">
        <div className="container">
          <div className="xl:hidden">
            <div className="grid grid-cols-3 py-2 items-center ">
              <div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
                    viewBox="0 0 34 23"
                    fill="none"
                  >
                    <path
                      d="M2.14648 2.0094H29.2727"
                      stroke="black"
                      strokeWidth="2.51168"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.14648 20.0935H29.2727"
                      stroke="black"
                      strokeWidth="2.51168"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.14648 11.0514H20.2306"
                      stroke="black"
                      strokeWidth="2.51168"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  width={151}
                  height={73}
                  className="h-16"
                  src="/images/logo.svg"
                  alt="image"
                />
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <Link
                    className="text-black !no-underline hover:!text-[#964A26]"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <mask
                        id="mask0_7770_441"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={32}
                        height={32}
                      >
                        <path d="M31.489 0H0V31.489H31.489V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_7770_441)">
                        <path
                          d="M26.2068 13.7255H13.7236V27.1083H26.2068V13.7255Z"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.5562 8.77722V13.613H3.93945V8.77722L7.87558 3.94141H23.6201L27.5562 8.77722Z"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.4502 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.748 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.0459 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.28906 13.3881V27.5581"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-black !no-underline hover:!text-[#964A26]"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5"
                      viewBox="0 0 30 29"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_7770_463)">
                        <path
                          d="M14.8843 13.0507C17.6172 13.0507 19.8326 10.8353 19.8326 8.10245C19.8326 5.36959 17.6172 3.15417 14.8843 3.15417C12.1515 3.15417 9.93604 5.36959 9.93604 8.10245C9.93604 10.8353 12.1515 13.0507 14.8843 13.0507Z"
                          stroke="black"
                          strokeWidth="1.79937"
                        />
                        <path
                          d="M4.25226 24.7339C3.98115 24.7339 5.02719 21.6822 5.11476 21.4639C6.68021 17.5628 9.77033 17.5808 14.8746 17.5808C19.9788 17.5808 23.4636 17.564 25.0302 21.4639C25.1178 21.6822 25.768 24.7315 25.4957 24.7315H4.25226V24.7339Z"
                          stroke="black"
                          strokeWidth="1.79937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7770_463">
                          <rect
                            width="28.79"
                            height="28.79"
                            fill="white"
                            transform="translate(0.489258)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-xl:hidden xl:block">
            <div className="flex justify-between items-center py-3">
              <div className="flex gap-4 justify-start items-center">
                <div>
                  <Image
                    width={76}
                    height={62}
                    className="h-12"
                    src="/images/logo-main.svg"
                    alt="image"
                  />
                </div>

                <nav className="flex gap-4">
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="#"
                  >
                    our story
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="#"
                  >
                    Collections
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="#"
                  >
                    SS - Gold Scheme
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="#"
                  >
                    Careers
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="#"
                  >
                    contact us
                  </Link>
                </nav>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="text-black balthazar uppercase text-lg">
                  our brands
                </div>
                <Link
                  className="text-black !no-underline uppercase text-lg border border-black rounded-xs px-3 py-1 hover:bg-[#AD5389] balthazar hover:!border-[#AD5389] hover:!text-white"
                  href="#"
                >
                  Zilara
                </Link>
                <Link
                  className="text-black !no-underline uppercase text-lg border border-black rounded-xs px-3 py-1 hover:bg-[#AD5389] balthazar hover:!border-[#AD5389] hover:!text-white"
                  href="#"
                >
                  Florencia
                </Link>
                <div>
                  <Link
                    className="text-black !no-underline hover:!text-[#964A26]"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <mask
                        id="mask0_7770_441"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={32}
                        height={32}
                      >
                        <path d="M31.489 0H0V31.489H31.489V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_7770_441)">
                        <path
                          d="M26.2068 13.7255H13.7236V27.1083H26.2068V13.7255Z"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.5562 8.77722V13.613H3.93945V8.77722L7.87558 3.94141H23.6201L27.5562 8.77722Z"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.4502 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.748 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.0459 13.3882V9.0022"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.28906 13.3881V27.5581"
                          stroke="black"
                          strokeWidth="1.79937"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-black !no-underline hover:!text-[#964A26]"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6"
                      viewBox="0 0 30 29"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_7770_463)">
                        <path
                          d="M14.8843 13.0507C17.6172 13.0507 19.8326 10.8353 19.8326 8.10245C19.8326 5.36959 17.6172 3.15417 14.8843 3.15417C12.1515 3.15417 9.93604 5.36959 9.93604 8.10245C9.93604 10.8353 12.1515 13.0507 14.8843 13.0507Z"
                          stroke="black"
                          strokeWidth="1.79937"
                        />
                        <path
                          d="M4.25226 24.7339C3.98115 24.7339 5.02719 21.6822 5.11476 21.4639C6.68021 17.5628 9.77033 17.5808 14.8746 17.5808C19.9788 17.5808 23.4636 17.564 25.0302 21.4639C25.1178 21.6822 25.768 24.7315 25.4957 24.7315H4.25226V24.7339Z"
                          stroke="black"
                          strokeWidth="1.79937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7770_463">
                          <rect
                            width="28.79"
                            height="28.79"
                            fill="white"
                            transform="translate(0.489258)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen">
        {/* <MainBanner/> */}
        <section className="max-lg:bg-[#E0DACF] lg:bg-[#F2EDE4] py-10">
          <div className="container">
            <div className="flex flex-col justify-center items-center max-lg:text-center gap-4 lg:flex-row lg:justify-between lg:text-start lg:px-8">
              <div className="text-3xl lg:text-5xl font-medium text-black max-w-md alga-vf">
                <div>Collections made </div>
                <div className="italic">Just for Her..</div>
              </div>
              <div className="max-w-md text-md lg:text-lg">
                Giving graciously is what we do best. Few feelings are more
                rewarding than seeing someone smile as they unwrap a present
                you’ve thoughtfully chosen because it’s simply them.
              </div>
            </div>

            <div className="scrollbar-hide overflow-auto">
              <div className="grid grid-cols-4 gap-3 mt-10 min-w-[1200px]">
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section2/collection1.webp"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section2/collection2.webp"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section2/collection3.webp"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section2/collection4.webp"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="#" className="button-dark">
                Explore collections
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="container">
            <div className="flex flex-col justify-center items-center max-lg:text-center gap-4 lg:flex-row lg:justify-between lg:text-start lg:px-8">
              <div className="max-w-md text-md lg:text-lg">
                Giving graciously is what we do best. Few feelings are more
                rewarding than seeing someone smile as they unwrap a present
                you’ve thoughtfully chosen because it’s simply them.
              </div>

              <div className="text-3xl lg:text-5xl font-medium text-black max-w-md alga-vf lg:text-end max-lg:order-first lg:order-last">
                <div>Our</div>
                <div className="italic">Show Stoppers</div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-4 gap-x-2 lg:gap-x-3 mt-10">
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section3/product1.webp"
                      alt=""
                    />
                  </Link>
                  <div className="mt-2 lg:mt-4 space-y-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3"
                        viewBox="0 0 105 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124L3.62715 18.2609L5.24568 11.4905L0 6.97504L6.8691 6.43914L9.49609 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9979 0L33.6248 6.43914L40.4939 6.97504L35.2483 11.4905L36.8668 18.2609L30.9979 14.6124L25.1291 18.2609L26.7476 11.4905L21.502 6.97504L28.3711 6.43914L30.9979 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.998 0L33.625 6.43914L40.4941 6.97504L35.2485 11.4905L36.867 18.2609L30.998 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4998 0L55.1268 6.43914L61.9959 6.97504L56.7502 11.4905L58.3688 18.2609L52.4998 14.6124L46.6311 18.2609L48.2496 11.4905L43.0039 6.97504L49.873 6.43914L52.4998 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.5 0L55.127 6.43914L61.9961 6.97504L56.7504 11.4905L58.3689 18.2609L52.5 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.0022 0L76.6292 6.43914L83.4983 6.97504L78.2527 11.4905L79.8712 18.2609L74.0022 14.6124L68.1335 18.2609L69.752 11.4905L64.5063 6.97504L71.3754 6.43914L74.0022 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.002 0L76.6289 6.43914L83.498 6.97504L78.2524 11.4905L79.8709 18.2609L74.002 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5037 0L98.1307 6.43914L105 6.97504L99.7541 11.4905L101.373 18.2609L95.5037 14.6124L89.635 18.2609L91.2535 11.4905L86.0078 6.97504L92.8769 6.43914L95.5037 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5039 0L98.1309 6.43914L105 6.97504L99.7543 11.4905L101.373 18.2609L95.5039 14.6124V0Z"
                          fill="#FFBD38"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="text-[#964A26] font-semibold text-sm md:text-md lg:text-base me-2">
                        ₹ 45,445.00
                      </div>
                      <div className="text-black text-xs sm:text-sm line-through">
                        ₹ 52,000.00
                      </div>
                    </div>
                    <div className="balthazar text-sm uppercase text-black tracking-wide truncate lg:text-base">
                      Parambariya Collections
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section3/product2.webp"
                      alt=""
                    />
                  </Link>
                  <div className="mt-2 lg:mt-4 space-y-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3"
                        viewBox="0 0 105 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124L3.62715 18.2609L5.24568 11.4905L0 6.97504L6.8691 6.43914L9.49609 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9979 0L33.6248 6.43914L40.4939 6.97504L35.2483 11.4905L36.8668 18.2609L30.9979 14.6124L25.1291 18.2609L26.7476 11.4905L21.502 6.97504L28.3711 6.43914L30.9979 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.998 0L33.625 6.43914L40.4941 6.97504L35.2485 11.4905L36.867 18.2609L30.998 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4998 0L55.1268 6.43914L61.9959 6.97504L56.7502 11.4905L58.3688 18.2609L52.4998 14.6124L46.6311 18.2609L48.2496 11.4905L43.0039 6.97504L49.873 6.43914L52.4998 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.5 0L55.127 6.43914L61.9961 6.97504L56.7504 11.4905L58.3689 18.2609L52.5 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.0022 0L76.6292 6.43914L83.4983 6.97504L78.2527 11.4905L79.8712 18.2609L74.0022 14.6124L68.1335 18.2609L69.752 11.4905L64.5063 6.97504L71.3754 6.43914L74.0022 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.002 0L76.6289 6.43914L83.498 6.97504L78.2524 11.4905L79.8709 18.2609L74.002 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5037 0L98.1307 6.43914L105 6.97504L99.7541 11.4905L101.373 18.2609L95.5037 14.6124L89.635 18.2609L91.2535 11.4905L86.0078 6.97504L92.8769 6.43914L95.5037 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5039 0L98.1309 6.43914L105 6.97504L99.7543 11.4905L101.373 18.2609L95.5039 14.6124V0Z"
                          fill="#FFBD38"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="text-[#964A26] font-semibold text-sm md:text-md lg:text-base me-2">
                        ₹ 32,000.00
                      </div>
                      <div className="text-black text-xs sm:text-sm line-through">
                        ₹ 38,000.00
                      </div>
                    </div>
                    <div className="balthazar text-sm uppercase text-black tracking-wide truncate lg:text-base">
                      Platinum Studded rings
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section3/product3.webp"
                      alt=""
                    />
                  </Link>
                  <div className="mt-2 lg:mt-4 space-y-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3"
                        viewBox="0 0 105 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124L3.62715 18.2609L5.24568 11.4905L0 6.97504L6.8691 6.43914L9.49609 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9979 0L33.6248 6.43914L40.4939 6.97504L35.2483 11.4905L36.8668 18.2609L30.9979 14.6124L25.1291 18.2609L26.7476 11.4905L21.502 6.97504L28.3711 6.43914L30.9979 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.998 0L33.625 6.43914L40.4941 6.97504L35.2485 11.4905L36.867 18.2609L30.998 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4998 0L55.1268 6.43914L61.9959 6.97504L56.7502 11.4905L58.3688 18.2609L52.4998 14.6124L46.6311 18.2609L48.2496 11.4905L43.0039 6.97504L49.873 6.43914L52.4998 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.5 0L55.127 6.43914L61.9961 6.97504L56.7504 11.4905L58.3689 18.2609L52.5 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.0022 0L76.6292 6.43914L83.4983 6.97504L78.2527 11.4905L79.8712 18.2609L74.0022 14.6124L68.1335 18.2609L69.752 11.4905L64.5063 6.97504L71.3754 6.43914L74.0022 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.002 0L76.6289 6.43914L83.498 6.97504L78.2524 11.4905L79.8709 18.2609L74.002 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5037 0L98.1307 6.43914L105 6.97504L99.7541 11.4905L101.373 18.2609L95.5037 14.6124L89.635 18.2609L91.2535 11.4905L86.0078 6.97504L92.8769 6.43914L95.5037 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5039 0L98.1309 6.43914L105 6.97504L99.7543 11.4905L101.373 18.2609L95.5039 14.6124V0Z"
                          fill="#FFBD38"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="text-[#964A26] font-semibold text-sm md:text-md lg:text-base me-2">
                        ₹ 1,86,999.00
                      </div>
                      <div className="text-black text-xs sm:text-sm line-through">
                        ₹ 2,10,999.00
                      </div>
                    </div>
                    <div className="balthazar text-sm uppercase text-black tracking-wide truncate lg:text-base">
                      venketeswara Temple set
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      height={613}
                      width={415}
                      src="/home/section3/product4.webp"
                      alt=""
                    />
                  </Link>
                  <div className="mt-2 lg:mt-4 space-y-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3"
                        viewBox="0 0 105 19"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124L3.62715 18.2609L5.24568 11.4905L0 6.97504L6.8691 6.43914L9.49609 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.49609 0L12.1229 6.43914L18.992 6.97504L13.7463 11.4905L15.3648 18.2609L9.49609 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.9979 0L33.6248 6.43914L40.4939 6.97504L35.2483 11.4905L36.8668 18.2609L30.9979 14.6124L25.1291 18.2609L26.7476 11.4905L21.502 6.97504L28.3711 6.43914L30.9979 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.998 0L33.625 6.43914L40.4941 6.97504L35.2485 11.4905L36.867 18.2609L30.998 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.4998 0L55.1268 6.43914L61.9959 6.97504L56.7502 11.4905L58.3688 18.2609L52.4998 14.6124L46.6311 18.2609L48.2496 11.4905L43.0039 6.97504L49.873 6.43914L52.4998 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M52.5 0L55.127 6.43914L61.9961 6.97504L56.7504 11.4905L58.3689 18.2609L52.5 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.0022 0L76.6292 6.43914L83.4983 6.97504L78.2527 11.4905L79.8712 18.2609L74.0022 14.6124L68.1335 18.2609L69.752 11.4905L64.5063 6.97504L71.3754 6.43914L74.0022 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.002 0L76.6289 6.43914L83.498 6.97504L78.2524 11.4905L79.8709 18.2609L74.002 14.6124V0Z"
                          fill="#FFBD38"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5037 0L98.1307 6.43914L105 6.97504L99.7541 11.4905L101.373 18.2609L95.5037 14.6124L89.635 18.2609L91.2535 11.4905L86.0078 6.97504L92.8769 6.43914L95.5037 0Z"
                          fill="#FFAA00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M95.5039 0L98.1309 6.43914L105 6.97504L99.7543 11.4905L101.373 18.2609L95.5039 14.6124V0Z"
                          fill="#FFBD38"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="text-[#964A26] font-semibold text-sm md:text-md lg:text-base me-2">
                        ₹ 21,999.00
                      </div>
                      <div className="text-black text-xs sm:text-sm line-through">
                        ₹ 26,999.00
                      </div>
                    </div>
                    <div className="balthazar text-sm uppercase text-black tracking-wide truncate lg:text-base">
                      antique bangle set
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="#" className="button-dark">
                view all products
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2">
            <div>
              <Image
                height={1013}
                width={975}
                className="h-full object-cover"
                src="/home/section4/section4-img1.webp"
                alt="banner"
              />
            </div>
            <div className="bg-[#F2EDE4] p-12 flex items-center justify-center">
              <div>
                <Image
                  height={400}
                  width={295}
                  className="mx-auto"
                  src="/home/section4/section4-img2.webp"
                  alt="banner"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Link href="#" className="button-dark">
                    Explore collections
                  </Link>
                  <Link href="#" className="button-dark">
                    Explore collections
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
