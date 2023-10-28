import { Link } from 'react-router-dom'
import Logo from '~/assets/images/logo2.png'
import Logo3 from '~/assets/images/logo3.png'
const Footer = () => {
  const footerContent = ['Khoá học', 'Dạy toán theo tuổi', 'Dạy toán theo lớp', 'Hỗ trợ khách hàng']
  return (
    <footer>
      <div className='bg-primary py-10'>

        <div className='px-5 grid md:grid-cols-2 lg:grid-cols-3 max-w-[1320px] mx-auto'>
          <div className='md:col-span-2 md:grid md:grid-cols-2 lg:gap-x-7'>
            <div className='flex flex-col items-center mb-5 md:items-start'>
              <div className='w-[128px] h-[115px] mb-3'>
                <img src={Logo} alt='Logo' />
              </div>
              <div className='flex flex-col items-center lg:pb-10 font-semibold md:items-start'>
                <p className='text-[14px] text-white pt-0 pb-3 mb-0'>Công ty cổ phần giáo dục Educa Corporation</p>
                <p className='text-[14px] text-white pt-0 pb-3 mb-0'>
                  MST: 0108156933 do Sở KH và ĐT TP.Hà Nội cấp ngày 05/02/2018
                </p>
                <p className='text-[14px] text-white pt-0 pb-3 mb-0'>Đại diện: Ông Trần Đức Hùng</p>
              </div>
              <div className='w-[147px] h-[55px]'>
                <img src={Logo3} alt='Logo3' />
              </div>
            </div>
            <div>
              <div className='flex items-center flex-col md:items-start'>
                <h3 className='w-max px-3 text-white rounded-2xl bg-secondary mb-[10px]'>Hà nội</h3>
                <p className='text-sm font-semibold text-white mb-5'>
                  Tầng 6, Tòa nhà Báo Sinh Viên - Hoa Học Trò, Yên Hòa, Cầu Giấy, Hà Nội
                </p>
                <p className='text-sm font-semibold text-white mb-5'>
                  {' '}
                  Tầng 6, Tòa Comatce Tower, 61 Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội
                </p>
              </div>
              <div className='flex items-center flex-col md:items-start'>
                <h3 className='w-max px-3 text-white rounded-2xl bg-secondary mb-[10px]'>TP Hồ Chí Minh</h3>
                <p className='text-sm font-semibold text-white mb-5'>
                  Tầng 2, Tòa Mach Office, 127 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TPHCM
                </p>
              </div>
            </div>
          </div>
          <div className='md:col-span-2 lg:ml-[100px] md:grid md:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col '>
            <div className='flex flex-col items-center md:items-start'>
              <h3 className='w-max  text-[#ffcb08] font-semibold mb-[10px]'>Giới thiệu</h3>
              <p className='cursor-pointer text-sm font-semibold text-white mb-5'>Giới thiệu chung</p>
              <p className='cursor-pointer text-sm font-semibold text-white mb-5'>Nhà sáng lập Edupia</p>
              <p className='cursor-pointer text-sm font-semibold text-white mb-5'>Các khóa học trên Edupia</p>
              <p className='cursor-pointer text-sm font-semibold text-white mb-5'>Đội ngũ giáo viên</p>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <div className='w-max px-3 py-1 text-white rounded-2xl bg-secondary mb-[10px]'>Hostline</div>
              <div className='text-[#ffcb08] font-semibold text-2xl'>093.120.8686</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary flex flex-col lg:flex-row lg:justify-around'>
        {footerContent.map((item, index) => (
          <div key={index} className='py-12 font-semibold text-white'>
            <Link className='text-center block mx-auto' to={'#'}>
              {item}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
