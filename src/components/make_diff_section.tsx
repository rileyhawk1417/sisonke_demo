import Image from 'next/image'
function ImageCard(props: any) {
    return (
        <div className='flex flex-col items-center gap-8 justify-center'>
            <div className='relative w-[226.39px] h-[180.79px]'>
                <Image src={props.img} className='object-cover rounded-tr-[50px] rounded-tl-[50px]' fill alt={props.alt} />
            </div>
            <div className='flex flex-col items-center justify-evenly gap-4 w-80'>
                <div className='text-[18px] font-bold'>
                    {props.title}
                </div>
                <div>
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

const data = [
    { img: 'https://media-public.canva.com/pcCJ0/MAEqQOpcCJ0/1/s.jpg', title: 'Sponsor a Child', desc: 'We provide monetary assistance to children living in poverty all over the world.' },
    { img: 'https://media-public.canva.com/iC4II/MAEqQHiC4II/1/s.jpg', title: 'Volunteer Your Time', desc: 'We organize a variety of skill seminars, sports camps, and more to enrich the lives of our kids.' },
    { img: 'https://media-public.canva.com/NlOfU/MAEqQLNlOfU/1/s.jpg', title: 'Go the Extra Mile', desc: 'We organize monthly races and runs to raise funds and awareness for our cause.' },
]

function MakeDiffSection() {
    return <div className='flex flex-col items-center justify-center gap-4 bg-primary w-full p-12 text-center'>
        <div className='text-[38px] '>
            How We Can Make A Difference
        </div>
        <div className='flex flex-row sm:flex-col items-start justify-center gap-44 sm:gap-20'>
            {data.map((v, k) => (

                <ImageCard key={k} img={v.img} alt='Image from Canva' title={v.title} desc={v.desc} />
            ))}
        </div>

    </div>
}

export default MakeDiffSection
