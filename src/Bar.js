import Bus from './image/bus.svg'
import Calendar from './image/calendar.svg'
import Map from './image/map.svg'
import Mail from './image/mail-fill.svg'
import {getTwoToneColor, setTwoToneColor} from "@ant-design/icons"

setTwoToneColor('#ffffff')
getTwoToneColor()

function Bar() {
    return (
        <div className="max-w-xl w-auto h-20 mx-auto">
            <ul className="list-none flex justify-around pt-3">
                <li className="h-14 w-16 flex-col flex items-center justify-center">
                    <div className="h-9 w-9 bg-blue-600 rounded-full 
                     flex items-center justify-center">
                        <img src={Bus} alt='logo' className='h-6 w-6'></img>
                    </div>
                    <p className="text-bar text-center leading-5">校车时刻</p>
                </li>
                <li className="h-14 w-16 flex-col flex items-center justify-center">
                    <div className="h-9 w-9 bg-orange-500 rounded-full 
                     flex items-center justify-center">
                        <img src={Calendar} alt='logo' className='h-6 w-6'></img>
                    </div>
                    <p className="text-bar text-center leading-5">校历</p>
                </li>
                <li className="h-14 w-16 flex-col flex items-center justify-center">
                    <div className="h-9 w-9 bg-green-400 rounded-full 
                     flex items-center justify-center">
                        <img src={Map} alt='logo' className='h-6 w-6'></img>
                    </div>
                    <p className="text-bar text-center leading-5">校园地图</p>
                </li>
                <li className="h-14 w-16 flex-col flex items-center justify-center">
                    <div className="h-9 w-9 bg-blue-600 rounded-full 
                     flex items-center justify-center">
                        <img src={Mail} alt='logo' className='h-6 w-6'></img>
                    </div>
                    <p className="text-bar text-center leading-5">我的邮箱</p>
                </li>
            </ul>
        </div>
    )
}

export default Bar