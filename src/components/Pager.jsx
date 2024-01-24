import Link from 'next/link'

const Pager = ({ next, previous }) => {
  return (
    <div className='relative z-10'>
      {/* Go to previous page */}
      <Link href={previous}>
        <div class='fixed left-0 top-1/2 transform -translate-y-1/2'>
          <i class='fa-solid fa-chevron-left text-5xl text-white p-2'></i>
        </div>
      </Link>
      {/* Go to next page */}
      <Link href={next}>
        <div class='fixed right-0 top-1/2 transform -translate-y-1/2'>
          <i class='fa-solid fa-chevron-right text-5xl text-white p-2'></i>
        </div>
      </Link>
    </div>
  )
}

export default Pager
