"use client"
// // import React, { useCallback } from 'react'
// // import { DotButton, useDotButton } from './Dotbutton/page'
// // import Autoplay from 'embla-carousel-autoplay'
// // import useEmblaCarousel from 'embla-carousel-react'
// // import Image from 'next/image'

// // // const EmblaCarousel = (props) => {
// // //   const { slides, options } = props
// // //   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

// // //   const onNavButtonClick = useCallback((emblaApi) => {
// // //     const autoplay = emblaApi?.plugins()?.autoplay
// // //     if (!autoplay) return

// // //     const resetOrStop =
// // //       autoplay.options.stopOnInteraction === false
// // //         ? autoplay.reset
// // //         : autoplay.stop

// // //     resetOrStop()
// // //   }, [])

// // //   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
// // //     emblaApi,
// // //     onNavButtonClick
// // //   )

// // //   return (
// // //     <section className="embla">
// // //       <div className="embla__viewport" ref={emblaRef}>
// // //         <div className="embla__container">
// // //           {slides.map((index) => (
// // //             <div className="embla__slide " key={index}>
// // //               <div className="embla__slide__number px-44">{index + 1}</div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="embla__controls  ">
// // //         <div className="embla__dots">
// // //           {scrollSnaps.map((_, index) => (
// // //             <DotButton
// // //               key={index}
// // //               onClick={() => onDotButtonClick(index)}
// // //               className={'embla__dot'.concat(
// // //                 index === selectedIndex ? ' embla__dot--selected' : ''
// // //               )}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default EmblaCarousel



// // const EmblaCarousel = (props) => {
// //   const { slides, options } = props
// //   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

// //   const onNavButtonClick = useCallback((emblaApi) => {
// //     const autoplay = emblaApi?.plugins()?.autoplay
// //     if (!autoplay) return

// //     const resetOrStop =
// //       autoplay.options.stopOnInteraction === false
// //         ? autoplay.reset
// //         : autoplay.stop

// //     resetOrStop()
// //   }, [])

// //   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
// //     emblaApi,
// //     onNavButtonClick
// //   )

// //   return (
// //     <section className="embla">
// //       <div className="embla__viewport" ref={emblaRef}>
// //         <div className="embla__container  ">
// //           {slides.map((slide, index) => (
// //             <div className="embla__slide m mx-5" key={index}>
// //               <Image src={slide.image} alt={`${slide.name}'s picture`} width={45} height={100}/>
// //               <h3>{slide.name}</h3>
// //               <p>{slide.position}</p>
// //               <blockquote>{slide.quote}</blockquote>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="embla__controls">
// //         <div className="embla__dots">
// //           {scrollSnaps.map((_, index) => (
// //             <DotButton
// //               key={index}
// //               onClick={() => onDotButtonClick(index)}
// //               className={'embla__dot'.concat(
// //                 index === selectedIndex ? ' embla__dot--selected' : ''
// //               )}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default EmblaCarousel



import React, { useCallback } from 'react';
import { DotButton, useDotButton } from './Dotbutton/page';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.autoplay;
    if (!autoplay) return;

    autoplay.stop();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className={`embla__slide cursor-pointer   border-2 rounded-lg d p-24 text-center w-full mx-5`  } id={slide.id  }   key={index}>
              {/* <Image src={slide.image} alt={`${slide.name}'s picture`} width={300} height={200} /> */}
              <h3 className=' text-5xl'>{slide.name}</h3><br />
              <p>{slide.position}</p>
              <blockquote className=' italic'>'{slide.quote}'</blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default EmblaCarousel;





// import React from 'react';

// const TestimonialItem = () => {
//   return (
//     <div className="testimonial-item">
//       <div className="top-area d-flex flex-wrap justify-content-between align-items-start">
//         <div className="logo-box">
//           <img
//             decoding="async"
//             // src="https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-logo-1.png"
//             alt=""
//             style={{ opacity: 1 }}
//           />
//         </div>
//         <div className="image-box">
//           <img
//             decoding="async"
//             src="https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-1.jpg"
//             alt=""
//             style={{ opacity: 1 }}
//           />
//         </div>
//       </div>
//       <div className="icon-box">
//         <svg className="animated" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
//             fill="url(#paint0_linear_1_f5f74f8-3)"
//           ></path>
//           <defs>
//             <linearGradient id="paint0_linear_1_f5f74f8-3" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
//               <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
//               <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//         <svg className="animated" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
//             fill="url(#paint0_linear_2_f5f74f8-3)"
//           ></path>
//           <defs>
//             <linearGradient id="paint0_linear_2_f5f74f8-3" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
//               <stop offset="1" stopColor="var(--tj-theme-primary)"></stop>
//               <stop offset="1" stopColor="#140C1C" stopOpacity="0"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//       <p className="quote">“Taylor is a professional Designer he really helps my business by providing value to my business.”</p>
//       <h4 className="name">Brandon Fraser</h4>
//       <span className="designation">Senior Software Dev, Cosmic Sport</span>
//     </div>
//   );
// };

// export default TestimonialItem;

// // src="https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-2.jpg"
