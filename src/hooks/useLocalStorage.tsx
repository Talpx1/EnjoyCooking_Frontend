import useBrowserStorage from './useBrowserStorage';

export default function useLocalStorage<T>(key: string, initialValue: T) {
    if (!key) throw new Error("key was not provided to useLocalStorage hook.");
    return useBrowserStorage(key, initialValue, 'local');
}