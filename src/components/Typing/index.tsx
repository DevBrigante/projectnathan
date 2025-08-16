import TypeIt from "typeit-react"

export function Typing() {
    return (
        <div className="App w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mx-auto px-2 py-1 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            <style>
                {`
                    .ti-cursor {
                        color: #000000 !important;
                    }
                `}
            </style>
            <TypeIt options={{
                speed: 100,
                waitUntilVisible: true,
                startDelay: 1000
            }}>
                JOVEM, NEGRO <br /> COMUNICADOR E CRIATIVO.
            </TypeIt>
        </div>
    )
}