import home from "../../icons/home.svg"
import stat from "../../icons/stat.png"
import styled from '@emotion/styled'

const Icons = styled.img`
    display: inline-block;
    width: 18px;
    margin-right: 23px;
    margin-left: 3px;
`
const Link = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
    text-decoration: none;
    color: #000000;
`


const NavigationsHome = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                    <Icons src={home} alt=""/>   
                        Home</Link>
                </li>
                <li>
                    
                    <Link href="/">
                    <Icons src={stat} alt=""/> 
                        Statictics</Link></li>
            </ul>
        </div>
    )

}

export default NavigationsHome;