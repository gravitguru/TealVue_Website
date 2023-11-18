import Heroic from '../../../assets/img/png/heroico.png'
import Btn from '../../Components/Btn';
import { Link } from 'react-router-dom';
const Section1 = () => {
    return (
        <div className="w-full h-auto md:h-[520px] mt-2 boxblur p-3 py-8 md:p-8 flex yc flex-col md:flex-row">
            <div className='md:w-2/3 lg:w-1/2 text-center md:text-start flex flex-col gap-2 md:gap-7 py-3'>
                <h1 className='capitalize text-[#313131]  text-[25px] md:text-[2.5rem] leading-[30px] md:leading-[48px] font-bold'>
                    Unfurling <span className='text-primary'>infinite insights</span> <br /> from <span className="text-sec">Finite Data</span> 
                </h1>
                <p className='dis '>We provide Data Analytics solutions for Corporates and Institutions across various Industries and Sectors by usingthe latest tools and technologies .</p>
                <div className='lg:w-[80%] leading-7 flex gap-2 justify-between p-2 md:p-4 boxblurs font-medium text-[13px] md:text-[16px]'>
                    <ul>
                        <li>Fintech Solutions</li>
                        <li>Data Analytics</li>
                    </ul>
                    <ul>
                        <li>Cyber Security
                        </li>
                        <li>Cloud Solutions</li>
                    </ul>
                    <ul>
                        <li>Web applications</li>
                        <li>More.,</li>
                    </ul>
                </div>
                <div className='xc yc gap-4 md:xs hidden md:flex'>
                <Btn lable="Our Service" link="/service"/>
                <Link className='yc text-sec'><i className='icon-play text-[1rem] p-2 '></i> Our Products</Link>
                </div>
            </div>
            <div className='md:w-1/2 xyc flex-col'>
                <img src={Heroic} alt="" className='w-[85%] md:w-[100%] lg:w-[80%]'/>
                <div className='flex xc yc gap-4 md:xs md:hidden '>
                <Btn lable="Our Service" link="/service"/>
                <Link className='yc text-sec'><i className='icon-play text-[1rem] p-2 '></i> Our Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Section1;
