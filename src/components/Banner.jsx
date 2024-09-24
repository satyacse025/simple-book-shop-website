import bannerImage from '../assets/banner-02.jpg';

export default function Banner() {
  return (
    <div className="w-full bg-[#F2E9E0]">
        <section className="lg:w-5/6 mx-auto bg-[#F2E9E0] dark:bg-gray-900">
    <div className="grid max-w-screen-xl mb-0 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-5 text-lg font-extrabold tracking-tight leading-none md:text-xl xl:text-xl dark:text-white"><span className='text-[#B95255]'>Unlock</span> a <span className='text-[#FCC021]'>World</span> of
            Stories <br /> – Find Your Next <span className='text-[#B95255]'>Favorite</span> Book at <span className='text-[#B95255]'>B</span><span className='text-yellow-500'>oo</span><span className='text-[#34AE9F]'>k </span> <span className='text-[#B95255]'>H</span><span className='text-[#2684C7]'>aven</span> </h1>
            <a href="#" className="bg-[#FECD66] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Buy Book
            </a> 
        </div>
        <div className="order-first lg:order-last lg:mt-0 lg:col-span-7 lg:flex">
            <img src={bannerImage} alt="mockup"/>
        </div>                
    </div>
</section>
    </div>
  )
}
