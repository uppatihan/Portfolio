import { useEffect, useState } from "react";

function Theme() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark"); 
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        
        <div className="relative flex items-center justify-center bg-gray-200 rounded-lg">
            {/* Hidden checkbox */}
            <input
                type="checkbox"
                id="react-option"
                className="hidden peer"
                // required
                onClick={() => setDarkMode(!darkMode)}

            />

            {/* Label toggle */}

                <label
                    htmlFor="react-option"
                    className="flex z-10 items-center relative justify-center w-11 h-11 shadow-lg duration-300 
                   peer-checked:[box-shadow:1px_1px_0px_1px_#eab92d] border-2 border-gray-800 peer-checked:border-gray-800 
                   rounded-lg cursor-pointer text-neutral-50 [box-shadow:1px_1px_0px_1px_#075985] 
                   peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]
                   "
                >
                </label>

                {/* SVG สีฟ้า */}
                <svg
                    className="absolute w-8 h-8 duration-300 peer-checked:opacity-0 opacity-100 "
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="svg-stroke-primary stroke-sky-800"
                        d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                </svg>

                {/* SVG สีเหลือง */}
                <svg
                    className="absolute w-10 h-10 duration-300 peer-checked:opacity-100 opacity-0"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="svg-stroke-primary stroke-yellow-500"
                        d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                </svg>

        </div>
    );
}

export default Theme;
