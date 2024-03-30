import Image from "next/image";

export const translation = [
    {
      id: 1,
      title: "title1",
      text: "text1",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/html.svg" />
          </div>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/css.svg" />
          </div>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/python.svg" />
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "title2",
      text: "text2",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/js.svg" />
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "title3",
      text: "text3",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/react.svg" />
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: "title4",
      text: "text4",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/tailwindcss.svg" />
          </div>
        </>
      ),
    },
    {
      id: 5,
      title: "title5",
      text: "text5",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/c.svg" />
          </div>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/php.svg" />
          </div>
        </>
      ),
    },
    {
      id: 6,
      title: "title6",
      text: "text6",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/raspberrypi.svg" />
          </div>
        </>
      ),
    },
    {
      id: 7,
      title: "title7",
      text: "text7",
      icons: (
        <>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/next.svg" />
          </div>
          <div className="relative w-6 aspect-square ">
            <Image alt="logo" fill src="/assets/svg/TypeScript.svg" />
          </div>
        </>
      ),
    },
  ];