import { Table as AntdTable } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import { ITableDataType, TablePaginationPositionTop, TablePaginationPositionBottom } from '@/types/global'
import Configs from '@/configs'

interface ITableProps {
  columns: ColumnsType<ITableDataType>
  paginationPositionTop?: TablePaginationPositionTop | 'none'
  paginationPositionBottom?: TablePaginationPositionBottom | 'none'
  loading?: boolean
  bordered?: boolean
  defaultPageSize?: number
  isShowPagination?: boolean
  showSizeChanger?: boolean
  hideOnSinglePage?: boolean
  showQuickJumper?: boolean
  title?: string
  data?: ITableDataType[]
}

const Table = ({
  columns,
  paginationPositionTop = 'none',
  paginationPositionBottom = 'none',
  loading,
  bordered,
  defaultPageSize = Configs.PAGINATION_PAGE_SIZE,
  showSizeChanger = false,
  hideOnSinglePage = false,
  showQuickJumper = false,
  title = '',
  data
}: ITableProps) => {
  const onChange: TableProps<ITableDataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <AntdTable
      rowKey={(data) => data.id}
      columns={columns}
      loading={loading}
      bordered={bordered}
      dataSource={data}
      title={() => title && title}
      onChange={onChange}
      pagination={{
        position: [
          paginationPositionTop as TablePaginationPositionTop,
          paginationPositionBottom as TablePaginationPositionBottom
        ],
        showTotal: (totalRecord, range) => `${range[0]}-${range[1]} of ${totalRecord} items`,
        defaultPageSize,
        showSizeChanger,
        hideOnSinglePage,
        showQuickJumper
      }}
    />
  )
}

export default Table
