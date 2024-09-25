export const userSignupHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/user/signup`, {
      name: fullname,
      email: email,
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
    const response = await axios.post(`${BASE_URL}/user/signin`, {
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

export const joinOfficeHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/user/joinOffice`, {
      empId: empId /* employee ID from local storage */,
      officeId: officeId /* office ID from local storage */
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': //token from local storage
      }
    })
  } catch(e){
    console.log("Error while joining office location")
  } 
}


export const markAttendanceHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/user/markAttendance`, {
      empId: empId /* employee ID from local storage */,
      checkin_time: checkin_time,
      checkout_time: checkout_time,
      latitude: latitude,
      longitude: longitude,
      total_hours: total_hours,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token //token from local storage
      }
    })
  } catch(e){
    console.log("Error while marking attendance")
  } 
}


export const markManualAttendanceHandler = async () => {
  try{
    const response = await axios.post(`${BASE_URL}/user/markAttendance`, {
      empId: empId /* employee ID from local storage */,
      checkin_time: checkin_time,
      checkout_time: checkout_time,
      latitude: latitude,
      longitude: longitude,
      total_hours: total_hours,
      isManual: true,
      suggested_location: suggested_location
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token //token from local storage
      }
    })
  } catch(e){
    console.log("Error while marking attendance")
  } 
}