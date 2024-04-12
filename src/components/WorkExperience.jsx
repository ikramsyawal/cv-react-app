export default function WorkExperience() {
  const data = [
    {
      posisi: 'Pekerja Lepas',
      time: '2018-Sekarang',
      description:
        'Mengembangkan situs web untuk PT Fiesta, mendesain ulang dan membuat situs web untuk berbagai perusahaan lokal',
    },
  ];
  return (
    <>
      <div>Work Experience</div>
      <div>{data[0].posisi}</div>
      <div>{data[0].time}</div>
      <div>{data[0].description}</div>
    </>
  );
}
