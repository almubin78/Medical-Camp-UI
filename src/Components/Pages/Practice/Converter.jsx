import { useState } from 'react';


function Converter() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [isBinaryToDecimal, setIsBinaryToDecimal] = useState(true); 

    const handleBinaryChange = (e) => {
        const value = e.target.value;
        setBinary(value);
        setDecimal(parseInt(value, 2).toString());
    };

    const handleDecimalChange = (e) => {
        const value = e.target.value;
        setDecimal(value);
        setBinary(parseInt(value).toString(2));
    };

    const toggleConversion = () => {
        setIsBinaryToDecimal(!isBinaryToDecimal);
        setBinary('');
        setDecimal('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Binary and Decimal Converter</h1>
            <div>
                <button onClick={toggleConversion} className="text-blue-500 d-block">
                    {isBinaryToDecimal ? (
                        <p>Decimal to Binary</p>
                    ) : (
                        <p>Binary To Decimal</p>

                    )}
                </button>
            </div>
            <div className="flex items-center space-x-4">
                {isBinaryToDecimal ? (
                    <>
                        <input
                            type="text"
                            placeholder="Binary"
                            className="border border-gray-400 px-3 py-2 rounded-md"
                            value={binary}
                            onChange={handleBinaryChange}
                        />
                        <span className="text-xl font-bold">=</span>
                        <input
                            type="text"
                            placeholder="Decimal"
                            className="border border-gray-400 px-3 py-2 rounded-md"
                            value={decimal}
                            onChange={handleDecimalChange}
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Decimal"
                            className="border border-gray-400 px-3 py-2 rounded-md"
                            value={decimal}
                            onChange={handleDecimalChange}
                        />
                        <span className="text-xl font-bold">=</span>
                        <input
                            type="text"
                            placeholder="Binary"
                            className="border border-gray-400 px-3 py-2 rounded-md"
                            value={binary}
                            onChange={handleBinaryChange}
                        />
                    </>
                )}


            </div>
        </div>
    );
}

export default Converter;
