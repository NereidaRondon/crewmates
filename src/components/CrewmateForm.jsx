import { useState } from 'react';
import { supabase } from '../supabaseClient';
import shipImage from '../assets/ship.png';

const CrewmateForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [theme, setTheme] = useState('red');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('crewmates').insert([{ name, role, theme }]);

    if (error) {
      console.error('Error creating crewmate:', error.message);
    } else {
      console.log('Crewmate created:', data);
      setName('');
      setRole('');
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
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <div className='radio-group'>
          <p>Theme:</p>
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
