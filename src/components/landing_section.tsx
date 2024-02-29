import { GiSevenPointedStar } from "react-icons/gi";
import Image from 'next/image'

function LandingSection() {
    return (
        <div className="flex flex-col min-h-screen w-full sm:w-fit p-8 sm:p-0 sm:pt-2 bg-primary">
            <div className="flex flex-row sm:flex-col items-center justify-start gap-4 w-full">
                <GiSevenPointedStar size={30} className="text-background" />
                <span className="text-lg">Sisonke</span>
            </div>
            <div className='flex flex-row sm:flex-col w-full items-center justify-around sm:gap-4'>
                <div className="flex flex-col gap-44 items-center">
                    <div className="flex flex-col items-center sm:w-fit">
                        <div className="text-[48px] w-[28rem] sm:w-fit text-center">
                            Show you care. Change their world.
                        </div>
                        <div className="text-[20px]">
                            Non Profit Company
                        </div>
                    </div>
                    <div className="uppercase border-2 border-background h-40 w-80 rounded-[50%] flex flex-col items-center justify-center">
                        Sponsor a child today
                    </div>
                </div>

                <div className="relative h-[80vh] w-[30vw] sm:w-[100vw]">
                    <Image src='https://media-public.canva.com/qP9fE/MAEqQBqP9fE/1/s.jpg' className='object-cover rounded-tr-[450px] sm:rounded-tr-[110px] rounded-tl-[450px] sm:rounded-tl-[110px]' fill alt='Adult lady teaching child to play guitar' />
                </div>
            </div>
        </div>
    )
}

export default LandingSection;
