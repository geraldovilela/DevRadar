import React, {useState,useEffect} from 'react';
import './global.css'
import './App.css'
import './sideBar.css'
import './main.css'

//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação.
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo compoente Verificar Imutabilidade

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [techs, setTechs] = useState('')
  const [github_username, setgithub_username] = useState('')
  

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords

        setLatitude(latitude);
        setLongitude(longitude);

    },(err)=>{
      console.log(err);
    },
    {timeout: 30000}
    
    )
  },[])

  async function handleAddDev (e){
    e.preventDefault();
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do GitHub</label>
            <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setgithub_username(e.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required
            value={techs}
            onChange={e=>{setTechs(e.target.value)}}
            ></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>

            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/53988477?s=400&u=9e1140896c202ef0d6c8c97d2affcd05f529fee5&v=4" alt="Geraldo Vilela"></img>
                <div className="user-info">
                  <strong>Geraldo Vilela</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              
            </header>
              <p>atualmente estudante de S.I, focado em aprender a usar JS, Node.JS e React.</p>
              <a href="https://github.com/geraldovilela">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/53988477?s=400&u=9e1140896c202ef0d6c8c97d2affcd05f529fee5&v=4" alt="Geraldo Vilela"></img>
                <div className="user-info">
                  <strong>Geraldo Vilela</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              
            </header>
              <p>atualmente estudante de S.I, focado em aprender a usar JS, Node.JS e React.</p>
              <a href="https://github.com/geraldovilela">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/53988477?s=400&u=9e1140896c202ef0d6c8c97d2affcd05f529fee5&v=4" alt="Geraldo Vilela"></img>
                <div className="user-info">
                  <strong>Geraldo Vilela</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              
            </header>
              <p>atualmente estudante de S.I, focado em aprender a usar JS, Node.JS e React.</p>
              <a href="https://github.com/geraldovilela">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/53988477?s=400&u=9e1140896c202ef0d6c8c97d2affcd05f529fee5&v=4" alt="Geraldo Vilela"></img>
                <div className="user-info">
                  <strong>Geraldo Vilela</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              
            </header>
              <p>atualmente estudante de S.I, focado em aprender a usar JS, Node.JS e React.</p>
              <a href="https://github.com/geraldovilela">Acessar Perfil</a>
          </li>
        </ul>
      </main>
    </div>

  );
}

export default App;
