




import axios from 'axios';

class PayableService {
  getAll() {
    return axios.get('http://localhost:3000/api/payables/get'); // Corrected URL
  }

  create(newPayable) {
    return axios.post('http://localhost:3000/api/payables/create', newPayable); // Corrected URL
  }

  // Add other service methods as needed
}

const payableServiceInstance = new PayableService();
export default payableServiceInstance;