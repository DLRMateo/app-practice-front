import { ColumnDef } from "@tanstack/react-table"

interface IPropsTable<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export type {
  IPropsTable
}