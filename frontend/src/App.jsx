import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [pets, setPets] = useState([])
    const [nome, setNome] = useState('')

    // 1. Buscar pets ao carregar a página
    useEffect(() => {
        fetchPets()
    }, [])

    const fetchPets = async () => {
        try {
            const response = await axios.get('http://localhost:8080/pets')
            setPets(response.data)
        } catch (error) {
            console.error("Erro ao buscar pets:", error)
        }
    }

    // 2. Função para salvar um novo pet
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8080/pets', { nome: nome, especie: 'Cachorro', raca: 'SRD' })
            setNome('')
            fetchPets() // Atualiza a lista automaticamente
        } catch (error) {
            alert("Erro ao salvar! Verifique o CORS no Java.")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-8 flex items-center gap-2">
                    Pet Health 🐾 <span className="text-sm font-normal text-gray-500">v1.0</span>
                </h1>

                {/* Formulário de Cadastro */}
                <form onSubmit={handleSubmit} className="mb-10 flex gap-2">
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do Pet..."
                        className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                        Cadastrar
                    </button>
                </form>

                {/* Lista de Pets */}
                <div className="grid gap-4">
                    {pets.map(pet => (
                        <div key={pet.id} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{pet.nome}</h3>
                                <p className="text-gray-500">{pet.especie} • {pet.raca}</p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Ativo</span>
                        </div>
                    ))}
                    {pets.length === 0 && <p className="text-center text-gray-400 italic">Nenhum pet no consultório hoje...</p>}
                </div>
            </div>
        </div>
    )
}

export default App