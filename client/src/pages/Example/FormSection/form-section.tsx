import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { exampleFormValidation } from '@/shared/validation/example-form-validation'
import { Button, Checkbox, DatePicker, InputField, Radio, Select, TextArea, UploadImage } from '@/component'
import { OPTIONS_GENDER, SELECT_POSITIONS, CHECKBOX_OPTIONS } from '@/shared/fake/data-global'
import { DATE_FORMAT_LIST } from '@/constants/common'
import { FileUploadType } from '@/types/global'
import styles from './formSection.module.scss'

interface IFormInput {
  firstName: string
  lastName: string
  firstAddress: string
  secondAddress?: string
  gender?: number
  checkbox?: string[]
  phone?: string
  email: string
  position?: string
  dateOfBirth?: string
  description?: string
  avatar: FileUploadType[]
}

const initialValues = {
  firstName: undefined,
  lastName: undefined,
  firstAddress: '',
  secondAddress: undefined,
  gender: undefined,
  checkbox: undefined,
  phone: '',
  email: undefined,
  position: '',
  dateOfBirth: '',
  description: '',
  avatar: undefined
}

const FormSection = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(exampleFormValidation)
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e?.preventDefault()
    try {
      setIsLoading(true)
      console.log('data', data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='example-section'>
      <div className='section-title'>Form Field</div>
      <div className='section-body'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <InputField isRequired label='First Name' name='firstName' control={control} placeholder='First Name' />
                <InputField isRequired label='LastName' name='lastName' control={control} placeholder='Last Name' />
              </div>
              <div className={styles.fieldGroup}>
                <InputField
                  isRequired
                  label='Address 1'
                  name='firstAddress'
                  control={control}
                  placeholder='Address 1'
                />
                <InputField label='Address 2' name='secondAddress' control={control} placeholder='Address 1' />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <Radio label='Gender' name='gender' control={control} options={OPTIONS_GENDER} />
              </div>
              <div className={styles.fieldGroup}>
                <Checkbox label='Checkbox' name='checkbox' control={control} options={CHECKBOX_OPTIONS} />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <InputField label='Phone' name='phone' control={control} />
              </div>
              <div className={styles.fieldGroup}>
                <InputField isRequired label='Email' name='email' control={control} placeholder='example@gmail.com' />
              </div>
            </div>

            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <Select
                  label='Position'
                  name='position'
                  control={control}
                  options={SELECT_POSITIONS}
                  placeholder='Please select an option'
                />
              </div>
              <div className={styles.fieldGroup}>
                <DatePicker
                  placeholder={DATE_FORMAT_LIST[0]}
                  label='Date of Birth'
                  name='dateOfBirth'
                  control={control}
                />
              </div>
            </div>
            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <TextArea label='Description' name='description' control={control} rows={4} placeholder='TextArea' />
              </div>
            </div>
            <div className={styles.wrapFieldGroup}>
              <div className={styles.fieldGroup}>
                <UploadImage label='Avatar' name='avatar' maxFiles={5} control={control} />
              </div>
            </div>

            <Button size='large' type='submit' loading={isLoading}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSection
