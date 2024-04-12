import { useState } from 'react';

export default function PersonalDetails() {
  const data = {
    name: 'Ikram Syawal Alitu',
    profession: 'Fullstack Developer',
  };

  const [personalDetails, setPersonalDetails] = useState(data);

  return (
    <>
      <div>{personalDetails.name}</div>
      <div>{personalDetails.profession}</div>
    </>
  );
}
