import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header id="logo">
      dev.finance
      </header>

     
    <main class="container">
    
      <section id="balance">
       <h2>Balança</h2>

        <div className="card" >
        <h3>Entradas</h3>
        <p>RS 5.000,00</p>
        </div>
        <div  className="card">
        <h3>Saidas</h3>
        <p>RS 2.000,00</p>
        </div>
        <div  className="card total">
        <h3>Total</h3>
        
        <p>R$ 3.000,00</p>
        </div>

      </section>
      <section id="transaction">
        <h2>Transações</h2>
   <table id="data-table">
     <thead><tr><th>Descrição</th>
     <th>Valor</th>
     <th>Data</th>
     </tr></thead>
    <tbody>
    <tr>
<td>RS 10,000</td>
<td>10,00</td>
<td>01/01/2019</td>

    </tr>
    <tr>
<td>RS 10,000</td>
<td>10,00</td>
<td>01/01/2019</td>

    </tr>
    <tr>
<td>RS 10,000</td>
<td>10,00</td>
<td>01/01/2019</td>

    </tr>
     </tbody>
   </table>
      </section>
    </main>
<footer><p>dev.finance$</p></footer>
    </div>
  );
}

export default App;

