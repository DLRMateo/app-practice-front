interface Errors {
  title: string
  detail: string
}

interface errorResponse {
  errors: Errors[]
}

interface responseGeneric {
  status: string
  message: string
  data: any
}

export type { errorResponse, responseGeneric }