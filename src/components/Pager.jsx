import Link from 'next/link'

const Pager = ({ next, previous }) => {
  return (
    <>
      {/* Go to previous page */}

      <div class='fixed left-0 top-1/2 transform -translate-y-1/2 z-10'>
        <i class='fa-solid fa-chevron-left text-3xl text-white p-1'></i>
      </div>

      {/* Go to next page */}

      <div class='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
        <i class='fa-solid fa-chevron-right text-3xl text-white p-1'></i>
      </div>
    </>
  )
}

export default Pager
