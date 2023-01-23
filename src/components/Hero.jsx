import Image from 'next/image'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import HomeScreen from '@/images/screens/home.png'

function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <Image src={HomeScreen} alt="" />
      </AppScreen.Body>
    </AppScreen>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-background">
              Become Your Best Self
            </h1>
            <p className="mt-6 text-lg text-card">
              Working out and eating healthy can improve your physical and
              mental well-being. Regular exercise can help you lose weight,
              build muscle, and reduce your risk of chronic diseases such as
              heart disease, diabetes, and certain cancers. Eating a balanced
              diet can provide your body with the nutrients it needs to function
              properly and can also aid in weight loss and overall health.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
