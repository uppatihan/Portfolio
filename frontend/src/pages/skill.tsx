import { LuDot } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { FaFileCode } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import skill from "../assets/data/skill.json"


export default function ListSkill() {
    const { t } = useTranslation();

    return (
        <dl className="text-gray-900 dark:text-gray-50">
            <dt className="flex items-center gap-2 text-md">
                <FaFileCode className='text-sm' />
                {t('code')}
            </dt>
            <dd className="ml-4 text-sm">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {skill.programming.map((data, index) => (
                        <li key={index} className="flex items-center gap-1">
                            <LuDot className="text-xl" />
                            {data}
                        </li>
                    ))}
                </ul>
            </dd>

            <dt className="flex items-center gap-2 text-md pt-1">
                <IoLibrary className='text-md' />
                {t('library')}
            </dt>
            <dd className="ml-4 text-sm">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {skill.library.map((data, index) => (
                        <li key={index} className="flex items-center gap-1">
                            <LuDot className="text-xl" />
                            {data}
                        </li>
                    ))}
                </ul>
            </dd>

            <dt className="flex items-center gap-2 text-md pt-1">
                <FaTools className='text-sm' />
                {t('tool')}
            </dt>
            <dd className="ml-4 text-sm">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {skill.tool.map((data, index) => (
                        <li key={index} className="flex items-center gap-1">
                            <LuDot className="text-xl" />
                            {data}
                        </li>
                    ))}
                </ul>
            </dd>
        </dl>
    )
}
