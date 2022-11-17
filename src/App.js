import logo from './logo.svg';
import { result } from './db';
import './App.css';

function App() {
  return result.map(x => (
    <div>
      <div style={{ background: 'red' }}>
        <p>
          <strong>Pedido cru:</strong> {x.itemDescription}
        </p>
      </div>
      <div>
        <strong>Pedido normalizado</strong>
        {x.NormalizedItens.map((y, index) => (
          <>
            {' '}
            <div style={{ background: 'yellow' }}>
              <p>
                <strong>Sugestoes para: </strong> {y.descrition}
              </p>
              {y.Suggestions.map(x => (
                <>
                  <p>{x.excerpt}</p>
                  <p>R$: {x.prices[0].price} </p>
                </>
              ))}
            </div>
            -----------------------------
          </>
        ))}
      </div>
    </div>
  ));
}

export default App;
