inport 
const getRequest = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
document.querySelector('#get-a-joke').addEventListener('click', () => (getRequest())
  .then((data) => console.warn(data))
  .catch((error) => console.error(error)));
export default getRequest 
