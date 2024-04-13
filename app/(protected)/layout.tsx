import { Navbar } from "@/components/navbar";

type Props = {
    children: React.ReactNode;
}

const ProtectedLayout = ({
    children
}: Props) => {
    return (  
        <div className="h-full">
            <Navbar />
            <div className="pt-16">
                {children}
            </div>
        </div>
    );
}
 
export default ProtectedLayout;