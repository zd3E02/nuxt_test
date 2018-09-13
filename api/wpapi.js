import axios from 'axios'

class WpApi {
  constructor() {
    this.apiBase = "http://zd3e02.sim.zdrv.com/wp02/wp-json/wp/v2";
  }
  get_posts() {
      return axios
      .get(`${this.apiBase}/posts/5`)
      .then(response => (this.data = response.data))
        .catch(e => ({ error: e }));
    }
  }
const wpApi = new WpApi();
export default wpApi;