import { Fade, Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const MovesSlider = () => {
    
const fadeImages = [
    {
      url: 'https://i.ytimg.com/vi/cAVV_csVrbk/maxresdefault.jpg',
      caption: 'First Slide'
    },
    {
      url: 'https://i.ytimg.com/vi/0vuTLrSIbGU/maxresdefault.jpg',
      caption: 'Second Slide'
    },
    {
      url: 'https://i.ytimg.com/vi/9LqGq5t3dqQ/maxresdefault.jpg',
      caption: 'Third Slide'
    },
    {
      url: 'https://cdn.gadgets360.com/content/assets/upcoming-tamil-movie-banner-1200x400.jpg',
      caption: 'Third Slide'
    },
  ];
    return (
      <div className=' lg:container mx-auto mt-12 md:mt-10  '>
      <div className="">
           <Zoom scale={0.7} >
             {fadeImages.map((fadeImage, index) => (
               <div className='sidebar-img'  key={index}>
                 <img className='lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px] w-full'  src={fadeImage.url}  alt=''/>
                 <h2 className='sidebar-text'>{fadeImage.caption}</h2>
               </div>
             ))}
           </Zoom>
         </div>

       


             </div>
    );
};

export default MovesSlider;