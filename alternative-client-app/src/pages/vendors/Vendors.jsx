import Image from "../../images/shopping-cart.jpg";
import SectionHead from "../../components/SectionHead";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { vendors } from "../../data";
import Card from "../../UI/Card";
import "./vendors.css";
import Footer from "../../components/Footer";

const Vendors = () => {
  return (
    <>
      <section className="vendors">
        <div className="container vendors__container">
          <div className="vendors__left">
            <img src={Image} alt="vendors__image" />
          </div>
          <div className="vendors__right">
            <SectionHead icon={<AiOutlineShoppingCart />} title="vendors" />
            <p>
              We have partnered with the following vendors to meet users' needs:
            </p>
            <div className="vendors__wrapper">
              {vendors.map(({ id, icon, title, desc }) => {
                return (
                  <Card className="vendors__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vendors;

//around 2:38:00
// const Testimonials = () => {
//   const [index, setIndex] = useState(0); //we will later use this to change the ID of what we want to call
//   const { name, quote, job, avatar } = testimonials[index]; //the testimonials var will have to be imported from the json folder where it is. That's where our API will come in. The json will already be arranged to have the name, quote, etc

//   return (
//     <section className="testimonials">
//       <div className="container testimonials__container">
//         <SectionHead icon={<ImQuotesLeft />} title="Testimonials" />
//         <Card className="testimonial">
//           <div className="testimonial__avatar">
//             <img src={avatar} alt={name} />
//           </div>
//           <p className="test__quote">{`"${quote}"`}</p>
//           <h5>{name}</h5>
//           <small className="test__title">{job}</small>
//         </Card>
//       </div>
//     </section>
//   );
// };
