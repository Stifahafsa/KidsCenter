import './SponsorSection.css'
import brand1 from '../../assets/SponsorIMG/brand-02.jpg';
import brand2 from '../../assets/SponsorIMG/brand-03.jpg';
import brand3 from '../../assets/SponsorIMG/brand-04.jpg';
import brand4 from '../../assets/SponsorIMG//brand-05.jpg';
import brand5 from '../../assets/SponsorIMG/brand-06.jpg'
export default function SponsorSection() {
  const sponsors = [
    {
      id: 1,
      name: "Kids First Blair County",
      image: brand1,
      alt: "Kids First Blair County logo"
    },
    {
      id: 2,
      name: "Westbridge Academy",
      image: brand2,
      alt: "Westbridge Academy logo"
    },
    {
      id: 3,
      name: "Lynn Valley Parent Participation Preschool",
      image: brand3,
      alt: "Lynn Valley Parent Participation Preschool logo"
    },
    {
      id: 4,
      name: "Kids First Blair County",
      image: brand4,
      alt: "Kids First Blair County logo"
    },
    {
      id: 5,
      name: "Westbridge Academy",
      image: brand5,
      alt: "Westbridge Academy logo"
    }
  ]

  return (
    <section className="flex items-center justify-center w-full py-10  max-h-screen bg-gray-50">
      <div className="container flex flex-col px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif font-bold tracking-tighter text-gray-800">
            OUR SPONSORS
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 md:text-xl">
            Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean eget nibh etlibura.
          </p>
          <div className="w-24 h-0.5 mx-auto bg-[#90C088]">
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="max-w-full h-auto"
                style={{ maxHeight: "80px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



