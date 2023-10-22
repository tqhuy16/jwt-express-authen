import { useEffect, useState } from 'react'
import type { ColumnsType } from 'antd/es/table'

import { ITableDataType } from '@/types/global'
import { getProducts } from '@/api/products'

import { Table } from '@/component'

const TableSection = () => {
  const [products, setProducts] = useState<ITableDataType[]>([])
  const columns: ColumnsType<ITableDataType> = [
    {
      title: '#',
      dataIndex: 'key',
      render: (item, record, index) => <div>{index + 1}</div>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      // filters: [
      //   {
      //     text: 'Joe',
      //     value: 'Joe'
      //   },
      //   {
      //     text: 'Jim',
      //     value: 'Jim'
      //   },
      //   {
      //     text: 'Submenu',
      //     value: 'Submenu',
      //     children: [
      //       {
      //         text: 'Green',
      //         value: 'Green'
      //       },
      //       {
      //         text: 'Black',
      //         value: 'Black'
      //       }
      //     ]
      //   }
      // ],
      // // specify the condition of filtering result
      // // here is that finding the name started with `value`
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['ascend', 'descend']
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      render: (_, record) => <img className='img-table-ant' src={`${record.avatar}`} />
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ['ascend', 'descend']
    }
  ]

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data.products)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='example-section'>
      <div className='section-title'>Table</div>
      <div className='section-body'>
        <Table
          columns={columns}
          data={products}
          showSizeChanger
          showQuickJumper
          paginationPositionBottom='bottomRight'
          title='This Is Header'
        />
      </div>
    </div>
  )
}

export default TableSection
