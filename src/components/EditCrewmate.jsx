// src/components/EditCrewmate.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const EditCrewmate = () => {
  const { id } = useParams(); // Get the crewmate ID from the URL
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [role, setRole] = useState('Deckhand');
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
      setPet(data.pet); // Set the pet state
      setRole(data.role);
      setTheme(data.theme);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('crewmates')
      .update({ name, pet, role, theme }) // Include pet in the update
      .eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error.message);
    } else {
      navigate('/all-crew'); // Redirect to the crewmate list after updating
    }
  };

  return (
    <div className='edit-crewmate'>
      <h2 style={{ marginBottom: '2rem' }}>Edit Crewmate Details</h2>
      <form onSubmit={handleUpdate}>
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
          Pet:
          <input
            type='text'
            placeholder='Pet'
            value={pet}
            onChange={(e) => setPet(e.target.value)}
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

        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditCrewmate;
