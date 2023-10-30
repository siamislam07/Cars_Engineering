import { useEffect, useState } from "react";
import ChooseCards from "./ChooseCards";

const Choose = () => {

    const [choose, setChoose] = useState([])

    useEffect(()=>{
        fetch('choose.json')
        .then(res=>res.json())
        .then(data=> setChoose(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-5 mt-36">
                <h2 className="text-xl text-[#FF3811]">Core Features</h2>
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-16 gap-5">
            {
                    choose.map(choose=><ChooseCards
                    key={choose.id}
                    choose={choose}
                    ></ChooseCards>)
                }
            </div>
        </div>
    );
};

export default Choose;