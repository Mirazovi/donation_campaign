import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div>
                <h1 className="text-5xl font-bold text-violet-600">Oops!</h1>
                <p className="text-xl py-3 ">Sorry, an unexpected error has occurred.</p>
                <h1 className="text-2xl py-2">{error?.data}</h1>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                
            </div>
        </div>
    );
};

export default Error;