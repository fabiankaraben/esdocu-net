import type { ReactElement, ReactNode } from 'react'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type MainBannerProps = {}

export function MainBanner({ }: MainBannerProps): ReactElement {
  const ref = useRef(null)

  return (
    <></>
    // <div className="mt-8 rounded-md border border-yellow-400 border-opacity-75">
    //   <Link href="https://esdocu.dev/javascript" target="_blank">
    //     <Image width={860} height={0} className="rounded-md border-0" src="/assets/banners/ad-esdocu-dev-javascript-course.svg" alt="Curso de JavaScript" />
    //   </Link>
    // </div>
  )
}