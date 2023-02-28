import { useState } from "react";

export default function useBrowserStorage<T>(key: string, initialValue: T, storageType: 'session'|'local'): [T, Function, Function] {

    const storage = storageType === "session" ? window.sessionStorage : window.localStorage;

    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;

        try {
            const item = storage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            
            setStoredValue(valueToStore);

            typeof window !== "undefined" && storage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    const clearValue = () => typeof window !== "undefined" && storage.removeItem(key);

    return [storedValue, setValue, clearValue];
}