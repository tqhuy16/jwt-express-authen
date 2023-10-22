import { DatePicker as AntdDatePicker, Space } from 'antd'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import styles from './datePicker.module.scss'

interface IDatePickerProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label?: string
  placeholder?: string
  isRequired?: boolean
}

const DatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  isRequired = false,
  ...rest
}: IDatePickerProps<T>) => {
  return (
    <>
      {label && (
        <div className={styles.label}>
          {label}
          {isRequired && <span className='required-field'>*</span>}
        </div>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Space direction='vertical'>
              <AntdDatePicker placeholder='DD/MM/YYYY' onChange={onChange} status={error?.message && 'error'} />
            </Space>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default DatePicker
