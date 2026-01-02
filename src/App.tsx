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

        <section className="h-[90vh]">
          <div className='relative w-full h-full overflow-hidden'>

            <motion.div
              className="absolute left-1/2 w-[80%] h-[600px] rounded-b-full blur-3xl opacity-70"
              style={{ backgroundColor: "#ffc257" }}
              initial={{ x: "-50%", y: "100vh" }}
              animate={{ x: "-50%", y: "-50%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <div className="absolute bottom-0 left-0 w-full pb-4">
              <div className='relative'>
                <motion.h1
                  className="font-medium tracking-wider text-[270px] leading-none text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                >
                  Swan <span className='font-thin'>Bilek</span>
                </motion.h1>
              </div>
            </div>

          </div>

        </section>

        <section className="h-[100vh] flex justify-between gap-10 py-8 mt-12 relative">
          <div className='w-1/2 h-full flex flex-col justify-between'>
            <div>
              <motion.h2
                className='text-9xl font-semibold'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        <section className="h-full py-8 mt-12">
          <motion.h2
            className='text-7xl font-semibold'
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
