import { Flag } from '@/components'
import { ReactNode } from 'react'
import toast, { ToastPosition } from 'react-hot-toast'

interface IChildren {
  children?: ReactNode
}

type Props = IChildren & {
  title?: string
  description?: string
  shadow?: 'popup' | 'basic' | 'none'
  footer?: JSX.Element
  duration?: number
  position?: ToastPosition
}

export function useNotification() {
  const notify = {
    requiredField: ({
      title = 'Error',
      description = 'Debes completar correctamente todos los campos obligatorios.',
      shadow = 'popup',
      footer,
      duration,
      position = 'bottom-left',
      children
    }: Props = {}) => {
      return toast.custom(
        (t) => {
          if (children) return <>{children}</>
          if (footer) {
            return (
              <Flag
                kind='error'
                onClose={() => toast.dismiss(t.id)}
                title={title}
                description={description}
                shadow={shadow}
                icon='alert'>
                {footer}
              </Flag>
            )
          }
          return (
            <Flag
              kind='error'
              onClose={() => toast.dismiss(t.id)}
              title={title}
              description={description}
              shadow={shadow}
              icon='alert'
            />
          )
        },
        { position, duration }
      )
    },
    success: ({
      title,
      description,
      shadow = 'popup',
      footer,
      duration,
      position = 'bottom-left',
      children
    }: Props = {}) => {
      return toast.custom(
        (t) => {
          if (children) return <>{children}</>
          if (footer) {
            return (
              <Flag
                kind='success'
                onClose={() => toast.dismiss(t.id)}
                title={title}
                description={description}
                shadow={shadow}
                icon='success'>
                {footer}
              </Flag>
            )
          }

          return (
            <Flag
              kind='success'
              onClose={() => toast.dismiss(t.id)}
              title={title}
              description={description}
              shadow={shadow}
              icon='success'
            />
          )
        },
        { position, duration }
      )
    },
    error: ({
      title,
      description,
      shadow = 'popup',
      children,
      duration,
      position = 'bottom-left',
      footer
    }: Props = {}) => {
      return toast.custom(
        (t) => {
          if (children) return <>{children}</>
          if (footer) {
            return (
              <Flag
                kind='error'
                onClose={() => toast.dismiss(t.id)}
                title={title}
                description={description}
                shadow={shadow}
                icon='alert'>
                {footer}
              </Flag>
            )
          }
          return (
            <Flag
              kind='error'
              onClose={() => toast.dismiss(t.id)}
              title={title}
              description={description}
              shadow={shadow}
              icon='alert'
            />
          )
        },
        { position, duration }
      )
    }
  }

  return { notify }
}
