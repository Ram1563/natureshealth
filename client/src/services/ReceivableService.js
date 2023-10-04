import axios from 'axios';

class ReceivableService {
  getAll() {
    return axios.get('http://localhost:3000/api/receivables/get'); // Corrected URL
  }

  create(newReceivable) {
    return axios.post('http://localhost:3000/api/receivables/create', newReceivable); // Corrected URL
  }

  // Add other service methods as needed
}

const receivableServiceInstance = new ReceivableService();
export default receivableServiceInstance;