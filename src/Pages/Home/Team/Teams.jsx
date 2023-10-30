import { useEffect, useState } from "react";
import TeamCards from "./TeamCards";

const Teams = () => {


    const [teams, setTeams] = useState([])

    useEffect(()=>{
        fetch('team.json')
        .then(res=>res.json())
        .then(data=> setTeams(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-5 mt-36">
                <h2 className="text-xl text-[#FF3811]">Team</h2>
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    teams.map(team=><TeamCards
                    key={team.id}
                    team={team}
                    ></TeamCards>)
                }
            </div>
        </div>
    );
};

export default Teams;