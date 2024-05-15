'use client'
import Accordion from './Accordion'
import { useState, useEffect } from 'react'

const Products = ({ isOpen, setIsOpen, rest }) => {
  const products = [
    '3M FX Premium',
    '3M Color Stable',
    '3M Ceramic IR',
    '3M Crystalline',
  ]
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
                    title={product}
                    isOpen={openAccordion === index}
                    onToggle={() => handleToggleAccordion(index)}
                  />
                ))
              : modifiedProducts.map((product, index) => (
                  <Accordion
                    key={index}
                    title={product}
                    isOpen={openAccordion === index}
                    onToggle={() => handleToggleAccordion(index)}
                  />
                ))
            : restProducts.map((product, index) => (
                <Accordion
                  key={index}
                  title={product}
                  isOpen={openAccordion === product.index}
                  onToggle={() => {
                    handleToggleAccordion(product.index)
                    scrollToProducts()
                  }}
                />
              ))}
        </div>
      </div>
    </section>
  )
}

export default Products
