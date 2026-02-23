'use client';
import Hero from "./components/sections/Hero";
import ServicesPreview from "./components/sections/ServicesPreview";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import CTA from "./components/sections/CTA";

export default function Page() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <FeaturedProjects />
            <WhyChooseUs />
            <CTA />
        </>
    );
}
