export default function Button({label, type='submit'}: {label: string, type?: 'submit' | 'reset' | 'button'}) {
    return (
        <button 
            type={type}
            className="bg-ec-brick text-ec-light p-2 rounded-xl"
        >
            {label}
        </button>
    );
};
