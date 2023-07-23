import Image from "next/image";

export default function RoundedImage({img,width=100,height=100,title}) {
  return (
    <Image
      className="object-fit radius-8"
      src={img}
      width={width}
      height={height}
      alt={title}
      style={{
        maxWidth:'100%'
      }}
    />
  );
}
