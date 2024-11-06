import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateDetail = () => {
  const { id } = useParams(); // Get the crewmate ID from the URL
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = async () => {
    const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single(); // Fetch a single crewmate by ID

    if (error) {
      console.error('Error fetching crewmate:', error.message);
    } else {
      setCrewmate(data);
    }
  };

  if (!crewmate) return <p>Loading crewmate details...</p>;

  return (
    <>
      <div
        className='crewmate-theme'
        style={{
          border: crewmate.theme,
          borderWidth: '15px',
          borderStyle: 'solid',
          marginTop: '100px',
          width: '100%',
        }}></div>
      <div className='crewmate-details' style={{ marginBottom: '8rem', padding: '1rem' }}>
        <h2 style={{ marginBottom: '4rem' }}>Crewmate Details</h2>
        <p>
          <strong>Name:</strong> {crewmate.name}
        </p>
        <p>
          <strong>Role:</strong> {crewmate.role}
        </p>
        <p>
          <strong>Pet:</strong> {crewmate.pet || 'None'}
        </p>
        <p>
          <strong>Theme:</strong> {crewmate.theme.charAt(0).toUpperCase() + crewmate.theme.slice(1)}
        </p>
      </div>
    </>
  );
};

export default CrewmateDetail;
