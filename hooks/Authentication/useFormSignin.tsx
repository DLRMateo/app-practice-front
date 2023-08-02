import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from "next/router";
import { object, string } from 'yup'

import { formSignin } from "@/types"
import { useSignin } from "../services/mutation/useSignin";
import { useNotification } from "@/components/useNotification";
import { route } from "@/constants";

export default function useFormSignin() {
  const router = useRouter()
  const { notify } = useNotification()


  const schema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().required(),
    password: string().required(),
  }).required();

  const { control, handleSubmit, reset, setValue, watch } = useForm<formSignin>(
    {
      resolver: yupResolver(schema),
      mode: "all",
    }
  );

  const mutationSigin = useSignin({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: ''
  }) // mutation

  const onSubmit = handleSubmit(async (form) => {
    try {
      const newBudget: formSignin = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          password_confirmation: form.password,
        }

     
      
      const response = await mutationSigin
        .mutateAsync({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          password_confirmation: form.password
        })
        .then((data) => {
          if (data.status === 200) {
            router.push(route.Authentication.login)
          }
        })
      console.log('response', response)
    } catch (error: any) {
      notify.error({
        title: 'parece que ha ocurrido un error inesperado!'
      })
      console.log(error)
    }
  });
  return {
    schema,
    control,
    handleSubmit,
    onSubmit,
  };
}
