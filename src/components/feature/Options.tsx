import { BsArrowRight } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import { BsRainbow } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsTextareaT } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import Image from "next/image";

export default function Options() {
  return (
    <>
      {/* Tecnical Content */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:mx-40 md:mt-20 md:grid-cols-2">
        <div>
          <div className="rounded-xl my-auto bg-gradient-to-r from-red-300 to-red-400 p-1">
            <img src="/img/code2.png" alt="" />
          </div>
        </div>
        <div className="mt-10 p-4">
          <h1 className="text-3xl font-bold">Elevate your Technical Content</h1>
          <p className="mt-4 text-lg">
            You’re a developer, looking to create <b>visually engaging</b>{" "}
            infographics for social media? <br /> Use snappify to create
            stunning visuals of your technical concepts, that will{" "}
            <b>engage your followers</b> and take your social media presence to
            the next level.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">
              View Templates
            </p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
        </div>
      </div>

      {/* Simplify your Education */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:mx-40 md:mt-40 md:grid-cols-2">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-blue-300 to-blue-400 p-1 md:order-2">
            <img src="/img/code3.png" alt="" />
          </div>
        </div>
        <div className="mt-10 p-4 md:order-1">
          <h1 className="text-3xl font-bold">Simplify your Education</h1>
          <p className="mt-4 text-lg">
            Are you a teacher or course creator looking to help your students
            better understand <b>technical concepts</b>? <br /> snappify makes
            it easy to create educational content that lets your students retain
            information and grasp complex ideas.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
          <div className="mt-2 flex rounded-lg border-2 border-purple-400 bg-purple-50 p-2">
            <BsLightbulbFill className="mt-1 mr-2 text-yellow-400" size={20} />
            <p>
              Share interactive slides so they can easily copy the code and
              fiddle around with it.
            </p>
          </div>
        </div>
      </div>

      {/* Embed Interactive Infographics */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:mx-40 md:mt-20 md:grid-cols-2">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-orange-200 to-orange-300 p-6">
            <div className="rounded-lg bg-slate-50 p-5">
              <h1 className="font-bold">Spice up your articles</h1>
              <p className="mt-2">
                This is an example article using the embedding functionality of
                snappify. You can hover over the infographic below and copy the
                code snippet to give it a try in your own IDE.
              </p>
              <div className=" h-72 w-full rounded-lg bg-gradient-to-r from-green-300 to-green-400"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-4">
          <h1 className="text-3xl font-bold">Embed Interactive Infographics</h1>
          <p className="mt-4 text-lg">
            snappify enables you to <b>embed your visuals</b> in a way that your
            viewers can easily copy code snippets or texts. <br /> It’s the
            perfect way to bring your blog to life or spice up your internal
            company documentation using rich infographics.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
          <div className="mt-2 flex rounded-lg border-2 border-orange-400 bg-yellow-50 p-2">
            <BsRainbow className="mt-1 mr-2 text-red-400" size={20} />
            <p>
              Share interactive slides so they can easily copy the code and
              fiddle around with it.
            </p>
          </div>
        </div>
      </div>

      {/* Unleash your design potential */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-red-300 to-purple-400 p-8 md:mx-40">
        <div className="mx-auto my-5 w-14 rounded-md  border-2 border-white bg-slate-50 bg-opacity-30 p-3">
          <BsLightningChargeFill className="text-yellow-300" size={30} />
        </div>
        <h1 className=" text-center text-3xl font-bold text-white md:text-5xl">
          Unleash your design potential <br /> with our powerful editor
        </h1>
        <img className="mx-auto" src="/img/code4.png" alt="" />
      </div>

      {/* Add multiple code windows */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mx-40 md:mt-20">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-red-200 to-purple-500 p-10">
            <img src="/img/code5.png" className="mx-auto w-3/4" alt="" />
            <img src="/img/code5.png" className="mx-auto w-3/4" alt="" />
          </div>
        </div>
        <div className="mt-10 p-4">
          <div className="flex">
            <BsCodeSquare size={40} className="mr-2" />
            <h1 className="text-3xl font-bold">Add multiple code windows</h1>
          </div>
          <p className="mt-4 text-lg">
            Sometimes you want to describe differences in code snippets and
            point out best practices by comparing them. <br /> snappify comes to
            the rescue! Add <b>as many code snippets as you want</b> and arrange
            them per drag and drop.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
        </div>
      </div>

      {/* Annotate with Text and Arrows */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mx-40 md:mt-20">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-red-200 to-purple-500 p-10 md:order-2">
            <img src="/img/code5.png" className="mx-auto w-3/4" alt="" />
            <div className="flex">
              <BsLightbulbFill className="mt-7 mr-2 text-yellow-400" size={25} />
              <p className="mt-6 text-center text-2xl text-white">
                {"In TypeScript you're able to assign a type to your"}
                <span className="underline">variables</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 p-4 md:order-1">
          <div className="flex">
            <BsTextareaT size={40} className="mr-2" />
            <h1 className="text-3xl font-bold">
              Annotate with Text and Arrows
            </h1>
          </div>
          <p className="mt-4 text-lg">
            Ever heard the myth of self explaining code? Pah! 😄 <br /> Place
            explanations (or just funny jokes) beside your snippets and style
            them to your needs with our <b>powerful rich-text editor</b>. <br />{" "}
            Additionally, {"you're"} able to add <b>arrow elements</b> to point at
            specific parts of your code.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
        </div>
      </div>

      {/* Your branding will be on point */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mx-40 md:mt-20">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-700 p-10">
            <img src="/img/code5.png" className="mx-auto w-3/4" alt="" />
          </div>
        </div>
        <div className="mt-10 p-4">
          <div className="flex">
            <BsPersonCircle size={35} className="mr-2" />
            <h1 className="text-3xl font-bold">
              Your branding will be on point
            </h1>
          </div>
          <p className="mt-4 text-lg">
            If {"you're"} sharing your code snippets on social media, a little bit
            of branding {"doesn't"} hurt! <br /> You can add your own avatar and
            specify a username for <b>Twitter, Github, Instagram or LinkedIn</b>
            .
          </p>
        </div>
      </div>

      {/* Add custom images */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mx-40 md:mt-20">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-purple-700 to-orange-600 p-10 md:order-2">
            <img src="/img/code5.png" className="mx-auto w-3/4" alt="" />
            <div className="flex justify-around">
              <FaCss3Alt className="mt-7 mr-2 text-blue-500" size={75} />
              <div className="mt-6 h-20 w-40 rounded-lg bg-gradient-to-t from-blue-400 to-blue-600"></div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-4 md:order-1">
          <div className="flex">
            <BsImage size={40} className="mr-2" />
            <h1 className="text-3xl font-bold">Add custom images</h1>
          </div>
          <p className="mt-4 text-lg">
            Upload custom images and arrange them per drag and drop.
            <b>Push your creativity to new boundaries!</b> <br /> For example
            you can add an image of the programming language {"you're"} using or
            place a screenshot of the desired outcome of your code snippet.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
        </div>
      </div>

      {/* Highlight your code in different ways */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:mx-40 md:mt-20">
        <div>
          <div className="rounded-xl bg-gradient-to-r from-slate-600 to-slate-800 p-10">
            <img src="/img/code6.png" className="mx-auto w-3/4" alt="" />
            <img src="/img/code6.png" className="mx-auto w-3/4" alt="" />
          </div>
        </div>
        <div className="mt-10 p-4">
          <div className="flex">
            <BsPencil size={40} className="mr-2" />
            <h1 className="text-3xl font-bold">
              Highlight your code in different ways
            </h1>
          </div>
          <p className="mt-4 text-lg">
            With snappify {"you're"} able to change opacity, blur or gray-out parts
            of your code so the viewer can <b>focus on what matters</b>. <br />
            Of course {"it's"} also possible to mark specific lines as
            <b>added or removed</b> to emphasize a change in the code.
          </p>
          <div className="flex">
            <p className="mt-4 cursor-pointer text-lg underline">Learn More</p>
            <BsArrowRight className="mt-6 ml-2" size={20} />
          </div>
        </div>
      </div>

      {/* Manage your code snippets in one place */}
      <div className=" mt-20 rounded-lg bg-gradient-to-tr from-slate-600 to-blue-400 p-10 md:mx-40">
        <h1 className="text-center text-5xl font-bold text-white ">
          Manage your code <br /> snippets in one place
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="m-5">
            <p className="text-3xl text-white">
              As you build an ever-growing library of code snippets, snappify
              helps you to keep an overview.
            </p>
            <button className="mt-5 rounded-md bg-slate-100 py-3 px-5 font-bold text-slate-500 hover:bg-slate-50">
              Learn more
            </button>
          </div>
          <div className="h-60 w-full rounded-lg bg-white"></div>
        </div>
      </div>
    </>
  );
}
