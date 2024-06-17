"use client"
import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image';

const TWEEN_FACTOR_BASE = 0.52

const options: EmblaOptionsType = { loop: true }

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Testimonials: React.FC<PropType> = (props) => {
  const { slides} = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.carousel-slide') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes])

  return (
    <section className="max-w-7xl m-auto my-20">
      <h3 className='text-xl font-semibold text-center py-8'>Our <span className='text-primary'>Satisfied</span> Customers & Vendors Review</h3>
      <div className="carousel">
        <div className="carousel__viewport" ref={emblaRef}>
          <div className="carousel__container">
            {slides.map((index) => (
              <div className="carousel__slide " key={index}>
                <div className="carousel-slide flex flex-col items-center justify-center">
                  <Image src='/testimonial/test1.png' width={250} height={250} alt='testimonial' className='w-44 lg:w-60'/>                  
                  <div className='text-center py-5 lg:w-[80%]'>
                    <p className="text-xs lg:text-base font-light italic">&quot;Our platform offers a seamless marketplace where students and professionals alike can buy, sell, and even become couriers to earn extra income.&quot;</p>
                    <p className='font-semibold pt-2 lg:text-lg'>Name</p>
                    <p className='font-thin'>Title</p>
                  </div>                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials