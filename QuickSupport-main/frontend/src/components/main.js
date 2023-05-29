import {Grid} from "@mui/material";
import React from "react";
import Cards from "./Card";


const main = () => {

const sector = [

  {
    toLink:"https://movies-apps1.netlify.app",
    name : "Movie Ticket Booking ",
    image : "https://img.freepik.com/premium-vector/movie-ticket-logo-template-design_20029-890.jpg?w=2000"

  },

  {
    toLink:"https://www.indiacustomercare.com/uttar-pradesh-jal-nigam-toll-free-no-1800-1800-525#gsc.tab=0",
    name : "Water Supply",
    image : "https://static.vecteezy.com/system/resources/previews/004/658/439/original/tap-icon-color-faucet-in-flat-style-water-supply-illustration-for-infographic-website-or-app-free-vector.jpg",
  },
  {
    toLink:"https://resumebuilder-gpey.onrender.com",
    name : "Resume Builder",
    image : "https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png",

  },
  {
    toLink:"https://en.wikipedia.org/wiki/Tourism_in_India",
    name : "Tourism",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OSBc2sLmtPY1vaPPNrq4U-uMI1Zm0dYkAw&usqp=CAU",

  },
  {
    toLink:"https://www.thehindu.com",
    name : "Daily News",
    image :"https://www.shutterstock.com/image-photo/mock-daily-newspaper-on-white-260nw-131607743.jpg"

  },
  {
    toLink:"https://www.uppclonline.com/dispatch/Portal/appmanager/uppcl/wss?_nfpb=true&_pageLabel=uppcl_static_html_content&pageID=ST_18",
    name : "Electricity Department",
    image : "https://img.freepik.com/free-vector/electricity-lighting-composition-with-characters-electricians-with-power-line-gear-lamp_1284-54213.jpg",

  },

  {
    toLink:"http://www.uppwd.gov.in",
    name : "PwD Department",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NtAl6BONsp4cYEtQDqN1qzqT0SPnycd5xQ&usqp=CAU",

  },

  {
    toLink:"https://www.google.com/maps/@27.1381927,80.8593041,7z?authuser=0&entry=ttu",
    name : "Maps",
    image : "https://cdn-icons-png.flaticon.com/512/2775/2775994.png",

  }
]

  return (

<>


<section className="bg-white my-20 dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We believe in Solving Problems</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at QuickSupport we focus on social where technology, innovation, and capital can solve long-term problem and drive smooth life.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#explore" className="inline-flex button justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           </div>
    </div>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
</section>




<hr className="my-12"/>

<hr className="my-12"/>



    <div id="explore">

    <hr className="my-12"/>

    <div className="text-container text-center">
    <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>



    <hr className="my-12"/>

    <div className="md:mx-36 my-16 sm:mx-0">


    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} className="md:my-4 sm:d-block xs:d-block">
  {sector.map((sec, index) => (
    <Grid item xs={12} sm={4} md={4} key={index}>
        <Cards 
          className="m-4 overflo"
          toLink={sec.toLink}
          name = {sec.name}
          image = {sec.image} />
    </Grid>
  ))}
</Grid>
  </div>
    </div>


    <hr className="my-12"/>
    <hr className="my-12"/>
              </>
  );
};

export default main;
