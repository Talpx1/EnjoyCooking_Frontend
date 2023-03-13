import { PaginatedData } from "../../../types/core_types";
import Form from "../../form/Form";
import Button from "../buttons/Button";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { useTranslation } from "react-i18next";

export default function Paginator({paginatedData, className}: {paginatedData: PaginatedData<any>, className: string}) {
    const {t} = useTranslation();

    const links = paginatedData.links.filter((link, i)=>i!==0 && i!==(paginatedData.links.length-1))

    return (
        <div className={`${className} flex gap-2 items-center`}>
            
            {/* first page */}
            <Form>
                <input type="hidden" value={1} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===1} title={t('fist_page')}> <RxDoubleArrowLeft /> </Button> 
            </Form> 

            {/* prev page */}
            <Form>
                <input type="hidden" value={paginatedData.current_page-1} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===1} title={t('prev_page')}> <RiArrowDropLeftLine /> </Button> 
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
                <Button type="submit" disabled={paginatedData.current_page===paginatedData.last_page} title={t('next_page')}> <RiArrowDropRightLine /> </Button> 
            </Form> 

            {/* last page */}
            <Form>
                <input type="hidden" value={paginatedData.last_page} name='page'/>
                <Button type="submit" disabled={paginatedData.current_page===paginatedData.last_page} title={t('last_page')}> <RxDoubleArrowRight /> </Button> 
            </Form> 
            
        </div>
    );

};
