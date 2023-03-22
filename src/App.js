import { result } from './db';
import './App.css';

function findItemsByIdPurchase(result) {
  const itemsByIdPurchase = [];

  result.forEach(item => {
    itemsByIdPurchase.push({
      idPurchase: item?.IdPurchase,
      normalizeItem: item?.Item,
      suggestionItem: item?.ProductDescription,
      unity: item?.Unity,
      quantity: item?.Quantity,
      CodeOrderB2c: item?.CodeOrderB2c,
    });
  });

  return itemsByIdPurchase;
}

console.log(findItemsByIdPurchase(result));

const compras = findItemsByIdPurchase(result);
console.log(compras, 'comrpas');
function App() {
  return findItemsByIdPurchase(result).map((x, index) => (
    <div key={index}>
      <div style={{}}>
        <p>-------------------------------------------</p>
        <p>Id: {x.idPurchase}</p>
        <p>normalizeItem: {x.normalizeItem}</p>
        <p>suggestionItem: {x.suggestionItem}</p>
        <p>unity: {x.unity}</p>
        <p>quantity: {x.quantity}</p>
        <p>CodeOrderB2c: {x.CodeOrderB2c}</p>
      </div>
    </div>
  ));
}

export default App;
