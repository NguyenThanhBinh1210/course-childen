/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from '~/assets/images/banner2.tablet.jpg'
import Anh1 from '~/assets/images/frame-10887.png'
import Check from '~/assets/images/check.png'
import Image1 from '~/assets/images/mortarboard.gif'
import Image2 from '~/assets/images/exam.gif'
import Image3 from '~/assets/images/video.gif'
import Image4 from '~/assets/images/diploma.gif'
import Cochung from '~/assets/images/co-chung.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
  // const images = [Banner, Anh1, Banner, Anh1, Banner, Anh1, Banner, Anh1]

  return (
    <div>
      <section>
        <div className='w-full'>
          <img src={Banner} alt='Banner' />
        </div>
      </section>
      <div className='md:flex md:items-center md:gap-x-4 lg:grid lg:grid-cols-7'>
        <section className='mt-10 md:mt-0 lg:col-span-3'>
          <div className='w-full'>
            <img src={Anh1} alt='Anh1' />
          </div>
        </section>
        <section className='reason px-[20px] py-3 lg:pr-[100px] lg:col-span-4'>
          <h2 className='text-3xl font-bold lg:text-40 lg:leading-10'>
            4 lý do <strong className='font-bold text-secondary'>Edupia Math</strong> trở thành lựa chọn hàng đầu để con
            giỏi Toán
          </h2>
          <p className='text-center mt-3 lg:text-20 '>Học Toán khó, có Edupia Math lo</p>
          <ul className='mt-6 flex flex-col gap-y-3 lg:text-20 '>
            <li className='flex gap-x-3 items-center'>
              <div className='w-[45.45px] h-[45.45px]'>
                <img className='w-full' src={Check} alt='Check' />
              </div>
              <p className='w-[90%]'>
                Đội ngũ <strong className='font-bold text-secondary'>giáo viên giỏi, đầy nhiệt huyết</strong> tuyển chọn
                từ các trường chuyên và quốc tế
              </p>
            </li>
            <li className='flex gap-x-3 items-center'>
              <div className='w-[45.45px] h-[45.45px]'>
                <img className='w-full' src={Check} alt='Check' />
              </div>
              <p className='w-[90%]'>
                Cam kết <strong className='font-bold text-secondary'>100%</strong> học sinh tiến bộ về năng lực và điểm
                số
              </p>
            </li>
            <li className='flex gap-x-3 items-center'>
              <div className='w-[45.45px] h-[45.45px]'>
                <img className='w-full' src={Check} alt='Check' />
              </div>
              <p className='w-[90%]'>
                Lớp học Toán online đầu tiên sử dụng phương pháp giáo dục RME “
                <strong className='font-bold text-secondary'>Toán học gắn liền thực tiễn</strong>” ứng dụng trong trường
                học châu Âu
              </p>
            </li>
            <li className='flex gap-x-3 items-center'>
              <div className='w-[45.45px] h-[45.45px]'>
                <img className='w-full' src={Check} alt='Check' />
              </div>
              <p className='w-[90%]'>
                Đội ngũ giáo vụ chuyên môn cao luôn đồng hành <strong className='font-bold text-secondary'>24/7</strong>{' '}
                để giải đáp và hướng dẫn học sinh tận tình
              </p>
            </li>
          </ul>
          <button className='w-full lg:mt-[100px] bg-bgYellow text-white hover:bg-bgOrange uppercase py-[23px] text-[20px] rounded-md mt-5 font-semibold'>
            Đăng ký ngay
          </button>
        </section>
      </div>
      <section className='flex flex-col gap-y-10 pb-[110px] pt-[60px] md:flex-row md:justify-between md:px-8'>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image1} alt='Image1' />
          </div>
          <h4 className='text-bgRed font-bold text-20'>1.000.000+</h4>
          <p className='text-xs font-semibold'>Học sinh tham gia</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image2} alt='Image2' />
          </div>
          <h4 className='text-bgRed font-bold text-20'>95%</h4>
          <p className='text-xs font-semibold '>Học sinh có tiến bộ</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image3} alt='Image3' />
          </div>
          <h4 className='text-bgRed font-bold text-20'>5.000+</h4>
          <p className='text-xs font-semibold '>Video bài giảng và tập luyện</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image4} alt='Image4' />
          </div>
          <h4 className='text-bgRed font-bold text-20'>100%</h4>
          <p className='text-xs font-semibold text-center max-w-[170px]'>
            Được thiết kế bài giảng và đánh giá kết quả riêng
          </p>
        </div>
      </section>
      <section className='pt-[70px] bg-lightGreen flex flex-col px-3 items-center'>
        <h2 className='text-2xl font-bold mb-4'>
          Khám phá lớp học online <strong className='font-bold text-secondary'>Edupia Math</strong>
        </h2>
        <p className='text-textColor leading-5 text-center'>
          Không chỉ mang đến những kiến thức Toán học hấp dẫn mà là môi trường tạo động lực cho hàng triệu học sinh Việt
        </p>

        <button className='w-max mt-10 px-10 lg:mt-[100px] bg-bgYellow text-white hover:bg-bgOrange uppercase py-[23px] text-[24px] rounded-md mb-[88px] font-semibold'>
          Học thử miễn phí ngay
        </button>
        <h2 className='text-2xl font-bold mb-4'>
          Đội ngũ giáo viên & chuyên gia <strong className='font-bold text-secondary'>Edupia Math</strong>
        </h2>
        <p className='text-textColor leading-5 text-center mb-5'>
          Được cố vấn và xây dựng bởi chuyên gia đầu ngành cùng đội ngũ giáo viên{' '}
          <strong className='font-bold text-black'>giỏi - sáng tạo - nhiệt huyết</strong>
        </p>
        <div className='w-full'>
          <div className='mb-[90px] pl-10'>
            <div className='font-bold text-white w-max bg-secondary py-0.5 px-3 rounded-full'>Cố vấn nội dung</div>
            <h2 className='text-2xl font-bold my-2'>Th.S Nguyễn Thuỷ Chung</h2>
            <p className='text-[14px] text-secondary font-semibold mb-2'>Chức vụ</p>
            <p className='text-[14px] mb-5'>Phó trưởng khoa Giáo Dục Tiểu Học - Trường Đại học Sư phạm Hà Nội</p>
            <p className='text-[14px] text-secondary font-semibold mb-2'>Kinh nghiệm giảng dạy</p>
            <ul className='list-disc pl-10 text-20'>
              <li>17 năm kinh nghiệm giảng dạy và nghiên cứu về giáo dục Toán học ở tiểu học</li>
              <li>Nhiều công trình nghiên cứu liên quan đến đào tạo giáo viên tiểu học và dạy học toán ở tiểu học</li>
              <li>Xây dựng chương trình môn Toán và Toán - Tiếng Anh cho các trường tiểu học</li>
            </ul>
          </div>
          <div>
            <img src={Cochung} alt='Cochung' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
