//Toats Type
type ToastType = 'show' | 'warning' | 'error' | 'duration'

interface ITableDataType {
  id: number
  avatar: string
  name: string
  description: string
}

type TablePaginationPositionTop = 'topLeft' | 'topCenter' | 'topRight'

type TablePaginationPositionBottom = 'bottomLeft' | 'bottomCenter' | 'bottomRight'

type RadioOption = {
  label: string
  value: number
}

type SelectOption = {
  label: string
  value: string
}

type FileUploadType = {
  urlPreview: string
  name: string
  file: File
}

export type {
  ToastType,
  ITableDataType,
  TablePaginationPositionTop,
  TablePaginationPositionBottom,
  RadioOption,
  SelectOption,
  FileUploadType
}
