import React from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center lg:items-start px-5 lg:px-10">
        <div className="w-full lg:w-[80%] mt-[100px] lg:mt-[200px] text-center lg:text-left">
          <img
            src="/ezlogo.png"
            alt="EZ Works Logo"
            className="w-[250px] h-auto md:w-[300px] lg:w-[380px] mx-auto lg:mx-0"
          />
          <br />

          <div className="w-[90%] md:w-[70%] lg:w-[90%] mx-auto lg:mx-0">
            <h2 className="text-[#112949] text-2xl md:text-3xl lg:text-4xl ">
              Suite Of Business Support Services
            </h2>
            <br />

            <div className="w-[90%] lg:w-[90%] mx-auto lg:mx-0">
              <p className="text-gray-700 text-[18px] md:text-lg lg:text-[22px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-[50px] lg:hidden justify-center items-center place-items-center">
            <Card
              image="/research.png"
              title="Presentation Design"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
            <Card
              image="/audiovisual.png"
              title="Audio-Visual Production"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
            <Card
              image="/translational.png"
              title="Translation Services"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
            <Card
              image="/graphic.png"
              title="Graphic Design"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
            <Card
              image="/cardfifth.png"
              title="Research & Analytics"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
            <Card
              image="/processing.png"
              title="Data Processing"
              description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            />
          </div>

          <div className="w-full lg:w-[85%] mt-[30px] lg:mt-[40px] mx-auto">
            <Form />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-7 w-full lg:w-[70%] justify-center mt-[180px]">
          <Card
            image="/research.png"
            title="Presentation Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image="/audiovisual.png"
            title="Audio-Visual Production"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image="/translational.png"
            title="Translation Services"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image="/graphic.png"
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image="/cardfifth.png"
            title="Research & Analytics"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
          <Card
            image="/processing.png"
            title="Data Processing"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </>
  );
}

export default App;
