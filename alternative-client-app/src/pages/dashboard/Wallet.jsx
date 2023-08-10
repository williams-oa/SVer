import React from 'react'
import styled from 'styled-components'
import { FcSimCardChip } from "react-icons/fc";
import bsvlogo from "../../images/bitcoin-sv-bsv-logo.png"

function Wallet() {
    return (
       <Section>
            <div className="shopping">
                <div className="design">
                    <FcSimCardChip />
                </div>
                <div className="number">
                    <h8>165i51CNerwipHg6Xk4N8vmcZKa3hs4Bmw</h8>
                </div>
                <div className="image">
                    <img src={bsvlogo} alt='bsvlogo' className="pic" />
                </div>
                <div className="name">
                    <h6>WALLET ADDRESS HOLDER</h6>
                </div>
                <div className="profile">
                    <h6>AAE IdeaPro</h6>
                    <span className="t1">User Address</span>
                </div>
            </div>
       </Section>
    )
}

export default Wallet
const Section = styled.section`
margin-top: -0.5rem;
.shopping {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: black;
    background-color: #22202B;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: blue;
        color: black;
        svg {
            color: black;
        }
    }
    .design{
        display: flex;
        svg{
            font-size: 2rem;
            color: white;
        }
    }
    .number {
        display: flex;
        gap: 0.5rem;
        margin-top: 10px;
        h7{
            color: white;
            font-size: 1rem;
        }
    }
    .image{
        display: flex;
        height: 2.5rem;
        width: 2.5rem;
        margin-left: 12rem;
    }
    .name {
        display: flex;
        gap: 0.5rem;
    }
    h6{
        color: grey;
        font-size: 0.6rem;
    }
    h8{
        color: grey;
        font-size: 0.6rem;
    }
}
.profile{
    display: flex;
    align-items: left;
    gap: 5rem;
    justify-content: space-evenly;
    margin-top: 10px;
    align-items: center;
    span, h6{
        color: white;
    }
}
`;