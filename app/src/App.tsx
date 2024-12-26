
function App() {

  return (
    
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md">
        <div className="flex flex-row items-center">
        <img className="w-24 rounded-full " src="https://github.com/matteussaraujo.png" alt="User Avatar" />
        <div className="ml-4"> 
        <h3 className="font-semibold text-xl">João Mateus</h3>
        <h4 className="text-indigo-300 pt-1 ">Desenvolvedor Full Stack</h4>
        </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">Bio</h2>
          <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">Trabalho com tecnologias voltada para aplicações web, sendo a principal tecnologia o React para o desenvolvimento de interfaces juntamente com TypeScript para melhorar a produtividade com a inteligência do editor de código e conseguir anteceder soluções de possíveis bugs, incluindo responsividade para ser acessível de dispositivos de telas menores e ter melhor experiência possível.</p>
        </div>
        <div className="mt-6">
    <h2 className="font-semibold text-2xl mb-2">Stacks</h2>
    <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">JavaScript | Nodejs | Reactjs | TypeScript | Php</p>
        </div>
        </div>
        </div>
        
    
  )
}

export default App
