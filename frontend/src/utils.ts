import type { ApiError } from './client'

export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: '잘못된 이메일 주소',
}

export const namePattern = {
  value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
  message: '잘못된 이름',
}

export const passwordRules = (isRequired = true) => {
  const rules: any = {
    minLength: {
      value: 8,
      message: '비밀번호는 적어도 8글자 이상이여야 합니다.',
    },
  }

  if (isRequired) {
    rules.required = '비밀번호가 필요합니다.'
  }

  return rules
}

export const confirmPasswordRules = (getValues: () => any, isRequired = true) => {
  const rules: any = {
    validate: (value: string) => {
      const password = getValues().password || getValues().new_password
      return value === password ? true : '비밀번호가 다릅니다.'
    },
  }

  if (isRequired) {
    rules.required = '비밀번호확인은 입력하셔야 합니다.'
  }

  return rules
}

export const handleError = (err: ApiError, showToast: any) => {
  const errDetail = (err.body as any)?.detail
  let errorMessage = errDetail || 'Something went wrong.'
  if (Array.isArray(errDetail) && errDetail.length > 0) {
    errorMessage = errDetail[0].msg
  }
  showToast('Error', errorMessage, 'error')
}
