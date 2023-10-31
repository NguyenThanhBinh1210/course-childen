import React from 'react'
import BannerSlide1 from '~/assets/images/imgpsh_fullsize_anim-7.jpg'
import BannerSlide2 from '~/assets/images/banner2.pc-1.jpg'
import Banner from '~/assets/images/banner2.tablet.jpg'

const SliderBanner = () => {
  const initialSlides = [BannerSlide1, BannerSlide2] // Mảng ban đầu

  const [slides, setSlides] = React.useState(initialSlides)
  const [translateX, setTranslateX] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      setSlides((prevSlides) => {
        const newSlides = [...prevSlides, slides[count]]
        return newSlides
      })

      setTranslateX((prevTranslateX) => prevTranslateX - 100) // Độ rộng của mỗi slide
    }, 3000) // Mỗi giây (1000 milliseconds)

    return () => {
      clearInterval(intervalId)
    }
  }, [count, slides])
  return (
    <section className='mb-10 z-[-1]'>
      <div className='w-full lg:h-[540px] overflow-hidden'>
        <img className='md:w-full lg:h-full lg:hidden' src={Banner} alt='Banner' />
        <div className=' hidden lg:flex items-center h-full justify-center'>
          <div className='slider-container w-full h-full overflow-hidden relative'>
            <div
              className='slider-track w-full h-full flex transition-transform duration-500 transform'
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className='w-full z-[-1] h-full border-r flex-shrink-0 flex justify-center items-center text-white'
                >
                  <img className=' h-full w-full object-cover' src={slide} alt='slide' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderBanner