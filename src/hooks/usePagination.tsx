import { useCallback, useEffect, useState } from "react"

const tailwindMediumWidth = 768;
const tailwindXlWidth = 1280;

function usePagination(dataLength: number) {
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const hasPrevious = pageNumber > 0;
    const hasNext = ((pageNumber + 1) * pageSize) < dataLength;
    const pageStart = pageNumber * pageSize;
    const pageEnd = (pageNumber * pageSize) + pageSize

    const handleResize = useCallback(() => {
        setPageNumber(0);
        
        if (window.innerWidth < tailwindMediumWidth) {
            setPageSize(2);
        }
        else if (window.innerWidth >= tailwindMediumWidth && window.innerWidth < tailwindXlWidth) {
            setPageSize(4);
        }
        else {
            setPageSize(6);
        }
    }, []);

    const nextPage = useCallback(() => {
        if (!hasNext) return;
        setPageNumber(p => p + 1);
    }, [hasNext]);

    const previousPage = useCallback(() => {
        if (!hasPrevious) return;
        setPageNumber(p => p - 1);
    }, [hasPrevious]);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize]);

    return {
        pageSize,
        setPageSize,
        setPageNumber,
        hasPrevious,
        hasNext,
        previousPage,
        nextPage,
        pageNumber,
        pageStart,
        pageEnd
    }
}

export default usePagination;
