import axios from "axios"

export const adminSignupHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/admin/signup`, {
      name: fullname,
      email: email,
      company: company,
      phone: phone,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(e){
    console.log("Error while signing up")
  } 
}


export const adminSigninHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/admin/signin`, {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(e){
    console.log("Error while signing in")
  } 
}


export const addOfficeHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/admin/addOffice`, {
      name: officeName,
      latitude: latitude,
      longitude: longitude
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token //token
      }
    })
  } catch(e){
    console.log("Error while adding office")
  } 
}

