import Image from "next/image";

const HeroImg = ({ img }) => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow:'hidden' }} id="heroImg">
            <Image
                src={img}
                fill
                style={{ objectFit: "cover", objectPosition: 'center' }}
                alt={img}
                priority
                loading='eager'
            />
        </div>
    )
}

export default HeroImg;