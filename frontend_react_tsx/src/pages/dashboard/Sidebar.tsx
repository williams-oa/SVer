import React,{useState} from 'react'
import styled from 'styled-components'
import {BiHomeAlt, BiStopCircle} from 'react-icons/bi';
import {TiChartBarOutline} from "react-icons/ti";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';



function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);


  return (
    <Section>
        <div className='top'>
        
            <div className='brand'>
                <BiStopCircle className='color1'/>
                <BiStopCircle className='color2'/>
                <BiStopCircle className='color3'/>
            </div>
            <div className='links'>
                <ul>
                    <li className={currentLink ===1 ? "active" : "none"}
                    onClick = {() => setCurrentLink(1) }
                    >   
                        <a href= '/dashboard'>
                            <BiHomeAlt />
                        </a>
                    </li>
                    <li className={currentLink ===2 ? "active" : "none"}
                    onClick = {() => setCurrentLink(2) }
                    >
                        <a href= 'analytics'>
                            <AiOutlineFundProjectionScreen />
                        </a>
                    </li>
                    <li className={currentLink ===3 ? "active" : "none"}
                    onClick = {() => setCurrentLink(3) }
                    >
                        <a href= 'prices'>
                            <TiChartBarOutline />
                        </a>
                    </li>
                    <li className={currentLink ===4 ? "active" : "none"}
                    onClick = {() => setCurrentLink(4) }
                    >
                        <a href= 'settings'>
                            <AiTwotoneSetting />
                        </a>
                    </li>
                    <li className={currentLink ===5 ? "active" : "none"}
                    onClick = {() => setCurrentLink(5) }
                    >
                        <a href= 'topstocks'>
                            <AiOutlineRise />
                        </a>
                    </li>
                    <li className={currentLink ===6 ? "active" : "none"}
                    onClick = {() => setCurrentLink(6) }
                    >
                        <a href= 'badstocks'>
                            <AiOutlineFall />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>

    </Section>
  )
}

export default Sidebar
const Section = styled.article`
    float: left;
    background-color: #ECECF6;
    min-height: 242vh;
    width: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    .top{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        width: 100%;
        .brand{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.3rem 0;
            .color1{
                color: blue;
            }
            .color2{
                color: blue;
            }
            .color3{
                color: blue;
            }
            svg{
                margin: 0 2px;
                font-size:0.8rem;
            }
        }
        .links {
            ul{
                margin-bottom: 3rem;
                .active {
                    border-right: 0.2rem solid black
                    a {
                        color: black;
                    }
                }
                li {
                    display: flex;
                    justify-content: center;
                    border-right: 0.2rem solid transparent;
                    margin: 1rem 0;
                    list-style-type: none;
                    a{
                        text-decoration: none;
                        color: grey;
                        font-size: 1.6rem;
                        gap: 0 0.4rem;
                    }
                    .noti{
                        display: flex;
                        margin-left: 21px;
                        span{
                            background-color: red;
                            font-size: 0.5rem;
                            border-radius: 50%;
                            padding: 2px 5px 2px 5px;
                            color: white;
                            margin-bottom:19px;
                            margin-top: -10px;
                        }
                    }
                    transition: 0.3s ease-in-out;
                    &:hover{
                        a{
                            color: blue;
                        }
                    }
                }
            }
        }
    }
`;