import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

const MainLayout = ({ children }) => {
    const count = useRef(0);
    const [__, forceUpdate] = useState(Math.random());
    const timer = useRef(0);

    const updateFunction = async () => {
        console.log(
            "%c 111828 MainLayout.js enter this",
            "background: green",
            timer.current
        );

        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            count.current += 1;
            // await fetch("/api/data");
            forceUpdate(Math.random());
        }, 1000);

        // fetch("/api/data");
    };

    const debounceFunction = debounce(updateFunction, 1000);

    useEffect(() => {
        window.addEventListener("click", debounceFunction);
        window.addEventListener("mousemove", debounceFunction);

        return () => {
            window.removeEventListener("click", debounceFunction);
            window.addEventListener("mousemove", debounceFunction);
        };
    }, []);

    // useEffect(() => {
    //     debounceFunction();
    //     debounceFunction();
    // }, []);

    console.log(
        "%c 105014 MainLayout.js count.current",
        "background: green",
        count.current,
        timer.current
    );

    return <div>{children}</div>;
};

export default MainLayout;
