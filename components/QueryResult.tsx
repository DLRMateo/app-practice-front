import { ReactNode } from 'react'
import Spinner from './elements/Spinner'
type TypeSpinner = 'lg' | 'md' | 'sm' | 'xs'

interface IChildren {
  children?: ReactNode
}
type IPropsQueryResult = {
  status?: 'loading' | 'error' | 'success' | 'initialData'
  fetchStatus?: 'fetching' | 'paused' | 'idle'
  isLoading?: boolean
  error?: any
  sizeSpinner?: TypeSpinner
  renderLoading?: JSX.Element
  renderError?: JSX.Element
}
export default function QueryResult({
  error,
  status,
  isLoading = false,
  fetchStatus,
  renderLoading,
  renderError,
  sizeSpinner = 'md',
  children
}: IPropsQueryResult & IChildren): JSX.Element {
  if (status === 'error') {
    if (renderLoading) return <>{renderError}</>
    return <>{error && <p>{`${error}`}</p>}</>
  }
  if (isLoading) {
    if (renderLoading) return <>{renderLoading}</>
    return (
      <div className='w-full flex justify-center'>
        <Spinner size={sizeSpinner} />
      </div>
    )
  }
  if (status === 'loading') {
    if (renderLoading) return <>{renderLoading}</>
    return (
      <div className='w-full flex justify-center'>
        <Spinner size={sizeSpinner} />
      </div>
    )
  }
  if (fetchStatus && ['fetching', 'paused'].includes(fetchStatus)) {
    if (renderLoading) return <>{renderLoading}</>
    return (
      <div className='w-full flex justify-center'>
        <Spinner size={sizeSpinner} />
      </div>
    )
  }
  if (status && status === 'success') {
    return <>{children}</>
  }
  if (!error && !isLoading) {
    return <>{children}</>
  }
  return <></>
}
