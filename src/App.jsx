import './App.css'
import { FaCat } from "react-icons/fa6";



function App() {
   return <div className="bg-pink-300 min-h-screen flex flex-col">
  
  <header className="bg-white py-4 px-6 flex items-center justify-center"> 
  <h1 className='text-2xl font-bold text-purple-800 flex items-center'><FaCat />DudaSys<FaCat /> </h1> 
  </header>

      
  <div className="flex flex-1 items-center justify-center">
        <form
          action="https://getform.io/f/azynewlb"
          method="POST"
          className="bg-white p-8 rounded-lg shadow-lg w-80"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Entrar na sua conta
          </h2>
          <input
            type="email"
            name="email"
            placeholder="Digite o email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
          />
          <input
            type="password"
            name="senha"
            placeholder="Digite a senha"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded w-full"
          >
            Entrar
          </button>
        </form>
      </div>
      
    </div>
}



  



  




   
  
export default App