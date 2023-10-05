import Intro from "@app/components/intro"
import Divider from "@app/components/divider"
import About from "@app/components/about"
import Projects from "./components/projects"

export default function Home() {
    return (
        <>
            <Intro />

            <Divider />

            <About />

            <Divider />

            <Projects />
        </>
    )
}
