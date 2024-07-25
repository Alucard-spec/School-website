import React, { useState } from 'react';

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    aadhaarNumber: '',
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    fatherContact: '',
    motherContact: '',
    email: '',
    address: {
      houseNumber: '',
      street: '',
      city: '',
      state: '',
      pinCode: ''
    },
    previousSchool: '',
    previousSchoolAddress: '',
    lastGrade: '',
    academicPerformance: '',
    gradeSought: '',
    secondLanguage: '',
    bloodGroup: '',
    medicalConditions: '',
    emergencyContactPerson: '',
    emergencyContactNumber: '',
    documents: {
      birthCertificate: false,
      transferCertificate: false,
      reportCard: false,
      aadhaarCopy: false,
      passportPhotos: false,
      addressProof: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      }
    }));
  };

  const handleDocumentChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      documents: {
        ...prevData.documents,
        [name]: checked,
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    
  };

  return (
    <div className='mx-5 mb-5'>
      <h1 className='md:text-2xl font-bold text-xl w-fit border-b-4 border-yellow-400'>Sunrise Academy Admission Form</h1><br />
      <form onSubmit={handleSubmit} className='flex flex-col md:gap-10 gap-5'><div>
        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Personal Information</h2>
        <div className='flex-wrap flex gap-10'>
        <div >
          <span className='font-bold'>Full Name of the Student:</span>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className='border-2 border-black'
          /> 
        </div>
        
        <div >
          <span className='font-bold'> Date of Birth:</span>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        
        <div >
          <span className='font-bold'>Gender:</span>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div >
         <span className='font-bold'> Nationality:</span>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className='border-2 border-black'
          />
        </div>
        
        <div >
        <span className='font-bold'>  Aadhaar Number:</span> 
          <input
            type="text"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleInputChange}
            className='border-2 border-black'
          />
        </div>
        </div>
        </div>
        <hr />
        <div>
        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Parent/Guardian Information</h2>
        <div className='flex flex-wrap gap-10'>
        <div>
          <span  className='font-bold'>Father’s/Guardian’s Name:</span>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            className='border-2 border-black'
          />
        </div>
        <div >
         <span className='font-bold'> Mother’s/Guardian’s Name:</span> 
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>Occupation of Father/Guardian:</span>
          
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
         <span className='font-bold'> Occupation of Mother/Guardian:</span>
          <input
            type="text"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'> Contact Number (Father/Guardian):
            </span>
                   <input
            type="text"
            name="fatherContact"
            value={formData.fatherContact}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Contact Number (Mother/Guardian): </span>
          <input
            type="text"
            name="motherContact"
            value={formData.motherContact}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Email Address: </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div className='flex flex-wrap gap-2'> 
          <span className='font-bold'>Residential Address: </span>
          <input
            type="text"
            name="houseNumber"
            placeholder="House Number"
            value={formData.address.houseNumber}
            onChange={handleAddressChange}
            className='border-black border-2'
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleAddressChange}
            className='border-black border-2'
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleAddressChange}
            className='border-black border-2'
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.address.state}
            onChange={handleAddressChange}
            className='border-black border-2'
          />
          <input
            type="text"
            name="pinCode"
            placeholder="PIN Code"
            value={formData.address.pinCode}
            onChange={handleAddressChange}
            className='border-black border-2'
          />
        </div>
        </div>
        </div>
        <hr />
        <div>

        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Previous Academic Details</h2>
        <div className='flex flex-wrap gap-10'>
        <div>
            <span className='font-bold'>
          Name of the Previous School: </span>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
        <span className='font-bold'>
          Address of the Previous School: </span>
          <input
            type="text"
            name="previousSchoolAddress"
            value={formData.previousSchoolAddress}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Last Grade/Standard Completed: </span>
          <input
            type="text"
            name="lastGrade"
            value={formData.lastGrade}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Academic Performance (Grades/Percentage): </span>
          <input
            type="text"
            name="academicPerformance"
            value={formData.academicPerformance}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        </div>
        </div>
        <hr />

        <div>
        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Admission Details</h2>
        <div className='flex flex-wrap gap-10'>
        <div>
          <span className='font-bold'>Grade/Standard for which Admission is Sought: </span>
          <input
            type="text"
            name="gradeSought"
            value={formData.gradeSought}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Second Language Preference (Hindi/French/Spanish): </span>
          <input
            type="text"
            name="secondLanguage"
            value={formData.secondLanguage}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        </div>
        </div>
        <hr />

        <div>

        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Medical Information</h2>
        <div className='flex flex-wrap gap-10'>
        <div>
            <span className='font-bold'>Blood Group: </span>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Any Medical Conditions/Allergies: </span>
          <input
            type="text"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Emergency Contact Person: </span>
          <input
            type="text"
            name="emergencyContactPerson"
            value={formData.emergencyContactPerson}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        <div>
            <span className='font-bold'>
          Emergency Contact Number: </span>
          <input
            type="text"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleInputChange}
            className='border-black border-2'
          />
        </div>
        </div>
        </div>
<hr />

        <div>

        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Documents to be Attached</h2>
        <div className='flex flex-wrap gap-10'>
        <div>
          
         <span className='font-bold'> Birth Certificate </span>
          <input
            type="file"
            name="birthCertificate"
            checked={formData.documents.birthCertificate}
            onChange={handleDocumentChange}
          />
        </div>
        <div>
            <span className='font-bold'> Previous School’s Transfer Certificate </span>
          <input
            type="file"
            name="transferCertificate"
            checked={formData.documents.transferCertificate}
            onChange={handleDocumentChange}
          />
          
        </div>
        <div>
            <span className='font-bold'>Report Card/Mark Sheet of Last Grade </span>
          <input
            type="file"
            name="reportCard"
            checked={formData.documents.reportCard}
            onChange={handleDocumentChange}
          />
          
        </div>
        <div >
            <span className='font-bold'>Aadhaar Card Copy (if applicable) </span>
          <input
            type="file"
            name="aadhaarCopy"
            checked={formData.documents.aadhaarCopy}
            onChange={handleDocumentChange}
          />
          
        </div>
        <div>
            <span className='font-bold'>Passport Size Photograph </span>
          <input
            type="file"
            name="passportPhotos"
            checked={formData.documents.passportPhotos}
            onChange={handleDocumentChange}
          />
          
        </div>
        <div>
        <span className='font-bold'>Proof of Address (e.g., Utility Bill, Rent Agreement) </span>
          <input
            type="file"
            name="addressProof"
            checked={formData.documents.addressProof}
            onChange={handleDocumentChange}
          />
          
        </div>
        </div>
        </div>

        <hr />
        
        <div>

        <h2 className='mb-2 font-semibold text-lg md:text-xl '>Declaration</h2>
        <div className='flex flex-wrap gap-10'>
        <div className='font-bold'>
          I declare that the information provided is true and correct to the best of my knowledge. I understand that any false information may result in the cancellation of the admission. 
          <input type="checkbox" />
        </div>
        <div>
         <span className='font-bold'> Signature of Father/Guardian: </span>
          <input type="text" name="fatherSignature" className='border-black border-2' />
        </div>
        <div>
          <span className='font-bold'>Signature of Mother/Guardian: </span>
          <input type="text" name="motherSignature" className='border-black border-2' />
        </div>
        <div>
         <span className='font-bold'>Date: </span> 
          <input type="date" name="declarationDate" />
        </div>
        </div>
        </div>

        <button type="submit" className='bg-black text-yellow-200 p-2 rounded-lg w-fit mx-auto block hover:scale-110 transition-all'>Submit</button>
      </form>
    </div>
  );
};

export default Admission;
