import 'whatwg-fetch';

  function parseJSON(response) {
      return response.json();
    }

  function get(url) {
    const defaultOptions = {
      method: 'GET',
    };  
    return fetch(url, defaultOptions)
      .then(parseJSON)
      .catch(() => {
        throw new Error('嘿嘿');
      });
  }
export default function changeNumber() {
    return get('http://127.0.0.1:800/test')
}