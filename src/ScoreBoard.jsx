import { useEffect, useState } from "react";

function ScoreBoardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2D2D48]">
      <ScoreBoard />
    </div>
  );
}

function ScoreBoard() {
  const [score, setScore] = useState(0);


  // Api ScoreBoard
  const [loading, setLoading] = useState(true);

// startAnimation
  // const startAnimation = () => {
  //   let current = 0;

  //   const timer = setInterval(() => {
  //     current++;

  //     setScore(current);

  //     if (current >= 100) {
  //       clearInterval(timer);
  //     }
  //   }, 20);
  // };

  const animateScore = (targetScore) => {
  let current = 0;

  const timer = setInterval(() => {
    current++;

    setScore(current);

    if (current >= targetScore) {
      clearInterval(timer);
    }
  }, 20);
};



useEffect(() => {
  fetch("http://localhost:8000/api/gauge-score")
    .then((res) => res.json())
    .then((data) => {
      animateScore(data.seo_score);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gauge API Error:", err);
      setLoading(false);
    });
}, []);






  return (
    <div className="flex flex-col items-center">

      <div className="relative w-[220px] h-[130px]">

        <svg
          width="220"
          height="120"
          viewBox="0 0 220 120"
        >
          {/* Background */}
          {/* White Outer Border */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#FFFFFF"
  strokeWidth="18"
/>

{/* Grey Base */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#E5E7EB"
  strokeWidth="16"
/>

         

          {/* Fixed Color Segments */}

       {/* Red */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#F04438"
  strokeWidth="16"
  strokeDasharray="55 229"
  strokeDashoffset="0"
  strokeLinecap="butt"
/>

{/* Orange */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#F79009"
  strokeWidth="16"
  strokeDasharray="55 229"
  strokeDashoffset="-57"
  strokeLinecap="butt"
/>

{/* Yellow */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#FACC15"
  strokeWidth="16"
  strokeDasharray="55 229"
  strokeDashoffset="-114"
  strokeLinecap="butt"
/>

{/* Light Green */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#6CCB5F"
  strokeWidth="16"
  strokeDasharray="55 229"
  strokeDashoffset="-171"
  strokeLinecap="butt"
/>

{/* Green */}
<path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#16A34A"
  strokeWidth="16"
  strokeDasharray="55 229"
  strokeDashoffset="-228"
  strokeLinecap="butt"
/>

          {/* Gray Cover - Reveals colors smoothly */}
          <path
  d="M20 100 A90 90 0 0 1 200 100"
  fill="none"
  stroke="#E5E7EB"
  strokeWidth="18"
  pathLength="100"
  strokeDasharray={`${100 - score} 100`}
  strokeDashoffset="0"
  transform="scale(-1,1)"
  transformOrigin="110px 100px"
  className="transition-all duration-75"
/>



        </svg>

        {/* Score */}
        <div className="absolute inset-0 flex items-center justify-center pt-10">
          <span className="text-[56px] font-semibold text-white">
            {loading ? "..." : score}
          </span>
        </div>

      </div>

      {/* <button
        onClick={startAnimation}
        className="
          mt-6
          px-5
          py-2
          rounded-lg
          bg-[#5D21B0]
          text-white
          font-medium
          hover:opacity-90
        "
      >
        Start Score
      </button> */}

    </div>
  );
}

export default ScoreBoardPage;