import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextHeadings from "./components/TextHeadings";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import Card from "./components/Card";

// import reactlogo from '../../public/icons/react-js.png'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TextHeadings smallHeading="amit" mainHeading="WHY TO LEARN FROM US ?" /> */}
      {/* <div className="md:grid grid-cols-12 gap-5 mt-1 p-10">
        <div className="col-span-4 border border-1 p-5">
          <Features heading="Learn the Latest Top Skills" icon="test" buttonName="start now"  paragraph="Learning top skills can bring an extra-ordinary outcome in a career." />
        </div>
        <div className="col-span-4 border border-1 mt-3 p-5">
          <Features heading="Learn the Latest Top Skills" icon="test" buttonName="start now" paragraph="Learning top skills can bring an extra-ordinary outcome in a career." />
        </div>
        <div className="col-span-4 border border-1 mt-3 p-5">
          <Features heading="Learn the Latest Top Skills" icon="test" buttonName="start now" paragraph="Learning top skills can bring an extra-ordinary outcome in a career. s" />
        </div>
      </div> */}
      <TextHeadings smallHeading="our coueses" mainHeading="Our Top Premium Coueses" />
      <div className="md:grid grid-cols-12 md:gap-5 md:px-10">
        <div className="col-span-4" >
          <Courses courseName="Python Development" img="/images/data-science.png" price={1299} icon="test" duration={15} teacherName="test" assignment={10}  pageRedirect="commingsoon" />
        </div>
        <div className="col-span-4">
          <Courses courseName="React Full Stack" img="/images/mern-stack.png" price={10} icon="test" duration={15} teacherName="test" assignment={10} />
        </div>
        <div className="col-span-4">
          <Courses courseName="Angular JS" img="/images/angular-dev.png" price={10} icon="test" duration={15} teacherName="test" assignment={10} />
        </div>
      </div>
      <TextHeadings smallHeading="Top Tech" mainHeading="The Technologies that we teach" />

      <div className="md:grid grid-cols-12  gap-5 md:p-10 p-3">
        <div className="col-span-3">
          {/* <p>{reactlogo}</p> */}
          <Card name="React Js + Next Js" color="text-cyan-500" thumbnail="/icons/react-js.png" />
        </div>
        <div className="col-span-3">

          <Card name="Angular" thumbnail="/icons/angular.png" color="text-red-400" />

        </div>
        <div className="col-span-3">
          <Card name="Spring Boot " color="text-red-700" thumbnail="/icons/java.png" />
        </div>
        <div className="col-span-3">
          <Card name="Python + AI " color="text-yellow-400" thumbnail="/icons/python.png" />
        </div>
      </div>


      <Footer />
    </>
  );
}
