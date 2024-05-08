// import ChannelSelector from "../components/main-components/ChannelSelector"
import { Outlet } from "react-router-dom"

// server component, includes the ChannelSelector and allows for navigation between channels
export default function ServerLayout() {
    return (
        <>
            <h1>Server</h1>
            <Outlet />
        </>
    )
}