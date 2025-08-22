import { useTranslation } from 'react-i18next';
import Profile from '../assets/image/profile.jpg';
import '../App.css';
// import { FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { IoPerson } from "react-icons/io5";
// import { MdHomeWork } from "react-icons/md";
// import { CgDetailsLess } from "react-icons/cg";
// import { CgDetailsMore } from "react-icons/cg";
import calculateMonths from '../handle/calculateMonths';
// import { PiBagSimpleDuotone } from "react-icons/pi";
// import { GiComputing } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";
// import { SiPhp } from "react-icons/si";
// import { SiPython } from "react-icons/si";
// import { PiFileSqlFill } from "react-icons/pi";
// import { GoDotFill } from "react-icons/go";
// import { BsDot } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";


function Portfolio() {
  const { t } = useTranslation();


  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl font-bold dark:text-gray-50 text-gray-900">
        {t('title')}
      </h1>

      <div className=" p-5 m-5 border-2 border-gray-900 dark:border-gray-50 rounded-3xl">

        {/* Strat Profile */}
        <div className='flex flex-col sm:flex-row  items-center justify-center gap-3 mb-3 
        text-gray-900 dark:text-gray-50 text-2xl font-bold'>
          <p className="">
            {t('first name')}
          </p>
          <p className="">
            {t('last name')}
          </p>
          <p className="">(
            {t('name')})
          </p>
        </div>

        <img src={Profile} alt="Profile" className="m-3 mx-auto w-50 h-50 rounded-full" />

        {/* End Profile */}

        {/* <div className="relative inline-block">

          <img src={Profile} alt="Profile"
            className="relative z-20 mx-auto w-50 h-50 rounded-full border-3 border-indigo-300 dark:border-indigo-900" />

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[210px] h-[205px] bg-indigo-300 dark:bg-indigo-900  arrow-down z-10"></div>

          <div className='absolute top-[51%] left-1/2 transform -translate-x-1/2 z-30 text-left font-lg font-bold text-gray-900 dark:text-gray-50'>
            <div className="flex items-center justify-left gap-2 pb-1">
              <IoPerson />
              <p>{t('name')}</p>
            </div>
            <div className="flex items-center justify-left gap-2 pb-1">
              <FaPhone />
              <p>093-263-2562</p>
            </div>
            <div className="flex items-center justify-left gap-2 pb-1">
              <MdEmail />
              <p>up.patihan@gmail.com</p>
            </div>
          </div>
        </div> */}

        {/* Strat History */}
        <div className='py-5 '>
          <p className=" text-lg font-bold underline text-left text-gray-900 dark:text-gray-50">
            {t('history')}
          </p>
          <p className="text-sm text-left text-gray-900 dark:text-gray-50">
            {t('history detail')}
          </p>
        </div>
        {/* End History */}

        {/* Strat Exp */}
        <div className='py-5'>
          <p className="text-lg font-bold underline text-left  text-gray-900 dark:text-gray-50">
            {t('experience')}
          </p>
          <Timeline>
            <TimelineItem>
              <TimelinePoint className='' />
              <TimelineContent >
                <TimelineTime  className='text-sm text-gray-700 dark:text-gray-200'>{t('exp3')}
                  <span className="ml-3 relative -top-0.3 inline-flex items-center  rounded-lg bg-indigo-400/30 dark:bg-indigo-900 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-50 inset-ring inset-ring-indigo-400/30">{calculateMonths()} {t('month')}</span>
                </TimelineTime>
                <TimelineTitle  className=' text-md ext-gray-900 dark:text-gray-50'>{t('exp name3')}</TimelineTitle>
                <TimelineBody className='text-sm text-gray-700 dark:text-gray-200'>
                  {t('exp detail3')}
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className='-mt-5'>
              <TimelinePoint className='' />
              <TimelineContent>
                <TimelineTime className='text-sm text-gray-700 dark:text-gray-200'>{t('exp2')}
                  <span className="ml-3 relative -top-0.3 inline-flex items-center  rounded-lg bg-indigo-400/30 dark:bg-indigo-900 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-50 inset-ring inset-ring-indigo-400/30">4 {t('month')}</span>
                </TimelineTime>
                <TimelineTitle className='text-md text-gray-900 dark:text-gray-50'>{t('exp name2')}</TimelineTitle>
                <TimelineBody className='text-sm text-gray-700 dark:text-gray-200'>
                  {t('exp detail2')}
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className='-mt-5'>
              <TimelinePoint className='' />
              <TimelineContent>
                <TimelineTime className='text-sm text-gray-700 dark:text-gray-200'>{t('exp1')}
                  <span className="ml-3 relative -top-0.3 inline-flex items-center  rounded-lg bg-indigo-400/30 dark:bg-indigo-900 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-50 inset-ring inset-ring-indigo-400/30">4 {t('month')}</span>
                  <span className="ml-3 relative -top-0.3 inline-flex items-center  rounded-lg bg-blue-400/30 dark:bg-blue-700 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-50 inset-ring inset-ring-blue-300/50">{t('intern')}</span>
                </TimelineTime>
                <TimelineTitle className='text-md text-gray-900 dark:text-gray-50'>{t('exp name1')}</TimelineTitle>
                <TimelineBody className='text-sm text-gray-700  dark:text-gray-200'>
                  {t('exp detail1')}
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        {/* End Exp */}

        {/* Strat Educate */}
        <div className='pb-6'>
          <p className="text-lg font-bold underline text-left text-gray-900 dark:text-gray-50">
            {t('educate')}
          </p>
          <dl className=" text-gray-900 dark:text-gray-50">
            <dt className="flex items-center gap-2 text-md">
              <PiToolboxFill />
              {t('degree')}
            </dt>
            <dd className="ml-4 text-sm ">
              {t('com-sci')}
            </dd>
          </dl>
        </div>
        {/* End Educate */}

        {/* Strat Skill */}
        <div className='py-5'>
          <p className="text-lg font-bold underline text-left mt-2 text-gray-900 dark:text-gray-50">
            {t('hard skill')}
          </p>
          <dl className="text-gray-900 dark:text-gray-50">
            <dt className="flex items-center gap-2 text-md">
              <FaFileCode className='text-sm'/>
              {t('code')}
            </dt>
            <dd className="ml-4 text-sm">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  HTML
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  CSS
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  JavaScript
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  TypeScript
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  PHP
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Python
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  C
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  SQL
                </li>
              </ul>
            </dd>
            <dt className="flex items-center gap-2 text-md pt-1">
              <IoLibrary className='text-md'/>
              {t('library')}
            </dt>
            <dd className="ml-4 text-sm">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Laravel
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  React
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Next.js
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Bootstrap
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  jQuery
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  Axios
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  FastAPI
                </li>
              </ul>
            </dd>
            <dt className="flex items-center gap-2 text-md pt-1">
              <FaTools className='text-sm'/>
              {t('tool')}
            </dt>
            <dd className="ml-4 text-sm">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <li className="flex items-center">
                  <LuDot className="text-xl" />
                  Visual Studio Code
                </li>
                <li className="flex items-center">
                  <LuDot className="text-xl" />
                  Pycharm
                </li>
                <li className="flex items-center">
                  <LuDot className="text-xl" />
                  Postman
                </li>
                <li className="flex items-center">
                  <LuDot className="text-xl" />
                  MySql
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  MariaDB
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  Postgresql
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  Oracle
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  DBeaver
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  BloomRPC
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  Git
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  Ubuntu
                </li>
                <li className="flex items-center"><LuDot className="text-xl" />
                  Arduino
                </li>
              </ul>
            </dd>
          </dl>
        </div>
        {/* End Skill */}

        {/* Strat Character */}
        <div className='py-5'>
          <p className="text-lg font-bold underline text-left mt-2 text-gray-900 dark:text-gray-50">
            {t('soft skill')}
          </p>
          <dt className=" text-gray-900 dark:text-gray-50">
            <dd className="ml-4 text-sm">
              <ul className="space-y-1">
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char1')}
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char2')}
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char3')}
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char4')}
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char5')}
                </li>
                <li className="flex items-center gap-1">
                  <LuDot className="text-xl" />
                  {t('char6')}
                </li>

              </ul>
            </dd>
          </dt>
        </div>
        {/* End Character */}


        <div>

        </div>


      </div>

    </div>
  );
}


export default Portfolio;
