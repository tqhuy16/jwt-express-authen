import { Input as AntInput } from 'antd'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import styles from './textArea.module.scss'
import classNames from 'classnames'

interface ITextAreaProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label?: string
  className?: string
  placeholder?: string
  rows?: number
  isRequired?: boolean
}

const { TextArea: AntdTextArea } = AntInput

const TextArea = <T extends FieldValues>({
  name,
  control,
  label,
  className,
  placeholder,
  rows,
  isRequired = false,
  ...rest
}: ITextAreaProps<T>) => {
  return (
    <>
      {label && (
        <div className={styles.label}>
          {label}
          {isRequired && <span className='required-field'>*</span>}
        </div>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <AntdTextArea
              status={error?.message && 'error'}
              {...field}
              placeholder={placeholder}
              rows={rows}
              className={classNames(styles.customTextArea, className)}
            />
            {error?.message && <p className='text-error'>{error?.message}</p>}
          </>
        )}
      />
    </>
  )
}

export default TextArea
