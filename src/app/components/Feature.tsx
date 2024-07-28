import react from 'react';
import { Button } from "@/components/ui/button"

interface FeaturesProps {
    heading: string,
    icon: string,
    buttonName: string,
    paragraph: string
}
const Features: React.FC<FeaturesProps> = ({ heading, icon, buttonName, paragraph }) => {
    return (
        <>
            <h1>{icon}</h1>
            <h1>{heading}</h1>
            <h1><Button variant="outline">Button</Button>
            </h1>
            <h1>{paragraph}</h1>
        </>
    )
}

export default Features