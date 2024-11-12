import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ScoreKeeper = ({ players }) => {
 const [participants, setParticipants] : array = useState([]);
 const [winner, setWinner] = useState({});

 function gameSet() {
    const gamers = [];
    for (let step = 1; step < players; step++) {
        gamers.push({ id: uuidv4(), player: `player${step}`, score: 0 });
      }
      
    setParticipants(gamers);
 }

 function increaseScore(id) {
    // When map runs on oldp, it does create a new array, but without using setParticipants(updatedArray), React doesn’t know that participants was updated. This is because React relies on setParticipants to detect state changes and trigger re-renders.
    // const oldp = participants;
    // oldp.map(i => {
    //     if(i.id === id) {
    //         return {...i, score: i.score + 1};
    //     } else {
    //         return i;
    //     }
    // })
    // console.log(oldp);
    // setParticipants(oldp);
    setParticipants(oldp => oldp.map(i => {
        if (i.id === id) {
            return {...i, score: i.score + 1};
            // i.id === id ? { ...i, score: i.score + 1 } : i
        } else {
            return i;
        }
    }))
 }

 useEffect(() => {
    gameSet();
  }, [players]);

  return (
    <>
        <h1>ScoreKeeper</h1>
        <ul>
        {participants.map(i => 
        <>
            <li key={i.id}>
                Player: {i.player}, Score: {i.score}
                <button onClick={() => increaseScore(i.id)}>Increase Score</button>
                {i.score === 10 ? `WINNER` : `NOT WINNER`}
            </li>
        </>
        )}
        </ul>
    </>
  )
}

export default ScoreKeeper