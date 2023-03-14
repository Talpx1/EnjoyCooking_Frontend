import { PaginatedData } from '../../../types/core_types';
import Paginator from './Paginator';

type PaginatedDataTable = {
    headings: string[],
    columns: Function,
    paginatedData: PaginatedData<any>,
    emptyText: string,
}

export default function PaginatedDataTable({headings, columns, paginatedData, emptyText}: PaginatedDataTable) {

    const emptyData = paginatedData.data.length === 0;

    if(emptyData) return (<div className='text-center w-full'>{emptyText}</div>);

    return (
        <div className='flex flex-col gap-y-5'>
            <div className="grid grid-flow-col auto-cols-fr gap-14 items-center border-b-2 pb-1 border-ec-base-medium">
                {headings.map((heading) => <div className="font-bald text-lg" key={heading}>{heading}</div>)}
            </div>
            { paginatedData.data.map((record) => {
                return(
                    <div className="grid grid-flow-col auto-cols-fr items-center gap-14" key={record.id}>
                        {columns(record)}
                    </div>
                );
            }) }
            <Paginator paginatedData={paginatedData} />
        </div>
    );
};
