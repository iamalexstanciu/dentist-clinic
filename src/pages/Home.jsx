import React from "react";
import "../style/home.css";
import Tooth from "../assets/tooth.png";
import Tooth1 from "../assets/tooth2.png";
import Tooth2 from "../assets/tooth3.png";

import Logo from "../components/Logo";
import { motion } from "framer-motion";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  gap: 5%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

function Home() {
  return (
    <div className="section" id="home">
      <Logo />
      <div className="visual">
        <div className="top-right-background"></div>
        <motion.path
          initial={{
            opacity: 0.2,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}>
          <img
            className="image-right"
            src={Tooth}
            alt="catalin teodor dentist"
          />
          <img
            className="image-right2"
            src={Tooth1}
            alt="catalin teodor dentist"
          />
          <img
            className="image-right3"
            src={Tooth2}
            alt="catalin teodor dentist"
          />
        </motion.path>
      </div>
      <motion.path
        initial={{
          opacity: 0.2,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          ease: "linear",
        }}>
        <div className="text-homepage">
          <span>
            <span>
              Zâmbiți cu Încredere:
              <br />
              Expertiza Noastră,
              <br />
            </span>
            <span className="span2">Zâmbetul </span>
            <span>Dumneavoastră.</span>
          </span>
        </div>
      </motion.path>
      <div className="subsection">
        <Widget className="widget widget-1">
          <a href="#0" className="learn-more">
            Grijă Preventivă
            <div class="_80-tooth-shine">
              <svg
                class="union"
                width="64"
                height="70"
                viewBox="0 0 64 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.312 1.37244C35.3292 3.50723 28.1378 3.50722 23.155 1.37243C19.1065 -0.362067 14.5781 -0.522914 10.3997 1.2946C1.58197 5.13011 -2.37295 16.3387 1.46488 26.4498C1.46573 26.4521 1.46569 26.4546 1.46476 26.4568L2.66241 29.061C6.71088 37.8641 9.76246 47.0923 11.7603 56.5735L13.6608 65.5927C14.3185 68.1855 16.6426 70 19.3059 70C22.1662 70 24.6034 67.9137 25.0575 65.0765L27.7368 48.3363C28.0523 46.3647 29.7459 44.9149 31.7336 44.9149C33.7212 44.9149 35.4149 46.3647 35.7304 48.3363L38.4096 65.0765C38.8637 67.9137 41.3009 70 44.1612 70C46.8245 70 49.1486 68.1855 49.8063 65.5927L51.7068 56.5735C53.7046 47.0923 56.7562 37.8641 60.8047 29.061L62.0023 26.4568C62.0014 26.4546 62.0014 26.4521 62.0022 26.4498C65.84 16.3387 61.8851 5.13011 53.0674 1.2946C48.889 -0.522933 44.3605 -0.362076 40.312 1.37244Z"
                  fill="url(#paint0_linear_6_141)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6_141"
                    x1="8.40021"
                    y1="-8.38827e-08"
                    x2="46.6669"
                    y2="67.2"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F0F6F9" />
                    <stop offset="1" stop-color="#CDDFF2" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                class="group-109"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_23_70)">
                  <path
                    d="M13.2491 3.40222L12.7765 1.14754C12.6364 0.478883 12.0467 0 11.3635 0C10.6612 0 10.0607 0.50547 9.94098 1.19754L9.60093 3.16286C9.10697 6.01765 6.9054 8.27313 4.06339 8.83601L1.09019 9.42487C0.456564 9.55036 -5.72205e-06 10.1062 -5.72205e-06 10.7522C-5.72205e-06 11.4183 0.484901 11.9854 1.14301 12.0888L3.78709 12.5044C6.76829 12.9729 9.11365 15.2992 9.60641 18.2765L9.9499 20.3519C10.0643 21.0431 10.662 21.55 11.3626 21.55C12.045 21.55 12.6325 21.0685 12.7666 20.3995L13.2387 18.0447C13.8122 15.1841 16.0997 12.9792 18.9794 12.5112L21.5414 12.0949C22.2002 11.9879 22.6842 11.4189 22.6842 10.7514C22.6842 10.1049 22.2295 9.54767 21.5962 9.41797L18.6958 8.824C15.9618 8.26409 13.8215 6.13366 13.2491 3.40222Z"
                    fill="url(#paint0_linear_23_70)"
                  />
                </g>
                <path
                  d="M12.5189 4.79631L11.9796 0.553642C11.9394 0.237186 11.6701 0 11.3511 0C11.0245 0 10.7514 0.248347 10.7204 0.573522L10.3195 4.78674C10.0836 7.26601 8.14962 9.24457 5.67637 9.53692L0.553032 10.1425C0.237623 10.1798 -5.72205e-06 10.4472 -5.72205e-06 10.7648C-5.72205e-06 11.091 0.250273 11.3626 0.575388 11.3893L5.40773 11.7854C8.01371 11.9991 10.0891 14.0549 10.3274 16.6587L10.7225 20.9766C10.7522 21.3014 11.0246 21.55 11.3508 21.55C11.6696 21.55 11.9383 21.3121 11.977 20.9957L12.508 16.652C12.8284 14.032 14.9422 11.9958 17.5723 11.7738L22.1086 11.3907C22.4341 11.3632 22.6842 11.0911 22.6842 10.7645C22.6842 10.4468 22.4471 10.179 22.1317 10.1406L17.3002 9.55239C14.8055 9.24866 12.8358 7.28935 12.5189 4.79631Z"
                  fill="url(#paint1_linear_23_70)"
                />
                <defs>
                  <filter
                    id="filter0_f_23_70"
                    x="-4"
                    y="-4"
                    width="30.6842"
                    height="29.55"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_23_70"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_23_70"
                    x1="11.3421"
                    y1="0"
                    x2="11.3421"
                    y2="21.55"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_23_70"
                    x1="11.3421"
                    y1="0"
                    x2="11.3421"
                    y2="21.55"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                class="group-110"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_23_73)">
                  <path
                    d="M8.29926 1.48734L8.13876 0.721541C8.05064 0.301108 7.67989 0 7.25032 0C6.8087 0 6.43116 0.317824 6.35587 0.752978L6.26323 1.28833C5.87964 3.50527 4.16997 5.2568 1.96297 5.69391L0.790751 5.92608C0.392343 6.00498 0.105266 6.3545 0.105266 6.76064C0.105266 7.17952 0.410161 7.53607 0.823959 7.6011L1.73218 7.74383C4.05696 8.10918 5.88591 9.9233 6.27017 12.245L6.36147 12.7966C6.4334 13.2313 6.80923 13.55 7.24975 13.55C7.67879 13.55 8.04822 13.2473 8.13256 12.8266L8.33208 11.8313C8.75119 9.74073 10.423 8.12928 12.5276 7.78729L13.6499 7.60492C14.0641 7.53761 14.3684 7.17985 14.3684 6.76017C14.3684 6.35369 14.0825 6.00329 13.6843 5.92174L12.5131 5.68189C10.3979 5.24872 8.74215 3.60052 8.29926 1.48734Z"
                    fill="url(#paint0_linear_23_73)"
                  />
                </g>
                <path
                  d="M7.97679 3.01578L7.63768 0.348114C7.61238 0.149136 7.44309 0 7.24251 0C7.03712 0 6.86541 0.156153 6.84595 0.360614L6.59387 3.00976C6.44554 4.56865 5.22951 5.81271 3.6744 5.99653L0.452998 6.37732C0.25468 6.40076 0.105266 6.56887 0.105266 6.76857C0.105266 6.97368 0.262633 7.14448 0.467056 7.16124L3.50549 7.41033C5.14405 7.54466 6.44897 8.83729 6.59881 10.4745L6.84727 13.1895C6.86596 13.3937 7.03723 13.55 7.24229 13.55C7.44275 13.55 7.61171 13.4004 7.63604 13.2015L7.96995 10.4703C8.17136 8.82293 9.50049 7.54263 11.1542 7.40299L14.0065 7.16214C14.2111 7.14486 14.3684 6.97373 14.3684 6.76838C14.3684 6.56862 14.2193 6.40027 14.021 6.37612L10.9831 6.00626C9.41455 5.81528 8.17606 4.58333 7.97679 3.01578Z"
                  fill="url(#paint1_linear_23_73)"
                />
                <defs>
                  <filter
                    id="filter0_f_23_73"
                    x="-3.89473"
                    y="-4"
                    width="22.2632"
                    height="21.55"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="2"
                      result="effect1_foregroundBlur_23_73"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_23_73"
                    x1="7.23684"
                    y1="0"
                    x2="7.23684"
                    y2="13.55"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_23_73"
                    x1="7.23684"
                    y1="0"
                    x2="7.23684"
                    y2="13.55"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </Widget>
        <Widget className="widget widget-2">
          <a href="#0" className="learn-more">
            Îngrijire Restaurativă
            <div class="_80-cavity">
              <svg
                class="union"
                width="64"
                height="70"
                viewBox="0 0 64 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.312 1.37244C35.3292 3.50723 28.1378 3.50722 23.155 1.37243C19.1065 -0.362067 14.5781 -0.522914 10.3997 1.2946C1.582 5.13011 -2.37292 16.3387 1.46491 26.4498C1.46576 26.4521 1.46572 26.4546 1.46479 26.4568L2.66244 29.061C6.71091 37.8641 9.76249 47.0923 11.7603 56.5735L13.6608 65.5927C14.3185 68.1855 16.6427 70 19.3059 70C22.1662 70 24.6034 67.9137 25.0575 65.0765L27.7368 48.3363C28.0523 46.3647 29.746 44.9149 31.7336 44.9149C33.7213 44.9149 35.4149 46.3647 35.7304 48.3363L38.4096 65.0765C38.8637 67.9137 41.3009 70 44.1613 70C46.8245 70 49.1486 68.1855 49.8063 65.5927L51.7068 56.5735C53.7047 47.0923 56.7562 37.8641 60.8047 29.061L62.0024 26.4568C62.0014 26.4546 62.0014 26.4521 62.0022 26.4498C65.8401 16.3387 61.8852 5.13011 53.0674 1.2946C48.889 -0.522933 44.3605 -0.362076 40.312 1.37244Z"
                  fill="url(#paint0_linear_23_79)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_23_79"
                    x1="8.40024"
                    y1="-8.38827e-08"
                    x2="46.6669"
                    y2="67.2"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F0F6F9" />
                    <stop offset="1" stop-color="#CDDFF2" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                class="mask-group"
                width="64"
                height="70"
                viewBox="0 0 64 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_30_181"
                  style={{maskType: "alpha"}}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="64"
                  height="70">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.312 1.37244C35.3292 3.50723 28.1378 3.50722 23.155 1.37243C19.1065 -0.362067 14.5781 -0.522914 10.3997 1.2946C1.582 5.13011 -2.37292 16.3387 1.46491 26.4498C1.46576 26.4521 1.46572 26.4546 1.46479 26.4568L2.66244 29.061C6.71091 37.8641 9.76249 47.0923 11.7603 56.5735L13.6608 65.5927C14.3185 68.1855 16.6427 70 19.3059 70C22.1662 70 24.6034 67.9137 25.0575 65.0765L27.7368 48.3363C28.0523 46.3647 29.746 44.9149 31.7336 44.9149C33.7213 44.9149 35.4149 46.3647 35.7304 48.3363L38.4096 65.0765C38.8637 67.9137 41.3009 70 44.1613 70C46.8245 70 49.1486 68.1855 49.8063 65.5927L51.7068 56.5735C53.7047 47.0923 56.7562 37.8641 60.8047 29.061L62.0024 26.4568C62.0014 26.4546 62.0014 26.4521 62.0022 26.4498C65.8401 16.3387 61.8852 5.13011 53.0674 1.2946C48.889 -0.522933 44.3605 -0.362076 40.312 1.37244Z"
                    fill="url(#paint0_linear_30_181)"
                  />
                </mask>
                <g mask="url(#mask0_30_181)">
                  <path
                    d="M22 8.06153C22 7.51987 21.566 7.08482 21.0326 6.99036C17.9657 6.44719 15.6364 3.76834 15.6364 0.545455V-0.545455C15.6364 -3.55792 18.0784 -3 21.0909 -3C22.6777 -3 24.1062 -2.32245 25.1029 -1.24088C26.8972 -2.95047 29.326 -4 32 -4C34.674 -4 37.1028 -1.95048 38.8971 -0.240895C39.8938 -1.32246 41.3223 -2 42.9091 -2C45.9215 -2 48.3636 0.442082 48.3636 3.45454V4.54545C48.3636 7.78948 46.0037 10.4823 42.9069 11.0008C42.4065 11.0846 42 11.4926 42 12C42 17.5228 37.5228 22 32 22C26.4772 22 22 17.5228 22 12V8.06153Z"
                    fill="url(#paint1_linear_30_181)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_30_181"
                    x1="8.40024"
                    y1="-8.38827e-08"
                    x2="46.6669"
                    y2="67.2"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F0F6F9" />
                    <stop offset="1" stop-color="#CDDFF2" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_30_181"
                    x1="45.6364"
                    y1="-4.63636"
                    x2="34.926"
                    y2="37.8359"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E6F0F8" />
                    <stop offset="1" stop-color="#6F93BA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </Widget>
        <Widget className="widget widget-3">
          <a href="#0" className="learn-more">Estetica Stomatologica
          <div class="_80-braces-rubber-bands">
  <div class="rectangle-654"></div>
  <div class="rectangle-655"></div>
  <div class="group-107">
    <svg
      class="rectangle-657"
      width="36"
      height="61"
      viewBox="0 0 36 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.1022 15.981C33.7257 7.04812 26.3742 7.35198e-07 17.4333 0C8.32884 -7.48655e-07 0.905499 7.29923 0.752002 16.4024L0.171465 50.8314C0.077241 56.4194 4.58124 61 10.17 61H25.5696C31.2577 61 35.8003 56.2619 35.5607 50.5788L34.1022 15.981Z"
        fill="url(#paint0_linear_30_256)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_256"
          x1="-8.58839e-07"
          y1="19.5"
          x2="22.2178"
          y2="39.6577"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0F6F9" />
          <stop offset="1" stop-color="#CDDFF2" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="rectangle-662"
      width="35"
      height="61"
      viewBox="0 0 35 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.90453 15.8573C2.27848 6.99344 9.5732 7.29512e-07 18.4449 0C27.588 -7.51831e-07 35 7.41196 35 16.5551L35 51C35 56.5229 30.5229 61 25 61H10.4308C4.74255 61 0.19991 56.2617 0.439677 50.5785L1.90453 15.8573Z"
        fill="url(#paint0_linear_30_255)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_255"
          x1="-2"
          y1="16.5"
          x2="26.8718"
          y2="49.2922"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0F6F9" />
          <stop offset="1" stop-color="#CDDFF2" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="vector-541-stroke"
      width="78"
      height="15"
      viewBox="0 0 78 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.939884 1.58367C1.7221 0.445903 3.27855 0.157671 4.41631 0.939884C8.33777 3.63589 21.2402 9.49999 39.4675 9.49999C57.6966 9.49999 69.9393 3.63622 73.5124 0.990754C74.6221 0.169171 76.1876 0.402712 77.0092 1.51238C77.8308 2.62205 77.5973 4.18764 76.4876 5.00922C71.9568 8.36375 58.641 14.5 39.4675 14.5C20.2922 14.5 6.38948 8.36409 1.58367 5.06009C0.445903 4.27788 0.157671 2.72143 0.939884 1.58367Z"
        fill="url(#paint0_linear_6_195)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_195"
          x1="39"
          y1="2.99999"
          x2="38.5"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E3E7F6" />
          <stop offset="1" stop-color="#C7CCDF" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="vector-541-stroke2"
      width="78"
      height="15"
      viewBox="0 0 78 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.0601 1.58373C76.2779 0.445964 74.7215 0.157732 73.5837 0.939945C69.6622 3.63595 56.7598 9.50005 38.5325 9.50005C20.3033 9.50005 8.06072 3.63628 4.48762 0.990815C3.37794 0.169232 1.81235 0.402773 0.990774 1.51244C0.169187 2.62211 0.40273 4.1877 1.5124 5.00929C6.0432 8.36382 19.359 14.5001 38.5325 14.5001C57.7077 14.5001 71.6105 8.36415 76.4163 5.06015C77.5541 4.27794 77.8423 2.72149 77.0601 1.58373Z"
        fill="url(#paint0_radial_22_55)"
        fill-opacity="0.3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.0601 1.58373C76.2779 0.445964 74.7215 0.157732 73.5837 0.939945C69.6622 3.63595 56.7598 9.50005 38.5325 9.50005C20.3033 9.50005 8.06072 3.63628 4.48762 0.990815C3.37794 0.169232 1.81235 0.402773 0.990774 1.51244C0.169187 2.62211 0.40273 4.1877 1.5124 5.00929C6.0432 8.36382 19.359 14.5001 38.5325 14.5001C57.7077 14.5001 71.6105 8.36415 76.4163 5.06015C77.5541 4.27794 77.8423 2.72149 77.0601 1.58373Z"
        fill="url(#paint1_radial_22_55)"
        fill-opacity="0.3"
      />
      <defs>
        <radialGradient
          id="paint0_radial_22_55"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55 11.0001) rotate(177.879) scale(13.5093 74.3)"
        >
          <stop stop-color="#ADB6DA" />
          <stop offset="1" stop-color="#626D97" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_22_55"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55 11.0001) rotate(177.879) scale(13.5093 74.3)"
        >
          <stop stop-color="#ADB6DA" />
          <stop offset="1" stop-color="#626D97" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>

    <svg
      class="group-119"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.302047 2.02054C0.164498 0.645054 1.53499 -0.385986 2.81847 0.127405C7.42859 1.97145 12.5714 1.97145 17.1815 0.127405C18.465 -0.385986 19.8355 0.645052 19.6979 2.02054L19.4764 4.2356C19.1596 7.40398 19.1596 10.5961 19.4764 13.7644L19.6979 15.9795C19.8355 17.355 18.465 18.386 17.1815 17.8726C12.5714 16.0286 7.42859 16.0286 2.81847 17.8726C1.53499 18.386 0.164498 17.355 0.302047 15.9795L0.523553 13.7644C0.840391 10.5961 0.840391 7.40398 0.523553 4.2356L0.302047 2.02054Z"
        fill="#B4A9FC"
      />
      <g filter="url(#filter0_d_9_91)">
        <path
          d="M4 8C4 5.79086 5.79086 4 8 4H12C14.2091 4 16 5.79086 16 8V10C16 12.2091 14.2091 14 12 14H8C5.79086 14 4 12.2091 4 10V8Z"
          fill="url(#paint0_linear_9_91)"
        />
        <path
          d="M5 8C5 6.34315 6.34315 5 8 5H12C13.6569 5 15 6.34315 15 8V10C15 11.6569 13.6569 13 12 13H8C6.34315 13 5 11.6569 5 10V8Z"
          stroke="url(#paint1_radial_9_91)"
          stroke-width="2"
        />
      </g>
      <g filter="url(#filter1_d_9_91)">
        <path
          d="M12 2.5C12 1.11929 13.1193 0 14.5 0C15.8807 0 17 1.11929 17 2.5V5.5C17 6.88071 15.8807 8 14.5 8C13.1193 8 12 6.88071 12 5.5V2.5Z"
          fill="url(#paint2_linear_9_91)"
        />
      </g>
      <g filter="url(#filter2_d_9_91)">
        <path
          d="M12 12.5C12 11.1193 13.1193 10 14.5 10C15.8807 10 17 11.1193 17 12.5V15.5C17 16.8807 15.8807 18 14.5 18C13.1193 18 12 16.8807 12 15.5V12.5Z"
          fill="url(#paint3_linear_9_91)"
        />
      </g>
      <g filter="url(#filter3_d_9_91)">
        <path
          d="M3.00003 12.5C3.00003 11.1193 4.11932 10 5.50003 10C6.88074 10 8.00003 11.1193 8.00003 12.5V15.5C8.00003 16.8807 6.88074 18 5.50003 18C4.11932 18 3.00003 16.8807 3.00003 15.5V12.5Z"
          fill="url(#paint4_linear_9_91)"
        />
      </g>
      <g filter="url(#filter4_d_9_91)">
        <path
          d="M3.00003 2.5C3.00003 1.11929 4.11932 0 5.50003 0C6.88074 0 8.00003 1.11929 8.00003 2.5V5.5C8.00003 6.88071 6.88074 8 5.50003 8C4.11932 8 3.00003 6.88071 3.00003 5.5V2.5Z"
          fill="url(#paint5_linear_9_91)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_91"
          x="-4"
          y="0"
          width="28"
          height="26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_91"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_9_91"
          x="4.00003"
          y="-4"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_91"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_9_91"
          x="4.00003"
          y="6"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_91"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_9_91"
          x="-4.99997"
          y="6"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_91"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_9_91"
          x="-4.99997"
          y="-4"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_91"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_91"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_9_91"
          x1="8.82088"
          y1="3.97228"
          x2="12.0583"
          y2="14.5171"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_9_91"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.9542 -2.97907) rotate(131.532) scale(15.0005 15.5826)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_9_91"
          x1="14.0087"
          y1="-0.0221822"
          x2="18.0469"
          y2="6.82838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_9_91"
          x1="14.0087"
          y1="9.97782"
          x2="18.0469"
          y2="16.8284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_9_91"
          x1="5.00867"
          y1="9.97782"
          x2="9.0469"
          y2="16.8284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_9_91"
          x1="5.00867"
          y1="-0.0221822"
          x2="9.0469"
          y2="6.82838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="group-120"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.302078 2.02051C0.164529 0.645023 1.53502 -0.386016 2.8185 0.127374C7.42862 1.97142 12.5714 1.97142 17.1816 0.127374C18.465 -0.386016 19.8355 0.645022 19.698 2.02051L19.4765 4.23557C19.1596 7.40394 19.1596 10.596 19.4765 13.7644L19.698 15.9795C19.8355 17.3549 18.465 18.386 17.1816 17.8726C12.5714 16.0285 7.42862 16.0285 2.8185 17.8726C1.53502 18.386 0.164529 17.3549 0.302077 15.9795L0.523583 13.7644C0.840421 10.596 0.840421 7.40395 0.523583 4.23557L0.302078 2.02051Z"
        fill="#B4A9FC"
      />
      <g filter="url(#filter0_d_9_106)">
        <rect
          x="3.99997"
          y="3.99997"
          width="12"
          height="10"
          rx="4"
          fill="url(#paint0_linear_9_106)"
        />
        <rect
          x="4.99997"
          y="4.99997"
          width="10"
          height="8"
          rx="3"
          stroke="url(#paint1_radial_9_106)"
          stroke-width="2"
        />
      </g>
      <g filter="url(#filter1_d_9_106)">
        <path
          d="M12 2.5C12 1.11929 13.1193 0 14.5 0C15.8807 0 17 1.11929 17 2.5V5.5C17 6.88071 15.8807 8 14.5 8C13.1193 8 12 6.88071 12 5.5V2.5Z"
          fill="url(#paint2_linear_9_106)"
        />
      </g>
      <g filter="url(#filter2_d_9_106)">
        <path
          d="M12 12.5C12 11.1193 13.1193 10 14.5 10C15.8807 10 17 11.1193 17 12.5V15.5C17 16.8807 15.8807 18 14.5 18C13.1193 18 12 16.8807 12 15.5V12.5Z"
          fill="url(#paint3_linear_9_106)"
        />
      </g>
      <g filter="url(#filter3_d_9_106)">
        <path
          d="M3.00003 12.5C3.00003 11.1193 4.11932 10 5.50003 10C6.88074 10 8.00003 11.1193 8.00003 12.5V15.5C8.00003 16.8807 6.88074 18 5.50003 18C4.11932 18 3.00003 16.8807 3.00003 15.5V12.5Z"
          fill="url(#paint4_linear_9_106)"
        />
      </g>
      <g filter="url(#filter4_d_9_106)">
        <path
          d="M3.00003 2.5C3.00003 1.11929 4.11932 0 5.50003 0C6.88074 0 8.00003 1.11929 8.00003 2.5V5.5C8.00003 6.88071 6.88074 8 5.50003 8C4.11932 8 3.00003 6.88071 3.00003 5.5V2.5Z"
          fill="url(#paint5_linear_9_106)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_106"
          x="-4.00003"
          y="-3.05176e-05"
          width="28"
          height="26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_106"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_9_106"
          x="4.00003"
          y="-4"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_106"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_9_106"
          x="4.00003"
          y="6"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_106"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_9_106"
          x="-4.99997"
          y="6"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_106"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_9_106"
          x="-4.99997"
          y="-4"
          width="21"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.148194 0 0 0 0 0.235583 0 0 0 0 0.585139 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_106"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_106"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_9_106"
          x1="8.82085"
          y1="3.97226"
          x2="12.0583"
          y2="14.5171"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_9_106"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.9542 -2.9791) rotate(131.532) scale(15.0005 15.5826)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_9_106"
          x1="14.0087"
          y1="-0.0221822"
          x2="18.0469"
          y2="6.82838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_9_106"
          x1="14.0087"
          y1="9.97782"
          x2="18.0469"
          y2="16.8284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_9_106"
          x1="5.00867"
          y1="9.97782"
          x2="9.0469"
          y2="16.8284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_9_106"
          x1="5.00867"
          y1="-0.0221822"
          x2="9.0469"
          y2="6.82838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2F5FF" />
          <stop offset="0.151042" stop-color="#F8F9FE" />
          <stop offset="1" stop-color="#D6DBF1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>

          </a>
        </Widget>
      </div>
    </div>
  );
}

export default Home;
