import logo from "./assets/images/footer/ftLogo.png";
import gdpr from "./assets/images/gdpr.png";

// import aws from "./assets/images/aws.svg";
// import facebook from "./assets/images/footer/fb.svg";
// import instagram from "./assets/images/footer/ig.svg";
// import linkedin from "./assets/images/footer/ln.svg";

function FooterSection() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <footer className="w-full overflow-hidden bg-[#101011]">
            <div className="mx-auto w-full max-w-[1200px] px-4 pt-12 pb-6 sm:px-6 sm:pt-16 lg:px-8 lg:pt-[80px]">

                {/* TOP */}
                <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] lg:gap-4">

                    {/* LEFT */}
                    <div className="flex min-w-0 min-h-[200px] flex-col justify-between">

                        <div>

                            {/* LOGO */}
                            <img
                                src={logo}
                                alt="Sortted"
                                className="w-[120px] object-contain sm:w-[140px]"
                            />

                            {/* SOCIAL */}
                            <div className="mt-5 mb-8 ml-1 flex flex-wrap items-center gap-3 sm:mt-6">

                                {/* FACEBOOK */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                >
                                    {/*
                                    <img
                                        src={facebook}
                                        alt="facebook"
                                        className="w-[11px] cursor-pointer opacity-90 transition hover:opacity-100"
                                    />
                                    */}

                                    <svg
                                        width="27px"
                                        height="27px"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                    >
                                        <path
                                            fill="#1877F2"
                                            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                                        />

                                        <path
                                            fill="#ffffff"
                                            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                                        />
                                    </svg>
                                </a>

                                <div className="h-[18px] w-[1px] bg-[#2A2A2A]" />

                                {/* INSTAGRAM */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                >
                                    {/*
                                    <img
                                        src={instagram}
                                        alt="instagram"
                                        className="w-[20px] cursor-pointer opacity-90 transition hover:opacity-100"
                                    />
                                    */}

                                    <svg
                                        width="27px"
                                        height="27px"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="28"
                                            height="28"
                                            rx="6"
                                            fill="url(#paint0_radial_87_7153)"
                                        />

                                        <rect
                                            x="2"
                                            y="2"
                                            width="28"
                                            height="28"
                                            rx="6"
                                            fill="url(#paint1_radial_87_7153)"
                                        />

                                        <rect
                                            x="2"
                                            y="2"
                                            width="28"
                                            height="28"
                                            rx="6"
                                            fill="url(#paint2_radial_87_7153)"
                                        />

                                        <path
                                            d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                                            fill="white"
                                        />

                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                                            fill="white"
                                        />

                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7705 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7705 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                                            fill="white"
                                        />

                                        <defs>
                                            <radialGradient
                                                id="paint0_radial_87_7153"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                                            >
                                                <stop stopColor="#B13589" />
                                                <stop
                                                    offset="0.79309"
                                                    stopColor="#C62F94"
                                                />
                                                <stop
                                                    offset="1"
                                                    stopColor="#8A3AC8"
                                                />
                                            </radialGradient>

                                            <radialGradient
                                                id="paint1_radial_87_7153"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                                            >
                                                <stop stopColor="#E0E8B7" />
                                                <stop
                                                    offset="0.444662"
                                                    stopColor="#FB8A2E"
                                                />
                                                <stop
                                                    offset="0.71474"
                                                    stopColor="#E2425C"
                                                />
                                                <stop
                                                    offset="1"
                                                    stopColor="#E2425C"
                                                    stopOpacity="0"
                                                />
                                            </radialGradient>

                                            <radialGradient
                                                id="paint2_radial_87_7153"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                                            >
                                                <stop
                                                    offset="0.156701"
                                                    stopColor="#406ADC"
                                                />
                                                <stop
                                                    offset="0.467799"
                                                    stopColor="#6A45BE"
                                                />
                                                <stop
                                                    offset="1"
                                                    stopColor="#6A45BE"
                                                    stopOpacity="0"
                                                />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </a>

                                <div className="h-[18px] w-[1px] bg-[#2A2A2A]" />

                                {/* LINKEDIN */}
                                <a
                                    href="https://www.linkedin.com/company/sorttedtechnologies/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    {/*
                                    <img
                                        src={linkedin}
                                        alt="linkedin"
                                        className="w-[20px] cursor-pointer opacity-90 transition hover:opacity-100"
                                    />
                                    */}

                                    <svg
                                        width="31px"
                                        height="31px"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                    >
                                        <path
                                            fill="#0A66C2"
                                            d="M13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865A.88.88 0 0013.11 2z"
                                        />

                                        <path
                                            fill="#FFFFFF"
                                            d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727z"
                                        />
                                    </svg>
                                </a>
                            </div>

                            {/* SECURITY & COMPLIANCE */}
                            <div className="mt-4 mb-3 text-[20px] font-bold text-white sm:text-[22px]">
                                <p>Security &amp; Compliance</p>
                            </div>

                            {/* GDPR */}
                            <div className="mt-2 flex w-full max-w-[145px] flex-1 items-center rounded-[12px] border border-white px-1 py-0.5">
                                <div className="mx-auto flex w-fit items-center gap-2 sm:gap-3">
                                    <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                                        <img
                                            src={gdpr}
                                            alt="GDPR COMPLIANT"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <p className="w-fit text-left text-[11px] uppercase leading-[1.3] tracking-[-0.01em] text-[#f4eee7] sm:text-[12px]">
                                        <span className="block">GDPR</span>
                                        <span className="block">COMPLIANT</span>
                                    </p>
                                </div>
                            </div>

                            {/* HOSTED ON AWS */}
                            <div className="mt-2 flex w-full max-w-[250px] flex-1 items-center px-1 py-1">
                                <div className="flex items-center gap-3">
                                    <p className="text-left text-[15px] leading-[1.3] tracking-[-0.01em] text-[#f4eee7] sm:text-[17px]">
                                        <span className="block">
                                            Hosted on AWS
                                        </span>
                                    </p>

                                    <div className="relative mt-2 h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                                        <svg
                                            width="50px"
                                            height="50px"
                                            viewBox="0 -30 150 150"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z"
                                                fill="#F90"
                                            />

                                            <path
                                                d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z"
                                                fill="#F90"
                                            />

                                            <path
                                                d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM LINKS */}
                        {/*
                        <div className="space-y-3">
                            <a
                                href="/terms"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[16px] text-[#8E8E8E] transition hover:text-white"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                Terms of Service
                            </a>

                            <a
                                href="/privacy"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[16px] text-[#8E8E8E] transition hover:text-white"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="/refund-policy"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[16px] text-[#8E8E8E] transition hover:text-white"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                Refund Policy
                            </a>
                        </div>
                        */}
                    </div>

                    {/* EMPTY CENTER */}
                    <div className="hidden lg:block" />

                    {/* RIGHT */}
                    <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-[80px] xl:gap-[120px]">

                        {/* FEATURES */}
                        <div className="min-w-0 sm:min-w-[170px]">
                            <h3
                                className="mb-3 text-[20px] text-white sm:text-[22px]"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                }}
                            >
                                Features
                            </h3>

                            <div className="space-y-2">
                                {[
                                    "SEO Keyword planner",
                                    "SEO Article Writer",
                                    "Content Studio",
                                    "Plagiarism Remover",
                                    // "Humanizer",
                                    // "GEO-AEO: Rank in AI",
                                    // "Site Audit",
                                    // "Social Listening",
                                    // "Social Auto-Publishing",
                                ].map((item, index) => (
                                    <p
                                        key={index}
                                        className="
                                            cursor-pointer
                                            text-[14px]
                                            leading-[24px]
                                            text-[#9A9A9A]
                                            transition
                                            hover:text-white
                                            sm:text-[15px]
                                        "
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div className="min-w-0 sm:min-w-[120px]">
                            <h3
                                className="mb-3 text-[20px] text-white sm:text-[22px]"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 700,
                                }}
                            >
                                Quick Links
                            </h3>

                            <div className="space-y-2">

                                {/* HOME */}
                                <p
                                    onClick={() => scrollToSection("home")}
                                    className="
                                        cursor-pointer
                                        text-[14px]
                                        leading-[24px]
                                        text-white
                                        transition
                                        hover:text-[#B8B8B8]
                                        sm:text-[15px]
                                    "
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Home
                                </p>

                                {/* FEATURES */}
                                <p
                                    onClick={() => scrollToSection("platform")}
                                    className="
                                        cursor-pointer
                                        text-[14px]
                                        leading-[24px]
                                        text-white
                                        transition
                                        hover:text-[#B8B8B8]
                                        sm:text-[15px]
                                    "
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Features
                                </p>

                                {/* PRICING */}
                                <p
                                    onClick={() => scrollToSection("pricing")}
                                    className="
                                        cursor-pointer
                                        text-[14px]
                                        leading-[24px]
                                        text-white
                                        transition
                                        hover:text-[#B8B8B8]
                                        sm:text-[15px]
                                    "
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Pricing
                                </p>

                                {/* BLOGS */}
                                <p>
                                    <a
                                        href="https://sortted.com/blog"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            cursor-pointer
                                            text-[14px]
                                            leading-[24px]
                                            text-white
                                            transition
                                            hover:text-[#B8B8B8]
                                            sm:text-[15px]
                                        "
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Blogs
                                    </a>
                                </p>

                                {/* FAQ */}
                                <p
                                    onClick={() => scrollToSection("faq")}
                                    className="
                                        cursor-pointer
                                        text-[14px]
                                        leading-[24px]
                                        text-white
                                        transition
                                        hover:text-[#B8B8B8]
                                        sm:text-[15px]
                                    "
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    FAQ
                                </p>

                                {/* CONTACT */}
                                <p
                                    onClick={() => scrollToSection("contact")}
                                    className="
                                        cursor-pointer
                                        text-[14px]
                                        leading-[24px]
                                        text-white
                                        transition
                                        hover:text-[#B8B8B8]
                                        sm:text-[15px]
                                    "
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Contact us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM LINE */}
                {/*
                <div className="mt-4 mb-4 h-[1px] w-full bg-[#1E1E1E]" />
                */}

                {/* COPYRIGHT */}
                {/*
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p
                        className="text-[14px] text-[#8B8B8B]"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                        }}
                    >
                        © 2026 SORTTED. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="/terms"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-[#8B8B8B] transition hover:text-white"
                        >
                            Terms of Service
                        </a>

                        <a
                            href="https://sortted.com/privacy"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-[#8B8B8B] transition hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/refund-policy"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[14px] text-[#8B8B8B] transition hover:text-white"
                        >
                            Refund Policy
                        </a>
                    </div>
                </div>
                */}
            </div>
        </footer>
    );
}

export default FooterSection;