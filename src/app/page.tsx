import About from './_sections/about'
import Blogs from './_sections/blogs'
import Contact from './_sections/contact'
import Education from './_sections/education'
import Experience from './_sections/projects'
import Landing from './_sections/landing'
import Skills from './_sections/skills'

const Home = () => {
    return (
        <>
            <Landing />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />
        </>
    )
}

export default Home
