import { Marque } from "@/components/marque";
 function HeroImages() {
  
  return (
    <>
      
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative
      h-full  mb-20 z-20
      
      ">
        <Marque
          items={images}
          direction="right"
          speed="medium"
          pauseOnHover={false}
        />
      </div>
    </>
  );
}
const images = [
  { 
      id: 1,
      src: "/screenshots/hsc2.png",
      alt: "Mike Taylor"
  },
  { 
      id: 2,
      src: "/screenshots/hsc3.png",
      alt: "Mike Taylor"
  },
  { 
      id: 3,
      src: "/screenshots/hsc1.png",
      alt: "Mike Taylor"
  },
  { 
      id: 4,
      src: "/screenshots/hsc4.png",
      alt: "Mike Taylor"
  }
];

export default HeroImages;