import axios from 'axios'

const getAllEmployeeUrl = "http://localhost:8080/api/v1/employees";
const getEmployeeByIdUrl = "http://localhost:8080/api/v1/employeebyid";

class EmployeeServices {

  getAllEmployee() {

    return axios.get(getAllEmployeeUrl);

  }

  saveEmployee(employee)
  {
    return axios.post(getAllEmployeeUrl,employee);
  }

  getEmployeeById(id)
  {
    return axios.get(getEmployeeByIdUrl + '?id=' + id);
  }

}

export default new EmployeeServices()