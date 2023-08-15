import { SiBitcoinsv } from "react-icons/si";
import SectionHead from "./SectionHead";
import { offers } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

function Offers() {
  return (
    <section className="offers">
      <div className="container offers__container">
        <SectionHead icon={<SiBitcoinsv />} title="Our unique offers" className={undefined} />

        <div className="offers__wrapper">
          {offers.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="offers__offer" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Offers;
