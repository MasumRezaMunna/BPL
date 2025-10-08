import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    console.log(player)
    const handleRemove = () =>{
        removePlayer(
            player
        )
    }
    return (
        <div className='border-2 mt-5 p-3 border-gray-300 flex justify-between items-center rounded-xl'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-xl' src={player.player_image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <p>🗑️</p>
                </div>
            </div>
    );
};

export default SelectedCard;