import useUser from "./useUser";

export default function useCan() {
    const [ user ] = useUser();

    return (permission: string): boolean => {
        if(!user) return false;

        return user.permissions_list.includes(permission);
    }
};
