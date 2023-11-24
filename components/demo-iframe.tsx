import type { ReactElement, ReactNode } from 'react'
import IframeResizer from 'iframe-resizer-react'
import React, { useRef } from 'react'

type DemoIframeProps = {
  path: string
  children: ReactNode
}

export function DemoIframe({
  path,
  children
}: DemoIframeProps): ReactElement {
  const ref = useRef(null)

  return (
    <div className="mt-5 px-2 pt-1 rounded-md border border-gray-500 border-opacity-25">
      <div className="my-3 p-2 bg-white rounded-md">
        <IframeResizer
          // log
          inPageLinks
          forwardRef={ref}
          src={path}
          width="100%"
          scrolling={false}
        />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}