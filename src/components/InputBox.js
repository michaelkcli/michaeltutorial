import { useEffect, useState } from "react";

const InputBox = () => {
    const [namesData, setData] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [filterName, setFilterName] = useState([]);
    // const [noResult, setNoResult] = useState(false);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        setIsLoading(true);
        const asyncAction = async () => {
            const res = await fetch("/api/data");

            if (res.ok) {
                const { result } = await res.json();
                setData(result);
                setIsLoading(false);
                setFilterName(result);
            }
        };

        asyncAction();
    }, []);

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        const filteredNames = namesData.filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterName(filteredNames);
        // if (filteredNames.length > 0) {
        //     setNoResult(false);
        // } else {
        //     setNoResult(true);
        // }
    };

    console.log("data", isFocused);

    return (
        <div
            style={{
                display: "flex",
                maxHeight: 400,
            }}
        >
            <div style={{ position: "relative" }}>
                <input
                    placeholder="please type here"
                    style={{ width: 500, height: 35, paddingLeft: 10 }}
                    onFocus={handleOnFocus}
                    onBlur={handleBlur}
                    value={searchItem}
                    onChange={handleInputChange}
                />
                {isFocused  && (
                    <>
                        <div id={"container"}>
                            {!isLoading ? (
                            <table>
                                {filterName.map((data) => (
                                    <tr key={`${data}`}>
                                        <td
                                            style={{
                                                fontSize: 20,
                                                padding: 5,
                                                paddingLeft: 10,
                                                fontWeight: "bold",
                                                margin: 10,
                                                paddingRight: 90,
                                                width: 100,
                                            }}
                                        >
                                            {data}
                                        </td>
                                    </tr>
                                ))}
                            </table>
                            ) : null}
                        </div>
                        <div id="container2">
                            { isLoading ? (
                                <table>
                                    <tr>
                                        <td
                                            style={{
                                                fontSize: 20,
                                                padding: 5,
                                                paddingLeft: 10,
                                                fontWeight: "bold",
                                                margin: 10,
                                                paddingRight: 90,
                                            }}
                                        >
                                            Loading...
                                        </td>
                                    </tr>
                                </table>
                            ) : null}
                        </div>
                        <div id="container3">
                            { !isLoading &&filterName?.length === 0 && (
                                <p
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        color: "Red",
                                        margin: 10,
                                        paddingRight: 90,
                                    }}
                                >
                                    No Result!
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default InputBox;
