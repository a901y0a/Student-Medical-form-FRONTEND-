import axios from "axios"

const service = "http://localhost:8080/medical"

class Service{
    getAllService(){
    return axios.get(service)
}
}
export default new Service();