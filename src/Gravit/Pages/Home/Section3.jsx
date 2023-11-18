import StiltLogo from '../../../assets/img/stilt.svg'
import WeaLogo from '../../../assets/img/weawer.svg'
import FlaLogo from '../../../assets/img/flamingo.svg'
import HawtLogo from '../../../assets/img/haw.svg'
import ImgBgLeaf from '../../../assets/img/png/bgimgleaf.png'

const Section3 = () => {
    const productInfo = [
        {
            logoImg: StiltLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
        {
            logoImg: WeaLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
        {
            logoImg: FlaLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
        {
            logoImg: StiltLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
        {
            logoImg: HawtLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
        {
            logoImg: StiltLogo,
            title: "STILT",
            disc: "State of the art derivative analytics platform for Exchange traded Derivatives Markets in India.",
            link: "",
            web: "www.stilt.co.in",
        },
    ]
    return (
        <div className="frame relative w-full h-full">
            <div>
                <h1 className="ht py-2 text-primary">Our Products</h1>
                <p className="dis md:w-[70%]">Revolutionize your B2B landscape with our suite of advanced solutions, from derivative analytics and swift trading to precision screening, comprehensive log monitoring, and real-time analytics dashboards—powering your business with unparalleled insights.</p>
            </div>
            <div className='flex flex-wrap mt-6'>
                {
                    productInfo.map((el, i) => {
                        return <div className='p-2 md:w-1/3'>
                            <div className="bgblur rounded-md w-full h-[200px] p-2" key={i} >
                                <div className='flex yc justify-between h-[30%]'>
                                    <img src={el.logoImg} alt="" className='w-[40%]'/>
                                    <i className="icon-angle-right-circle text-[2rem]"></i>
                                </div>
                                <div className='xyc text-center flex-col h-[60%]'>
                                    <h1 className='text-[1rem] font-bold text-sec py-2'>{el.title}</h1>
                                    <p className="dis line-clamp-3">State of the art derivative analytics
                                        platform for Exchange traded
                                        Derivatives Markets in India.</p>
                                </div>
                                <div className='xe text-[15px] text-primary h-[10%]'>
                                    <p>www.stilt.co.in</p>
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>
            <div className='absolute inset-5 w-full h-full  xe -z-40'>
            <img src={ImgBgLeaf } alt="" className=' object-contain'/>
            </div>
           
        </div>
    );
};

export default Section3;
