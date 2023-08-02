import { ReactNode, useEffect, useState } from 'react'

interface IChildren {
  /**
   * Contents node
   */
  children?: ReactNode
}

export default function LayoutHydrated({ children }: IChildren) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? children : ''}</>
}