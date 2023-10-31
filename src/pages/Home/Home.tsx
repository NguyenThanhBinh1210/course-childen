/* eslint-disable @typescript-eslint/no-explicit-any */
import Anh1 from '~/assets/images/frame-10887.png'
import Check from '~/assets/images/check.png'
import Image1 from '~/assets/images/mortarboard.gif'
import Image2 from '~/assets/images/exam.gif'
import Image3 from '~/assets/images/video.gif'
import Image4 from '~/assets/images/diploma.gif'
import Download from '~/assets/images/download.png'
import Android from '~/assets/images/android_qrcode.png'
import Ios from '~/assets/images/ios_qrcode.png'
import Cochung from '~/assets/images/co-chung.png'
import TinTuc1 from '~/assets/images/1.png'
import LoginBanner from '~/assets/images/login.png'
import ChauBe from '~/assets/images/banner_anh-chan-trang-min.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderBanner from '~/components/Home/SliderBanner'

const Home = () => {
  return (
    <div>
      <SliderBanner />
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
      <section className='flex lg:max-w-[1268px] lg:mx-auto flex-col gap-y-10 pb-[110px] pt-[60px] md:flex-row md:justify-between md:px-8'>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image1} alt='Image1' />
          </div>
          <h4 className='text-bgRed font-bold lg:text-[30px] text-20'>1.000.000+</h4>
          <p className='text-xs font-semibold lg:text-base'>Học sinh tham gia</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image2} alt='Image2' />
          </div>
          <h4 className='text-bgRed font-bold lg:text-[30px] text-20'>95%</h4>
          <p className='text-xs font-semibold lg:text-base '>Học sinh có tiến bộ</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image3} alt='Image3' />
          </div>
          <h4 className='text-bgRed font-bold lg:text-[30px] text-20'>5.000+</h4>
          <p className='text-xs font-semibold lg:text-base '>Video bài giảng và tập luyện</p>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <div className='w-[56px] h-[56px]'>
            <img src={Image4} alt='Image4' />
          </div>
          <h4 className='text-bgRed font-bold lg:text-[30px] text-20'>100%</h4>
          <p className='text-xs font-semibold lg:text-base text-center max-w-[170px]'>
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

        <button className='w-max mt-10 px-10 lg:mt-[100px] bg-bgYellow text-white hover:bg-bgOrange uppercase py-[23px] text-[24px] rounded-md mb-[88px] font-semibold lg:text-base'>
          Học thử miễn phí ngay
        </button>
        <h2 className='text-2xl font-bold mb-4 lg:text-[35px]'>
          Đội ngũ giáo viên & chuyên gia <strong className='font-bold text-secondary'>Edupia Math</strong>
        </h2>
        <p className='text-textColor leading-5 text-center mb-5 lg:text-20 lg:max-w-2xl lg:leading-7'>
          Được cố vấn và xây dựng bởi chuyên gia đầu ngành cùng đội ngũ giáo viên{' '}
          <strong className='font-bold text-black'>giỏi - sáng tạo - nhiệt huyết</strong>
        </p>
        <div className='w-full md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20'>
          <div className='mb-[90px] pl-8 md:pl-6 lg:ml-[80px]'>
            <div className='font-bold text-white w-max lg:text-20 bg-secondary py-0.5 px-3 rounded-full'>
              Cố vấn nội dung
            </div>
            <h2 className='text-2xl font-bold my-2 lg:text-[32px]'>Th.S Nguyễn Thuỷ Chung</h2>
            <p className='text-[14px] text-secondary font-semibold mb-2 lg:text-20'>Chức vụ</p>
            <p className='text-[14px] mb-5 lg:text-20'>
              Phó trưởng khoa Giáo Dục Tiểu Học - Trường Đại học Sư phạm Hà Nội
            </p>
            <p className='text-[14px] text-secondary font-semibold mb-2 lg:text-20'>Kinh nghiệm giảng dạy</p>
            <ul className='list-disc pl-10 text-20 lg:text-20'>
              <li>17 năm kinh nghiệm giảng dạy và nghiên cứu về giáo dục Toán học ở tiểu học</li>
              <li>Nhiều công trình nghiên cứu liên quan đến đào tạo giáo viên tiểu học và dạy học toán ở tiểu học</li>
              <li>Xây dựng chương trình môn Toán và Toán - Tiếng Anh cho các trường tiểu học</li>
            </ul>
          </div>
          <div className='md:flex flex-col justify-center'>
            <img src={Cochung} alt='Cochung' />
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <h2 className='text-2xl font-bold mb-4 lg:text-[35px] text-center'>
          Tin tức <strong className='font-bold text-secondary'>Edupia Math</strong>
        </h2>
        <div className='p-5 my-5 lg:grid lg:grid-cols-2 lg:max-w-[1260px] mx-auto lg:mt-16 gap-x-12'>
          <div className='rounded-2xl overflow-hidden relative'>
            <div className='absolute pl-4 pb-4 flex items-end top-0 left-0 w-full h-full bg-gradient-to-b to-[rgba(30,30,30,.96)] from-[rgba(82,82,82,0)]'>
              <p className='mt-auto text-20 font-bold text-white '>
                Edupia nhận giải thưởng thương hiệu xuất sắc thế giới
              </p>
            </div>
            <img className='md:w-full' src={TinTuc1} alt='TinTuc1' />
          </div>

          <div className='flex flex-col mt-16 gap-y-16 md:grid md:grid-cols-2 md:gap-x-10 lg:mt-0'>
            <div className='shadow-md lg:flex lg:flex-col rounded-2xl overflow-hidden'>
              <div className='lg:h-[191px]'>
                <img className='h-full object-cover' src={TinTuc1} alt='TinTuc1' />
              </div>
              <div className='px-2 lg:flex-1 lg:flex lg:flex-col lg:justify-between lg:pb-4'>
                <h3 className='font-bold leading-7 lg:text-[17px] lg:line-clamp-2'>
                  Edupia Math - Giải pháp học toán trực tuyến hiệu quả cùng giáo viên giỏi trường điểm
                </h3>
                <p className='text-textColor leading-7 lg:text-base text-xs'>9 Th10, 2022</p>
              </div>
            </div>
            <div className='shadow-md lg:flex lg:flex-col rounded-2xl overflow-hidden'>
              <div className='lg:h-[191px]'>
                <img className='h-full object-cover' src={TinTuc1} alt='TinTuc1' />
              </div>
              <div className='px-2 lg:flex-1 lg:flex lg:flex-col lg:justify-between lg:pb-4'>
                <h3 className='font-bold leading-7 lg:text-[17px] lg:line-clamp-2'>
                  Edupia Math - Giải pháp học toán trực tuyến hiệu quả cùng giáo viên giỏi trường điểm
                </h3>
                <p className='text-textColor leading-7 lg:text-base text-xs'>9 Th10, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-5 mt-10 md:grid md:grid-cols-2 md:gap-x-10 lg:flex lg:max-w-[1260px] lg:mb-20 lg:mx-auto'>
        <div className='lg:w-[60%] lg:h-[60%]'>
          <img className='w-full h-full object-cover' src={Download} alt='Download' />
        </div>
        <div className='mb-5 mt-10 md:mt-5 md:mb-10 lg:mb-16 xl:mb-20'>
          <h2 className='text-2xl xl:text-[56px] font-bold xl:leading-[56px] mb-4 md:text-[24px] lg:text-[35px]'>
            Tải ứng dụng <strong className='font-bold text-secondary'>Edupia Math</strong>
          </h2>
          <p className='mt-auto text-[14px] mb-4 max-w-[400px] '>
            Tải ứng dụng Edupia Math để trải nghiệm chương trình học tiên tiến, sinh động nhất nhé!
          </p>
          <div className='flex gap-x-14'>
            <div className='w-[118px] h-[151px]'>
              <img src={Android} alt='Android' />
            </div>
            <div className='w-[118px] h-[151px]'>
              <img src={Ios} alt='Ios' />
            </div>
          </div>
        </div>
      </section>
      <section className='mb-20'>
        <div className='w-full lg:max-w-[1260px] lg:mx-auto h-[847px] md:h-[447px] relative md:rounded-xl overflow-hidden'>
          <img className='h-full object-cover' src={LoginBanner} alt='LoginBanner' />
          <div className='absolute top-0 left-0 w-full h-full md:grid md:grid-cols-2'>
            <div className='h-1/2 md:h-full lg:w-[500px]  overflow-hidden w-[400px] mx-auto'>
              <img className='' src={ChauBe} alt='ChauBe' />
            </div>
            <div className='w-max mx-auto mt-5'>
              <div className='flex gap-x-5 justify-center'>
                <div className='bg-bgRed text-white text-2xl leading-6 rounded-lg w-[70px] h-[72px] flex flex-col items-center justify-center'>
                  <div className='font-bold'>00</div>
                  <div className='text-base'>Giờ</div>
                </div>
                <div className='bg-bgRed text-white text-2xl leading-6 rounded-lg w-[70px] h-[72px] flex flex-col items-center justify-center'>
                  <div className='font-bold'>25</div>
                  <div className='text-base'>Phút</div>
                </div>
                <div className='bg-bgRed text-white text-2xl leading-6 rounded-lg w-[70px] h-[72px] flex flex-col items-center justify-center'>
                  <div className='font-bold'>57</div>
                  <div className='text-base'>Giây</div>
                </div>
              </div>
              <form className=' flex flex-col gap-y-3 w-[306px] lg:w-[420px] mt-5'>
                <input
                  className=' outline-none focus:ring-2 transition-all ring-blue-400 rounded-md h-[48.6px] pl-3 placeholder:font-semibold placeholder:text-textColor '
                  placeholder='Họ và tên'
                  type='text'
                  name='name'
                />
                <input
                  className=' outline-none focus:ring-2 transition-all ring-blue-400 rounded-md h-[48.6px] pl-3 placeholder:font-semibold placeholder:text-textColor '
                  placeholder='Số điện thoại'
                  type='text'
                  name='phone'
                />
                <select
                  name='class'
                  className='outline-none focus:ring-2 transition-all ring-blue-400 rounded-md h-[48.6px] pl-3'
                >
                  <option disabled selected>
                    Chọn lớp học
                  </option>
                  <option value={''}>Lớp 1</option>
                  <option value={''}>Lớp 2</option>
                  <option value={''}>Lớp 3</option>
                  <option value={''}>Lớp 4</option>
                  <option value={''}>Lớp 5</option>
                </select>
                <select
                  name='cource'
                  className='outline-none focus:ring-2 transition-all ring-blue-400 rounded-md h-[48.6px] pl-3'
                >
                  <option disabled selected>
                    Chọn khoá học
                  </option>
                  <option value={''}>Combo Toán + Tiếng anh Edupia</option>
                  <option value={''}>Toán Edupia</option>
                  <option value={''}>Tiếng anh Edupia</option>
                </select>
                <button className='w-full  bg-bgYellow text-white hover:bg-bgOrange uppercase py-[10px] text-base rounded-md  font-semibold'>
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
