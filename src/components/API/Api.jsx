import axios from 'axios';

export async function Api() {
  const fetch = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
  );
  const data = fetch.data;
  return data;
}
