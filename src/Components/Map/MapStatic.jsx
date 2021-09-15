import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'


export default function MapStatic() {
    const history = useHistory()
    const handleMap = () => {
      
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
            <Hr></Hr>
        </Cont>
    )
}

const Cont = styled.div`
    width: 20vw;
    margin-top: 10px;
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
cursor: pointer;
    h4{
        color: #007E8F;
        margin:0;
    }
`
const Hr = styled.div`
margin-top: 30px;
border-bottom: 1px solid gray;
`