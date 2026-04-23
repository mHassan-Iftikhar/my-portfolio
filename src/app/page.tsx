import Hero from "@/components/Hero"
import About from "@/components/About"
import FlowingMenu from "@/components/Services"
import Projects from "@/components/Projects";

const demoItems = [
  { link: '#', text: 'Web Development' },
  { link: '#', text: 'UI/UX Design' },
  { link: '#', text: 'Product Rescue' },
  { link: '#', text: 'Performance Optimization' }
];

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <FlowingMenu />
    </>
  )
}

export default page