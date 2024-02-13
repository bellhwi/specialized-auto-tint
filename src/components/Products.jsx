'use client'

import { products } from '@/data/data'
import Accordion from './Accordion'
import { useState } from 'react'
import Heading from './Heading'

const Products = () => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const handleToggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <section>
      <div className='container mx-auto px-4 py-8 space-y-4 '>
        <Heading light title='our products' />
        <div>
          {products.map((product, index) => {
            return (
              <Accordion
                key={index}
                title={product.title}
                content={product.content}
                heading={product.heading}
                features={product.features}
                href={product.href}
                isOpen={openAccordion === index}
                onToggle={() => handleToggleAccordion(index)}
                style={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
