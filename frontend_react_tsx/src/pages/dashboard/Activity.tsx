import React from "react";
import "./activity.css";
import { GiPayMoney } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

function Activity() {
  return (
    <article className="secolu">
      <div className="title">
        <p>Recent Activities</p>
        <h6>10 Jan 2022</h6>
      </div>

      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <GiPayMoney />
          </div>
          <div className="contextt">
            <h5>Rent payment:</h5>
            <h6>120BSV</h6>
          </div>
        </div>
      </div>

      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <MdFastfood />
          </div>
          <div className="contextt">
            <h5>Food payment:</h5>
            <h6>150BSV</h6>
          </div>
        </div>
      </div>

    </article>
  );
}

export default Activity;

// import styled from "styled-components";
// import { MdOutlineWaterDrop } from "react-icons/md";
// import { GiPayMoney } from "react-icons/gi";
// import { AiOutlineThunderbolt } from "react-icons/ai";
// import { AiOutlineWifi } from "react-icons/ai";

// function Activity() {
//   return (
//     <Section>
//       <div className="title">
//         <h4>Recent Activities</h4>
//         <h6>10 Jan 2022</h6>
//       </div>
//       <div className="analytic ">
//         <div className="design">
//           <div className="logo">
//             <MdOutlineWaterDrop />
//           </div>
//           <div className="content">
//             <h7>Water Bill</h7>
//             <h7 className="color">Successfully</h7>
//           </div>
//         </div>
//         <div className="money">
//           <h7>$120</h7>
//         </div>
//       </div>
//       <div className="analytic ">
//         <div className="design">
//           <div className="logo">
//             <GiPayMoney />
//           </div>
//           <div className="content">
//             <h7>Income Salary</h7>
//             <h7 className="color">Received</h7>
//           </div>
//         </div>
//         <div className="money">
//           <h7>$4500</h7>
//         </div>
//       </div>
//       <div className="analytic ">
//         <div className="design">
//           <div className="logo">
//             <AiOutlineThunderbolt />
//           </div>
//           <div className="content">
//             <h7>Electric Bill</h7>
//             <h7 className="color">Successfully</h7>
//           </div>
//         </div>
//         <div className="money">
//           <h7>$150</h7>
//         </div>
//       </div>
//       <div className="analytic ">
//         <div className="design">
//           <div className="logo">
//             <AiOutlineWifi />
//           </div>
//           <div className="content">
//             <h7>Internet Bill</h7>
//             <h7 className="color">Successfully</h7>
//           </div>
//         </div>
//         <div className="money">
//           <h7>$60</h7>
//         </div>
//       </div>
//     </Section>
//   );
// }

// export default Activity;
// const Section = styled.section`
//   display: flex;
//   gap: 0.2rem;
//   height: 40px
//   .title {
//     background-color: red
//     margin-left: 15px;
//     h4 {
//       font-weight: bold;
//     }
//     h6 {
//       color: red;
//     }
//   }
//   .analytic {
//     padding: 0.3rem 0.8rem 0.3rem 1.2rem;
//     height: 10px
//     color: black;
//     //justify-content: space-evenly;
//     align-items: center;
//     gap: 1rem;
//     transition: 0.5s ease-in-out;
//     &:hover {
//       background-color: #f5f5fd;
//       color: black;
//       svg {
//         color: black;
//       }
//     }
//     float: both;
//     .design {
//       display: flex;
//       align-items: center;
//       gap: 1rem;
//       .logo {
//         background-color: white;
//         border-radius: 1rem;
//         border: 1px solid white;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         padding: 0.5rem;
//         svg {
//           font-size: 1.5rem;
//         }
//       }
//       .color {
//         color: grey;
//       }
//     }
//     .money {
//       h7 {
//         float: right;
//         margin-top: -30px;
//       }
//     }
//   }
// `;
