import saveImage from "./assets/images/boy.webp";

function BrandIcon({ type }) {
    const common = {
        width: "100%",
        height: "100%",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

    switch (type) {
        case "content-note":
            return (
                <svg {...common}>
                    <rect x="8" y="6" width="24" height="28" rx="3" fill="#4A3AFF" />
                    <path d="M13 12H27M13 17H27M13 22H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="25" cy="24" r="3" fill="#FFC700" />
                    <path d="M24 25L27 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );

        case "google-docs":
            return (
                <svg {...common}>
                    <rect x="10" y="6" width="20" height="28" rx="3" fill="#4285F4" />
                    <path d="M24 6V13H30" fill="#AECBFA" />
                    <path d="M14 17H26M14 21H26M14 25H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );

        case "reddit":
            return (
                <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white" />
                </svg>
            );

        case "linkedin":
            return (
                <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" /></svg>
            );

        case "drive":
            return (
                <svg width="800px" height="800px" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M29.5,21l-3.1708,5.5489A3.07,3.07,0,0,1,23.6459,28H8.3541a3.07,3.07,0,0,1-2.6833-1.4511L4.3687,24.27,9.7578,21Z" fill="#4285f4" /><path d="M12.3822,4.13a3.2262,3.2262,0,0,0-1.7067,1.4276L2.9591,18.76a3.07,3.07,0,0,0-.1012,3.0489l1.53,2.4658L9.7579,21,16,10.32Z" fill="#00ac47" /><path d="M9.7578,21H2.568a2.6543,2.6543,0,0,0,.29.8089L4.38,24.2632l-.0115.007L5.6709,26.549A2.8267,2.8267,0,0,0,7.008,27.6974L9.7578,21l-.0081.0049Z" fill="#0066da" /><path d="M19.6068,4.13a3.2256,3.2256,0,0,1,1.7066,1.4276L29.03,18.76a3.07,3.07,0,0,1,.1013,3.0489l-1.5295,2.4658L22.2311,21,15.9889,10.32Z" fill="#ffba00" /><path d="M22.2311,21h7.19a2.6541,2.6541,0,0,1-.29.8089l-1.5224,2.4544.0116.007L26.3181,26.549a2.8272,2.8272,0,0,1-1.3371,1.1484L22.2312,21l.0081.0049Z" fill="#ea4435" /><path d="M19.6155,4.1342l.0023-.004a2.7726,2.7726,0,0,0-.3609-.0983L16,4l-3.2569.0319a2.7726,2.7726,0,0,0-.3609.0983,3.0224,3.0224,0,0,0-.367.1666L15.9889,10.32,19.977,4.2993A3.03,3.03,0,0,0,19.6155,4.1342Z" fill="#188038" /></svg>
            );

        case "facebook":
            return (
                <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></svg>
            );

        case "sheets":
            return (
                // <svg {...common}>
                //     <rect x="9" y="6" width="22" height="28" rx="3" fill="#0F9D58" />
                //     <path d="M24 6V13H31" fill="#34A853" />
                //     <path d="M14 17H26M14 21H26M14 25H26" stroke="white" strokeWidth="1.8" />
                //     <path d="M18 16V27M22 16V27" stroke="white" strokeWidth="1.5" />
                // </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                >
                    <path
                        fill="#34A853"
                        d="M5 2.5A1.5 1.5 0 0 1 6.5 1H15l4 4v17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V2.5z"
                    />
                    <path fill="#188038" d="M15 1v4h4z" />
                    <rect x="8" y="9" width="8" height="9" rx=".5" fill="white" />
                    <path
                        fill="#34A853"
                        d="M9 10h2v2H9v-2zm3 0h2v2h-2v-2zM9 13h2v2H9v-2zm3 0h2v2h-2v-2zM9 16h2v1H9v-1zm3 0h2v1h-2v-1z"
                    />
                </svg>
            );

        case "whatsapp":
            return (
                <svg width="700px" height="700px" viewBox="-4 -3 30 30" id="meteor-icon-kit__regular-whatsapp" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="#008000" /></svg>
            );

        case "instagram":
            return (
                <svg {...common}>
                    <g transform="translate(0.2 0.8) scale(1.2)">
                        <rect
                            x="6"
                            y="6"
                            width="24"
                            height="24"
                            rx="7"
                            fill="url(#instagramGradient)"
                        />
                        <circle
                            cx="18"
                            cy="18"
                            r="5.5"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <circle
                            cx="25"
                            cy="10"
                            r="1.5"
                            fill="white"
                        />

                        <defs>
                            <linearGradient
                                id="instagramGradient"
                                x1="8"
                                y1="32"
                                x2="32"
                                y2="8"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#F58529" />
                                <stop offset="0.45" stopColor="#DD2A7B" />
                                <stop offset="1" stopColor="#8134AF" />
                            </linearGradient>
                        </defs>
                    </g>
                </svg>
            );

        case "gmail":
            return (
                <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white" />
                    <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335" />
                    <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05" />
                    <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853" />
                    <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F" />
                    <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F" />
                    <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F" />
                    <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4" />
                </svg>
            );

        case "x":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
            );

        case "powerpoint":
            return (
                <svg {...common}>
                    <rect x="8" y="7" width="24" height="26" rx="3" fill="#D24726" />
                    <path d="M17 13H21.5C25 13 27 14.8 27 17.5C27 20.2 25 22 21.5 22H19.5V27H17V13ZM19.5 15.5V19.5H21.2C23.3 19.5 24.3 18.8 24.3 17.5C24.3 16.2 23.3 15.5 21.2 15.5H19.5Z" fill="white" />
                </svg>
            );

        case "youtube":
            return (
                <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z" /><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z" /></svg>
            );

        case "forms":
            return (
                <svg {...common}>
                    <rect x="9" y="6" width="22" height="28" rx="3" fill="#673AB7" />
                    <path d="M15 13H25M15 18H25M15 23H22M15 28H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );

        case "slides":
            return (
                <svg {...common}>
                    <rect x="8" y="6" width="24" height="28" rx="3" fill="#F9AB00" />
                    <rect x="13" y="12" width="14" height="11" rx="1" fill="white" />
                    <path d="M13 27H27" stroke="white" strokeWidth="2" />
                </svg>
            );

        case "video":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#000000"
                        d="M412.42,174.719l39.922,57.688h-45.141l-39.938-57.688h-57.109l39.938,57.688h-45.156l-39.922-57.688h-57.109l39.922,57.688h-45.141l-39.922-57.688h-57.109l39.922,57.688H100.42l-38.453-55.578L459.779,65.844l-4.484-16.047l-0.953-3.438l-6.203-22.203C444.186,9.969,431.592,0.656,417.654,0l-21.672,62.641l-43.5,12.141l22.406-64.75l-55,15.344l-22.406,64.75l-43.484,12.125l22.406-64.75l-55.016,15.344l-22.406,64.766l-43.484,12.125L177.904,65l-55.016,15.344l-22.391,64.75l-43.484,12.125l22.391-64.75l-18.516,5.172c-17.703,4.938-28.063,23.297-23.125,41.016l6.203,22.188l-1.297,0.375l5.438,19.469l1.328-0.375v52.094v2.219v244.094c0,18.375,14.906,33.281,33.281,33.281h359.469c18.391,0,33.281-14.906,33.281-33.281V234.625v-2.219v-57.688H412.42z
        M315.576,376.969L230.904,427.5c-0.609,0.375-1.375,0.406-1.984,0.031c-0.625-0.344-1.016-1-1.016-1.734v-50.531V324.75c0-0.719,0.391-1.375,1.016-1.75c0.609-0.344,1.375-0.313,1.984,0.031l84.672,50.531c0.594,0.359,0.953,1.031,0.953,1.703C316.529,375.969,316.17,376.625,315.576,376.969z"
                    />
                </svg>
            );

        default:
            return null;
    }
}

function WhyChooseUsSection() {
    const tools = [
        { id: "content-note", type: "content-note", position: "left-[19.5%] top-[12%]", delay: "0.2s" },
        { id: "google-docs", type: "google-docs", position: "left-[35.5%] top-[7.5%]", delay: "0s" },
        { id: "reddit", type: "reddit", position: "left-[58.5%] top-[8.5%]", delay: "0.8s" },
        { id: "linkedin", type: "linkedin", position: "left-[67.5%] top-[10.5%]", delay: "1.4s" },
        { id: "drive", type: "drive", position: "left-[85.5%] top-[9.5%]", delay: "0.5s" },
        { id: "facebook", type: "facebook", position: "left-[8%] top-[30.5%]", delay: "1.1s" },
        { id: "instagram", type: "instagram", position: "left-[93.5%] top-[27%]", delay: "1.8s" },
        { id: "sheets", type: "sheets", position: "left-[27.5%] top-[39.5%]", delay: "0.3s" },
        { id: "whatsapp", type: "whatsapp", position: "left-[81.5%] top-[45.5%]", delay: "1.6s" },
        { id: "gmail", type: "gmail", position: "left-[12%] top-[56.5%]", delay: "0.7s" },
        { id: "x", type: "x", position: "left-[92.2%] top-[59.5%]", delay: "1.3s" },
        { id: "powerpoint", type: "powerpoint", position: "left-[22.2%] top-[78.5%]", delay: "1.9s" },
        { id: "youtube", type: "youtube", position: "left-[33.7%] top-[85%]", delay: "0.9s" },
        { id: "forms", type: "forms", position: "left-[46%] top-[85.5%]", delay: "1.5s" },
        { id: "slides", type: "slides", position: "left-[72.5%] top-[82.5%]", delay: "0.4s" },
        { id: "video", type: "video", position: "left-[89.5%] top-[80.5%]", delay: "1.2s" }
    ];

    return (
        <section className="w-full overflow-hidden bg-white px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <style>
                {`
                    @keyframes sorttedFloat {
                        0%, 100% { transform: translate3d(0, 0, 0); }
                        25% { transform: translate3d(0, -5px, 0); }
                        50% { transform: translate3d(0, 2px, 0); }
                        75% { transform: translate3d(0, -3px, 0); }
                    }

                    @keyframes sorttedStar {
                        0%, 100% { transform: rotate(0deg) scale(1); }
                        50% { transform: rotate(18deg) scale(1.12); }
                    }

                    @keyframes sorttedDot {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.35); }
                    }

                    .sortted-floating-icon {
                        animation-name: sorttedFloat;
                        animation-duration: 3.8s;
                        animation-timing-function: ease-in-out;
                        animation-iteration-count: infinite;
                        animation-fill-mode: both;
                        will-change: transform;
                    }

                    .sortted-star {
                        animation: sorttedStar 2.8s ease-in-out infinite;
                    }

                    .sortted-dot {
                        animation: sorttedDot 2.2s ease-in-out infinite;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .sortted-floating-icon,
                        .sortted-star,
                        .sortted-dot {
                            animation: none;
                        }
                    }
                `}
            </style>

            <div className="mx-auto w-full max-w-[1200px]">
                {/* Heading */}
                <div className="relative z-20 flex flex-col items-center text-center">
                    <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[30px] xl:text-[45px] font-bold text-[#17161F] leading-tight tracking-[-0.03em] whitespace-normal lg:whitespace-nowrap">
                        Save 50+ Hrs and <span className="text-[#00C264]">$800+</span> Monthly
                    </h2>
                </div>

                {/* Main Visual Frame - Expanded max width */}
                <div className="relative mx-auto mt-4 aspect-[16/9] w-full max-w-[1100px]">
                    {/* Background Graphic containing native paths and character */}
                    <img
                        src={saveImage}
                        alt="Person using multiple marketing and productivity tools"
                        className="h-full w-full object-contain"
                    />

                    {/* Animated Icons Floating on Image Nodes */}
                    {tools.map((tool) => (
                        <div
                            key={tool.id}
                            className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${tool.position}`}
                            style={{ animationDelay: tool.delay }}
                        >
                            <div className="sortted-floating-icon flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#E8E8F0] bg-white p-1 shadow-[0_6px_18px_rgba(16,24,40,0.12)] sm:h-11 sm:w-11 md:h-12 md:w-12 md:p-1.5">
                                <BrandIcon type={tool.type} />
                            </div>
                        </div>
                    ))}

                    {/* Decorative Stars and Dots */}
                    <div className="sortted-star absolute left-[45%] top-[10%] z-10">
                        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="#6338F5">
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    <div className="sortted-star absolute right-[32%] top-[30%] z-10">
                        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="#6338F5">
                            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                        </svg>
                    </div>

                    <span className="sortted-dot absolute left-[10%] top-[25%] z-10 h-2 w-2 rounded-full bg-[#F04DA8]" />
                    <span className="sortted-dot absolute left-[6%] top-[68%] z-10 h-2 w-2 rounded-full bg-[#FFB13B]" />
                    <span className="sortted-dot absolute right-[8%] top-[72%] z-10 h-2 w-2 rounded-full bg-[#FFB13B]" />
                    <span className="sortted-dot absolute right-[5%] top-[33%] z-10 h-2 w-2 rounded-full bg-[#6338F5]" />
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;