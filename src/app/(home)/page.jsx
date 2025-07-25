import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "JewelOne | Finest Gold & Diamond Jewellery Store",
  description:
    "Discover JewelOne, your premier destination for gold and diamond jewellery. Explore an extensive collection of over 600,000 exquisite designs in chains, bangles, and more.",
};

export default function Home() {
  return (
    <main className="text-[#3B4443] pelita-grande-font">
      
      {/* <Navbar /> */}

      <Header params={{ bg: 'bg-[#F2EDE4]' }}  />

      <div className="min-h-screen">
      <section>
        <Link href="#">
        <picture>
          <source media="(min-width: 768px)" srcSet="/home/section1/desktop_banner.webp" />
          <source media="(max-width: 768px)" srcSet="/home/section1/mobile_banner.webp" />
          <img src="/home/section1/desktop_banner.webp" width={1921} height={1013} className="w-full" alt="Main Banner" />
        </picture>
        </Link>
      </section>

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
                    <div className=" text-sm uppercase text-black tracking-wide truncate lg:text-base">
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
                    <div className=" text-sm uppercase text-black tracking-wide truncate lg:text-base">
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
                    <div className=" text-sm uppercase text-black tracking-wide truncate lg:text-base">
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
                    <div className=" text-sm uppercase text-black tracking-wide truncate lg:text-base">
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
            <div className="bg-[#F2EDE4] py-16 px-10 flex items-center justify-center">
              <div>
                <Image
                  height={400}
                  width={295}
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
