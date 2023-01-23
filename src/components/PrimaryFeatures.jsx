import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import WorkoutScreen from '@/images/screens/workout.png'
import EatScreen from '@/images/screens/eat.png'
import SupplementScreen from '@/images/screens/supplements.png'
import BodyScreen from '@/images/screens/body.png'
import Image from 'next/image'

const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Workouts',
    description:
      'Create your own, or use a pre-built workout plan to get started. We’ll track your progress and help you reach your goals. You will get recommended weights based off past performance to make sure you are always working out hard, and progressing.',
    screen: WorkoutMotionScreen,
  },
  {
    name: 'Calories and Macros',
    description:
      'Get recommended calories and macros, and a fast easy way to log all of your food. You can search by name, or scan the food barcode (for free) to quickly find your food. Our database has over 1.5 million verified foods.',
    screen: EatMotionScreen,
  },
  {
    name: 'Supplements',
    description:
      'Tell us what supplements you are taking, and when you are taking them. We’ll remind you when it’s time to take your next dose.',
    screen: SupplementMotionScreen,
  },
  {
    name: 'Body',
    description:
      'Record your weight, blood pressure, and body measurements. We’ll track your progress and help you reach your goals. Get body fat estimates based off the US Navy method, so you can see how your body is changing even if your weight is not. Also Premium users can upload progress photos to see how they are improving.',
    screen: BodyMotionScreen,
  },
]

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function WorkoutMotionScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <Image src={WorkoutScreen} alt="" />
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function EatMotionScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <Image src={EatScreen} alt="" />
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function SupplementMotionScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <Image src={SupplementScreen} alt="" />
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function BodyMotionScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <Image src={BodyScreen} alt="" />
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl bg-card transition-colors hover:bg-primary-dark/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-primary-dark"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <h3 className="text-white text-lg font-semibold">
                <Tab className="text-left text-secondary [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-ternary">{feature.description}</p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-primary-dark px-5 py-6">
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-primary-dark/95 p-6 backdrop-blur sm:p-10">
                <h3 className="text-white mt-6 text-sm font-semibold text-secondary sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-ternary">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex
                ? 'bg-secondary-light'
                : 'bg-secondary'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-background py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-white text-3xl font-medium tracking-tight text-secondary">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-ternary">
            {
              "WorkoutTrack was built to be the best, all inclusive fitness app. You can track your workouts, log your meals, make sure you're taking your supplements, and record how your body changes over time."
            }
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
