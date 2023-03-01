import { PaginatedData } from "../../types/core_types";
import Form from "../form/Form";
import Button from "./Button";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

export default function Paginator({paginatedData}: {paginatedData: PaginatedData<any>}) {
    const links = paginatedData.links.filter((link, i)=>i!==0 && i!==(paginatedData.links.length-1))

    console.log(paginatedData)

    return (
        <div className="flex">
            
            {/* first page */}
            <Form>
                <input type="hidden" value={1} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===1}> <RxDoubleArrowLeft /> </Button> 
            </Form> 

            {/* prev page */}
            <Form>
                <input type="hidden" value={paginatedData.current_page-1} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===1}> <RiArrowDropLeftLine /> </Button> 
            </Form> 

            {links.map((link)=>(
                <Form key={link.label}>
                    <input type="hidden" value={link.label} name='page'/>
                    <Button type="submit" disabled={link.active}>{link.label}</Button> 
                </Form> 
            ))}

            {/* next page */}
            <Form>
                <input type="hidden" value={paginatedData.current_page+1} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===paginatedData.last_page}> <RiArrowDropRightLine /> </Button> 
            </Form> 

            {/* last page */}
            <Form>
                <input type="hidden" value={paginatedData.last_page} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===paginatedData.last_page}> <RxDoubleArrowRight /> </Button> 
            </Form> 
            
        </div>
    );

};
