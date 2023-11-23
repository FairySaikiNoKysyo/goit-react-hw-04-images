import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params =  {
    key: '39138145-0133bb68dd7b803a442388e53',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };
  export const fetchImages = async (query,page=1)=>{
    const queryParams = {
        q: query,
        page:page,
    }
    const resp = await axios.get("",{params : queryParams});
    console.log("data",resp.data)
    return resp.data
  }