import * as yup from 'yup'

const exampleFormValidation = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  firstAddress: yup.string().required('Required'),
  secondAddress: yup.string(),
  gender: yup.number(),
  checkbox: yup.array(),
  phone: yup.string(),
  email: yup.string().email('email is not correct').required('Required'),
  position: yup.string(),
  dateOfBirth: yup.string(),
  description: yup.string(),
  avatar: yup.array().required('Required')
})

export { exampleFormValidation }
