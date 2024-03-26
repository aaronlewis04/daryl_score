import React from "react"
import Navbar  from "@/components/Navbar"
import Hero from "@/components/Hero"
import Player_Card from "@/components/Player_Card"
import data from "@/components/Data.js"
import { useEffect, useState } from "react"


export default function Home() {

    const player_cards = data.map(player => {

        return <Player_Card

            display_player_name = {player.player}
            team = {player.team} 
            salary_23_24 = {player.salary_23_24}
            darko_zscore = {player.darko_zscore}
            raptor_zscore = {player.raptor_zscore}
            salary_zscore  = {player.salary_23_24_log_zscores}
            daryl_score = {player.daryl_score}
            img_path = {player.statmuse_player_names}
            key = {player.id}
        />
    })

    const [current_page, set_current_page] = useState(1)
    const players_per_page = 15
    const last_index = current_page * players_per_page
    const first_index = last_index - players_per_page
    const curr_players = player_cards.slice(first_index, last_index)

    const npage = Math.ceil(player_cards.length / players_per_page)
    
    const numbers = [...Array(npage + 1).keys()].slice(1) /* dont really understand this */


return (
    <div> 
        <Navbar />
        <Hero title= "NBA Role-Player Rankings by Contract Efficiency" include_description = {true} />
        {curr_players}

        <nav className="flex mt-7 justify-center items-center mb-6" > 
            <ul className="inline-flex -space-x-px text-sm"> 
                <li className="">
                    <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prevPage}>Prev</a>
                </li>
                { 
                    numbers.map((n,i) => (
                        <li className="page_item" key={i}>
                            <a href = "#" className={`${current_page === n ? 'flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`} onClick={() => changeCPage(n)} >{n}</a>
                        </li>
                    ))
                }
                <li className="page_item">
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPage}>Next</a>
                </li>
            </ul>
        </nav>        
    </div>
)

function prevPage() {
    if(current_page !== 1) {
        set_current_page(current_page - 1)
        console.log(current_page)
    }
}

function changeCPage (id) {
    set_current_page(id)
    console.log(current_page)
}

function nextPage() {
    if(current_page !== npage){
        set_current_page(current_page + 1)
    }
}

}
