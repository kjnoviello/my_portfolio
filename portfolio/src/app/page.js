"use client"
import Image from "next/image";
import WordFadeIn from "@/components/ui/word-fade-in";
import { GridPattern } from "@/components/ui/animated-grid-pattern";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Link from "next/link";
import './styles.css'

export default function Home() {

  const [isHoveredExp, setIsHoveredExp] = useState(false);
  const [isHoveredEdu, setIsHoveredEdu] = useState(false);
  const [isHoveredPro, setIsHoveredPro] = useState(false);
  const [isHoveredAbo, setIsHoveredAbo] = useState(false);
  const [isResponsive, setIsResponsive] = useState(true)


  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch("/utils/intro.json")
        if (!res.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await res.json()
        setDataCard(data)

      } catch (error) {
        console.error(error);
      }
    }
    fetchCard()
  }, [])


  useEffect(() => {
    // Detectar tamaño de pantalla y ajustar `isResponsive`
    const handleResize = () => {
      const isMobile = window.innerWidth <= 639;
      setIsResponsive(isMobile);
      setIsHoveredExp(isMobile);
      setIsHoveredEdu(isMobile);
      setIsHoveredPro(isMobile);
      setIsHoveredAbo(isMobile);
    };

    handleResize(); // Detecta el tamaño inicial
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <main className="responsive">
      {/* Animated background */}
      <GridPattern />

      {/* Main body */}
      <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <section className="flex flex-col sm:flex-row gap-8 row-start-2 items-center z-10 ">

          {/* TODO cambiar la clase de la foto */}
          <div className="bg-[#828282c9] rounded-[18px]">
            <Image
              className="dark:invert foto"
              src="/profile.svg"
              alt="my photo"
              width={150}
              height={150}
              priority
            />
          </div>

          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
            <div className="md:w-[500px] w-full list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <WordFadeIn
                className="mb-2 text-sm text-white"
                words="Hola, mi nombre es Kevin Joel Noviello y soy DESARROLLADOR FRONTEND"
              />
            </div>
            {/* <RainbowButton>Más sobre mí</RainbowButton> */}
          </div>

        </section>

        {/* Section cards */}
        <section className="flex flex-wrap justify-center gap-5">
          <div className="flex flex-col sm:flex-row gap-6" style={{ perspective: '1000px' }}>

            {/* {EXPERIENCE} */}
            <Link href="/pages/experience" index className="w-full">
              <motion.article
                className="flex border border-white border-solid rounded-xl w-full p-2 z-10 bg-black transition-all duration-100 transform cursor-pointer"
                onHoverStart={() => setIsHoveredExp(true)}
                onHoverEnd={() => setIsHoveredExp(false)}
                animate={{
                  rotateZ: isHoveredExp ? 0 : -12,
                  rotateY: isHoveredExp ? 0 : -10,
                  rotateX: isHoveredExp ? 0 : -20,
                  scale: isHoveredExp ? 1 : 0.8,
                  boxShadow: isHoveredExp && !isResponsive ? '0px 0px 200px rgba(255, 255, 255, 0.9)' : '2px 8px 10px rgba(255, 255, 255, 0.9)'
                }}
              >

                <div className="bg-black rounded-xl z-10">
                  <Image
                    className="dark:invert w-[120px] h-[90px]"
                    src="/home/experience.svg"
                    alt="my photo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <p className="text-md text-[#58e6d9]"><strong>Experiencia</strong></p>
                  <p className="text-lg">Conoce más sobre mi carrera</p>
                </div>
              </motion.article>
            </Link>

            {/* {EDUCATION} */}
            <Link href="/pages/education" index className="w-full">
              <motion.article
                className="flex border border-white border-solid rounded-xl w-full p-2 z-10 bg-black transition-all duration-100 transform cursor-pointer"
                onHoverStart={() => setIsHoveredEdu(true)}
                onHoverEnd={() => setIsHoveredEdu(false)}
                animate={{
                  rotateZ: isHoveredEdu ? 0 : -8,
                  rotateY: isHoveredEdu ? 0 : 20,
                  rotateX: isHoveredEdu ? 0 : 15,
                  scale: isHoveredEdu ? 1 : 0.8, // Ajustar escala en función del hover
                  boxShadow: isHoveredEdu && !isResponsive ? '0px 0px 200px rgba(255, 255, 255, 0.9' : '2px 8px 10px rgba(255, 255, 255, 0.9)', // Cambiar sombra
                }}
              >
                <div className="bg-black rounded-xl z-10">
                  <Image
                    className="dark:invert w-[120px] h-[90px]"
                    src="/home/education.svg"
                    alt="my photo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <p className="text-md text-[#58e6d9]"><strong>Educación</strong></p>
                  <p>Mis estudios hasta hoy.</p>
                </div>
              </motion.article>
            </Link>

          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:mt-2" style={{ perspective: '1000px' }}>

            {/* {PROYECTS} */}
            <Link href="/pages/proyects" index className="w-full">
              <motion.article
                className="flex border border-white border-solid rounded-xl w-full p-2 z-10 bg-black transition-all duration-100 transform cursor-pointer"
                onHoverStart={() => setIsHoveredPro(true)}
                onHoverEnd={() => setIsHoveredPro(false)}
                animate={{
                  rotateZ: isHoveredPro ? 0 : 12,
                  rotateY: isHoveredPro ? 0 : -20,
                  rotateX: isHoveredPro ? 0 : 30,
                  scale: isHoveredPro ? 1 : 0.8, // Ajustar escala en función del hover
                  boxShadow: isHoveredPro && !isResponsive ? '0px 0px 200px rgba(255, 255, 255, 0.9)' : '2px 8px 10px rgba(255, 255, 255, 0.9)', // Cambiar sombra
                }}
              >
                <div className="bg-black rounded-xl z-10">
                  <Image
                    className="dark:invert w-[120px] h-[90px]"
                    src="/home/proyect.svg"
                    alt="my photo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <p className="text-md text-[#58e6d9]"><strong>Proyectos</strong></p>
                  <p>Todos los proyectos involucrados</p>
                </div>
              </motion.article>
            </Link>

            {/* {ABOUT} */}
            <Link href="/pages/about" index className="w-full">
              <motion.article
                className="flex border border-white border-solid rounded-xl w-full p-2 z-10 bg-black transition-all duration-100 transform cursor-pointer"
                onHoverStart={() => setIsHoveredAbo(true)}
                onHoverEnd={() => setIsHoveredAbo(false)}
                animate={{
                  rotateZ: isHoveredAbo ? 0 : 12,
                  rotateY: isHoveredAbo ? 0 : 20,
                  rotateX: isHoveredAbo ? 0 : -8,
                  scale: isHoveredAbo ? 1 : 0.8, // Ajustar escala en función del hover
                  boxShadow: isHoveredAbo && !isResponsive ? '0px 0px 200px rgba(255, 255, 255, 0.9)' : '2px 8px 10px rgba(255, 255, 255, 0.9)', // Cambiar sombra
                }}
              >
                <div className="bg-black rounded-xl z-10">
                  <Image
                    className="dark:invert w-[120px] h-[90px]"
                    src="/home/about.svg"
                    alt="my photo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <p className="text-md text-[#58e6d9]"><strong>Sobre mí</strong></p>
                  <p>Para conocerme un poco más</p>
                </div>
              </motion.article>
            </Link>

          </div>
        </section>

        {/* Footer  */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </main>
  );
}
