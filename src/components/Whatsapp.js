import { useEffect, useState } from "react";

const Whatsapp = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selection, setSelection] = useState("CHAT");

    console.log("%c 151633 Whatsapp.js data", "background: green", data);

    // useEffect to fetch api data from server, result will be set after 2 seconds.
    useEffect(() => {
        setIsLoading(true);
        const asyncAction = async () => {
            try {
                const res = await fetch("/api/whatsapp");
                if (res.ok) {
                    const { result } = await res.json();
                    setData(result);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        asyncAction();
    }, []);

    return (
        <div
            style={{
                width: 300,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div>
                <div
                    style={{
                        backgroundColor: "rgba(7,95,86,255)",
                        maxWidth: 300,
                        height: 533,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "rgba(5,77,69,255)",
                            maxWidth: 300,
                            height: 20,
                        }}
                    ></div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: 50,
                        }}
                    >
                        <p
                            style={{
                                color: "white",
                                fontSize: 17,
                                margin: 15,
                                fontFamily: "sans-serif",
                            }}
                        >
                            WhatsApp
                        </p>
                        <div
                            style={{
                                marginTop: 5,
                                width: 100,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <img
                                src={"/icon/search.png"}
                                alt={"search"}
                                style={{
                                    width: 18,
                                    height: 18,
                                    padding: 10,
                                    marginTop: 3,
                                }}
                            />
                            <img
                                src={"/icon/menu.png"}
                                alt={"menu"}
                                style={{ width: 25, height: 25, padding: 10 }}
                            />
                        </div>
                    </div>
                    <div style={{ height: 35 }}>
                        <div
                            className="nav-elements"
                            style={{
                                color: "white",
                                display: "flex",
                                fontFamily: "sans-serif",
                                fontSize: 14,
                                fontWeight: 540,
                            }}
                        >
                            {["CHAT", "CALLS", "STATUS"].map((item) => {
                                return (
                                    <div
                                        onClick={() => {
                                            setSelection(item);
                                        }}
                                        key={item}
                                        style={{
                                            flex: 1,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: 10,
                                            position: "relative",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item}

                                        {selection === item && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    borderBottom:
                                                        "5px solid #fff",
                                                }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="chat"
                        style={{
                            flex: 1,
                            backgroundColor: "rgba(250,250,250,255)",
                        }}
                    >
                        <div>
                            {isLoading ? (
                                <div
                                    style={{ fontSize: 20, margin: 0, flex: 1 }}
                                >
                                    Loading...
                                </div>
                            ) : null}
                        </div>
                        <div>
                            {data.map((d) => (
                                <>
                                    <div
                                        style={{
                                            display: "flex",
                                            marginBottom: 5,
                                            marginRight: 5,
                                            height: 55,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            key={`${d}`}
                                            alt="fd"
                                            src="/icon/contact.png"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "100%",
                                                padding: 5,
                                            }}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                width: 250,
                                                paddingBottom: 10,
                                                borderBottom:
                                                    "2px solid #f1f1f1",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "flex-end",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontWeight: "bold",
                                                        padding: "3px 0px",
                                                    }}
                                                >
                                                    {d.name}
                                                </div>
                                                {d.unread > 0 &&
                                                d.name === "Kunal" ? (
                                                    <div
                                                        style={{
                                                            fontFamily:
                                                                "sans-serif",
                                                            fontSize: 12,
                                                            color: "rgba(30,197,85,255)",
                                                            fontWeight: "bold",
                                                            marginRight: 10,
                                                        }}
                                                    >
                                                        08:58
                                                    </div>
                                                ) : d.unread > 0 &&
                                                  d.name === "Jane" ? (
                                                    <div
                                                        style={{
                                                            fontFamily:
                                                                "sans-serif",
                                                            fontSize: 12,
                                                            color: "rgba(30,197,85,255)",
                                                            fontWeight: "bold",
                                                            marginRight: 10,
                                                        }}
                                                    >
                                                        YESTERDAY
                                                    </div>
                                                ) : d.unread > 0 &&
                                                  d.name === "Mark" ? (
                                                    <div
                                                        style={{
                                                            fontFamily:
                                                                "sans-serif",
                                                            fontSize: 12,
                                                            color: "rgba(30,197,85,255)",
                                                            fontWeight: "bold",
                                                            marginRight: 10,
                                                        }}
                                                    >
                                                        {d.createdAt}
                                                    </div>
                                                ) : (
                                                    <div
                                                        style={{
                                                            fontFamily:
                                                                "sans-serif",
                                                            color: "rgba(112,112,112,255)",
                                                            fontWeight: "bold",
                                                            fontSize: 12,
                                                            marginRight: 10,
                                                        }}
                                                    >
                                                        {d.createdAt}
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                }}
                                            >
                                                {d.name === "Nikita" ? (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "flex-end",
                                                            marginRight: 2,
                                                        }}
                                                    >
                                                        <svg
                                                            fill="none"
                                                            viewBox="0 0 15 15"
                                                            height="1em"
                                                            width="1em"
                                                            color="rgba(163,163,163,255)"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                                d="M14.707 3L5.5 12.207.293 7 1 6.293l4.5 4.5 8.5-8.5.707.707z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                ) : d.name ===
                                                  "Vacation Trip" ? (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "flex-end",
                                                            paddingTop: 3,
                                                        }}
                                                    >
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            height="1em"
                                                            width="1em"
                                                            color="rgba(163,163,163,255)"
                                                            style={{
                                                                height: 18,
                                                                width: 18,
                                                            }}
                                                        >
                                                            <path d="M4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2m8 3a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0 2a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z" />
                                                        </svg>
                                                    </div>
                                                ) : null}
                                                <div
                                                    style={{
                                                        fontSize: 12,
                                                        color: "rgba(95,95,95,255)",
                                                        width: 200,
                                                        textOverflow:
                                                            "ellipsis",
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",
                                                        fontFamily:
                                                            "sans-serif",
                                                        display: "flex",
                                                        alignItems: "flex-end",
                                                        height: 18,
                                                    }}
                                                >
                                                    {d.description}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    {d.unread > 0 ? (
                                                        <div
                                                            style={{
                                                                backgroundColor:
                                                                    "rgba(30,197,85,255)",
                                                                color: "white",
                                                                width: 18,
                                                                height: 18,
                                                                borderRadius: 100,
                                                                fontSize: 10,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                                fontFamily:
                                                                    "sans-serif",
                                                                marginLeft: 10,
                                                            }}
                                                        >
                                                            {d.unread}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            alt="message"
                            src="/icon/message.png"
                            style={{
                                width: 45,
                                // height: 50,
                                objectFit: "contain",
                                borderRadius: "100%",
                                position: "absolute",
                                right: 15,
                                bottom: 15,
                                boxShadow: "1px 1px 10px 1px grey",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whatsapp;
