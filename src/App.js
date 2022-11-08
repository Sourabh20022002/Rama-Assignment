import { TbGridDots } from 'react-icons/tb'
import xyz from './download.png'

function App() {
  return (
    <>
    
    <div className='flex justify-end p-5'>
    <ul className="flex gap-5 text-l">
          <li>Gmail</li>
          <li>Images</li>
          <li className='pt-1 ' ><TbGridDots size={20} /></li>
          <li className='w-8 h-50 rounded-full pt-8 bg-gray-600' ></li>
        </ul>
    </div>
    <div className="flex justify-center">
      <div className="flex justify-end p-4">
      
      </div>
      <div className='flex justify-center flex-col   '>
        <img className=' object-scale-down ' src={xyz} />
        <div className='sm:px-10 md:px-20 hover:scale-125'>
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[500px]  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>
        </div>
        <div className='flex justify-center pt-7 gap-5 '>
          <button className='bg-[#f8f9fa] px-5 py-2'>Google Search</button>
          <button className='bg-[#f8f9fa] px-5 py-2'>I'm Feeling Lucky</button>
        </div>
        <div className='flex justify-center pt-3'>
          <div className='px-3 ml-[20px]'>Google offered in:</div>
          <ul className='flex gap-2 text-blue-600 mr-[10px]'>
            <li>हिन्दी</li>
            <li>বাংলা</li>
            <li>తెలుగు</li>
            <li>मराठी</li>
            <li>தமிழ்</li>
            <li>ગુજરાતી</li>
            <li>ಕನ್ನಡ</li>
            <li>മലയാളം</li>
            <li>ਪੰਜਾਬੀ</li>
          </ul>
        </div>
      </div>
      <div className='pt-20'>
      
      </div>
    </div>
    <div className='pt-[150px]'>
      <div className='flex justify-start px-5 bg-[#dadce0] border-b-2 border-[#70757a] py-5 '>India</div>
    </div>
    <div >
      <div className='flex justify-between py-4  bg-[#dadce0] '>
         <ul className='flex justify-start gap-5 px-5  '>
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search works</li>
         </ul>
         <ul className='flex justify-end gap-5 px-5'>
           <li>Privacy</li>
           <li>Terms</li>
           <li>Settings</li>
         </ul>
      </div>
    </div>
    </>
  );
}

export default App;
