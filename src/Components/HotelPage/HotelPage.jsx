import { Box, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingComp from "../Search/Loading";
import { HotelPageData } from "./HotelPageData";

export function HotelPage() {
    const isLoading = useSelector(state => state.status.isLoading);
    return (
        <div>
            {isLoading ? <LoadingComp /> : <HotelPageData/>}
        </div>
    )
}