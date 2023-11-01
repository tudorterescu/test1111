import Navbar from "../elements/Navbar"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-11 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Financial tracking made for the digital age.
        </h1>
        <h4 className="pt-4 scroll-m-20 text-xl font-semibold tracking-tight">
          100% Online. Bugdeting, tracking and saving all in one. What more
          could you want?
        </h4>
        <div className="w-[450px] mx-auto pt-11">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/src/assets/hero_image_home.svg"
              alt="Hero image"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}

export default Home
