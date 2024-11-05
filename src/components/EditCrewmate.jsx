// src/components/EditCrewmate.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const EditCrewmate = () => {
  const { id } = useParams(); // Get the crewmate ID from the URL
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [theme, setTheme] = useState('red');

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = async () => {
    const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single(); // Fetch a single crewmate by ID

    if (error) {
      console.error('Error fetching crewmate:', error.message);
    } else {
      setName(data.name);
      setRole(data.role);
      setTheme(data.theme);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('crewmates').update({ name, role, theme }).eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error.message);
    } else {
      navigate('/all-crew'); // Redirect to the crewmate list after updating
    }
  };

  return (
    <div className='edit-crewmate'>
      <h2>Edit Crewmate</h2>
      <form onSubmit={handleUpdate}>
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

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditCrewmate;
