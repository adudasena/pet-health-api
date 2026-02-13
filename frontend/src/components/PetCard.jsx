const PetCard = ({ pet, onDelete }) => {
  const mossGreen = "#4A5D23";
  
  return (
    <div style={{
      background: 'white',
      borderLeft: `10px solid ${pet.healthStatus === 'Sick' ? '#E67E22' : '#27AE60'}`,
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginBottom: '15px',
      color: '#2C3E50'
    }}>
      <h3 style={{ color: mossGreen, margin: '0 0 10px 0' }}>{pet.name} 🐾</h3>
      <p><strong>Owner:</strong> {pet.ownerName}</p>
      <p><strong>Diagnosis:</strong> {pet.medicalNotes}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.9em', color: '#7f8c8d' }}>{pet.breed} | {pet.age} years</span>
        <button onClick={() => onDelete(pet.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  );
};

export default PetCard;