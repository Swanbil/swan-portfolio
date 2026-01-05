import './App.css'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import { motion } from 'motion/react'
import { projects } from './data/projects'

function App() {


  return (
    <div className="w-full flex flex-col min-h-screen px-4 sm:px-6">

      <Navbar />

      <div>

        <section className="h-[90vh] relative" id="hero" >
          <div className='h-full flex flex-col justify-between gap-1'>

            <div className='self-end'>
              <motion.img
                src={"/profile_picture.jpeg"}
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
                className='text-[5vw] text-neutral-400 leading-none'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              >
                ウェブ開発
              </motion.span>
              <motion.span
                className='text-[5vw] text-neutral-400 leading-none'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
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
                  <span className='text-gray-400'>Software engineer since 3 years, I'm passionate about every things around web development. </span>
                  I'm currently building a new personal project. Some news will come soon !
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

        <section className="h-full py-8 mt-12" id='projects'>
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

      </div >
    </div >

  )
}

export default App
