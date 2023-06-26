import {alpha} from "@mui/material/styles";

export const sidebarTheme = {
    type: "light",
    palette: {
        primary: {
            main: '#eaeaea',
            light: '#eaeaea',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#eaeaea',
            secondary: '#8595A6',
            disabled: '#A2B2C3',
        },
        nav: {
            action: {
                active: '#eaeaea',
                hover: '#eaeaea',
            },
            background: {
                active: alpha('#eaeaea', .15),
                hover: "#00abb3"
            },
            tick: {
                active: '#eaeaea',
                hover: "#eaeaea"
            }
        },
        divider : '#DEE2E6',
        background: {
            paper: '#3c4048',
            default: '#3c4048',
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA',
        },
    }
};