import Button from '../Components/children/Button';
// import Header from '../Components/Header';
import ProductCard from '../Components/children/ProductCard';

import bgMenu from '../resources/bg-menu.jpg'
import carbonara from '../resources/carbonara.png'
import tortellini from '../resources/tortellini.png'
import ziti from '../resources/ziti.png'
import user from '../resources/user.png'
import burger from '../resources/burger2.jpg'
import cafe from '../resources/cafe.jpg'
import dessert from '../resources/dessert.jpg'
import dessert2 from '../resources/dessert2.jpg'
import kitchen from '../resources/kitchen.jpg'
import steak from '../resources/steak.jpg'
import bgcafe from '../resources/bgcafe.jpg'

import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';

const HomePage = () => {
   const arr = useSelector(state => state.burgers.burgers)

   return (
      <>
         {/* <Header /> */}
         <div className="text-white overflow-hidden mt-28">
            <img className="max-lg:hidden block absolute top-0 left-0 z-[-1] w-[100%]" src={bgMenu} alt="" />
            <img className="absolute top-0 left-0 z-[-1] w-[100%] hidden max-lg:block" src={bgcafe} alt="" />
            <div className="m-auto container">
               <section className='2xl:px-[200px] text-center mt-[150px] max-2xl:mt-[100px] max-2xl:px-[150px] max-xl:px-[100px] max-lg:px-16 max-lg:mt-[70px] max-md:mt-14 max-md:px-10 max-sm:px-6 max-sm:mt-7'>
                  <h1 className='font-bold 2xl:text-[80px] 2xl:leading-[110px] max-2xl:text-[60px] max-2xl:leading-[90px] max-xl:text-[50px] max-xl:leading-[60px] max-lg:text-[45px] max-lg:leading-[50px] max-md:text-3xl max-sm:text-2xl'>People who love to eat are always the best people.</h1>
                  <p className='text-[22px] mt-[60px] leading-8 text-gray-400 max-2xl:mt-[50px] max-lg:text-xl max-md:mt-8 max-md:text-base max-sm:text-sm max-sm:mt-5'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni aspernatur aut odit aut fugit, sed quia consequuntur magni dolores...</p>
                  <div className="flex items-center justify-center mt-[60px] gap-[35px] max-2xl:mt-10">
                     <Link to="/menu">
                        <Button>Explore our Menu</Button>
                     </Link>
                     <div className="flex">
                        <span className='scores'>★</span>
                        <span className='scores'>★</span>
                        <span className='scores'>★</span>
                        <span className='scores'>★</span>
                        <span className='scores'>☆</span>
                     </div>
                  </div>
                  <div className="relative flex justify-between mt-5 items-start max-xl:mt-0 max-md:mt-[-35px] max-sm:mt-0">
                     <img className='object-contain max-xl:w-44 max-md:w-28 max-sm:absolute max-sm:z-[-1] max-sm:top-[-40px] max-sm:left-[-25px]' src={carbonara} alt="" />
                     <img className='object-contain mt-24 max-xl:w-60 max-xl:mt-16 max-md:w-40 max-sm:absolute max-sm:z-[-1] max-sm:top-8 max-sm:left-1/4' src={ziti} alt="" />
                     <img className='object-contain max-xl:w-44 max-md:w-28 max-sm:absolute max-sm:z-[-1] max-sm:top-3 max-sm:right-[-25px]' src={tortellini} alt="" />
                  </div>
               </section>

               <section className='mt-24 max-xl:mt-20 max-lg:mt-16 max-md:mt-10'>
                  <div className="2xl:px-80 max-2xl:px-60 max-xl:px-32 max-lg:px-16 max-md:px-10 max-sm:px-6">
                     <h2 className='text-center text-[40px] leading-[53px] font-semibold text-black max-md:text-4xl max-sm:text-3xl'>Food of the Month</h2>
                     <p className='text-center text-lg font-normal mt-8 text-[#75797F] max-lg:mt-5 max-lg:text-base'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                  </div>
                  <div className="grid grid-cols-4 max-xl:grid-cols-3 mt-[90px] max-lg:grid-cols-1 gap-5 px-6 max-lg:mt-16 max-md:grid-cols-2 max-[540px]:grid-cols-1">
                     {
                        arr.map(item => <ProductCard key={item.id} item={item} />)
                     }
                  </div>
                  <div className="flex justify-center mt-10 max-md:mt-5">
                     <Link to="/menu">
                        <Button>Explore our Menu</Button>
                     </Link>
                  </div>
               </section>

               <section className='grid grid-cols-3 grid-rows-1 gap-2 mt-24 max-xl:mt-20 max-lg:mt-16 max-md:mt-10'>
                  <div className="row-span-1 col-span-1"><img className='object-cover max-w-full' src={burger} alt="burger" /></div>
                  <div className="col-span-2"><img src={steak} alt="burger" /></div>
                  <div className="row-span-1"><img src={cafe} alt="burger" /></div>
                  <div className="text-black flex items-center justify-center"><Link to="/menu"><Button>Explore our Menu</Button></Link></div>
                  <div className=""><img src={dessert2} alt="burger" /></div>
                  <div className="col-span-2"><img src={kitchen} alt="burger" /></div>
                  <div className="row-span-2"><img src={dessert} alt="burger" /></div>
               </section>

               <section className='mt-24 max-xl:mt-20 max-lg:mt-16 max-md:mt-10 text-black px-6'>
                  <div className="text-center">
                     <h2 className='text-4xl font-semibold max-md:text-3xl max-sm:text-lg'>What our popular customers are saying</h2>
                  </div>
                  <div className="">
                     <div className="mt-20 max-lg:mt-16 max-md:mt-14 max-sm:mt-10">
                        <div className="flex items-center justify-center gap-4">
                           <div className="">
                              <img src={user} alt="" />
                           </div>
                           <div className="">
                              <p className='text-xl'>Jony</p>
                              <span className='text-sm text-[#A3A3A3]'>Latipov</span>
                           </div>
                        </div>
                        <div className="mt-12">
                           <p className='text-center text-lg text-[#A3A3A3]'>
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure and praising pain was
                              born and I will give you a complete account of the
                              system  idea of denouncing pleasure ...But I must
                              explain to you how all this mistaken idea of denouncing
                              pleasure and praising pain was born and I will give
                              you a complete account of the system  idea of
                              denouncing pleasure ...
                           </p>
                        </div>
                        <div className="flex justify-center mt-5">
                           <span className='text-[#FE8B75] text-xl'>★</span>
                           <span className='text-[#FE8B75] text-xl'>★</span>
                           <span className='text-[#FE8B75] text-xl'>★</span>
                           <span className='text-[#FE8B75] text-xl'>★</span>
                           <span className='text-[#FE8B75] text-xl'>☆</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center mt-5 gap-5">
                     <button className='p-2 hover:bg-[#DF6751] border-[#DF6751] border rounded-full'><BsArrowLeft size={20} /></button>
                     <button className='p-2 hover:bg-[#DF6751] border-[#DF6751] border rounded-full rotate-180'><BsArrowLeft size={20} /></button>
                  </div>
               </section>
            </div>
         </div>
         {/* <Footer /> */}
      </>
   );
}

export default HomePage;