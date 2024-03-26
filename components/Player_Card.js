import React from "react";

export default function Player_Card(props) {

    return (
        <div className="flex flex-col justify-center mt-7">
            <div className="relative flex flex-col md:flex-row md:space-x-5 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border bg-[#EEE9E0] border-zinc-950">
                <div className="w-full md:w-1/6 bg-[#EEE9E0] grid place-items-center">
                    <img src={`/player_images/${props.img_path}.png`} alt="tailwind logo" className="rounded-full bg-white" />
                </div>

                <div className="w-full md:w-2/6 grid place-items-center md:place-items-stretch">
                    <div className=" grid place-items-center md:place-items-stretch md:flex md:flex-col md:justify-center p-3"> 
                        <p className="text-2xl md:text-3xl font-bold"> {props.display_player_name} </p>
                        <p className="text-xl"> Team: {props.team}</p>
                        <p className="text-xl"> Salary: {props.salary_23_24}</p>
                    </div> 
                </div>

                <div className="w-full md:w-3/6 flex flex-col md:flex-row space-y-2 p-1 md:p-3">

                    <div className="grid place-items-center p-1 md:place-items-stretch md:flex md:flex-col md:justify-center md:p-3"> 
                        <p className="text-2xl md:text-3xl font-bold">{props.darko_zscore}</p>
                        <p className="text-lg"> DARKO SCORE </p>
                    </div>

                    <div className="grid place-items-center p-1 md:place-items-stretch md:flex md:flex-col md:justify-center md:p-3"> 
                        <p className="text-2xl md:text-3xl font-bold">{props.raptor_zscore}</p>
                        <p className="text-lg"> RAPTOR SCORE </p>
                    </div>

                    <div className="grid place-items-center p-1 md:place-items-stretch md:flex md:flex-col md:justify-center md:p-3"> 
                        <p className="text-2xl md:text-3xl font-bold">{props.salary_zscore}</p>
                        <p className="text-lg"> SALARY ZSCORE </p>
                    </div>

                    <div className="grid place-items-center p-1 md:place-items-stretch md:flex md:flex-col md:justify-center md:p-3"> 
                        <p className="text-2xl md:text-3xl font-bold">{props.daryl_score}</p>
                        <p className="text-lg"> DARYL SCORE </p>
                    </div>

                </div>
            </div>
        </div>
    )
}