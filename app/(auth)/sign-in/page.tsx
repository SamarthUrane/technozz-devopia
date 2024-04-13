import { SignIn } from "@clerk/nextjs";


const SignInPage = () => {
    return (  
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{background: "linear-gradient(to bottom, #1E40AF, #BAE6FD)"}}>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign up</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-blue-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <SignIn />
                </div>
            </div>
        </div>
    );
}
 
export default SignInPage;