import { useState } from 'react';
import { Wrapper, ResultBlock } from './ConvertStyled';

export function Convert({ arrayMoney }) {
  const [firstInput, setFirstInput] = useState(0);
  const [firstSelect, setFirstSelect] = useState('USD');
  const [resultSelect, setResultSelect] = useState('EUR');
  return (
    <Wrapper>
      <div>
        {' '}
        <input
          onChange={e => setFirstInput(e.target.value)}
          type="number"
          id="val"
          placeholder="Введите сумму..."
        />
        <select
          defaultValue={firstSelect}
          onChange={e => setFirstSelect(e.target.value)}
          id="cur1"
        >
          {arrayMoney.map(({ ccy }) => (
            <option key={ccy}> {ccy}</option>
          ))}
        </select>
      </div>
      <ResultBlock>
        <div>
          ={' '}
          {(Number(arrayMoney.find(option => option.ccy === firstSelect).buy) *
            firstInput) /
            Number(arrayMoney.find(option => option.ccy === resultSelect).sale)}
        </div>
        <select
          defaultValue={resultSelect}
          onChange={e => setResultSelect(e.target.value)}
        >
          {arrayMoney.map(({ ccy }) => (
            <option key={ccy}> {ccy}</option>
          ))}
        </select>
      </ResultBlock>
    </Wrapper>
  );
}
