import cls from 'classnames'
type TypeSpinner = 'lg' | 'md' | 'sm' | 'xs'

type IPropsSpinner = {
  size?: TypeSpinner
}

export type { IPropsSpinner, TypeSpinner }


/**
 * Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can’t be represented with skeleton loading components, like for data charts.
 */

function Spinner({ size = 'lg' }: IPropsSpinner): JSX.Element {
  return (
    <>
      <span
        role="progressbar"
        className={cls(
          'ui__spinner border-solid border-icon-subdued rounded-[50%] inline-block border-b-transparent',
          {
            'w-[60px] h-[60px] border-[5px]': size === 'lg',
            'w-[32px] h-[32px] border-[2.5px]': size === 'md',
            'w-[24px] h-[24px] border-[2px]': size === 'sm',
            'w-[16px] h-[16px] border-[1.5px]': size === 'xs'
          }
        )}
      />
    </>
  )
  
}

export default Spinner

