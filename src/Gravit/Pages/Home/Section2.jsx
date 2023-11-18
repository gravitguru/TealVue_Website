import AbCard from '../../../assets/img/png/aboutcard.png'
import AbICO from '../../../assets/img/planticon.svg'
import Btn from './../../Components/Btn';
const Section2  = () => {
  return (
    <div className="frame flex yc flex-col md:flex-row">
      <div className='md:w-2/6'>
        <img src={AbCard} alt="" className='md:w-[90%]'/>
      </div>
      <div className='md:w-4/6 flex flex-col gap-3'>
        <h1 className='ht mt-2 md:mt-0'><span className='text-primary'>TealVue :</span> Pioneering Excellence in <span className='text-sec'>FinTech</span> <br className='hidden md:block'></br>and <span className='text-sec'>Data Analytics</span></h1>
        <div className='flex flex-col md:flex-row gap-4 ys'>
          <img src={AbICO } alt="" className='hidden md:block'/>
          <p className='dis py-2 mb-4'>TealVue Software Solutions: Your Fintech and Data Analytics partner in Chennai, India, led by seasoned professionals with 110+ years of combined expertise. Specializing in IT Project Management, Cloud solutions, and strategic consulting, we are dedicated to shaping a precision-driven and innovative data future</p>
          
        </div>
        <Btn lable={"about us"} link="/about"/>
      </div>
    </div>
  );
};

export default Section2 ;
