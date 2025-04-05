import { useState } from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {
  const [status, setStatus] = useState('idle');
  const [changeImg, setChangeImg] = useState('none');

  const getBackgroundClass = () => {
      if (status === 'success')
          return 'bg-[#f0d78a]';
      if (status === 'error')
          return 'bg-[#80471C]';
      return 'bg-white';
  };

  const getImgClass = () => {
    if (changeImg === 'yes')
      return img1;
    if (changeImg === 'no')
      return img3;
    return img2
  }

  return (
    
      <div className={`w-[100%] pt-2 ${getBackgroundClass()}`}>
          <hr className="h-2 mx-auto w-3/4 my-8 bg-gray-200 border-2 dark:bg-gray-700"/>

        {/* Background Images */}
        <div className='relative flex h-[60vh]'
        style={{
              backgroundImage: `url(${getImgClass()})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "",}}
              >
               
        </div>

          {/* Text */}
        <div className='px-8'>
         <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-auto"/>
          <h1 className={`text-center text-2xl pb-2 font-bold ${ status=== "idle" ? 'text-[#b41855]' : 'text-black' }`}>Nourish with LOVE - Breastfeeding, the best start for your baby.</h1>
          <p className={`text-center font-serif md:text-2xl text-black`}>Breastfeeding is great for both you and your baby; it helps build a strong bond and is good for your baby's overall health. 
              Breast milk provides all the nutrition your baby needs in their first 6 months and boosts their ability to fight illness and infection. 
             But, as with anything new, it's something you need to learn how to do and it's normal to experience the odd set back. Luckily, we're here to help.</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-auto"/>
        </div>

          {/* Change bgColor and bgImage */}
          <div className='form-container  md:flex md:justify-between'>
            <div className='pb-6 md:pb-0'>
              <div className='flex px-10 space-x-6 md:space-x-10 pb-2'>
                <div onClick={() => setStatus('idle')} className='rounded-full bg-white w-[70px] h-[70px] outline-2 outline-black'></div>
                <div onClick={() => setStatus('error')} className='rounded-full bg-[#80471C] w-[70px] h-[70px] outline-2 outline-black'></div>
                <div onClick={() => setStatus('success')} className='rounded-full bg-[#f0d78a] w-[70px] h-[70px] outline-2 outline-black'></div>
              </div>
              <label className='text-black px-10 text-xl font-serif'>Click to change background color</label>
            </div>

            <div>
                <div className='flex px-10 space-x-6 md:space-x-10'>
                  <div onClick={() => setChangeImg('none')} className="rounded-full w-[70px] h-[70px] outline-2 outline-black text-black text-center">Img 1</div>
                  <div onClick={() => setChangeImg('yes')} className='rounded-md w-[70px] h-[70px] outline-2 outline-black text-black text-center'>Img 2</div>
                  <div onClick={() => setChangeImg('no')} className='rounded-md w-[70px] h-[70px] outline-2 outline-black text-black text-center'>Img 3</div>
                </div>
                <p className='text-black px-10 pt-4 text-xl font-serif'>Click to change background Image</p>
            </div>
          </div>

        
        
      </div>
  )
}

export default App
