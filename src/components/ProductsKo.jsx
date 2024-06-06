'use client'

import { products } from '@/data/data'
import Accordion from './Accordion'
import { useState, useEffect } from 'react'

const ProductsKo = ({ isOpen, setIsOpen, rest, ko }) => {
  const [openAccordion, setOpenAccordion] = useState(isOpen)
  const modifiedProducts = products.slice(0, openAccordion + 1)

  const [restProducts, setRestProducts] = useState([])

  const handleToggleAccordion = (index) => {
    setIsOpen(openAccordion === index ? null : index)
  }

  const updateProducts = () => {
    if (isOpen !== null) {
      const updatedRestProducts = products.filter(
        (product, index) => index > isOpen
      )
      setRestProducts(updatedRestProducts)
    }
  }

  const scrollToProducts = () => {
    const products = document.getElementById('products')
    products.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  useEffect(() => {
    setOpenAccordion(isOpen)
    updateProducts()
  }, [isOpen])

  return (
    <section className='relative grow'>
      <div className='container mx-auto '>
        <div className='space-y-4'>
          {!rest
            ? openAccordion === null
              ? products.map((product, index) => (
                  <Accordion
                    key={index}
                    title={product.title}
                    isOpen={openAccordion === index}
                    onToggle={() => handleToggleAccordion(index)}
                    ko
                  />
                ))
              : modifiedProducts.map((product, index) => (
                  <Accordion
                    key={index}
                    title={product.title}
                    isOpen={openAccordion === index}
                    onToggle={() => handleToggleAccordion(index)}
                    ko
                  />
                ))
            : restProducts.map((product, index) => (
                <Accordion
                  key={index}
                  title={product.title}
                  isOpen={openAccordion === product.index}
                  onToggle={() => {
                    handleToggleAccordion(product.index)
                    scrollToProducts()
                  }}
                  ko
                />
              ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsKo
