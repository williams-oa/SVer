import React from 'react'
import styled from 'styled-components'
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiFillProfile } from 'react-icons/ai';

function Notification() {
  return (
    <Nav>
      <div className='notification'>
        <AiOutlineCalendar className='font_icon'/>
        <AiOutlineBell className='font_icon'/>
        <div className='image'>
          <img src = {AiFillProfile} alt="Avatar"/>
        </div>
        <AiOutlineCaretDown />
      </div>
    </Nav>
  )
}

export default Notification
const Nav = styled.nav`
  display: flex;
  color: red


  justify-content: space-between;
  justify-content: right;
  .notification{
    
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    .font-icon{
      font-size: 1.5rem;
    }
    svg{
      color: white;
    }
    .image{
      display: flex;
      gap: 1rem;
      img{
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 3rem;
      }

    }
  }
`;