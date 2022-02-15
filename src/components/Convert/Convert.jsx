import { useEffect, useState } from 'react';
import {
  Wrapper,
  ResultBlock,
  Input,
  Select,
  Container,
} from './ConvertStyled';
import { FaEquals } from 'react-icons/fa';

export function Convert({ arrayMoney }) {
  const [firstInput, setFirstInput] = useState(0);
  const [firstSelect, setFirstSelect] = useState('USD');
  const [resultInput, setResultInput] = useState(0);
  const [resultSelect, setResultSelect] = useState('EUR');
  useEffect(() => {
    console.log(arrayMoney);
    setResultInput(
      (Number(arrayMoney.find(option => option.ccy === firstSelect).buy) *
        firstInput) /
        Number(arrayMoney.find(option => option.ccy === resultSelect).buy)
    );
  }, [firstInput, resultSelect]);
  useEffect(() => {
    setFirstInput(
      (Number(arrayMoney.find(option => option.ccy === resultSelect).buy) *
        resultInput) /
        Number(arrayMoney.find(option => option.ccy === firstSelect).buy)
    );
  }, [resultInput, firstSelect]);
  return (
    <Container>
      <Wrapper>
        {' '}
        <Input
          onChange={e => setFirstInput(e.target.value)}
          type="number"
          placeholder="Введите сумму..."
          value={firstInput}
        />
        <Select
          defaultValue={firstSelect}
          onChange={e => setFirstSelect(e.target.value)}
        >
          {arrayMoney.map(({ ccy }) => (
            <option key={ccy}> {ccy}</option>
          ))}
        </Select>
      </Wrapper>
      <FaEquals></FaEquals>
      <Wrapper>
        {' '}
        <Input
          type="number"
          id="val"
          placeholder="Введите сумму..."
          onChange={e => setResultInput(e.target.value)}
          value={resultInput}
        ></Input>
        <Select
          defaultValue={resultSelect}
          onChange={e => setResultSelect(e.target.value)}
        >
          {arrayMoney.map(({ ccy }) => (
            <option key={ccy}> {ccy}</option>
          ))}
        </Select>
      </Wrapper>
    </Container>
  );
}
