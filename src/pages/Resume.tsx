export default function ({ width }: { width: number }) {
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
            <iframe src="https://drive.google.com/file/d/11iNpAvxEl5-aoo9I5uLM3uWcZSnc3MZ-/preview"
                width="100%"
                height="100%"
                allow="autoplay"
            >

            </iframe>
        </div>
    )
}