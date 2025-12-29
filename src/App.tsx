import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="w-full flex flex-col min-h-screen px-4 sm:px-6">

      <Navbar />

      <div>

        <section className="h-[92vh]">
          <div className='relative w-full h-full overflow-hidden'>

            <div className="absolute left-1/2 w-[80%] h-[600px] rounded-b-fullblur-3xl opacity-70" style={{ backgroundColor: "#ffc257" }} id="sun" />

            <div className="absolute bottom-0 left-0 w-full pb-4">
              <div className='relative'>
                <h1 className="font-semibold tracking-wider text-[270px] leading-none text-center">
                  Swan <span className='font-thin'>Bilek</span>
                </h1>
              </div>
            </div>

          </div>

        </section>

      </div >
    </div>

  )
}

export default App
