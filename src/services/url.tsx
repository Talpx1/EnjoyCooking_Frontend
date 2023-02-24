export function objToQueryString(obj: object): string{
    return (new URLSearchParams(obj as URLSearchParams)).toString()
}