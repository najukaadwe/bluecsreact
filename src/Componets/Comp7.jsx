import React from 'react';
import img15 from "./Allimages/img15.png";
import img16 from "./Allimages/img16.png";  
import img17 from "./Allimages/img17.png";
import img18 from "./Allimages/img18.png";
import img19 from "./Allimages/img19.png";
import img20 from "./Allimages/img20.png";
import img21 from "./Allimages/img21.png";
import img22 from "./Allimages/img22.png";
// import img16 from "../Website/Allimages/img16.png";
// import img17 from "../Website/Allimages/img17.png";
// import img18 from "../Website/Allimages/img18.png";


// import img19 from "../Website/Allimages/img19.png";
// import img20 from "../Website/Allimages/img20.png";
// import img21 from "../Website/Allimages/img21.png";
// import img22 from "../Website/Allimages/img22.png";



const logos = [
  { src: '/logos/entrepreneur.png', alt: 'Entrepreneur India' },
  { src: '/logos/business-standard.png', alt: 'Business Standard' },
  { src: '/logos/mint.png', alt: 'Mint' },
  { src: '/logos/yourstory.png', alt: 'YourStory' },
  { src: '/logos/bw-businessworld.png', alt: 'BW Businessworld' },
  { src: '/logos/capterra.png', alt: 'Capterra' },
  { src: '/logos/financial-express.png', alt: 'Financial Express' },
  { src: '/logos/silicon-india.png', alt: 'SiliconIndia' },
];

const FeaturedIn = () => {
  return (
    <section className="text-[#ffffff] bg-[#0a070b] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-blue-600 font-semibold mb-8 text-lg">Featured in</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">

          <img
            src={img15}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />

          <img

            src={img16}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img

            src={img17}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img

            src={img18}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />



        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center mt-16">


          <img

            src={img19}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />

          <img

            src={img20}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />

          <img

            src={img21}
            alt={""}
            className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
          />

          
<img

src={img22}
alt={""}
className="mx-auto h-10 grayscale opacity-80 hover:opacity-100 transition"
/>

        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
