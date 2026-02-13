import { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './components/PetCard';

function App() {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState('');

  const mossGreen = "#4A5D23";

  useEffect(() => { fetchPets(); }, []);

  const fetchPets = async () => {
    const res = await axios.get('http://localhost:8080/pets');
    setPets(res.data);
  };

  // Lógica de Consulta (Search)
  const filteredPets = pets.filter(pet => 
    pet.name.toLowerCase().includes(search.toLowerCase()) ||
    pet.ownerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#F8F9F5', minHeight: '100vh', padding: '40px', fontFamily: 'Arial' }}>
      <header style={{ borderBottom: `2px solid ${mossGreen}`, marginBottom: '30px', paddingBottom: '10px' }}>
        <h1 style={{ color: mossGreen }}>VetManager | PetHealth 🌿</h1>
        <input 
          type="text" 
          placeholder="Search patient or owner..." 
          style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Aqui você mantém o seu formulário de cadastro à esquerda */}
        <section>
          <h2 style={{ color: mossGreen }}>New Consultation</h2>
          {/* ... seu formulário aqui ... */}
        </section>

        {/* Listagem de Prontuários à direita */}
        <section>
          <h2 style={{ color: mossGreen }}>Medical Records</h2>
          {filteredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} onDelete={fetchPets} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;