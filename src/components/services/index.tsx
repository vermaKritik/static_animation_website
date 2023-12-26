"use client";
import RoundedFlowerSvg from "@/svg/roundedFlower";
import React, { RefObject } from "react";
import InfiniteRotation from "../animations/InfiniteRotation";
import { Variants, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/RootState";

interface ViewportOptions {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
}

export default function ServicesSection() {
  const theme = useSelector(
    (state: RootState) => state.themeSlice.theme || "dark"
  );

  const cardViewport: ViewportOptions = {
    amount: "all",
    margin: "-140px 0px 0px 0px",
  };

  const cardVariants: Variants = {
    offscreen: {},
    onscreen: {
      // borderColor: theme === "dark" ? "#F1561B" : "#E7E51E",
      // color: theme === "dark" ? "#F1561B" : "#E7E51E",
      // transition: {
      //   duration: 0.5,
      // },
    },
  };

  const iconCircleVariants: Variants = {
    offscreen: {
      fill: "#D4D4D8",
      fillOpacity: "0.68",
      transition: {
        duration: 0.5,
      },
    },
    onscreen: {
      fill: theme === "dark" ? "#F1561B" : "#E7E51E",
      fillOpacity: "0.22",
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconPathVariants: Variants = {
    offscreen: {
      fill: "#FFF",
      transition: {
        duration: 0.5,
      },
    },
    onscreen: {
      fill: theme === "dark" ? "#F1561B" : "#E7E51E",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[75%] max-xl:max-w-[85%] max-md:max-w-[95%] max-md:p-6 max-xl:p-10 mx-auto my-16 p-16 rounded-2xl bg-royalblue dark:bg-white overflow-hidden">
      <div className="relative">
        <div className="absolute left-60 top-40">
          <InfiniteRotation duration={6}>
            <RoundedFlowerSvg
              width={250}
              className="fill-[#E7E51E] dark:fill-[#F1561B]"
            />
          </InfiniteRotation>
        </div>
      </div>
      <div className="uppercase text-white dark:text-black font-righteous text-[65px] max-md:text-[45px] max-sm:text-[35px] text-center leading-tight">
        We can help you grow faster.
      </div>
      <div className="text-white dark:text-black mt-8 font-righteous uppercase">
        Small Teams Making Great Impact.
      </div>
      <div className="mt-10">
        <div className="w-full px-2 py-3 sm:mx-auto  sm:px-0">
          <div className="relative text-sm  text-gray-700 antialiased">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="absolute left-1/2 max-sm:left-1 h-full w-[1px] -translate-x-1/2 transform bg-white dark:bg-black sm:block"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={cardViewport}
            >
              <div className="mt-6 sm:mb-12 sm:mt-0">
                <div className="flex flex-col items-center sm:flex-row max-sm:ml-8">
                  <div className="mx-auto flex w-full items-center justify-start">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="flex flex-col max-sm:items-center gap-6 font-righteous text-white dark:text-black">
                        <svg
                          width="80"
                          // height="139"
                          viewBox="0 0 139 139"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.circle
                            variants={iconCircleVariants}
                            cx="69.5"
                            cy="69.5"
                            r="69.5"
                          />
                          <motion.path
                            variants={iconPathVariants}
                            d="M68.4062 32C61.7167 31.9985 55.2134 34.2036 49.9044 38.2735C44.5953 42.3435 40.777 48.051 39.0412 54.5114C37.3054 60.9719 37.7491 67.8245 40.3034 74.0071C42.8578 80.1898 47.3802 85.3573 53.1697 88.7087C55.6975 90.1753 57.2782 92.423 57.3482 94.6891C57.3676 95.2961 57.5863 95.8798 57.9706 96.35C58.3549 96.8202 58.8834 97.1508 59.4744 97.2906C60.7714 97.5964 62.0905 97.8359 63.4318 98.0091C64.622 98.1602 65.6427 97.2058 65.6427 96.0046V82.3424C65.6427 80.3433 64.1263 78.6972 62.19 78.1997C61.8385 78.1092 61.5082 77.9504 61.218 77.7323C60.9279 77.5141 60.6835 77.241 60.4989 76.9284C60.3143 76.6159 60.1931 76.27 60.1422 75.9106C60.0912 75.5512 60.1116 75.1852 60.2021 74.8337C60.2926 74.4821 60.4514 74.1519 60.6696 73.8617C60.8877 73.5715 61.1608 73.3272 61.4734 73.1426C61.786 72.958 62.1318 72.8368 62.4912 72.7858C62.8507 72.7349 63.2166 72.7553 63.5681 72.8457C66.7417 73.6637 70.0708 73.6637 73.2444 72.8457C73.5994 72.7434 73.9715 72.7134 74.3384 72.7573C74.7053 72.8013 75.0596 72.9184 75.3805 73.1017C75.7013 73.2851 75.9822 73.5309 76.2064 73.8246C76.4306 74.1184 76.5936 74.4541 76.6858 74.812C76.7779 75.1698 76.7974 75.5425 76.743 75.908C76.6886 76.2735 76.5615 76.6244 76.3691 76.9399C76.1768 77.2555 75.9231 77.5292 75.623 77.7449C75.323 77.9607 74.9828 78.1141 74.6225 78.196C72.6859 78.6958 71.1698 80.3431 71.1698 82.3431V96.0009C71.1698 97.2058 72.1905 98.1602 73.3807 98.0091C74.722 97.8359 76.0411 97.5964 77.3382 97.2906C77.9291 97.1508 78.4576 96.8202 78.8419 96.35C79.2262 95.8798 79.4449 95.2961 79.4643 94.6891C79.538 92.423 81.115 90.1753 83.6428 88.7087C89.4323 85.3573 93.9547 80.1898 96.5091 74.0071C99.0634 67.8245 99.5071 60.9719 97.7713 54.5114C96.0355 48.051 92.2172 42.3435 86.9081 38.2735C81.5991 34.2036 75.0958 31.9985 68.4062 32Z"
                          />
                          <motion.path
                            variants={iconPathVariants}
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M57.3998 103.211C57.4675 102.855 57.6048 102.515 57.8038 102.211C58.0028 101.907 58.2597 101.646 58.5598 101.442C58.8599 101.238 59.1973 101.094 59.5528 101.021C59.9082 100.947 60.2747 100.944 60.6314 101.011C65.7688 101.986 71.0437 101.986 76.1811 101.011C76.5421 100.932 76.9154 100.926 77.2788 100.993C77.6422 101.06 77.9885 101.2 78.297 101.403C78.6056 101.607 78.8701 101.87 79.0751 102.178C79.2801 102.486 79.4212 102.831 79.4903 103.194C79.5593 103.557 79.5548 103.931 79.477 104.292C79.3992 104.653 79.2497 104.995 79.0373 105.298C78.825 105.601 78.5541 105.857 78.2407 106.053C77.9273 106.249 77.5778 106.381 77.2129 106.439C71.3937 107.543 65.4188 107.543 59.5996 106.439C58.8801 106.302 58.2442 105.886 57.8317 105.28C57.4192 104.675 57.2639 103.931 57.3998 103.211ZM60.1302 112.217C60.168 111.856 60.2764 111.506 60.4494 111.187C60.6224 110.868 60.8566 110.586 61.1385 110.357C61.4205 110.129 61.7447 109.958 62.0927 109.855C62.4406 109.751 62.8055 109.718 63.1665 109.755C66.6502 110.119 70.1623 110.119 73.646 109.755C74.375 109.679 75.1045 109.896 75.6739 110.357C76.2433 110.819 76.606 111.488 76.6823 112.217C76.7585 112.946 76.542 113.675 76.0804 114.245C75.6188 114.814 74.9499 115.177 74.2208 115.253C70.355 115.658 66.4575 115.658 62.5917 115.253C62.2307 115.215 61.8806 115.107 61.5616 114.934C61.2425 114.761 60.9606 114.527 60.732 114.245C60.5035 113.963 60.3327 113.639 60.2294 113.291C60.1262 112.943 60.0925 112.578 60.1302 112.217Z"
                          />
                        </svg>
                        <div>
                          <div className="text-4xl max-sm:text-center">
                            Product Design
                          </div>
                          <div className="max-sm:text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec tempor ex id imperdiet eleifend. Nam
                            egestas, enim vitae aliquam egestas, tortor purus
                            feugiat ipsum,
                          </div>
                        </div>
                        <div className="self-end max-sm:self-center uppercase text-lg">
                          View More
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    variants={cardVariants}
                    className="absolute left-1/2 max-sm:left-1 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-white dark:border-black bg-royalblue dark:bg-white text-white dark:text-black sm:translate-y-0"
                  >
                    1
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={cardViewport}
            >
              <div className="mt-6 sm:mb-12 sm:mt-0">
                <div className="flex flex-col items-center sm:flex-row max-sm:ml-8">
                  <div className="mx-auto flex w-full items-center justify-end">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="flex flex-col max-sm:items-center gap-6 font-righteous text-white dark:text-black">
                        <div>
                          <svg
                            width="80"
                            // height="139"
                            viewBox="0 0 139 139"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <motion.circle
                              variants={iconCircleVariants}
                              cx="69.5"
                              cy="69.5"
                              r="69.5"
                            />
                            <motion.path
                              variants={iconPathVariants}
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M44 44.7728C44 41.5831 46.5862 39 49.7728 39H65.9365C69.1262 39 71.7093 41.5862 71.7093 44.7728V85.1822C71.7093 88.8567 70.2496 92.3806 67.6514 94.9789C65.0531 97.5771 61.5291 99.0368 57.8547 99.0368C54.1802 99.0368 50.6562 97.5771 48.0579 94.9789C45.4597 92.3806 44 88.8567 44 85.1822V44.7728ZM57.8547 88.6458C58.7733 88.6458 59.6543 88.2809 60.3038 87.6314C60.9534 86.9818 61.3183 86.1008 61.3183 85.1822C61.3183 84.2636 60.9534 83.3826 60.3038 82.733C59.6543 82.0834 58.7733 81.7185 57.8547 81.7185C56.936 81.7185 56.055 82.0834 55.4055 82.733C54.7559 83.3826 54.391 84.2636 54.391 85.1822C54.391 86.1008 54.7559 86.9818 55.4055 87.6314C56.055 88.2809 56.936 88.6458 57.8547 88.6458Z"
                            />
                            <motion.path
                              variants={iconPathVariants}
                              d="M70.9181 98.2449C70.6331 98.5267 70.8305 99.0362 71.2313 99.0362H98.2641C101.454 99.0362 104.037 96.45 104.037 93.2634V77.0996C104.037 73.91 101.451 71.3269 98.2641 71.3269C97.9881 71.3269 97.7234 71.4365 97.5283 71.6317L70.9181 98.2449ZM76.2928 86.3361C76.292 86.3361 76.2916 86.3351 76.2922 86.3345L96.2228 66.4038C97.3048 65.3213 97.9126 63.8534 97.9126 62.3229C97.9126 60.7923 97.3048 59.3244 96.2228 58.2419L84.7943 46.8103C83.7117 45.7283 82.2438 45.1205 80.7133 45.1205C79.1828 45.1205 77.7149 45.7283 76.6323 46.8103C76.4353 47.0053 76.3245 47.2711 76.3245 47.5483V85.1815C76.3245 85.5692 76.3152 85.9537 76.2937 86.3352C76.2937 86.3357 76.2933 86.3361 76.2928 86.3361Z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-4xl max-sm:text-center">
                            Product Design
                          </div>
                          <div className="max-sm:text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec tempor ex id imperdiet eleifend. Nam
                            egestas, enim vitae aliquam egestas, tortor purus
                            feugiat ipsum,
                          </div>
                        </div>
                        <div className="self-end max-sm:self-center uppercase text-lg">
                          View More
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    variants={cardVariants}
                    className="absolute left-1/2 max-sm:left-1 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-white dark:border-black bg-royalblue dark:bg-white text-white dark:text-black sm:translate-y-0"
                  >
                    2
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={cardViewport}
            >
              <motion.div variants={cardVariants}>
                <div className="mt-6 sm:mb-12 sm:mt-0">
                  <div className="flex flex-col items-center sm:flex-row max-sm:ml-8">
                    <div className="mx-auto flex w-full items-center justify-start">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="flex flex-col max-sm:items-center gap-6 font-righteous text-white dark:text-black">
                          <div>
                            <svg
                              width="80"
                              // height="139"
                              viewBox="0 0 139 139"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <motion.circle
                                variants={iconCircleVariants}
                                cx="69.5"
                                cy="69.5"
                                r="69.5"
                              />
                              <motion.path
                                variants={iconPathVariants}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M35 48.6667C35 45.8377 36.1765 43.1246 38.2706 41.1242C40.3648 39.1238 43.2051 38 46.1667 38H90.8333C93.7949 38 96.6352 39.1238 98.7294 41.1242C100.824 43.1246 102 45.8377 102 48.6667V91.3333C102 94.1623 100.824 96.8754 98.7294 98.8758C96.6352 100.876 93.7949 102 90.8333 102H46.1667C43.2051 102 40.3648 100.876 38.2706 98.8758C36.1765 96.8754 35 94.1623 35 91.3333V48.6667ZM88.0417 70C88.041 70.707 87.7465 71.3848 87.2228 71.8844L78.8478 79.8844C78.5922 80.1464 78.284 80.3566 77.9416 80.5023C77.5991 80.6481 77.2295 80.7265 76.8546 80.7328C76.4798 80.7391 76.1074 80.6732 75.7598 80.5391C75.4122 80.405 75.0965 80.2054 74.8314 79.9521C74.5663 79.6989 74.3573 79.3973 74.2169 79.0652C74.0765 78.7332 74.0075 78.3775 74.0141 78.0195C74.0207 77.6614 74.1028 77.3083 74.2554 76.9812C74.408 76.6541 74.6279 76.3597 74.9022 76.1156C78.3896 72.7843 78.3896 67.2157 74.9022 63.8844C74.6279 63.6403 74.408 63.3459 74.2554 63.0188C74.1028 62.6917 74.0207 62.3386 74.0141 61.9805C74.0075 61.6225 74.0765 61.2668 74.2169 60.9348C74.3573 60.6027 74.5663 60.3011 74.8314 60.0479C75.0965 59.7946 75.4122 59.595 75.7598 59.4609C76.1074 59.3268 76.4798 59.2609 76.8546 59.2672C77.2295 59.2735 77.5991 59.3519 77.9416 59.4977C78.284 59.6434 78.5922 59.8536 78.8478 60.1156L87.2228 68.1156C87.7476 68.6133 88.0417 69.2924 88.0417 70ZM49.7772 68.1156C49.2544 68.6156 48.9608 69.2933 48.9608 70C48.9608 70.7067 49.2544 71.3844 49.7772 71.8844L58.1522 79.8844C58.4078 80.1464 58.716 80.3566 59.0584 80.5023C59.4009 80.6481 59.7706 80.7265 60.1454 80.7328C60.5202 80.7391 60.8926 80.6732 61.2402 80.5391C61.5878 80.405 61.9035 80.2054 62.1686 79.9521C62.4337 79.6989 62.6427 79.3973 62.7831 79.0652C62.9235 78.7332 62.9925 78.3775 62.9859 78.0195C62.9793 77.6614 62.8972 77.3083 62.7446 76.9812C62.592 76.6541 62.3721 76.3597 62.0978 76.1156C58.6104 72.7843 58.6104 67.2157 62.0978 63.8844C62.3721 63.6403 62.592 63.3459 62.7446 63.0188C62.8972 62.6917 62.9793 62.3386 62.9859 61.9805C62.9925 61.6225 62.9235 61.2668 62.7831 60.9348C62.6427 60.6027 62.4337 60.3011 62.1686 60.0479C61.9035 59.7946 61.5878 59.595 61.2402 59.4609C60.8926 59.3268 60.5202 59.2609 60.1454 59.2672C59.7706 59.2735 59.4009 59.3519 59.0584 59.4977C58.716 59.6434 58.4078 59.8536 58.1522 60.1156L49.7772 68.1156Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-4xl max-sm:text-center">
                              Product Design
                            </div>
                            <div className="max-sm:text-center">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec tempor ex id imperdiet eleifend. Nam
                              egestas, enim vitae aliquam egestas, tortor purus
                              feugiat ipsum,
                            </div>
                          </div>
                          <div className="self-end max-sm:self-center uppercase text-lg">
                            View More
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      variants={cardVariants}
                      className="absolute left-1/2 max-sm:left-1 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-white dark:border-black bg-[#5A56EB] dark:bg-white text-white dark:text-black sm:translate-y-0"
                    >
                      3
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={cardViewport}
            >
              <div className="mt-6 sm:mt-0">
                <div className="flex flex-col items-center sm:flex-row max-sm:ml-8">
                  <div className="mx-auto flex w-full items-center justify-end">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="flex flex-col max-sm:items-center gap-6 font-righteous text-white dark:text-black">
                        <div>
                          <svg
                            width="80"
                            // height="139"
                            viewBox="0 0 139 139"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <motion.circle
                              variants={iconCircleVariants}
                              cx="69.5"
                              cy="69.5"
                              r="69.5"
                            />
                            <motion.path
                              variants={iconPathVariants}
                              d="M62.823 93.5352C62.1099 93.5352 61.4259 93.8185 60.9216 94.3227C60.4173 94.827 60.134 95.511 60.134 96.2241C60.134 96.9373 60.4173 97.6213 60.9216 98.1255C61.4259 98.6298 62.1099 98.9131 62.823 98.9131H73.579C74.2921 98.9131 74.9761 98.6298 75.4804 98.1255C75.9847 97.6213 76.268 96.9373 76.268 96.2241C76.268 95.511 75.9847 94.827 75.4804 94.3227C74.9761 93.8185 74.2921 93.5352 73.579 93.5352H62.823Z"
                            />
                            <motion.path
                              variants={iconPathVariants}
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M56.1004 29C52.8912 29 49.8134 30.2749 47.5441 32.5441C45.2749 34.8134 44 37.8912 44 41.1004V97.5692C44 100.778 45.2749 103.856 47.5441 106.126C49.8134 108.395 52.8912 109.67 56.1004 109.67H80.3013C83.5106 109.67 86.5884 108.395 88.8577 106.126C91.1269 103.856 92.4018 100.778 92.4018 97.5692V41.1004C92.4018 37.8912 91.1269 34.8134 88.8577 32.5441C86.5884 30.2749 83.5106 29 80.3013 29H56.1004ZM52.067 41.1004C52.067 38.874 53.874 37.067 56.1004 37.067H58.7894C59.532 37.067 60.1339 37.6689 60.1339 38.4115C60.1339 40.6379 61.9409 42.4449 64.1674 42.4449H72.2344C74.4609 42.4449 76.2679 40.6379 76.2679 38.4115C76.2679 37.6689 76.8698 37.067 77.6124 37.067H80.3013C82.5278 37.067 84.3348 38.874 84.3348 41.1004V97.5692C84.3348 99.7957 82.5278 101.603 80.3013 101.603H56.1004C55.0307 101.603 54.0048 101.178 53.2483 100.421C52.4919 99.6649 52.067 98.639 52.067 97.5692V41.1004Z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-4xl max-sm:text-center">
                            Product Design
                          </div>
                          <div className="max-sm:text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec tempor ex id imperdiet eleifend. Nam
                            egestas, enim vitae aliquam egestas, tortor purus
                            feugiat ipsum,
                          </div>
                        </div>
                        <div className="self-end max-sm:self-center uppercase text-lg">
                          View More
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    variants={cardVariants}
                    className="absolute left-1/2 max-sm:left-1 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-white dark:border-black bg-[#5A56EB] dark:bg-white text-white dark:text-black sm:translate-y-0"
                  >
                    4
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={cardViewport}
            >
              <div className="mt-6 sm:mb-12 sm:mt-0">
                <div className="flex flex-col items-center sm:flex-row max-sm:ml-8">
                  <div className="mx-auto flex w-full items-center justify-start">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="flex flex-col max-sm:items-center gap-6 font-righteous text-white dark:text-black">
                        <div>
                          <svg
                            width="80"
                            // height="139"
                            viewBox="0 0 139 139"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <motion.circle
                              variants={iconCircleVariants}
                              cx="69.5"
                              cy="69.5"
                              r="69.5"
                            />
                            <motion.path
                              variants={iconPathVariants}
                              d="M91.6583 67.7708C91.6583 56.3864 79.3267 51.0195 67.9787 51.9283C66.0494 52.0828 64.1114 52.1586 62.1697 52.1549H59.9014C55.9174 52.1493 52.0768 53.6167 49.1416 56.2661C46.2065 58.9155 44.3913 62.5533 44.0563 66.4575C43.7212 70.3618 44.8908 74.2472 47.3329 77.3429C51.7532 82.9463 58.1467 87.7625 61.1131 94.2538C61.2101 94.466 61.3083 94.6776 61.4076 94.8888C62.8109 97.8751 66.4705 98.8151 69.2167 97.2565L71.2038 96.1291C73.8653 94.6181 74.7273 91.3938 73.5387 88.7882C72.5522 86.6329 74.3906 84.3869 76.7118 84.867C78.4458 85.2257 80.1561 85.6472 81.8403 86.129C85.3974 87.1468 89.3023 85.3805 90.1128 81.7705C91.1434 77.1798 91.6632 72.4855 91.6583 67.7708ZM92.4446 45.4327C94.9356 52.6251 96.2028 60.1726 96.195 67.7708C96.2028 75.369 94.9356 82.9164 92.4446 90.1089C92.2783 90.5877 92.1089 91.0666 91.9305 91.5425C91.7235 92.0983 91.7495 92.7122 92.0028 93.2491C92.256 93.786 92.7158 94.2019 93.2809 94.4055C93.846 94.609 94.4702 94.5834 95.0161 94.3343C95.562 94.0853 95.985 93.6331 96.1919 93.0774C97.686 89.0656 98.8176 84.9367 99.5762 80.7389C100.363 76.3827 103.005 72.1975 103 67.7708C103 63.3437 100.362 59.1596 99.5739 54.8032C98.8147 50.6055 97.6838 46.4766 96.1919 42.4642C96.0895 42.189 95.9329 41.9364 95.7311 41.7207C95.5294 41.505 95.2864 41.3305 95.0161 41.2072C94.4702 40.9582 93.846 40.9326 93.2809 41.1361C92.7158 41.3396 92.256 41.7556 92.0028 42.2925C91.7495 42.8294 91.7235 43.4432 91.9305 43.999C92.1089 44.4749 92.2813 44.9508 92.4446 45.4327Z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-4xl max-sm:text-center">
                            Product Design
                          </div>
                          <div className="max-sm:text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec tempor ex id imperdiet eleifend. Nam
                            egestas, enim vitae aliquam egestas, tortor purus
                            feugiat ipsum,
                          </div>
                        </div>
                        <div className="self-end max-sm:self-center uppercase text-lg">
                          View More
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    variants={cardVariants}
                    className="absolute left-1/2 max-sm:left-1 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-white dark:border-black bg-[#5A56EB] dark:bg-white text-white dark:text-black sm:translate-y-0"
                  >
                    5
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
