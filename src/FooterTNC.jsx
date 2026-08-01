function FooterTNC() {
    return (
        <div className="w-full bg-[#101011]">

            <div className="max-w-[1200px] mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

                <p
                    className="text-[#8B8B8B] text-[14px]"
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
                        className="text-[#8B8B8B] text-[14px] hover:text-white transition"
                    >
                        Terms of Service
                    </a>

                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8B8B8B] text-[14px] hover:text-white transition"
                    >
                        Privacy Policy
                    </a>

                    <a
                        href="/refund-policy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8B8B8B] text-[14px] hover:text-white transition"
                    >
                        Refund Policy
                    </a>

                </div>

            </div>

        </div>
    );
}

export default FooterTNC;