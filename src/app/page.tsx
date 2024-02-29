import Image from "next/image";
import LandingSection from '@/components/landing_section'
import DescriptionSection from "@/components/description_section";
import MakeDiffSection from "@/components/make_diff_section";
import SponsorSection from "@/components/sponsor_section";
import PartnersSection from "@/components/partners_section";
import ContactSection from "@/components/contact_section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between gap-0">
            <LandingSection />
            <DescriptionSection />
            <MakeDiffSection />
            <SponsorSection />
            <PartnersSection />
            <ContactSection />
        </main>
    );
}
