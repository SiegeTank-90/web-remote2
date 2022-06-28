import { useEffect } from "react";


function HandleClickOutside(ref, cleanup1, cleanup2) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                cleanup1('');
                cleanup2(0);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, cleanup1, cleanup2]);
}

/**
 * Component that alerts if you click outside of it
 */
export default HandleClickOutside 