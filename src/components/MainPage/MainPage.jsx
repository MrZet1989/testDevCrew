import React from 'react'
import style from './main.module.css'
import { CgFacebook } from 'react-icons/cg'
import { FiInstagram } from 'react-icons/fi'
import { ImTwitter } from 'react-icons/im'
import { BiSearch } from 'react-icons/bi'

const MainPage = () => {

  return (
    <div className={style.mainPage}>
      <div className={style.sides}>
        <div className={style.leftSide}>
          <div className={style.title}>Awesome tools for Designer & Developer.</div>
          <div className={style.text}>Antool is a web collection of information on paid or free Design and Development
            tools
          </div>
          <div className={style.search}>
            <BiSearch className={style.searchIcon}/>
            <input placeholder='find more than 430+ tools...' className={style.searchInput}/>
            <button className={style.searchBtn}>Search</button>
          </div>
          <div className={style.social}>
            <CgFacebook className={style.mainPageIcons}/>
            <FiInstagram className={style.mainPageIcons}/>
            <ImTwitter className={style.mainPageIcons}/>
          </div>
        </div>
        <div className={style.rightSide}>
          <svg className={style.mainSvg} width="589" height="568" viewBox="0 0 589 568" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4"
                  d="M335.43 255.344C328.204 251.178 323.019 251.093 319.874 255.004C316.644 258.915 315.114 265.546 315.114 274.812V324.969C315.114 334.49 314.264 342.396 312.478 348.687C310.693 355.233 307.718 359.824 303.638 362.544C299.643 365.35 294.202 366.03 287.317 364.755C280.602 363.564 272.186 359.994 262.155 354.213L257.395 351.408V311.877L263.43 315.363C270.656 319.528 275.416 320.038 277.796 317.063C280.346 314.087 281.622 307.967 281.622 298.7V254.494C281.622 242.932 282.727 233.836 285.022 227.205C287.232 220.489 291.737 216.238 298.453 214.368C291.737 204.762 287.232 195.24 285.022 185.974C282.812 176.708 281.707 166.336 281.707 154.775V110.568C281.707 101.302 280.432 93.651 277.881 87.7851C275.501 82.0043 270.656 76.9886 263.515 72.823L257.48 69.3375V29.8069L262.24 32.6123C272.271 38.3931 280.687 44.599 287.402 51.1449C294.287 57.7759 299.728 64.7469 303.723 72.2279C307.888 79.709 310.863 87.7001 312.563 96.2864C314.349 104.618 315.199 113.544 315.199 123.065V173.222C315.199 182.489 316.814 190.99 319.959 198.556C323.189 206.122 328.374 212.073 335.515 216.153L335.43 255.344Z"
                  fill="url(#paint0_linear_1_421)"/>
            <path opacity="0.4"
                  d="M153.349 110.058C160.574 114.224 165.759 114.309 168.905 110.398C172.135 106.488 173.665 99.8568 173.665 90.5905V40.4334C173.665 30.912 174.515 23.0059 176.3 16.715C178.085 10.169 180.975 5.57839 184.971 2.77299C189.136 0.0526013 194.576 -0.627496 201.291 0.562674C208.177 1.83786 216.677 5.40837 226.708 11.2742L231.468 14.0796V53.6102L225.433 50.1247C218.207 45.9591 213.362 45.3641 210.812 48.3395C208.432 51.3999 207.242 57.5208 207.242 66.8721V111.078C207.242 122.555 206.137 131.736 203.842 138.367C201.631 145.083 197.126 149.334 190.411 151.204C197.126 160.811 201.631 170.332 203.842 179.598C206.052 188.865 207.157 199.236 207.157 210.798V255.004C207.157 264.27 208.347 271.836 210.727 277.702C213.277 283.568 218.122 288.669 225.348 292.749L231.383 296.235V335.766L226.623 332.96C216.592 327.179 208.092 320.888 201.206 314.342C194.491 307.797 189.051 300.826 184.885 293.259C180.89 285.863 178 277.872 176.3 269.371C174.515 261.04 173.665 252.114 173.665 242.592V192.435C173.665 183.169 172.05 174.668 168.905 167.101C165.674 159.535 160.489 153.585 153.349 149.504V110.058Z"
                  fill="url(#paint1_linear_1_421)"/>
            <path opacity="0.15" d="M359.996 10.9343L539.442 114.564L539.357 544.81L359.911 441.266L359.996 10.9343Z"
                  fill="url(#paint2_linear_1_421)"/>
            <path d="M326.249 67.2971L469.058 149.674V189.205L326.249 106.828V67.2971Z" fill="#587298"/>
            <path opacity="0.2" d="M383.373 250.329L518.701 328.455V448.067L383.373 369.941V250.329Z"
                  fill="url(#paint3_linear_1_421)"/>
            <path opacity="0.15" d="M382.012 158.6L519.38 237.916V251.433L382.012 172.117V158.6Z" fill="white"/>
            <path opacity="0.15" d="M382.012 185.804L500.764 254.324V267.841L382.012 199.321V185.804Z" fill="white"/>
            <path opacity="0.15" d="M382.012 212.668L482.828 270.816V284.333L382.012 226.185V212.668Z" fill="white"/>
            <path opacity="0.2" d="M359.996 10.9343L539.442 114.564V172.202L359.911 68.6576L359.996 10.9343Z"
                  fill="url(#paint4_linear_1_421)"/>
            <path opacity="0.2"
                  d="M404.794 66.0221C404.794 74.7784 399.693 78.859 393.403 75.2034C387.113 71.5479 382.012 61.6015 382.012 52.8453C382.012 44.089 387.113 40.0084 393.403 43.6639C399.693 47.3195 404.794 57.3509 404.794 66.0221Z"
                  fill="white"/>
            <path opacity="0.15" d="M36.6372 142.703L589 461.499L588.915 892L36.5522 573.205L36.6372 142.703Z"
                  fill="url(#paint5_linear_1_421)"/>
            <path d="M0 248.798L142.723 331.175V370.705L0 288.414V248.798Z" fill="#EA8C4F"/>
            <path opacity="0.15" d="M73.8689 357.444L390.768 540.39V553.907L73.8689 370.961V357.444Z" fill="white"/>
            <path opacity="0.15" d="M73.8689 384.648L347.245 542.43V555.947L73.8689 398.165V384.648Z" fill="white"/>
            <path opacity="0.15" d="M73.8689 411.596L306.528 545.915V559.432L73.8689 425.113V411.596Z" fill="white"/>
            <path opacity="0.2" d="M22.0158 425.029L253.995 558.923V678.535L22.0158 544.556V425.029Z"
                  fill="url(#paint6_linear_1_421)"/>
            <path opacity="0.15" d="M45.3922 469.15L229.683 575.5V589.017L45.3922 482.667V469.15Z" fill="white"/>
            <path opacity="0.15" d="M45.3922 496.354L192.961 581.536V595.053L45.3922 509.785V496.354Z" fill="white"/>
            <path opacity="0.2" d="M36.6368 142.703L588.235 461.159V519.477L36.6368 201.106V142.703Z"
                  fill="url(#paint7_linear_1_421)"/>
            <path opacity="0.2"
                  d="M96.7358 206.547C96.7358 215.304 91.6355 219.384 85.3451 215.729C79.0547 212.073 73.9544 202.127 73.9544 193.37C73.9544 184.614 79.0547 180.534 85.3451 184.189C91.6355 187.845 96.7358 197.876 96.7358 206.547Z"
                  fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_1_421" x1="384.36" y1="17.8759" x2="245.12" y2="259.239"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#424C57"/>
                <stop offset="0.903" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1_421" x1="303.984" y1="1.51234" x2="164.727" y2="242.845"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#414B56"/>
                <stop offset="0.903" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_1_421" x1="542.816" y1="116.519" x2="371.208" y2="413.807"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_1_421" x1="476.95" y1="304.285" x2="429.254" y2="386.909"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_1_421" x1="421.521" y1="11.8282" x2="476.243" y2="166.739"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#424C58"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_1_421" x1="405.97" y1="355.856" x2="315.072" y2="513.362"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint6_linear_1_421" x1="163.887" y1="506.882" x2="116.192" y2="589.507"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#434D58"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint7_linear_1_421" x1="173.501" y1="95.7139" x2="382.973" y2="450.519"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#546F94"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>
    </div>
  )
}

export default MainPage