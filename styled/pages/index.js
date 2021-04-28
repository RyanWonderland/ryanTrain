import styled from 'styled-components'
import {Button} from 'antd'

const Title = styled.h1`
font-size:50px;
color:${({ theme }) => theme.colors.primary}

`
const Buttonx = styled.button`
display:inline-block;
border-radius:3px;
padding:0.5rem 0;
magrin: 0.5rem 1rem;
width:11rem;
background:${({ theme }) => theme.backgroundColors.primary};
color:white;
border:2px solid black;
color:${({ theme }) => theme.colors.dengerous}
`
const Buttonxx = styled(Buttonx)`
color:${({ theme }) => theme.colors.primary}
`

const ButtonAntd = styled(Button)`
width:11rem;
margin-top:20px;
color:${({ theme }) => theme.colors.dengerous}
`
export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <Buttonxx>button</Buttonxx>
      <br />
       <ButtonAntd>9865</ButtonAntd>
    </div>
  )
}
