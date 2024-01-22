import { NavLink } from "react-router-dom";

export const navLink = <>
    <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-[#F7A582] underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Home
    </NavLink>
    <NavLink
        to="/About"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-[#F7A582] underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        About
    </NavLink>
    <NavLink
        to="/Appointment"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-[#F7A582] underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Appointment
    </NavLink>
    <NavLink
        to="/Login"
        className={({ isActive, isPending, isTransitioning }) =>
            [
                isPending ? "pending" : "",
                isActive ? "text-[#F7A582] underline" : "",
                isTransitioning ? "transitioning" : "",
            ].join(" ")
        }
    >
        Login
    </NavLink>
</>