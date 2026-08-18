import React from 'react';

export default function GetStarted() {
    return (
        <section className="bg-[#f7f6f4] py-24 px-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
                Get started today.
            </h2>
            <div className="flex flex-row items-center justify-center gap-3">
                <button
                    className="bg-[#0077d4] hover:bg-[#0066b8] text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-150 shadow-sm"
                >
                    Get Sortted free
                </button>
                <button
                    className="bg-[#eeebe7] hover:bg-[#e4e0da] text-[#0077d4] font-medium px-4 py-2 rounded-md text-sm transition-colors duration-150"
                >
                    Request a demo
                </button>
            </div>
        </section>
    );
}