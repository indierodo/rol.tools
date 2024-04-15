import React from 'react';
import { useState, useEffect } from 'react';
import './NPC.scss'

function NPC({ id, onClose }) {

    const [name, setName] = useState('')
    const [armorClass, setArmorClass] = useState('')
    const [lifePoints, setLifePoints] = useState(100)
    const [step, setStep] = useState(10)
    const [loaded, setLoaded] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleArmorClass = (event) => {
        setArmorClass(event.target.value);
    };

    const handleLifePoints = (event) => {
        setLifePoints(event.target.value);
    };

    const handleStep = (event) => {
        setStep(event.target.value);
    };

    const addStep = () => {
        setLifePoints(Number(lifePoints) + Number(step))
    }

    const substractStep = () => {
        setLifePoints(Number(lifePoints) - Number(step))
    }

    const handleCloseClick = () => {
        erase()
        onClose()
    }

    // Function to save NPC data to local storage
    const save = () => {
        localStorage.setItem(`npc-${id}`, JSON.stringify({ name, armorClass, lifePoints, step }));
    };

    // Function to load NPC data from local storage
    const load = () => {
        const savedNPCData = JSON.parse(localStorage.getItem(`npc-${id}`));
        if (savedNPCData) {
            setName(savedNPCData.name);
            setArmorClass(savedNPCData.armorClass);
            setLifePoints(savedNPCData.lifePoints);
            setStep(savedNPCData.step);
        }
    };

    const erase = () => {
        localStorage.removeItem(`npc-${id}`);
    }

    // Effect to load NPC data from local storage when component mounts
    useEffect(() => {
        load();
        setLoaded(true); // Set loaded flag to true after loading data
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // Effect to save NPC data to local storage whenever relevant state variables change
    useEffect(() => {
        if (loaded) { // Only save data if it has been loaded from local storage
            save();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, armorClass, lifePoints, step, loaded]);

    return (
        <>
            <div className='npc'>
                <form>
                    <div className='destroy-button' onClick={handleCloseClick}></div>
                    <div className='form-group'>
                        <label className='form-label'>Nombre:
                            <input className='text-input' type="text" id="name" name="name" onChange={handleName} value={name}></input>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Clase de armadura:
                            <input className='text-input' type="text" id="armorClass" name="armorClass" onChange={handleArmorClass} value={armorClass}></input>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Puntos de Vida:
                            <input className='text-input' type="text" id="lifePoints" name="lifePoints" onChange={handleLifePoints} value={lifePoints}></input>
                        </label>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>Sumar o restar vida:
                            <input className='text-input' type="text" id="step" name="step" onChange={handleStep} value={step}></input>
                        </label>
                    </div>
                    <div className='npc-life-points-buttons'>
                        <div onClick={substractStep} className='npc-life-points-button substract'></div>
                        <div onClick={addStep} className='npc-life-points-button add'></div>
                    </div>
                </form>
            </div>
        </>

    );
}

export default NPC;
