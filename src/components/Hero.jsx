import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-5'>
          <img src={logo} alt='logo' className='w-28 object-contain'/>

          <button
            type='button'
            onClick={() => window.open('https://github.com/tere2021')}
            className='black_btn'
          >
            GitHub
          </button>
        </nav>

        <h1 className='head_text'>
          Resumir artículos con <br className='max-md:hidden' />
          <span className='blue_gradient'>OpenAi GPT-4</span>
        </h1>

        <h2 className='desc'>
        Simplifica tu lectura con <b>Resumen</b>, un resumidor de artículos de código abierto que transforma artículos extensos en resúmenes claros y concisos.
        </h2>
    </header>
  )
}

export default Hero