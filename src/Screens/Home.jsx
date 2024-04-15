import Hero from '../Sections/Hero'
import ObtainCarNav from '../Components/ObtainCarNav'
import AboutUs from '../Sections/AboutUs'
import HowTo from '../Sections/HowTo'
import MostPopular from '../Sections/MostPopular'
import FAQ from '../Sections/FAQ'
import Footer from '../Sections/Footer'

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
