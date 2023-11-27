import { useEffect, useState } from "react";
import axios from 'axios';

import {Container} from 'components/Container';
import {Navigation} from 'components/Navigation';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [page, setPage] = useState(1);

    const goToPrev = () => {
        if (page > 1) {
            setPage(prev=> prev-1)
        }
    };
    
    const goToNext = () => {
        if (page < 42) {
          setPage(prev=> prev+1)
        }
    };

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
          .then(response => {
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.log(error);
            setErrorMsg('Error retreiving data');
          });
        window.scrollTo(0, 0);
    },[page]);
    return (
        <main>
            <Container items={characters} errorMsg={errorMsg}/>
            <Navigation pages={42} page={page} goToPrev={goToPrev} goToNext={goToNext}/>
        </main>
        
    )
};

export {Characters};