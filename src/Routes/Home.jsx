import Hero from '../Sections/Home/Hero'
import ObtainCarNav from '../Components/ObtainCarNav'
import AboutUs from '../Sections/Home/AboutUs'
import HowTo from '../Sections/Home/HowTo'
import MostPopular from '../Sections/Home/MostPopular'
import FAQ from '../Sections/Home/FAQ'
import Footer from '../Sections/Home/Footer'

function Home() {
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <Hero />
      <div className='bg-[#111] w-full flex flex-col items-center'>
        <ObtainCarNav />
        <AboutUs />
        <HowTo />
        <MostPopular />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default Home
