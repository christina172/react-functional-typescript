import { useEffect, useState } from "react";
import axios from 'axios';

import {Navigation} from 'components/Navigation';

type Location = {
    name: string,
    id: number
}

function Locations() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [page, setPage] = useState(1);

    const goToPrev = () => {
        if (page > 1) {
            setPage(prev=> prev-1)
        }
    };
    
    const goToNext = () => {
        if (page < 7) {
          setPage(prev=> prev+1)
        }
    };

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
          .then(response => {
            setLocations(response.data.results);
          })
          .catch(error => {
            console.log(error);
            setErrorMsg('Error retreiving data');
          });
        window.scrollTo(0, 0);
    }, [page]);
    return (
        <main>
            <ul>
            {locations.length
                ? locations.map((location) => <li key={location.id}>{location.name}</li>)
                : null
            }
            </ul>
            {errorMsg ? <h3>{errorMsg}</h3> : null} 
            <Navigation pages={7} page={page} goToPrev={goToPrev} goToNext={goToNext}/>
        </main>
    )
};

export {Locations};