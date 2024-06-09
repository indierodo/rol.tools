import React from 'react';
import { useState, useEffect } from 'react';
import './NPCs.scss'
import NPC from './NPC'

function NPCs() {
  const [npcs, setNpcs] = useState([]);

  const addNPC = () => {
    const id = Date.now();
    const newNPC = { id }; // Create NPC object with unique ID
    setNpcs([...npcs, newNPC]);
  };

  const removeNPC = (idToRemove) => {
    setNpcs(npcs.filter(npc => npc.id !== idToRemove)); // Filter based on unique ID
  };

  // Load NPCs array from local storage when component mounts
  useEffect(() => {
  const savedNPCs = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('npc-')) {
      const id = key.substring(4);
      savedNPCs.push({ id });
    }
  }
  setNpcs(savedNPCs);
}, []);

  return (
    <>
      <button type="button" className='btn btn-primary new-npc' onClick={addNPC}>Nuevo NPC</button>
      <div className='npc-container'>
        {npcs.map(npc => (
          <NPC key={npc.id} id={npc.id} onClose={() => removeNPC(npc.id)} />
        ))}
      </div>
    </>
  );
}

export default NPCs;
