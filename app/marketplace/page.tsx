import Image from "next/image";
import Heading from "./Heading";

export default function marketplace() {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 mt-12 md:mt-32">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
              </div>
              <div className="flex items-center space-x-3">
             <Heading/>
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
            <div className="relative lg:w-[260px] lg:h-[260px] md:w-[190px] md:h-[190px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] [transform-style:preserve-3d] animate-rotate">
<span
  style={{ "--i": 1 } as any}
  className="span-style"
>
  <img
    src="/marketplace/2.png"
    alt="img - 1"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 2 } as any}
  className="span-style"
>
  <img
    src="/marketplace/6.png"
    alt="img - 2"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 3 } as any}
  className="span-style"
>
  <img
    src="/marketplace/10.png"
    alt="img - 3"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 4 } as any}
  className="span-style"
>
  <img
    src="/marketplace/393.png"
    alt="img - 4"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 5 } as any}
  className="span-style"
>
  <img
    src="/marketplace/43.png"
    alt="img - 5"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 6 } as any}
  className="span-style"
>
  <img
    src="/marketplace/300.png"
    alt="img - 6"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 7 } as any}
  className="span-style"
>
  <img
    src="/marketplace/16.png"
    alt="img - 7"
    className="img-style"
  />
</span>
<span
  style={{ "--i": 8 } as any}
  className="span-style"
>
  <img
    src="/marketplace/799.png"
    alt="img - 8"
    className="img-style"
  />
</span>
</div>
            </div>
          </div>
        </div>
      </div>
      );
    }

