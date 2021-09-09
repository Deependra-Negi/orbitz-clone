import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'


export default function MapStaticHotel2() {

    const history = useHistory()
    const handleMap = () => {
        alert("map")
        history.push("/map")
    }
    return (
        <Cont>
            <Img>
                <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2018/12/17/w900X450/Delhi_Google_Maps.JPG" alt="" />
            </Img>
            <View onClick={handleMap}>
                <h4>View in map</h4>
            </View>
            {/* <Hr></Hr> */}
        </Cont>
    )
}

const Cont = styled.div`
    width: 52.5vw;
    margin-top: 25px;
    margin-right: 20px;
`
const Img = styled.div`
    img{
        width: 100%;
    }
`
const View = styled.div`
background-color: #fff;
text-align: center;
height: 40px;
line-height: 40px;
border: 1px solid gray;
cursor: pointer;
    h4{
        color: #007E8F;
        margin:0;
    }
`