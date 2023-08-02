import { Layout, LayoutHydrated, Table } from "@/components";
import { Person } from "@/types";
import { useColumTable } from "@/hooks";
import { ReactElement, useEffect } from "react";
import { route } from "@/constants";
import { useGetUsers } from "@/hooks/services/query/useGetUsers";
import QueryResult from "@/components/QueryResult";

export default function CustomerManagement() {
  const { columns } = useColumTable();

  const { data, error, isLoading } = useGetUsers();

    useEffect(() => {
      console.log('data', data)
    }, [data?.data])

  return (
    <div className=" flex justify-center items-center h-screen">
      <QueryResult error={error} isLoading={isLoading}>
        <Table data={data?.data ?? []} columns={columns} />
      </QueryResult>
    </div>
  );
}

CustomerManagement.getLayout = (page: ReactElement) => (
  <LayoutHydrated>
    <Layout backRoute={route.home}>{page}</Layout>
  </LayoutHydrated>
);
