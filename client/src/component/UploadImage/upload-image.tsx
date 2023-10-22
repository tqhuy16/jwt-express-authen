import { ChangeEvent, useEffect, useState } from 'react'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form'
import { isEqual } from 'lodash'

import { FileUploadType } from '@/types/global'
import styles from './uploadImage.module.scss'
import classnames from 'classnames'

interface IInputImageProps {
  accept: string
  className?: string
  maxFiles?: number
  error?: FieldError
  value?: FileUploadType[]
  onChange: (files: FileUploadType[]) => void
}

const InputImageField = ({
  className,
  value,
  onChange,
  maxFiles = 1,
  error = undefined,
  accept,
  ...rest
}: IInputImageProps) => {
  const [images, setImages] = useState<FileUploadType[]>(value || [])

  useEffect(() => {
    if (value && !isEqual(value?.length, images.length)) {
      setImages(value)
    }
  }, [value])

  const handleFiles = (filesReceived: File[]) => {
    const filesUploaded: FileUploadType[] = filesReceived.map((file) => {
      const newFile: FileUploadType = {
        urlPreview: window.URL.createObjectURL(file),
        name: file.name,
        file
      }

      return newFile
    })

    const allFiles = [...images, ...filesUploaded]

    if (allFiles.length > maxFiles) return

    const filesLimit = [...images, ...filesUploaded].splice(0, maxFiles)

    setImages(filesLimit)
    onChange(filesLimit)
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const fileArray = Array.from(event.target.files)

    handleFiles(fileArray)
  }

  const handleDeleteImage = (indexImage: number) => {
    const newFiles = images.filter((_, index) => index !== indexImage)
    setImages(newFiles)
    onChange(newFiles)
  }
  return (
    <>
      <div className={styles.groupImagesUpload}>
        {images.map((image, index) => (
          <div className={styles.imagePreview} key={index}>
            <div className={styles.customDelete}>
              <div className={styles.textDelete} onClick={() => handleDeleteImage(index)}>
                Delete
              </div>
            </div>
            <img src={image.urlPreview} alt='uploaded image' {...rest} />
          </div>
        ))}
        <input
          className={styles.inputImage}
          id='img'
          type='file'
          accept={accept}
          multiple
          onChange={handleImageChange}
          {...rest}
        />
        <label htmlFor='img' className={classnames(styles.buttonUpload, error && styles.imageError)}>
          <div className={styles.textUpload}>
            <div>+ Upload</div>
            <div>max {maxFiles} file(s)</div>
          </div>
        </label>
      </div>
    </>
  )
}

interface IUploadImage<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  maxFiles?: number
  accept?: string
  label?: string
  isRequired?: boolean
  className?: string
}

const UploadImage = <T extends FieldValues>({
  control,
  name,
  label,
  accept = 'image/gif, image/png, image/jpeg',
  isRequired = false,
  className,
  ...rest
}: IUploadImage<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && (
            <div className={styles.label}>
              {label}
              {isRequired && <span className='required-field'>*</span>}
            </div>
          )}
          <InputImageField {...rest} value={field.value} onChange={field.onChange} accept={accept} error={error} />
          {error?.message && <p className='text-error'>{error?.message}</p>}
        </>
      )}
    />
  )
}

export default UploadImage
