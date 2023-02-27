import useBrowserStorage from './useBrowserStorage';

export default function useSessionStorage<T>(key: string, initialValue: T) {
    if (!key) throw new Error("key was not provided to useSessionStorage hook.");
    return useBrowserStorage(key, initialValue, 'session');
}