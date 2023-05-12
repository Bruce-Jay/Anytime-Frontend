import Avatar from './image/avatar.svg'
import Poster from './image/poster.png'

function Welcome() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-xl w-auto h-40 bg-ecnu mx-auto">
                <div className='pl-6 pt-4 flex'>
                    <img src={Avatar} alt='avatar' className='w-20 mr-4'></img>
                    <div className='pt-3'>
                        <p className='text-white text-ssb'>
                            ECNU 随师办
                        </p>
                        <p className='text-white font-semibold text-namae'>欢迎您，微信用户</p>
                    </div>
                    
                </div>
                <img src={Poster} alt='poster' className='mt-6 w-19/20 mx-auto rounded-2xl aspect-poster'></img>
            </div>
            <div className="bg-gray-100 h-28"></div>
        </div>
        
    )
}

export default Welcome