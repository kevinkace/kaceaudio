import React, { useState } from 'react';

export const PlayingContext = React.createContext({});

function Provider(props) {
    const [ playing, setPlaying ] = useState(null);

    return (
        <PlayingContext.Provider value={{
            playing,
            changePlaying(newPlaying) {
                setPlaying(newPlaying);
            }
        }}>
            {props.children}
        </PlayingContext.Provider>
    );
}

export default ({ element }) => (
    <Provider>{element}</Provider>
);
