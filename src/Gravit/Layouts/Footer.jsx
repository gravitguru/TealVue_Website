import PlantTree from '../../assets/img/png/Plntimg.png'
import logo from '../../assets/img/logo.svg'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row mt-20'>
      <div className='md:w-1/4 p-2 xyc'>
        <img src={PlantTree} alt="" className='' />
      </div>
      <div className='md:w-3/4 p-2'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className=' md:w-2/4 p-2 rounded-xl bg-white/20'>
            <img src={logo} alt="" className='mb-4' />
            <h1 className='font-semibold text-[18px] my-2' >Tealvue Software Solutions Private Limited</h1>
            <p className='dis'>51/117, Nelson Towers, 4th Wing, 1st Floor,<br></br>
              Nelson Manickam Road, Aminjikarai,<br></br>
              Chennai 600029, Tamil Nadu, India</p>
            <p className='dis text-primary'>CIN : DNJ3487NJFR</p>
          </div>
          <div className='md:w-2/4 flex justify-between'>
          <div className=' md:w-1/2'>
            <h1 className='font-semibold text-[18px] text-primary'>Quick Links</h1>
            {
              ["About Team", "Our Products", "Privacy policy", "Terms and condition", "Contact"].map((el, i) => {
                return <li className='list-none dis py-1'>{el}</li>
              })
            }
          </div>
          <div className=' md:w-1/2'>
            <h1 className='font-semibold text-[18px] text-primary'>Quick Links</h1>
            {
              ["About Team", "Our Products", "Privacy policy", "Terms and condition", "Contact"].map((el, i) => {
                return <li className='list-none dis py-1'>{el}</li>
              })
            }
          </div>
          </div>
         
        </div>
        <div className='w-full py-2 border-t-[1px] mt-2 border-t-primary/60 flex yc justify-between flex-col md:flex-row gap-3'>
          <p>copyright 2023 All Rights Reserved. Tealvue</p>
          <div className='flex gap-3'>
            <div className='p-3 bg-white/80 w-fit rounded-l-full '><p>Views <span className='tracking-wide text-[17px] font-semibold'>43566</span></p></div>
            <div className='p-3 bg-white/80 w-fit rounded-r-full '><p>Join <span className='tracking-wide text-[17px] font-semibold'>Telegram</span></p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
