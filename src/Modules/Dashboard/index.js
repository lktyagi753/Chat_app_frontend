import React from 'react'
import Avtar from '../../assests/60111.jpg'
import Input from '../../Components/Input/index'

const Dashboard = () => {
    const contacts = [
        {
            name : 'John',
            status: 'Available',
            img: Avtar
        },
        {
            name : 'Mary',
            status: 'Available',
            img: Avtar
        },
        {
            name : 'Alex',
            status: 'Available',
            img: Avtar
        },
        {
            name : 'Smith',
            status: 'Available',
            img: Avtar
        },
        {
            name : 'Harry',
            status: 'Available',
            img: Avtar
        },
    ]
  return (
    <div className='w-screen flex'>
      <div className='w-[25%] borderh-screen  bg-secondary'>
        <div className='flex  items-center my-8 mx-14'>
            <div className='border-4 border-primary rounded-full'><img src={Avtar} width={75} height={75} className='rounded-full'/></div>
            <div className='ml-8'>
                <h3 className='text-2xl'>Lovekush Tyagi</h3>
                <p className='text-lg font-light'>My Account</p>
            </div>
        </div>
      <hr/>
      <div className='ml-14 mt-10'>
        <div className='text-primary text-lg '>Messages</div>
        <div>
            {
                contacts.map(({name, status, img}) => {
                    return(
                        <div className='flex items-center py-8 border-b border-b-gray-300'>
                            <div className='cursor-pointer flex items-center'>
                            <div><img src={img} width={60} height={60} className='rounded-full'/></div>
                            <div className='ml-6'>
                                <h3 className='text-lg font-semibold'>{name}</h3>
                                <p className='text-sm font-light text-gray-600'>{status}</p>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      </div>
      <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
        <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
            <div className='cursor-pointer'><img src={Avtar} width={60} height={60} className='rounded-full'/></div>
            <div className='ml-6 mr-auto'>
                <h3 className='text-lg'>Alex</h3>
                <p className='text-sm font-light text-gray-600'>online</p>
            </div>
            <div className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 6h6m-3 -3v6" /></svg>
            </div>
        </div>
        <div className='h-[75%] w-full overflow-y-scroll no-scrollbar border-b'>
            <div className='p-14'>
                <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                    lore afjafjf ajajfkjakfkjfjafjkfkfl a.
                </div>
                <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                    lore afjafjf ajajfkjakfkjfjafjkfkfl a.
                </div>
            </div>
        </div>
        <div className='p-14 w-full flex items-center'>
            <Input placeholder='Type a message...' className='w-[75%]' inclassName='w-full p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none'/>
            <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send-2" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
            </div>
            <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
            </div>
        </div>
      </div>
      <div className='w-[25%] h-screen bg-light'></div>
    </div>
  )
}

export default Dashboard
