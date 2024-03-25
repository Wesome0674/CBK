import { Typographie } from "@/ui/designsystem/typography/Typographie"
import Typewriter from 'typewriter-effect';


const Loader = () => {
  return (
    <div className="fixed top-0 left-0 bg-black z-50 w-screen h-full flex justify-center items-center">
      <Typographie className="text-valorant" variant="display" theme="tercery">
        Code By Killian
      </Typographie>
      <Typographie>
        <Typewriter
          options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}
        />
      </Typographie>
    </div>

  )
}

export default Loader