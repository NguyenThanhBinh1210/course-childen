import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '~/assets/images/logo1.png'
const contentMenu = [
  {
    path: '/',
    title: 'Trang chủ'
  },
  {
    path: '/intro',
    title: 'Giới thiệu'
  },
  {
    path: '/class',
    title: 'Lớp học'
  },
  {
    path: '/extracurricular',
    title: 'Ngoại khoá'
  },
  {
    path: '/new',
    title: 'Tin tức'
  }
]
const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <header className='bg-primary shadow-xl fixed w-full z-10'>
      <div className=' w-full'>
        <div className='max-w-[1465px] lg:items-center mx-auto px-[27px] py-[15px] flex justify-between'>
          <div className='w-[125px] h-[39px]'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='hidden lg:flex gap-x-3'>
            {contentMenu.map((item, index) => (
              <NavLink
                key={index}
                onClick={() => setShowMenu(false)}
                className={({ isActive, isPending }) =>
                  [
                    isPending ? 'pending' : ' py-1 px-3  text-white font-semibold rounded-2xl',
                    isActive ? 'bg-bgYellow ' : 'hover:bg-bgYellow  transition-all w-max rounded-2xl'
                  ].join(' ')
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className='hidden lg:flex text-white font-semibold gap-x-5'>
            <button>Đăng nhập</button>
            <button className='py-2 px-3 bg-bgYellow rounded-lg'>Kích hoạt tài khoản</button>

          </div>
          <div
            className={` bg-[rgba(0,0,0,.8)] lg:hidden z-10 fixed top-0 left-0 w-full transition-all h-full ${showMenu ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
          ></div>
          <div
            style={{ zIndex: 100 }}
            className={`z-100 lg:hidden px-[10px] py-5 fixed h-full w-[70%] bg-primary top-0 transition-all duration-300 ${showMenu ? 'right-0' : 'right-[-100%]'
              }`}
          >
            <button
              onClick={() => setShowMenu(false)}
              className='absolute top-7 right-5 text-white font-semibold text-2xl '
            >
              <svg height='20px' version='1.1' viewBox='0 0 14 14' width='20px' xmlns='http://www.w3.org/2000/svg'>
                <title />
                <desc />
                <defs />
                <g fill='none' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1'>
                  <g fill='white' id='Core' transform='translate(-341.000000, -89.000000)'>
                    <g id='close' transform='translate(341.000000, 89.000000)'>
                      <path
                        d='M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z'
                        id='Shape'
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <div className='w-[125px] h-[39px]'>
              <img src={Logo} alt='Logo' />
            </div>
            <div className='w-full h-[1px] bg-gray-300 mt-4 mb-6'></div>
            <div className='flex flex-col font-semibold text-white'>
              {contentMenu.map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive, isPending }) =>
                    [
                      isPending ? 'pending' : 'mt-5 py-1 px-3',
                      isActive ? 'text-[#ffcb08] ' : 'hover:bg-[#ffcb08] transition-all w-max rounded-2xl'
                    ].join(' ')
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowMenu(true)}
            className='lg:hidden rounded-full  bg-primary flex w-10 h-10 items-center justify-center'
          >
            <svg fill='none' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'>
              <path
                clip-rule='evenodd'
                d='M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z'
                fill='white'
                fill-rule='evenodd'
              />
              <path
                clip-rule='evenodd'
                d='M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z'
                fill='white'
                fill-rule='evenodd'
              />
              <path
                clip-rule='evenodd'
                d='M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z'
                fill='white'
                fill-rule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
