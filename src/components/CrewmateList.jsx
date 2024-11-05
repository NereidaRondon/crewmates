// src/components/CrewmateList.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from('crewmates').select('*');
    if (error) console.error('Error fetching crewmates:', error.message);
    else setCrewmates(data);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (error) console.error('Error deleting crewmate:', error.message);
    else fetchCrewmates();
  };

  return (
    <>
      <h1 className='crew-list-title'>Crew List</h1>
      <div className='crewmate-grid'>
        {crewmates.map((crewmate) => (
          <div
            key={crewmate.id}
            className='crewmate-card'
            style={{ borderColor: crewmate.theme, borderWidth: '5px' }}>
            <Link
              to={`/crewmate/${crewmate.id}`}
              className='crewmate-name'
              style={{ color: crewmate.theme }}>
              {crewmate.name} →
            </Link>
            <p>
              <strong>Role:</strong> {crewmate.role}
            </p>
            <p>
              <strong>Theme:</strong> {crewmate.theme}
            </p>
            <Link to={`/edit/${crewmate.id}`} className='edit-button'>
              Edit
            </Link>
            <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CrewmateList;
