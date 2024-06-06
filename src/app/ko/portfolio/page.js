import NavbarDesktop from '@/components/NavbarDesktop'
import PortfolioKo from '@/pages/PortfolioKo'

export const metadata = {
  title: '포트폴리오 | Specialized Auto Tint',
  description:
    '저희의 최고급 자동차 틴팅 및 세라믹 코팅 작업물들을 직접 확인해보세요.',
}

export default function Home() {
  return (
    <section
      className='relative overflow-hidden'
      style={{ backgroundColor: '#030303' }}
    >
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#030303' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#0a0a0a' }}></div>
        <div
          style={{
            width: 'calc(100% - (4/12 * 100%))',
            backgroundColor: '#0f0f0f',
          }}
        ></div>
        <div className='w-1/12' style={{ backgroundColor: '#0a0a0a' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#030303' }}></div>
      </div>

      <PortfolioKo />
      {/* Desktop navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop portfolio ko />
      </div>
    </section>
  )
}
