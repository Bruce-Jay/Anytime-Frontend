import WalletIcon from './image/Wallet.svg';
import IdCard from './image/idcard.svg'
import Income from './image/income.svg'
import Bachelor from './image/icon_Bachelor\'s_hat.svg'
import Book from './image/025.svg'
import Arrow from './image/double-arrow-up-1.svg'
import IdCardGray from './image/idcardGray.svg'
import Exchange from './image/exchange.svg'


function Wallet() {
    return (
        <div className="bg-gray-100 p-4">
            <div className="max-w-xl w-auto h-72 bg-white mx-auto rounded-xl pt-2">
                <div className='flex justify-center'>
                    <span>
                        <img src={WalletIcon} alt='wallet' className='w-6'></img>
                    </span>
                    <p className='ml-1 text-ssb mt-1'>
                        校园卡钱包
                    </p>
                </div>
                <div>
                    <ul className="flex justify-around pt-3 block px-6">
                        <li className="h-16 flex-col flex items-center justify-center">
                            <p>
                                <span className='text-mny text-ecnu'>11171.37</span>
                                <span className='text-bar text-ecnu'>元</span>
                            </p>
                            <p className="text-bar text-center leading-5">账户余额</p>
                        </li>
                        <div className='w-px border-r'></div>
                        <li className="h-16 flex-col flex items-center justify-center">
                            <p>
                                <span className='text-mny text-ecnu'>172.37</span>
                                <span className='text-bar text-ecnu'>元</span>
                            </p>
                            <p className="text-bar text-center leading-5">本月消费</p>
                        </li>
                        <div className='w-px border-r'></div>
                        <li className="h-16 flex-col flex items-center justify-center">
                            <p>
                                <span className='text-mny text-ecnu'>1000</span>
                                <span className='text-bar text-ecnu'>元</span>
                            </p>
                            <p className="text-bar text-center leading-5">本月充值</p>
                        </li>
                        
                    </ul>
                </div>
                <div className='px-2 pt-2 pb-4 border-b w-11/12 mx-auto'>
                    <ul className="list-none flex justify-around pt-3">
                        <li className="h-14 w-18 flex-col flex items-center justify-center">
                            <div className="h-9 w-9 rounded-full 
                            flex items-center justify-center">
                                <img src={IdCard} alt='logo' className='h-6 w-6'></img>
                            </div>
                            <p className="text-scr text-center leading-5">Ecard 小程序</p>
                        </li>
                        <li className="h-14 w-18 flex-col flex items-center justify-center">
                            <div className="h-9 w-9 rounded-full 
                            flex items-center justify-center">
                                <img src={Income} alt='logo' className='h-6 w-6'></img>
                            </div>
                            <p className="text-scr text-center leading-5">奖助补贴</p>
                        </li>
                        <li className="h-14 w-18 flex-col flex items-center justify-center">
                            <div className="h-9 w-9 rounded-full 
                            flex items-center justify-center">
                                <img src={Bachelor} alt='logo' className='h-6 w-6'></img>
                            </div>
                            <p className="text-scr text-center leading-5">教育缴费</p>
                        </li>
                        <li className="h-14 w-18 flex-col flex items-center justify-center">
                            <div className="h-9 w-9 rounded-full 
                            flex items-center justify-center">
                                <img src={Book} alt='logo' className='h-6 w-6'></img>
                            </div>
                            <p className="text-scr text-center leading-5">教材费</p>
                        </li>
                    </ul>
                </div>
                <div className='pt-2 pb-2 w-11/12 mx-auto'>
                    <ul className="list-none flex justify-start">
                        <li className="flex-col flex items-center justify-center border mr-3 rounded p-1 shadow">
                            
                            <p className="text-bar text-center leading-5 text-slate-500">
                                <span>
                                    <img src={IdCardGray} alt='arrow' className='inline-block w-4 m-1'></img>
                                </span>
                                领取电子卡
                            </p>
                        </li>
                        <li className="flex-col flex items-center justify-center border rounded p-1 shadow">
                            
                            <p className="text-bar text-center leading-5 text-slate-500">
                                <span>
                                    <img src={Exchange} alt='arrow' className='inline-block w-4 m-1'></img>
                                </span>
                                电子卡换号
                            </p>
                        </li>
                        
                    </ul>
                </div>
                <p className='text-center text-bar text-ecnu'>
                    <text className='mr-1'>点击收起</text>
                    <span>
                        <img src={Arrow} alt='arrow' className='inline-block w-3'></img>
                    </span>
                </p>
            </div>
        </div>
        
    )
}

export default Wallet