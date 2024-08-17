import Image from "next/image"

export default function Loading() {
    return <>
    <div className="h-screen d flex justify-center items-center">
      <Image src="/loader.gif" width={200} height={100}/>
    </div>
    </>
  }