import { result } from './db';
import './App.css';

const formatDate = date => new Intl.DateTimeFormat('pt-BR').format(date);

function App() {
  return result.map((x, index) => (
    <div key={index}>
      <div style={{ background: 'red' }}>
        <p>
          <strong>Pedido cru:</strong> {x?.itemDescription}
        </p>
        <p>
          <strong>Data de criação:</strong> {formatDate(x?.createDate)}
        </p>
        <p>
          <strong>Id consumer:</strong> {x?.idConsumer}
        </p>
      </div>
      <div>
        <strong>Pedido normalizado</strong>
        {x.NormalizedItens.map((y, index) => (
          <div key={index} style={{ background: 'yellow' }}>
            <p>
              <strong>Sugestoes para: </strong> {y.descrition}
            </p>
            {y.Suggestions.map((x, index) => (
              <div key={index}>
                <p>Produto: {x.excerpt}</p>
                <p>R$: {x.prices[0].price} </p>
                <p>Relevancia: {x.relevance}</p>
                -----------------------------
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ));
}

export default App;
