export default function Resume({ width }: { width: number }) {
    return (
        <div style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: width < 850 ? "100%" : "70%",
            height: width < 850 ? "calc(100% - 50px)" : "100%",
            transform: "translate(-50%, 0)",
            overflow: "hidden"
        }}>
            <iframe src="https://drive.google.com/file/d/1e5nwfpxxO0D6k5udvcJlITo26d8gPzV3/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                title="my-resume"
            >

            </iframe>
        </div>
    )
}