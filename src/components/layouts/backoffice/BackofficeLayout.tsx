export default function BackofficeLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen max-h-screen overflow-y-hidden bg-ec-light text-ec-dark">
            {children}
        </div>
    )
};
