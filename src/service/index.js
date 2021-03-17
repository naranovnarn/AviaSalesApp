

export default class Api {
  
  _apiBase = 'https://front-test.beta.aviasales.ru';

  getResource = async (url, maxRequestsNumber = 0) => {

    try {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    } catch(error) {



      if (maxRequestsNumber < 3) {
        return this.getResource(url, maxRequestsNumber + 1);
      } else {
        const myMessage = "More three request failed";
        throw new Error(`${myMessage}, ${error.message}`);
      }
    }

  };

  getSearchId = async () => {
    const searchId = await this.getResource(`/search`);
    return searchId;
  }

  getTickets = async (searchId) => {
    const tickets = await this.getResource(`/tickets?searchId=${searchId}`)
    return tickets;
  }

}

