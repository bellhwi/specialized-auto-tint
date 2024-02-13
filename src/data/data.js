import Image from 'next/image'

let products = [
  {
    title: 'Crystalline',
    heading: 'Block UV rays, not envy.',
    content:
      'A clear breakthrough in automotive window films. The Crystalline Series rejects more heat than many dark films without changing the appearance of your vehicle, making it the superior choice for comfort.',
    features: (
      <div className='grid grid-cols-1 gap-4 mt-4'>
        <div>
          <div className='flex items-center'>
            <Image
              src='/icons/white/unique-technology.png'
              alt='unique technology icon'
              width={171}
              height={166}
              className='w-8 mr-2'
            />
            <p className='text-gray-100 font-semibold'>Unique technology</p>
          </div>
          <p className='text-xs text-gray-300 mt-2'>
            Get advanced protection while keeping your vehicle’s original
            appearance. With patented multilayer optical film technology, the
            3M™ Crystalline Series provides better heat and UV protection than
            many darker films.
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <Image
              src='/icons/white/reduce-glare.png'
              alt='reduce glare icon'
              width={171}
              height={166}
              className='w-8 mr-2'
            />
            <p className='text-gray-100 font-semibold'>Reduce glare</p>
          </div>
          <p className='text-xs text-gray-300 mt-2'>
            The Crystalline Series allows you to see better and concentrate more
            on driving by reducing up to 77% of the glare from blinding
            sunlight.
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <Image
              src='/icons/white/stay-connected.png'
              alt='stay connected icon'
              width={171}
              height={166}
              className='w-8 mr-2'
            />
            <p className='text-gray-100 font-semibold'>Stay connected</p>
          </div>
          <p className='text-xs text-gray-300 mt-2'>
            The Crystalline Series is a non-metallized window film that won’t
            interfere with mobile devices, GPS or satellite radio reception.
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <Image
              src='/icons/white/stay-cool.png'
              alt='stay cool icon'
              width={171}
              height={166}
              className='w-8 mr-2'
            />
            <p className='text-gray-100 font-semibold'>Stay cool</p>
          </div>
          <p className='text-xs text-gray-300 mt-2'>
            The Crystalline Series allows you to have a lighter tint and still
            reject high amounts of heat - the highest of all 3M films. Rejection
            of up to 64% of the total solar energy and up to 99% of the
            heat-producing infrared rays* gives you the ultimate in comfort.
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <Image
              src='/icons/white/see-clearly.png'
              alt='see clearly icon'
              width={171}
              height={166}
              className='w-8 mr-2'
            />
            <p className='text-gray-100 font-semibold'>See clearly</p>
          </div>
          <p className='text-xs text-gray-300 mt-2'>
            The Crystalline Series is designed to enhance your view by allowing
            visible light into your vehicle while keeping heat out, so you can
            see clearly through your windows — and maintain your vehicle’s
            original appearance.
          </p>
        </div>
      </div>
    ),
  },
  // {
  //   title: 'Ceramic IR',
  //   content:
  //     'Cover your glass in cool with 3M advanced nano-ceramic technology.',
  // },
  // {
  //   title: 'Color Stable',
  //   content:
  //     'The Color Stable Series rivals tinted factory glass in its rich appearance. The nano-carbon is dispersed throughout the thickness of the film, ensuring  years of performance with no chance of the film turning purple.',
  // },
  // {
  //   title: 'FX Premium',
  //   content:
  //     'Hot look on the outside, cool and private on the inside.  The FX-PM Series window film blocks up to 99% of UV light to keep you cool at an affordable price.',
  // },
]

let specialties = [
  {
    title: 'Computerized Machine Cut',
    desc: "Our cutting-edge technology ensures each tint film is meticulously tailored to your vehicle's exact specifications, guaranteeing a seamless fit on every window.",
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
  {
    title: 'Exquisite Finish',
    desc: 'Elevate your vehicle with a touch of experience – over 15 years of mastery in delivering top-quality finishing services.',
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
  {
    title: 'Reliable Customer Services',
    desc: 'With a customer service approach rooted in honesty and kindness, we prioritize your satisfaction without any upselling tactics.',
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
]

let specialtiesPPF = [
  {
    title: 'Lorem Ipsum Dolor',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum voluptatem quis. Velit quisquam iusto architecto at asperiores fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid autem explicabo?',
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
  {
    title: 'Lorem Ipsum Dolor',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum voluptatem quis. Velit quisquam iusto architecto at asperiores fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid autem explicabo?',
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
  {
    title: 'Lorem Ipsum Dolor',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum voluptatem quis. Velit quisquam iusto architecto at asperiores fugiat quod distinctio voluptas debitis ullam ipsum enim quos sed illo, magnam alias nulla non. Alias provident magnam ipsa, aliquid autem explicabo?',
    src: '/sample.png',
    alt: 'sample image',
    width: '259',
    height: '194',
  },
]
export { products, specialties, specialtiesPPF }
