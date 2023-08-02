import { ColumnDef } from '@tanstack/react-table'

import { Button } from '@/components'
import { Person } from '@/types'

export default function useColumTable () {
  const columns: ColumnDef<Person>[] = [
    {
      id: 'firstName',
      accessorFn: (row) => row.firstName,
      cell: info => info.getValue()
    },
    {
      id: 'lastName',
      accessorFn: (row) => row.lastName,
      cell: info => info.getValue()
    },
    {
      id: 'email',
      accessorFn: (row) => row.email,
      cell: info => info.getValue()
    },
    {
      accessorKey: 'actions',
      id: 'actions',
      cell: () => (
      <div className='flex flex-row justify-center items-center gap-2'>
        <Button onClick={() =>console.log()} text='eliminar'></Button>
        <Button onClick={() =>console.log()} text='guardar'></Button>
        <Button onClick={() =>console.log()} text='editar'></Button>
      </div>
      ) 
    }
  
  ]
  return {
    columns
  }
}
