import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import { motion } from 'motion/react'
import { projects } from './data/projects'

function App() {


  return (
    <div className="w-full flex flex-col min-h-screen">

      <Navbar />

      <div>

        <section className="h-[90vh] relative px-4 sm:px-6 py-4" id="hero" >
          <div className='h-full flex flex-col justify-between gap-1'>

            <div className='self-end'>
              <motion.img
                src={"./profile_picture.jpeg"}
                alt="Swan Bilek"
                className='md:w-[400px] sm:md:w-[300px] h-[350px] object-cover rounded-lg'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <motion.span
                className='text-[3vw] text-neutral-400 leading-none'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                ウェブ開発
              </motion.span>
              <motion.span
                className='text-[3vw] text-neutral-400 leading-none'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                مهندس برمجيات
              </motion.span>
              <motion.h1
                className='text-[10vw] leading-none'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                Software Engineer
              </motion.h1>

            </div>

          </div>


        </section>

        <section className="h-[95vh] flex justify-between gap-10 py-4 px-4 sm:px-6 mt-52 relative">
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
                  <span className='text-gray-400'>Software engineer since 3 years, I'm passionate about every things around web development. </span>
                  <br />I'm currently building a new personal project. Some news will come soon !
                </motion.p>
              </div>
            </div>


            <motion.div
              className=''
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href='#projects'
                className='bg-black text-white px-6 py-3 rounded-full text-lg font-medium cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                See last projects
              </motion.a>
            </motion.div>

          </div>
          <div className='w-1/3 h-full'>
            <motion.img
              src={"https://i.pinimg.com/736x/29/4a/d7/294ad78eff2cb25b677058482073e391.jpg"}
              alt="Swan Bilek"
              className='w-full h-full object-cover rounded-lg'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        <section className="h-full py-8 px-4 sm:px-6 mt-24" id='projects'>
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
              project={project}
            />
          ))}

        </section >

        <section className="h-full px-8 py-4 mt-12 bg-black text-amber-100" id='skills'>
          <div className='flex flex-col'>

            <div className='flex md:flex-row flex-col gap-6 justify-between items-center py-4'>
              <motion.h4
                className='font text-7xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >Backend
              </motion.h4>
              <motion.div
                className='flex flex-col gap-1 text-2xl md:w-1/6 w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                viewport={{ once: true }}
              >
                <span>01 Java/Springboot</span>
                <span>02 AdonisJS</span>
                <span>03 Php/Symphony</span>

              </motion.div>

            </div>

            <div className='flex md:flex-row flex-col gap-6 justify-between items-center border-t border-amber-100 py-4'>
              <motion.h4 className='font text-7xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                viewport={{ once: true }}
              >Frontend / Mobile</motion.h4>
              <motion.div
                className='flex flex-col gap-1 text-2xl md:w-1/6 w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true }}
              >
                <span>01 ReactJs</span>
                <span>02 React Native, Expo</span>
                <span>03 VueJs</span>
                <span>04 Tanstack Start</span>
                <span>05 HTML, CSS</span>
              </motion.div>
            </div>

            <div className='flex md:flex-row flex-col gap-6 justify-between items-center border-t border-amber-100 py-4'>
              <motion.h4 className='font text-7xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                viewport={{ once: true }}
              >
                Devops / Database
              </motion.h4>
              <motion.div
                className='flex flex-col gap-1 text-2xl md:w-1/6 w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                viewport={{ once: true }}
              >
                <span>01 Docker</span>
                <span>02 Github Actions, Jenkins</span>
                <span>03 Git</span>
                <span>04 Redis</span>
                <span>05 Postgresql / Mysql</span>
              </motion.div>
            </div>

          </div>

        </section >

      </div >
    </div >

  )
}

export default App
