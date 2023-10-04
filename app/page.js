import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import HeroSection from '@/app/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection title={"Develop Fast and Secured Web App and Software"} imageUrl={"/home.svg"}/>
    </>
  )
}
