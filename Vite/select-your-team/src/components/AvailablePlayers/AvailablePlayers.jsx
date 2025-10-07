import React, { use } from 'react';

const AvailablePlayers = ({playerPromise}) => {
    const playerData = use(playerPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

                {
                    playerData.map(player => <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <h2 className="card-title">🙅 {player.player_name}</h2>
    <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-500'>
        <span>🏳️ {player.player_country}</span>
        <button className='btn'>{player.playing_role}</button>
    </div>

        <div className='flex justify-between font-bold mt-4'>
            <span>Rating</span>
            <span>{player.rating}</span>
        </div>

        <div className='flex justify-between mt-4'>
            <span className='font-bold'>{player.batting_style}</span>
            <span>{player.bowling_style}</span>
        </div>

    <div className="card-actions mt-3 flex justify-between items-center">
        <p className='font-bold'>Price: ${player.price}</p>
      <button className="btn">Chose Player</button>
    </div>
  </div>
            </div>)
                }

            
        </div>
    );
};

export default AvailablePlayers;