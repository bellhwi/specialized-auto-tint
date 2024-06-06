import CeramicCoatingKo from '@/pages/CeramicCoatingKo'
import NavbarDesktop from '@/components/NavbarDesktop'
export const metadata = {
  title: '세라믹 코팅 | Specialized Auto Tint',
  description:
    '세라믹 코팅은 자동차 표면에 보호막을 형성하여 외부 환경으로부터 차량을 보호합니다. 저희 프리미엄 세라믹 코팅 서비스를 통해 차량의 외관을 오랫동안 보호하세요.',
}

export default function Home() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#e9e9e9' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f0f0f0' }}></div>
        <div className='w-8/12' style={{ backgroundColor: '#f4f4f4' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f9f9f9' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#f0f0f0' }}></div>
      </div>

      <CeramicCoatingKo />
      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop ceramic ko />
      </div>
    </section>
  )
}
