import { Header, HeaderList, HeaderItem } from './NavigateStyled';
export function Navigate({ arrayMoney }) {
  return (
    <>
      <Header>
        <HeaderList>
          {arrayMoney.map(({ ccy, buy, sale }) => (
            <HeaderItem key={ccy}>
              {' '}
              {ccy}: {buy}/{sale}
            </HeaderItem>
          ))}
        </HeaderList>
      </Header>
    </>
  );
}
// api.map(item => {
//   return <HeaderItem> {item.ccy} </HeaderItem>;
// });
