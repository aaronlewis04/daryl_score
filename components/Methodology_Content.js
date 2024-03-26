import Link from "next/link";
import React from "react"; 

export default function Methodology_Content() {


    return(
        <div className="sm: 3/4 md:w-1/2 p-4 pb-20 mx-auto text-center">

            <p className="text-left">
            Hello! If you are reading this page you are interested in DARYL score, an NBA player ranking metric. 
            I became interested in creating DARYL score after learning more about the NBA salary cap. 
            The NBA salary cap for the 2023 season is $165 million.
            Teams are tasked with creating a team that pays its players up to $165 million.
            </p>

            <p className="mt-5 text-left">
            While this may seem like a considerable amount of money, “superstar” players may earn salaries up to $50 million dollars per year. 
            If a team has multiple superstars, it can be challenging to  surround those players with great players. 
            These surrounding players are known as “role players”. 
            Role players can have a significant <span className=" underline text-blue-700"> 
            <Link target={"_blank"} href={"https://en.wikipedia.org/wiki/Robert_Horry"}>impact</Link></span> on the success of their teams.
            </p>

            <p className="mt-5 text-left">
            I wondered if statistics could help us find role players that perform well but get paid relatively less. 
            These players may then be sought out during trades. 
            This created my desire to create DARYL score. 
            DARYL score is named after <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://en.wikipedia.org/wiki/Daryl_Morey"}>Daryl Morey</Link></span>, a basketball GM I admire. 
            </p>

            <p className="mt-5 text-left">
            DARYL score uses z-scores. A z-score is the number of standard deviations a raw score is  away from the mean. 
            If a distribution follows the normal model, having a z-score of 2  or above means the raw score was unusually high. 
            Likewise having a z-zscore of -2 or lower means the raw score was unusually low.
             Using z-scores we can determine if one&apos;s value for performance or salary is relatively low or relatively high.
            </p>
            
            <img src="/method_images/zscore2.jpeg" className="mx-auto"></img>

            <p className="mt-5 text-left">
            This is what I sought to measure with DARYL score. 
            I wanted to find players that performed above the mean but were paid relatively below the mean. 
            To do this I would have to determine a player&apos;s z-score for their performance and their salary.
            </p>

            <h3 className="mt-5 text-xl font-bold text-center">Salary Z-SCORE</h3>

            <p className="mt-5 text-left">
            Determining a player&apos;s salary z-score was more straightforward since it is less abstract than “performance”. 
            I obtained salary data from basketball-reference.com. 
            The raw salary data was not a normal distribution. 
            Therefore I had to get rid of outliers and consider using a log transformation.
            </p>

            <img src="/method_images/salaries_without_filtering_outliers.png" className=" mx-auto"/>

            <p className="mt-5 text-left">
            I determined outliers using the IQR * 1.5 rule. The rule determined outliers to be any players earning above $31 million. I used this measure to effectively determine what one considered a “star” player and a “role player”.
            </p>

            <p className="mt-5 text-left">
            It may be odd to consider a role player making $30 million.
             However, without an objective cutting point such as IQR * 1.5, it is hard to determine an empirical cutoff. 
             It seems to be the direction of the NBA  that highly valued “role players” are earning up to $30 million. 
             For instance <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://www.cbssports.com/nba/news/nba-free-agency-2023-nets-cameron-johnson-agree-to-4-year-108-million-contract-per-report/"}>Cam Johnson</Link></span> earns $108 million over 4 years. 
            </p>

            <p className="mt-5 text-left">
            I got rid of outliers and performed a log transformation (base e) on the data for the data to be of a more normal distribution. 
            After doing a shapiro test the distribution was still not roughly normal.
             This is largely due to outliers that get paid very relatively little. 
             Therefore the z-scores for the log transformed data should be taken with a <span className="font-bold">grain of salt. </span> 
              Some of the data that contributed to the abnormality were outliers of players that got paid relatively less. 
             They would get filtered out later when I filtered by playing time. 
            </p>

            <img src="/method_images/salaries_log_transformed.png" className="mx-auto"/>

            <h3 className="mt-5 text-xl font-bold text-center">Performance Z-SCORE</h3>

            <p className="mt-5 text-left">
            I considered several ways to measure a player&apos;s performance relative to others. 
            I considered creating my own ranking statistic that focused on points scored and offensive efficiency. 
            I realized that was a harder task than anticipated. 
            There are many performance summary statistics such as <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://www.basketball-reference.com/about/bpm2.html"}>BPM</Link></span>
                , <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://en.wikipedia.org/wiki/Player_efficiency_rating"}> PER</Link></span>, and <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://www.bball-index.com/lebron-introduction/"}>LEBRON</Link></span>. 
            I spent a weekend going through which summary statistics were most favored by the community.  
            </p>

            <p className="mt-5 text-left">
            I chose to use two publicly available summary statistics that are free to use: <span className=" underline text-blue-700"> 
            <Link target={"_blank"} href={"https://apanalytics.shinyapps.io/DARKO/"}>DARKO</Link></span> and <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://projects.fivethirtyeight.com/nba-player-ratings/"}>RAPTOR</Link></span>. 
            DARKO is a machine learning algorithm that projects how well a player will perform. 
            RAPTOR is a more traditional “all-in-one” statistic that measures a player&apos;s value on the court with +/-. 
            They are both widely respected measures in the NBA community. 
            </p>

            <p className="mt-5 text-left">
            I thought it would be better to use two measures to have a more robust appreciation of a player&apos;s “performance” value.
             Some may argue having multiple measures may just increase a model&apos;s error.
              I understand this point however, I find including both values is valuable since they seem to measure different aspects of a player&apos;s value (DARKO future value, and RAPTOR present value). 
            </p>

            <p className="mt-5 text-left">
            I collected DARKO and RAPTOR data from the DARKO web app and FiveThirtyEight respectively. 
            I cleaned the data of both measures. It seemed there were a considerable number of players with high RAPTOR because they had a small sample size of minutes played. 
            I set a threshold of 1,400 minutes played to be considered in this metric. 
            This is arbitrary but it stems from a simple calculation of 1400 / 70 games = 20 minutes per game. 
            I thought 20 minutes per game would be a rough measure of players that are quite active on their team. 
            The 70 games out of 82 gives a bit of leeway. A different cutoff would likely lead to somewhat different results.
            </p>

            <p className="mt-5 text-left">
            I was left with 175 players that met my cutoff for minutes played. 
            This would be roughly 6 role players per team (175/30). 
            </p>

            <p className="mt-5 text-left">
            The RAPTOR and DARKO scores were off a normal distribution therefore I took their z-scores using their raw data. 
            </p>

            <img src="/method_images/raptor_dist.png" className="mt-5 mx-auto" />

            <img src="/method_images/DARKO_dist.png" className="mt-5 mx-auto" />

            <p className="mt-5 text-left">
            I then took the z-scores of the DARKO and RAPTOR measurements. 
            I adjusted for the fact they would have different standard deviations and then simply added the DARKO and RAPTOR z-scores together. 
            The top players in this metric were very high quality players (many consider them star players) that did not meet the threshold of $30 million to be considered a star player.
            </p>

            <img src="/method_images/top_raptor_plus_darko.jpg" className="mt-5 mx-auto" />

            <h3 className="mt-5 text-xl font-bold text-center">Creating DARYL Score</h3>

            <p className="mt-5 text-left">
            My goal was then to simply multiply the salary z-score and performance z-score so they would be treated roughly equally in the final calculation of DARYL score.
             However, this would not work as negative z-scores are considered better for salary. 
             Negative * positive would give a negative. The formulas for how I calculated DARYL score are below. 
            </p>

            <img src="/method_images/calculations_for_daryl_score.jpg" className="mt-5 mx-auto" />

            <p className="mt-5 text-left">
            The effective salary score subtracts the curr salary_zscore from the max of all salary z scores. 
            Therefore a person with a negative salary z_score would be rated highly.
             (ie positive_value - (negative_value)) is positive. I noticed the performance_zscore standard deviation was higher than the salary z-score standard deviation so I adjusted for that as well. 
            </p>

            <p className="mt-5 text-left">
            The effective performance score adds the absolute value of the lowest performance z-score to the curr_performance_zscore. 
            Therefore the lowest curr_performance_zscore would be at 0 and it would go up from there. 
            </p>

            <p className="mt-5 text-left">
            I then multiplied each effective score to give myself a DARYL score.
            </p>

            <h3 className="mt-5 text-xl font-bold text-center">Interpreting DARYL Score</h3>

            <p className="mt-5 text-left">
            The top players in DARYL score include Walker Kessler, Desmond Bane, and Tyrese Haliburton. 
            These are all players still on their rookie contracts that have performed at highly productive levels. 
            I think this validates DARYL score as for the upcoming season they are still considered very “bang for your buck”-esque players as their second contract hasn&apos;t kicked in.
             Once their second contract arrives some will be earning max-level money.
            </p>

            <p className="mt-5 text-left">
            It was interesting to see which players&apos; DARYL score rated highly. 
            Josh Okogie and Keita Bates-Diop were both highly rated by DARYL score.
            This seems to match some <span className=" underline text-blue-700">
                <Link target={"_blank"} href={"https://www.reddit.com/r/timberwolves/comments/114sdom/what_can_you_tell_me_about_josh_okogie/"}>testimonials</Link></span> of the players performance.
             Perhaps the Suns have more depth then many people consider them to have. 
             Another team DARYL score was high on is the Knicks with Immanuel Quickley, Quentin Grimes, and Isaiah Hartenstein. 
             Perhaps DARYL score is less good at analyzing playoff performance :P
            </p>

            <p className="mt-5 text-left">
            Lastly, DARYL score seems to heavily discount players that get paid more than 10 million dollars as their salary z-score is determined to be quite bad. 
            This is likely due to the salary z-score distribution being skewed to the right. 
            Players such as Anthony Edwards and Derrick White should not be as low as they are despite their relatively higher salary. 
            This would be the first amendment I make to changing the DARYL score algorithm.
            </p>

            <p className="mt-5 text-left">
            The starting 6 rotation players around a “Big 2” according to DARYL score would be:
            </p>

            <p className="mt-2 text-left">
            Desmond Bane - G
            </p>
            <p className=" text-left">
            Tyrese Haiburton - G
            </p>
            <p className="text-left">
            Josh Okogie - SF
            </p>
            <p className=" text-left">
            John Konchar - F
            </p>
            <p className=" text-left">
            Walker Kessler - C
            </p>

            <p className="text-left">
            Dwight Powell - Backup Forward
            </p>

            <p className="mt-5 text-left">
            In total these depth pieces would cost approximately $21 million. 
            That leaves $144 million to spend on your two star players. 
            That is just enough to give you two Jaylen Browns :P
            </p>

            <p className="mt-5 text-left">
            While this a contrived example I think a tool like this could be useful to help determine value in trades to ensure a contending team has enough money to pay their star players. 
            As supermaxes increase and the penalties of the second apron get harsher, it is important for teams to be diligent with their cap space.
             I think DARYL score is a first step to achieving that goal. 
            </p>
        </div>
    )
}