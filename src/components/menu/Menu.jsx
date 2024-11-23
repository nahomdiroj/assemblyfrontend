import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from './Portal.png'

const Menu = () => {
    const navigate = useNavigate();

    const handleVoting = () => {
        console.log("Voting clicked");
        navigate('/assemblynah/search');
    };
    const handleReport = () => {
        console.log("Voting clicked");
        navigate('/assemblynah/report');
    };

    const handlePrint = () => {
        console.log("Print clicked");
        navigate('/assemblynah/searchprint');
    };

    const handleAttendance = () => {
        console.log("Attendance clicked");
        navigate('/assemblynah/search');
    };

    const handledisplay = () => {
        console.log("Attendance clicked");
        navigate('/assemblynah/display');
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="w-80 bg-yellow-100 bg-opacity-90 text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Menu</h2>
                <ul className="space-y-4">
                <li>
                        <button 
                            onClick={handleAttendance}
                            className="w-full py-2 px-4 text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            Attendance
                        </button>
                    </li>
               
                    <li>
                        <button 
                            onClick={handlePrint}
                            className="w-full py-2 px-4 text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            Print
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={handleVoting}
                            className="w-full py-2 px-4  text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            Voting
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={handleReport}
                            className="w-full py-2 px-4  text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            Report
                        </button>
                    </li>

                    <li>
                        <button 
                            onClick={handledisplay}
                            className="w-full py-2 px-4  text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            display
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={()=>{ navigate('/assemblynah/displayprint')}}
                            className="w-full py-2 px-4  text-white hover:text-black bg-black rounded hover:bg-amber-500"
                        >
                            displayp
                        </button>
                    </li>
                
                
                </ul>
            </div>
        </div>
    );
};

export default Menu;
