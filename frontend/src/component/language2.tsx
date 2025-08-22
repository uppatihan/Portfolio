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
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={checked} onChange={handleToggle} />
            <div className="w-24 h-12 rounded-full transition-colors duration-300 dark:bg-gray-300 bg-gray-700">
                <div className={`absolute top-1 left-1 w-10 h-10 dark:bg-gray-700 bg-white rounded-full transition-transform duration-450 flex items-center justify-center ${checked ? 'translate-x-12' : ''}`}>
                    <img src={checked ?  AmericaFlag : ThailandFlag} alt="flag" className="w-9 h-9 object-contain" />
                </div>
            </div>
        </label>
    );
}

export default Language;
