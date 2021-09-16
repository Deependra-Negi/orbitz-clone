import { useSelector } from "react-redux";
import LoadingComp from "../Search/Loading";
import { HotelPageData } from "./HotelPageData";
import styled from "styled-components";

export function HotelPage() {
    const isLoading = useSelector(state => state.Query.status.isLoading);
    return (
        <Cont>
            {isLoading ? <LoadingComp /> : <HotelPageData/>}
        </Cont>
    )
}

const Cont = styled.div`
    margin: auto;
    background-color: #f5f5f5;
    border:1px solid white;
`