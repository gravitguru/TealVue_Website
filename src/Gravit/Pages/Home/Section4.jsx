import bgimg from '../../../assets/img/png/bgimg.jpg'
import leaf from '../../../assets/img/png/leafsi.png'
import ico from '../../../assets/img/planticon.svg'
const Section4 = () => {
    return (
        <div className="frame xyc flex-col relative" >
            <img src={leaf} alt="" className='absolute inset-0 -z-40 w-[40%] md:w-[20%] mb-5 mx-auto blur-sm' />
            <div className='xyc flex-col gap-2 text-center'>
                <h1 className='ht text-primary md:mb-3'>Our Services and Solutions</h1>
                <p className='dis md:w-[70%] mb-7'>We provide a host of Solutions, covering the entire Software Developmentlife cycle, meeting varied business needs of our Clients.</p>
            </div>
            <div className='bg-cover xyc bg-center h-auto md:h-[500px] rounded-2xl ' style={{ backgroundImage: `url(${bgimg}) ` }}>
                <div className='bggblur rounded-xl w-[95%] my-3 flex flex-col md:flex-row '>
                    <div className='md:w-1/2 p-2'>
                        <h1 className='px-3 py-2 bg-white/10 w-fit rounded-full m-2 text-white mb-3'>Our Solutions</h1>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 p-2'>
                        <h1 className='px-3 py-2 bg-white/10 w-fit rounded-full m-2 text-white mb-3'>Our Solutions</h1>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-3'>
                            <div className='w-[60px] h-[60px] md:w-[50px] md:h-[50px] shrink-0 p-2 bg-white/10 rounded-lg'>
                                <img src={ico} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='text-white md:p-1'>
                                <h1 className='font-semibold text-[20px] pb-2'>Fintech</h1>
                                <p className='dis text-white/80 line-clamp-4 md:line-clamp-3 md:w-[85%]'>We are offering products and
                                    solutions in Financial Markets, for
                                    Market intermediaries from an
                                    Analytics perspective.</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Section4;
