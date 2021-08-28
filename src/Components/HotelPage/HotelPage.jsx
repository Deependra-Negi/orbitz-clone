import { Box, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
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
    max-width: 85%;
    margin: auto;
    background-color: #f5f5f5;
`