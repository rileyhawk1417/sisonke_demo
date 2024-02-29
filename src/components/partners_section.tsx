import { GiSevenPointedStar } from "react-icons/gi";

function PartnerName(props: any) {
    return (
        <div className="flex flex-col items-center gap-4">
            <GiSevenPointedStar size={30} className="text-primary" />
            <div className="font-bold">{props.title}</div>
        </div>
    )
}

const partnerList = [
    'Davis Thorne and Partners',
    'Gold Lion Business Services, Inc.',
    'The Savannah Foundation',
    'Langtown High School',
    'Green Aero Tours',

]

function PartnersSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center p-28  gap-4 text-center pl-8 pr-8 bg-background sm:w-fit">
            <div className="text-[38px]">
                Meet the partners who help us transform lives
            </div>
            <div>
                Businesses and fellow foundations have given their time and support to help us make a difference in children's lives.
            </div>
            <div className="flex flex-col gap-8">

                <div className="grid grid-cols-3 sm:grid-cols-1 items-center gap-12 justify-items-center">
                    {
                        partnerList.slice(0, 3).map((v, k) => (
                            <PartnerName key={k} title={v} />
                        ))
                    }
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 items-center gap-12 justify-items-center">

                    {
                        partnerList.slice(3, 5).map((v, k) => (
                            <PartnerName key={k} title={v} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PartnersSection
