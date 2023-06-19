import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
import Users from "app/pages/Users/Users";
import Customers from "app/pages/Customer/Customers";
import Individual_Dossier from "app/pages/IndividualDossier/Individual_Dossier";
import Organizational_Dossier from "app/pages/OrganizationalDossier/Organizational_Dossier";
import Jail_Proforma from "app/pages/JailProforma/Jail_Proforma";
import Visitor_Details from "app/pages/JailProforma/Visitor_Details";

/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/",
        element: <Page component={Home} />
    },
    {
        path: "/manage_users",
        element: <Page component={Users} />
    },
    {
        path: "/manage_customers",
        element: <Page component={Customers} />
    },
    {
        path: "/individual_unit_dashboard",
        element: <Page component={Individual_Dossier} />
    },
    {
        path: "/organization_unit_dashboard",
        element: <Page component={Organizational_Dossier} />
    },
    {
        path: "/jail_unit_dashboard",
        element: <Page component={Jail_Proforma} />
    },
    {
        path: "/visitor_details",
        element: <Page component={Visitor_Details} />
    },
    
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};