import MainKo from '@/pages/MainKo'
import NavbarDesktop from '@/components/NavbarDesktop'

export const metadata = {
  title: '자동차 윈도우 틴팅 어바인 | Specialized Auto Tint',
  description:
    'Specialized Auto Tint에서 제공해드리는 고품질 윈도우 틴팅 서비스로 남다른 편안함을 경험해보세요.',
}

export default function Home() {
  return (
    <section
      className='relative bg-black overflow-hidden'
      style={{ backgroundColor: '#0d0d0d' }}
    >
      <div className='absolute flex justify-between inset-0'>
        <div className='w-1/12' style={{ backgroundColor: '#0d0d0d' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#111' }}></div>
        <div
          style={{
            width: 'calc(100% - 4/12*100%)',
            backgroundColor: '#151515',
          }}
        ></div>
        <div className='w-1/12' style={{ backgroundColor: '#111' }}></div>
        <div className='w-1/12' style={{ backgroundColor: '#0d0d0d' }}></div>
      </div>

      <MainKo />

      {/* Desktop Navbar */}
      <div className='hidden lg:block'>
        <NavbarDesktop main ko />
      </div>
    </section>
  )
}
