import Arrow from './image/double-arrow-up-1.svg'
import Register from './image/register.svg'
import Friend from './image/add-friend.svg'
import Building from './image/Building.svg'
import Train from './image/Train-2.svg'

function School() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-xl w-auto h-44 mx-auto">
                <div className="bg-orange-100 h-full w-11/12 mx-auto rounded-xl pt-9">
                    <div className="bg-white h-5/6 w-11/12 mx-auto rounded-xl">
                        <ul className="list-none flex justify-around pt-3 block">
                            <li className="h-14 w-16 flex-col flex items-center justify-center">
                                <div className="h-9 w-9 bg-ecnu rounded-full 
                                flex items-center justify-center shadow-md shadow-rose-200">
                                    <img src={Register} alt='logo' className='h-6 w-6'></img>
                                </div>
                                <p className="text-bar text-center leading-5">返校登记</p>
                            </li>
                            <li className="h-14 w-16 flex-col flex items-center justify-center">
                                <div className="h-9 w-9 bg-ecnu rounded-full 
                                flex items-center justify-center shadow-md shadow-rose-200">
                                    <img src={Friend} alt='logo' className='h-5 w-5'></img>
                                </div>
                                <p className="text-bar text-center leading-5">访客登记</p>
                            </li>
                            <li className="h-14 w-16 flex-col flex items-center justify-center">
                                <div className="h-9 w-9 bg-ecnu rounded-full 
                                flex items-center justify-center shadow-md shadow-rose-200">
                                    <img src={Building} alt='logo' className='h-5'></img>
                                </div>
                                <p className="text-bar text-center leading-5">假期留校</p>
                            </li>
                            <li className="h-14 w-16 flex-col flex items-center justify-center">
                                <div className="h-9 w-9 bg-ecnu rounded-full 
                                flex items-center justify-center shadow-md shadow-rose-200">
                                    <img src={Train} alt='logo' className='h-5'></img>
                                </div>
                                <p className="text-bar text-center leading-5">离校离沪</p>
                            </li>
                        </ul>
                        <p className='text-center mt-5 text-bar text-ecnu'>
                            点击收起<span>
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