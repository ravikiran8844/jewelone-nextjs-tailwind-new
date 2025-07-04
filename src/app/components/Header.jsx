import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <>
    <section className="bg-[#964A26] py-2 text-sm md:text-base">
        <div className="container">
          <div className="text-[#F2EDE4] text-center">
            50% OFF on Making Charges on Silver Jewellery!
          </div>
        </div>
      </section>
    <header className="bg-[#F2EDE4] shadow-sm">
        <div className="container">
          <div className="xl:hidden">
            <div className="grid grid-cols-3 py-2 items-center ">
              <div>
                {/* <button>
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
                </button> */}
                <MobileMenu/>
              </div>
              <div className="flex justify-center items-center">
                <Link href={"/"}>
                  <Image
                    width={151}
                    height={73}
                    className="h-16"
                    src="/images/logo.svg"
                    alt="image"
                  />
                </Link>
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
                  <Link href={"/"}>
                    <Image
                      width={76}
                      height={62}
                      className="h-12"
                      src="/images/logo-main.svg"
                      alt="image"
                    />
                  </Link>
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
                    href="/swarna-sakthi"
                  >
                    SS - Gold Scheme
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="/careers"
                  >
                    Careers
                  </Link>
                  <Link
                    className="text-black !no-underline text-lg uppercase hover:!text-[#964A26] balthazar"
                    href="/contact-us"
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
                  href="/zilara"
                >
                  Zilara
                </Link>
                <Link
                  className="text-black !no-underline uppercase text-lg border border-black rounded-xs px-3 py-1 hover:bg-[#AD5389] balthazar hover:!border-[#AD5389] hover:!text-white"
                  href="/florencia"
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
    </>
  )
}

export default Header