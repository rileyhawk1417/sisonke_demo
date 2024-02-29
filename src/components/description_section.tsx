import { GiSevenPointedStar } from "react-icons/gi";

function DescriptionSection() {
    return (
        <div className="flex flex-col items-center justify-center w-[681.161px] sm:w-fit gap-4 text-center p-12">
            <div className="text-[38px]">
                The journey to change the world starts with one child.
            </div>
            <div>
                Sadly, not every kid grows up in a positive environment. The Non Profit Company is committed to helping the most vulnerable children, providing them with protection, education, and support.
                <br />
                We are committed to transforming their lives because we know that it will change the world we live in.
            </div>
            <GiSevenPointedStar size={30} className="text-primary" />
        </div>
    )
}

export default DescriptionSection
