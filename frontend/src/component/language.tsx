import ThailandFlag from '../assets/flag/thailand.png';
import AmericaFlag from '../assets/flag/america.png';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Language() {
    const { i18n } = useTranslation();
    const [checked, setChecked] = useState(i18n.language === 'th');
    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        i18n.changeLanguage(newChecked ? 'th' : 'en');
    };

    useEffect(() => {
        setChecked(i18n.language === 'th');
    }, [i18n.language]);


    return (
        <div className="flex items-center gap-2">
            {/* Toggle Box */}
            <div className="relative flex items-center justify-between 
                  bg-gray-200  w-22 
                  rounded-lg transition-colors duration-300">

                {/* Hidden checkbox */}
                <input
                    type="checkbox"
                    id="lang-toggle"
                    className="hidden peer"
                    checked={checked}
                    onChange={handleToggle}
                />

                {/* Label toggle */}
                <label
                    htmlFor="lang-toggle"
                    className="flex z-10 items-center justify-center w-full h-11 shadow-lg duration-300
                 [box-shadow:1px_1px_0px_1px_#075985] 
                 border-2 border-gray-800 
                 rounded-lg cursor-pointer 
                 dark:[box-shadow:1px_1px_0px_1px_#eab92d]
                 peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] 
                 hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
                ></label>

                {/* Flag TH */}
                <img
                    src={ThailandFlag}
                    alt="TH"
                    className=" ml-1 absolute w-8 h-8 object-contain duration-300 peer-checked:opacity-0 opacity-100"
                />

                {/* Flag EN */}
                <img
                    src={AmericaFlag}
                    alt="EN"
                    className="  ml-1 absolute w-8 h-8 object-contain duration-300 peer-checked:opacity-100 opacity-0"
                />

                {/* Label Text */}
                <p className="absolute ml-10 text-sm font-medium text-gray-800">TH/EN</p>

            </div>


        </div>
    );
}

export default Language;
