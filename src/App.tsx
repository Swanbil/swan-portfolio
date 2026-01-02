import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import { motion } from 'motion/react'
import { projects } from './data/projects'
import { useState, useEffect } from 'react'

function App() {
  const [swanText, setSwanText] = useState('')
  const [bilekText, setBilekText] = useState('')
  const fullSwanText = 'Swan'
  const fullBilekText = 'Bilek'

  useEffect(() => {
    // Animation pour "Swan"
    let i = 0
    const timer = setInterval(() => {
      if (i < fullSwanText.length) {
        setSwanText(fullSwanText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    // Animation pour "Bilek" après un délai
    setTimeout(() => {
      let j = 0
      const bilekTimer = setInterval(() => {
        if (j < fullBilekText.length) {
          setBilekText(fullBilekText.slice(0, j + 1))
          j++
        } else {
          clearInterval(bilekTimer)
        }
      }, 150)
    }, 600) // Délai avant de commencer Bilek

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="w-full flex flex-col min-h-screen px-4 sm:px-6">

      <Navbar />

      <div>

        <section className="h-[90vh]">
          <div className='w-full h-full'>
            <div className='h-full flex items-center justify-center flex-col gap-10'>

              <div className='h-full flex justify-center flex-col'>
                <motion.h1
                  className='text-[18vw] uppercase font-thin text-neutral-800 leading-none relative'>
                  {swanText}
                  {swanText.length > 0 && swanText.length < fullSwanText.length && (
                    <motion.span
                      className='inline-block w-1 h-full bg-neutral-800 ml-1'
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </motion.h1>
                <div className='flex items-center gap-10'>
                  <motion.img
                    src="./animation.gif"
                    className='w-62 h-42'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                  />
                  <motion.span
                    className='text-[18vw] uppercase font-thin text-neutral-800 leading-none relative'>
                    {bilekText}
                    {bilekText.length > 0 && bilekText.length < fullBilekText.length && (
                      <motion.span
                        className='inline-block w-1 h-full bg-neutral-800 ml-1'
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </motion.span>
                </div>
              </div>

            </div>

          </div>

        </section>

        <section className="h-[100vh] flex justify-between gap-10 py-8 mt-24 relative">
          <div className='w-1/2 h-full flex flex-col justify-between'>
            <div>
              <motion.h2
                className='text-9xl font-light'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                Hi, I'm Swan Bilek
              </motion.h2>
              <div className='mt-8'>
                <motion.p
                  className='text-gray-800 text-5xl font-light'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className='text-gray-400'>When I was 13, an older kid stole my beloved skateboard,</span>
                  board, shattering my dream of becoming the next Rodney Mullen. The fear of being robbed again.
                </motion.p>
              </div>
            </div>


            <motion.div
              className=''
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className='bg-black text-white px-6 py-3 rounded-full text-lg font-medium cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                See projects
              </motion.button>
            </motion.div>

          </div>
          <div className='w-1/3 h-full'>
            <motion.img
              src={"/profile_picture.jpeg"}
              alt="Swan Bilek"
              className='w-full h-full object-cover rounded-lg'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        <section className="h-full py-8 mt-12">
          <motion.h2
            className='text-7xl font-light'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Explore my last projects
          </motion.h2>

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              link={project.link}
              reverse={project.reverse}
            />
          ))}

        </section >

      </div >
    </div >

  )
}

export default App
