import Arrow from './image/double-arrow-up-1.svg'
import Register from './image/register.svg'
import Friend from './image/add-friend.svg'
import Building from './image/Building.svg'
import Train from './image/Train-2.svg'

function School() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-xl w-auto h-48 mx-auto relative pt-2">
                    {/* <div className='w-40 border-t-[2rem] border-l-[0.5rem]
                    border-r-[0.5rem] border-b-[2rem] border-t-schoolbarbot
                    border-l-transparent border-r-transparent
                    border-b-transparent mx-auto absolute left-1/2 -top-4
                    -translate-x-1/2'>
                    <span className='absolute left-1/2 -top-7 
                        -translate-x-1/2 text-mny text-white font-semibold
                        '>校园通行</span>
                    </div> */}
                <div className="bg-schoolbg h-full w-19/20 mx-auto rounded-xl pt-7">
                    
                    <div className="bg-white h-36 w-97/100 mx-auto rounded-xl shadow-sm">
                        <ul className="list-none flex justify-around pt-3 block">
                            <li className="w-16 flex-col flex items-center justify-center">
                                <div className="h-12 w-12 bg-nyuicon rounded-full 
                                flex items-center justify-center shadow-md shadow-violet-300">
                                    <img src={Register} alt='logo' className='h-6 w-6'></img>
                                </div>
                                <p className="text-bar text-center leading-5 mt-1.5">Back</p>
                            </li>
                            <li className="w-16 flex-col flex items-center justify-center">
                                <div className="h-12 w-12 bg-nyuicon rounded-full 
                                flex items-center justify-center shadow-md shadow-violet-300">
                                    <img src={Friend} alt='logo' className='h-7'></img>
                                </div>
                                <p className="text-bar text-center leading-5 mt-1.5">Visitors</p>
                            </li>
                            <li className="w-16 flex-col flex items-center justify-center">
                                <div className="h-12 w-12 bg-nyuicon rounded-full 
                                flex items-center justify-center shadow-md shadow-violet-300">
                                    <img src={Building} alt='logo' className='h-7'></img>
                                </div>
                                <p className="text-bar text-center leading-5 mt-1.5">Stay</p>
                            </li>
                            <li className="w-16 flex-col flex items-center justify-center">
                                <div className="h-12 w-12 bg-nyuicon rounded-full 
                                flex items-center justify-center shadow-md shadow-violet-300">
                                    <img src={Train} alt='logo' className='h-7'></img>
                                </div>
                                <p className="text-bar text-center leading-5 mt-1.5">Leave</p>
                            </li>
                        </ul>
                        <p className='text-center mt-6 text-bar text-nyu'>
                            Tap to collapse<span>
                                <img src={Arrow} alt='arrow' className='inline-block w-3 ml-1 mb-1'></img>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default School