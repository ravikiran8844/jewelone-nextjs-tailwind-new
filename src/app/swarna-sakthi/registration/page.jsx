import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
            <div>
              <Image
                width={912}
                height={721}
                src="/swarna-sakthi/banner-image.webp"
                alt="banner"
                className="h-full object-cover object-top"
              />
            </div>
            <div className="bg-[#F2EDE4]">
              <div className="px-4 py-10 lg:py-20 lg:px-8 max-w-md m-auto h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl font-medium text-black max-w-md alga-vf text-center">
                  Registration
                </div>

                <form>
                  <div className="mt-6 lg:mt-8 space-y-4">
                    <div>
                      <label className="text-black text-sm mb-1">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="block rounded-sm border border-[#E0DACF] bg-white p-2 w-full"
                        type="text"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="text-black text-sm mb-1">
                        Email Id<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="block rounded-sm border border-[#E0DACF] bg-white p-2 w-full"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="text-black text-sm mb-1">
                        Phone number<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="block rounded-sm border border-[#E0DACF] bg-white p-2 w-full"
                        type="tel"
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-8">
                    <button className="!uppercase w-full block bg-[#964A26] text-white px-4 py-2 mt-2 !rounded-sm">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="container">
            <div className="text-center max-w-6xl mx-auto">
              <div className="uppercase text-[#964A26] text-xl mb-2">
                Jewelone
              </div>
              <div className="text-3xl lg:text-4xl font-medium text-black alga-vf mb-6">
                Saving Scheme
              </div>
              <div className="mb-4">
                Out of the three primary characteristics of knowledge, wealth
                and courage personified by the Tridevi in Hindu scriptures, it
                is only wealth that can be exhibited as a tangible attribute.
                This perceptible nature of wealth is precisely the reason why
                our forefathers advised on purchasing gold whenever possible.
                Farmers, after every harvest; traders, after every voyage;
                artists, after every accomplishment; soldiers, after every
                battle; and kings, after every victory, preferred gold as their
                reward, not for the price but for its underlying value. Buying
                gold is therefore considered an auspicious task that should
                never be put away for a later time.
              </div>
              <div>
                JewelOne offers Four well balanced gold saving schemes for
                customers to choose from, catering to each of their personal
                preferences. EJJO’s saving schemes are designed with the
                "Customer First" approach, where the needs of each end user are
                kept in mind and the scheme crafted around them to provide
                maximum benefit to the customer.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2EDE4] py-10">
          <div className="container">
            <div className="text-center max-w-6xl mx-auto">
              <div className="uppercase text-[#964A26] text-xl mb-2">
                CHOOSE FROM
              </div>
              <div className="text-3xl lg:text-4xl font-medium text-black alga-vf mb-6">
                Our Best Saving’s Scheme
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-10">
              <div>
                <Link href={"/swarna-sakthi"}>
                <Image width={844} height={591} src='/swarna-sakthi/section3-img1.webp' alt="view plans" />
                </Link>
              </div>
              <div>
              <Link href={"/swarna-sakthi/registration"}>
                <Image width={844} height={591} src='/swarna-sakthi/section3-img2.webp' alt="register now" />
                </Link>

              </div>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="text-xl uppercase font-medium text-black mb-6 text-center">
                For Any Scheme Related Query Contact Us @:
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-md border border-[#E0DACF] p-3">
                  <div className="text-md text-[#D99A26] uppercase">General Enquiries</div>
                  <div>
                    <Link  className="text-lg !no-underline text-black font-semibold" href={"tel:18001033916"}>
                    1800 1033916
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-md border border-[#E0DACF] p-3">
                  <div className="text-md text-[#D99A26] uppercase">Mail Us</div>
                  <div>
                    <Link  className="text-lg !no-underline text-black font-semibold" href={"mailto:retail.crm@ejindia.com"}>
                    retail.crm@ejindia.com
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
