import InputBox from "@/components/InputBox";

const Input = () => {

    return (
        <div
            style={{
                padding: 20,
                minWidth: 800,
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <InputBox 
                    // onFocus={this.handleInputFocus}
                    // onBlur={this.handleInputBlur}
                />
                <div style={{ marginLeft: 10 }}>Please do not remove me</div>
            </div>

            <div style={{ marginTop: 300 }}>
                Objective:
                <div style={{ width: "95vw", maxWidth: 1000 }}>
                        <img
                            alt={"preview"}
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                marginTop: 10,
                            }}
                            src={"/preview/input-complete.png"}
                        />
                </div>
            </div>
        </div>
    );
};

export default Input;
