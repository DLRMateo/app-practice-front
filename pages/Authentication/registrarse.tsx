import { ReactElement } from "react"
import { Controller } from "react-hook-form"

import { Layout, LayoutHydrated, Button, Field } from "@/components"
import { route } from "@/constants"
import { useFormSignin } from "@/hooks"

export default function Signin(): JSX.Element {
  const {
    control,
    onSubmit,
  } = useFormSignin()

  return (
    <div className="h-screen flex flex-col items-center justify-center border-2">
      <div className="flex flex-col items-center justify-center border-gray-300 border rounded-md p-8 gap-4">
        <div className="flex flex-col w-full items-center gap-2">
          <Controller
            name={`firstName`}
            control={control}
            render={({
              field: { value, ...all },
              fieldState: { error },
            }) => (
              <Field {...all} placeholder="nombre" isError={Boolean(error?.message)} />
            )}
          />
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <Controller
            name={`lastName`}
            control={control}
            render={({
              field: { value, ...all },
              fieldState: { error },
            }) => (
              <Field {...all} placeholder="apellidos" isError={Boolean(error?.message)} />
            )}
          />
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <Controller
            name={`email`}
            control={control}
            render={({
              field: { value, ...all },
              fieldState: { error },
            }) => (
              <Field {...all} placeholder="correo" isError={Boolean(error?.message)} />
            )}
          />
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <Controller
            name={`password`}
            control={control}
            render={({
              field: { value, ...all },
              fieldState: { error },
            }) => (
              <Field {...all} placeholder="contraseña" isError={Boolean(error?.message)} />
            )}
          />
        </div>
       
        <Button onClick={onSubmit} text="Registrarse"></Button>
      </div>
    </div>
  )
}

Signin.getLayout = (page: ReactElement) => (
  <LayoutHydrated>
    <Layout text='atras' backRoute={route.home}>{page}</Layout>
  </LayoutHydrated>
)
