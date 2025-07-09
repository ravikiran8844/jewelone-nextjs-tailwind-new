import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterAccordion } from "./FooterAccordion";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FBFBFB]">
      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-[40%_60%]">
          <div className="max-w-sm max-lg:text-center max-lg:mx-auto space-y-3">
            <Image
              className="max-lg:mx-auto"
              src="/images/logo.svg"
              width={160}
              height={76}
              alt="logo"
            />
            <div className="text-md">
              Subscribe to email alerts. We promise not to spam your inbox.
            </div>
            <div>
             <NewsletterForm/>
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-3 gap-3 max-md:divide-y max-md:divide-[#D4D4D4]">
              <FooterAccordion title="Information">
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/swarna-sakthi"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    Swarna Sakthi
                  </Link>
                  <Link
                    href="#"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    Investor
                  </Link>
                  <Link
                    href="/stores"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    Stores
                  </Link>
                </div>
              </FooterAccordion>

              <FooterAccordion title="Contact Us">
                <div className="flex flex-col gap-2">
                  <Link
                  target="_blank"
                    href="https://api.whatsapp.com/send?phone=918220017619&text=I%20have%20an%20enquiry%20regarding%20Jewel%20One"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    Chat with Us
                  </Link>
                  <Link
                  target="_blank"
                    href="tel:1800 1033916"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    1800 1033916
                  </Link>
                  <Link
                  target="_blank"
                    href="mailto:customercare@jewelone.in"
                    className="!no-underline !text-[#18181B] text-base"
                  >
                    customercare@jewelone.in
                  </Link>
                </div>
              </FooterAccordion>

              <div>
                <div className=" text-lg uppercase max-md:text-center md:text-start font-medium text-black">
                  Swarna Sakthi App
                </div>

                <div className="mt-3 flex justify-center md:justify-start flex-wrap gap-2">
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

            <hr className="text-[#D4D4D4] my-4" />

            <div className="flex flex-col justify-center lg:flex-row lg:justify-between gap-4 items-center">
              <div className="flex  gap-4 items-center">
                <Link
                  href="https://twitter.com/jewelone916"
                  target="_blank"
                  className="!no-underline !text-[#18181B] text-base"
                >
                  <Image
                    className="h-4"
                    width={19}
                    height={19}
                    src="/images/twitter.svg"
                    alt="twitter"
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/jewelone916"
                  target="_blank"
                  className="!no-underline !text-[#18181B] text-base"
                >
                  <Image
                    className="h-4"
                    width={19}
                    height={19}
                    src="/images/facebook.svg"
                    alt="twitter"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/jewelone_in/"
                  target="_blank"
                  className="!no-underline !text-[#18181B] text-base"
                >
                  <Image
                    className="h-4"
                    width={19}
                    height={19}
                    src="/images/instagram.svg"
                    alt="twitter"
                  />
                </Link>
              </div>
              <div>© {year} JewelOne. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
