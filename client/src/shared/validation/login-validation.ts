import * as yup from 'yup'

import VALIDATION_MESSAGES from '@/constants/validation-messages'

const validationLogin = yup.object().shape({
  userName: yup.string().required(VALIDATION_MESSAGES.USERNAME_REQUIRED),
  password: yup.string().required(VALIDATION_MESSAGES.PASSWORD_REQUIRED)
})

export { validationLogin }
