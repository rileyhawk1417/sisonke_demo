import { GiSevenPointedStar } from "react-icons/gi";

function ContactSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 text-center p-16 bg-primary">
            <div className="text-[38px]">
                Connect with us
            </div>
            <div>
                123 Anywhere St., Any City, ST 12345
                123-456-7890
                hello@reallygreatsite.com
            </div>
            <div>
                Keep up with our events on social media
                @reallygreatsite
            </div>
            <GiSevenPointedStar size={30} className="text-background" />
        </div>
    )
}

export default ContactSection
