import { Navbar } from "@/components/navbar";

type Props = {
    children: React.ReactNode;
}

const LandingLayout = ({
    children
}: Props) => {
    return (  
        <div className="h-full">
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
 
export default LandingLayout;