import { useRouteError } from "react-router";
function Error(){
    const err=useRouteError();
    console.log(err)
  const status = err?.status || "Unknown Error";
    const statusText = err?.statusText || "Something went wrong";
    const message = err?.data || "No error message available";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-center p-4">
            <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
            <p className="text-xl mt-4">An unexpected error has occurred.</p>
            <div className="mt-6 bg-white p-6 rounded shadow-md">
                <p className="text-lg text-gray-800"><strong>Status:</strong> {status}</p>
                <p className="text-lg text-gray-800"><strong>Status Text:</strong> {statusText}</p>
                <p className="text-lg text-gray-800"> {message}</p>
            </div>
        </div>
    );
}
export default Error;


    