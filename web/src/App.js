import React from 'react';
import './global.css'
import './App.css'
import './sideBar.css'

//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação.
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo compoente Verificar Imutabilidade

function App() {



  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username"> Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>

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
        </ul>
      </main>
    </div>

  );
}

export default App;
