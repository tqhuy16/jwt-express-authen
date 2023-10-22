import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import type { RadioChangeEvent } from 'antd'
import { Radio as AntdRadio } from 'antd'

import { RadioOption } from '@/types/global'
import styles from './radio.module.scss'

interface IRadioProps<T extends FieldValues> {
  options: RadioOption[]
  name: Path<T>
  control: Control<T>
  label?: string
  isRequired?: boolean
}

const Radio = <T extends FieldValues>({
  options,
  name,
  control,
  label,
  isRequired = false,
  ...rest
}: IRadioProps<T>) => {
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
            <AntdRadio.Group {...rest} value={value} onChange={(e: RadioChangeEvent) => onChange(e.target.value)}>
              {options.map((op: RadioOption, index: number) => (
                <AntdRadio key={index} value={op.value}>
                  {op.label}
                </AntdRadio>
              ))}
            </AntdRadio.Group>
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default Radio
