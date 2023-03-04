import { PaginatedData } from '../../types/core_types';
import Paginator from './Paginator';

type PaginatedDataTable = {
    headings: string[],
    columns: Function,
    paginatedData: PaginatedData<any>,
    emptyText: string,
}

export default function PaginatedDataTable({headings, columns, paginatedData, emptyText}: PaginatedDataTable) {

    const emptyData = paginatedData.data.length === 0;
    const colCount = headings.length

    console.log(paginatedData);

    if(emptyData) return (<div className='text-center w-full'>{emptyText}</div>);

    return (
        <div className='py-5 flex flex-col gap-y-5'>
            <div className='grid grid-cols-3 items-center border-b-2 pb-1 border-ec-base-medium'>
                {headings.map((heading) => <div className="font-bald text-lg">{heading}</div>)}
            </div>
            { paginatedData.data.map((record) => {
                return(
                    <div className={`grid grid-cols-${colCount} items-center`} key={record.id}>
                        {columns(record)}
                    </div>
                );
            }) }
            <Paginator paginatedData={paginatedData} />
        </div>
    );
};
