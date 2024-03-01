import { GiSevenPointedStar } from "react-icons/gi";
import Image from 'next/image'

function SponsorSection() {
    return (
        <div className="flex flex-col items-center justify-center h-fit w-full p-8 sm:w-fit sm:text-center">
            <div className='flex flex-row sm:flex-col w-full items-center justify-around sm:gap-4'>
                <div className="flex flex-col gap-44 items-center justify-center">
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-[38px]">
                            See what our sponsors and volunteers have to say
                        </div>
                        <div className=" w-[28rem] sm:w-fit text-center">
                            When I visited Kyrie, I was blown away by the gratitude I received. Seeing how my small monthly donation changed her life was a heartwarming experience.
                            <br />
                            <span className="font-bold">
                                – Helene P., sponsor since 2009
                            </span>
                        </div>

                        <div className="w-[28rem] sm:w-fit text-center">
                            Spending time with the kids and seeing their happiness as they learn from me is a rewarding experience. Knowing I am helping make their life better in such a small way is an amazing feeling.
                            <br />
                            <span className="font-bold">
                                – Shawn G., volunteer educator since 2012
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[80vh] w-[30vw] sm:w-[100vw]">
                    <Image src='https://media-public.canva.com/x93Dk/MAEqQFx93Dk/1/s.jpg' className='object-cover rounded-tr-[450px] rounded-tl-[450px]' fill alt='Adult lady teaching child to play guitar' />
                </div>
            </div>
        </div>
    )
}

export default SponsorSection;
