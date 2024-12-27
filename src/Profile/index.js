import axios from 'axios'
import React, {useState,useEffect} from 'react'

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [dataIsLoading, setDataIsLoading] = useState({});

  useEffect(() => {
    setDataIsLoading(true)
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
    .then(response => {
      console.log(response.data.results[0])
      setProfileData(response.data)
      setDataIsLoading(false)
    }).catch(error => {
      console.log(error)
      setDataIsLoading(false)
    })
  }, [])
  

  return (
    <>
      <div className='font-bold text-2xl mt-5'>Profile</div>
      
      {dataIsLoading && <div>Loading...</div>}
      {!dataIsLoading && <div className="w-2/3 mx-auto mt-5 grid grid-flow-col gap-2 border-2 rounded-lg mx-5">
          <div className='font-bold border-2 my-10 mx-10 col-auto '>
            <div className='flex flex-col'>
              <img src={profileData.results && profileData.results[0].picture.large} alt='user' className='w-100' />
            </div>
          </div>
          <div className='font-bold my-10 mx-10 col-auto'>
            <div className='flex flex-col m-2 mt-0 text-xl gap-2'>
              <div className='flex flex-row'>
                <div>{profileData.results && "Name: "+profileData.results[0].name.first} {profileData.results && " "+profileData.results[0].name.last}</div>
              </div>
              <div className='flex flex-row'>
                <div>{profileData.results && "Gender: "+profileData.results[0].gender}</div>
              </div>
              <div className='flex flex-row'>
                <div>{profileData.results && "Phone: "+profileData.results[0].phone}</div>
              </div>
              <div className='flex flex-row'>
                <div>{profileData.results && "Email: "+profileData.results[0].email}</div>
              </div>
              <div className='flex flex-row'>
                <div>
                  {profileData.results && "Address: "+profileData.results[0].location.street.number} 
                  {profileData.results && " "+profileData.results[0].location.street.name}, 
                  {profileData.results && " "+profileData.results[0].location.city}, 
                  {profileData.results && " "+profileData.results[0].location.state}, 
                  {profileData.results && " "+profileData.results[0].location.country} 
                  {profileData.results && " "+profileData.results[0].location.postcode}
                </div>
              </div>
            </div>
          </div>
      </div>}
      
    </>
  )
}

export default Profile