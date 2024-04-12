export default function Contacts() {
  const data = {
    email: 'ikramsyawalalitu@gmail.com',
    phone: '+62 81242629759',
    address: 'Jl.Rambutan No. 399',
  };

  return (
    <>
      <div>Contacs</div>
      <div>{data.email}</div>
      <div>{data.phone}</div>
      <div>{data.address}</div>
    </>
  );
}
