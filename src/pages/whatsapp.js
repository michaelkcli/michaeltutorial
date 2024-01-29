import Page from "@/components/Whatsapp";

const Home = () => {
    return (
        <div style={{display: "flex"}}>
            <Page />

            <div style={{ marginLeft: 10, display: "flex" }}>
            {/* <div style={{ marginTop: 10}}></div> */}
                Objective:
                <div style={{ width: "95vw", maxWidth: 300 }}>
                    <img
                        alt={"preview"}
                        style={{
                            width: "100%",
                            objectFit: "contain",
                            // marginTop: 10,
                            marginTop: 0,
                        }}
                        src={"/preview/whatsapp.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
