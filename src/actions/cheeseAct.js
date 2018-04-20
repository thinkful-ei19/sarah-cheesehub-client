import { API_BASE_URL } from '../config';

export const fetchCheeses = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/api/cheeses`)
      .then(res => {
        console.log(res.json)
        res.json()
      })
      .then(cheeses => console.log(cheeses))
      .catch(err => console.log(err))
  }
}