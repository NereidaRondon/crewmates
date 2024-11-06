import { useState } from 'react';
import { supabase } from '../supabaseClient';
import shipImage from '../assets/ship.png';

const CrewmateForm = () => {
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [role, setRole] = useState('Deckhand'); // Default role
  const [theme, setTheme] = useState('red');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the crewmate data, with pet set to null if it's empty
    const { data, error } = await supabase.from('crewmates').insert([
      {
        name,
        pet: pet || null, // Set pet to null if the field is empty
        role,
        theme,
      },
    ]);

    if (error) {
      console.error('Error creating crewmate:', error.message);
    } else {
      console.log('Crewmate created:', data);
      setName('');
      setPet('');
      setRole('Deckhand'); // Reset to default role
      setTheme('red');
    }
  };

  return (
    <>
      <img
        className='ship'
        src={shipImage}
        alt='Ship'
        style={{ width: '300px', maxHeight: '400px' }}
      />
      <h1 className='title'>Black Beard's Crew</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value='Captain'>Captain</option>
            <option value='First Mate'>First Mate</option>
            <option value='Navigator'>Navigator</option>
            <option value='Gunner'>Gunner</option>
            <option value='Quartermaster'>Quartermaster</option>
            <option value='Powder Monkey'>Powder Monkey</option>
            <option value='Deckhand'>Deckhand</option>
            <option value='Cook'>Cook</option>
          </select>
        </label>
        <label>
          Pet:
          <input
            type='text'
            placeholder='Pet'
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
        </label>
        <div className='radio-group'>
          <p>Choose a Theme color:</p>
          {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'].map((color) => (
            <label key={color}>
              <input
                type='radio'
                value={color}
                checked={theme === color}
                onChange={(e) => setTheme(e.target.value)}
              />
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </label>
          ))}
        </div>

        <button type='submit'>Add Crewmate</button>
      </form>
    </>
  );
};

export default CrewmateForm;
