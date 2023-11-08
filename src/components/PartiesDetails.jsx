
const PartiesDetails = () => {
    return (
        <>
            <div className="bg-white shadow-3 w-full px-3 py-3 ">
                <h1 className="text-black uppercase text-sm font-medium">
                    Temp
                </h1>
                <div className="flex justify-between items-center py-2">
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">Phone : </h2>
                        <p className="text-[13px] text-black">+91 12345 67890</p>
                    </div>
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">Address : </h2>
                        <p className="text-[13px] text-black">Ajit Mill</p>
                    </div>
                </div>
                <div className="flex justify-between items-center py-1">
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">Email : </h2>
                        <p className="text-[13px] text-black">temp@gmail.com</p>
                    </div>
                    <div className="flex space-x-1">
                        <h2 className="text-[13px] text-black">Gst No : </h2>
                        <p className="text-[13px] text-black">Ajit Mill</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartiesDetails;
