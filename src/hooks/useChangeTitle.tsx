import { useEffect } from "react"

export function useChangeTitle(title: string) {
    useEffect(() => {
        const prevTitle = document.title;

        document.title = `${title} - ${import.meta.env.EC_APP_NAME}`;

        return () => {
            document.title = prevTitle;
        };
    });
}