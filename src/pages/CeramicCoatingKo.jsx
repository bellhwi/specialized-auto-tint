'use client'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import QuoteModal from '@/components/QuoteModal'

export default function CeramicCoatingKo({ setOpenNav, setOpenQuote }) {
  return (
    <section className='lg:mx-auto lg:relative bg-white lg:w-1/2 lg:max-w-screen-lg'>
      <Navbar setOpenNav={setOpenNav} setOpenQuote={setOpenQuote} ko />
      <Image
        src='/img/ceramic-coating/hero.webp'
        width={1181}
        height={1705}
        alt='ceramic coating car'
        className='absolute inset-0 w-full z-20'
        priority
      />

      {/* main */}
      <section className='relative z-20 pt-44 md:pt-88 lg:pt-80  2xl:pt-104'>
        <div className='container mx-auto'>
          <div className='pt-8 px-8'>
            <p className='text-gray-600 text-xl sm:text-3xl font-godic-bold'>
              고품격의 차량 외관 보호 서비스
            </p>
            <h1
              className='md:py-2 text-color-primary uppercase text-4xl sm:text-6xl'
              style={{ fontFamily: 'Godic_bold, sans-serif' }}
            >
              세라믹 코팅
            </h1>
            <div className='mt-4 text-left'>
              <p className='text-color-primary text-xl md:text-3xl'>
                혁신적인 기술 도입
              </p>
              <p className='text-sm lg:text-base'>
                Q2 MOHS EVO는 자동차 관리 업계 최초로 플루오로 변성 폴리실라잔을
                사용합니다.
              </p>
              <p className='mt-4 font-godic-bold '>무엇이 다른가요?</p>
              <p className='text-sm lg:text-base'>
                변성 폴리실라잔을 사용하면 내구성, 내화학성, 사용 편의성 등 모든
                방면에서 이점이 있습니다. 매끄러워 제품을 바르고 닦기 쉬우며
                뛰어난 광택과 함께 화학적 내성으로 인한 견고한 내구성을
                지닙니다.
              </p>
            </div>
          </div>
        </div>
        {/* Maintenance */}
        <div className='max-w-screen-sm mx-auto'>
          <div className='space-y-4 mt-16'>
            <div className='mx-auto px-8'>
              <h2 className='uppercase text-3xl text-center font-godic-thin md:text-5xl text-color-primary'>
                SPECIALIZED AUTO <br />{' '}
                <span className='font-godic-bold md:text-6xl'>
                  차량 유지 시스템
                </span>
              </h2>
              <Image
                src='/img/ceramic-coating/maintenance.webp'
                width={640}
                height={218}
                className='mt-8 mx-auto md:w-2/3'
                alt='car maintenance'
              />
              <div className='border border-b border-gray-700 w-32 mx-auto mt-12'></div>
              <h3 className='mt-4 text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
                세차
              </h3>
              <p className='my-4 font-godic-thin text-sm text-center lg:text-base'>
                저희는 100% 손으로 세차를 진행 후 세심하게 차량의 외관을
                건조시킵니다. 이후 차량의 창문 안팎 및 내부를 진공 청소합니다.
              </p>
              <Image
                src='/img/ceramic-coating/car-wash.webp'
                width={1024}
                height={467}
                className='w-full pt-8'
                alt='car wash'
              />
            </div>
          </div>
          <div className='space-y-4 pt-8'>
            <div className='container mx-auto px-8'>
              <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
              <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
                클레이 앤 프렙
              </h3>
              <p className='my-4 text-center font-godic-thin  text-sm lg:text-base'>
                표면이 깨끗해지면 페인트에 클레이 앤 프렙 작업을 진행합니다.
                세척으로 지우기 어려운 표면 오염까지 깨끗하게 제거합니다.
              </p>
              <Image
                src='/img/ceramic-coating/clay-prep.webp'
                width={1024}
                height={467}
                className='w-full pt-8'
                alt='clay and prep'
              />
            </div>
          </div>
          <div className='space-y-4 pt-8'>
            <div className='container mx-auto px-8'>
              <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
              <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
                코팅 도포
              </h3>
              <p className='my-4 font-godic-thin text-center text-sm lg:text-base'>
                제품을 패널 전체에 골고루 충분히 바릅니다. 온도와 습도가
                높아지면 더 작은 부분까지 도포하고 즉시 닦아냅니다.
              </p>
              <Image
                src='/img/ceramic-coating/coating.webp'
                width={1024}
                height={467}
                className='w-full pt-8'
                alt='coating application'
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className='max-w-screen-sm mx-auto pt-16 pb-8 px-8 md:text-lg'>
          <h2
            className='text-center uppercase text-3xl md:text-6xl text-color-primary font-godic-thin'
            style={{ fontFamily: 'Godic_bold, sans-serif' }}
          >
            주요 혜택들
          </h2>
          <p className='my-4 text-center uppercase text-color-primary text-sm sm:text-base'>
            아래의 세라믹 코팅 혜택은 모든 페인트 및 코팅 제품에 적용됩니다.
          </p>
          <Image
            src='/img/ceramic-coating/benefits.webp'
            width={640}
            height={163}
            className='w-full my-8'
            alt='ceramic coating benefits'
          />
          {/* Details */}
          <div>
            <div className='text-sm lg:text-base'>
              <p>소비 : 15-25ml/차량</p>
              <p>PH 내성: 2-11</p>
              <p>내구성: 40KKM for 1 layer</p>
            </div>
            <div className='mt-4 text-sm lg:text-base'>
              <p>내구성 | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p>광택 | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p>비딩 | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
              <p>셀프클리닝 | &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            </div>
          </div>
          <div className='space-y-4 pt-16'>
            <div className='container mx-auto px-8'>
              <div className='border border-b border-gray-700 w-32 mx-auto my-4'></div>
              <h3 className='text-gray-700 text-center text-3xl md:text-5xl font-sarang '>
                품질보증
              </h3>
              <p className='my-4 text-center font-godic-thin text-sm lg:text-base'>
                세라믹 코팅 서비스는 Gyeonquartz의 제품 보증과 함께 Spcialized
                Auto Tint 자체 기간제 1년 품질보증이 제공됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* map and footer */}
      <section
        className='relative z-20'
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 30%, #ccc)',
        }}
      >
        <section className='container mx-auto px-8'>
          <Footer />
        </section>
      </section>

      {/* Pager */}
      <div className='lg:hidden'>
        <Link
          href='/ko'
          className='fixed top-1/2 left-0 transform -translate-y-1/2 z-20'
        >
          <Image src='/img/pager-left.png' width={32} height={32} />
        </Link>

        <Link
          href='/ko/portfolio'
          className='fixed top-1/2 right-0 transform -translate-y-1/2 z-20'
        >
          <Image src='/img/pager-right.png' width={32} height={32} />
        </Link>
      </div>

      {/* Contact Button */}
      <QuoteModal ko />
    </section>
  )
}
