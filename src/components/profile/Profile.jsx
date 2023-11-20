import React from 'react'
import Name from "../name/Name";
import Address from '../address/Address';
import Email from '../email/Email';
import PersonalInfo from '../personalInfo/PersonalInfo';
const Profile = () => {
  return (
    <div>
        <Name/>
        <Email/>
        <PersonalInfo/>
        <Address/>
    </div>
  )
}

export default Profile