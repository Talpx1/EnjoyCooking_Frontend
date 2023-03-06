export default function PageTitle({className='', children}) {
    return (<h1 className={`${className} py-5 text-2xl font-bold`}>{children}</h1>);
};
