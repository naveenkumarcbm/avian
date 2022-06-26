import CompanyList from "../pages/List/CompanyList";
import Login from "../pages/Login/Login";
import CompanyRegistration from "../pages/Registration/CompanyRegistration/CompanyRegistration";
import PilotRegistration from "../pages/Registration/PilotRegistration/PilotRegistration";

export const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER_PIOLET: "/register/piolet",
  REGISTER_COMPANY: "/register/company",
  LIST_PIOLET: "/list/piolet",
  LIST_COMPANY: "/list/company",
};

export const LOGIN_ROUTE = {
  path: ROUTE_PATH.LOGIN,
  key: "login",
  label: "Login",
  element: <Login />,
};

export const REGISTER_PIOLET_ROUTE = {
  path: ROUTE_PATH.REGISTER_PIOLET,
  key: "register-piolet",
  label: "Piolet Registration",
  element: <PilotRegistration />,
};

export const REGISTER_COMPANY_ROUTE = {
  path: ROUTE_PATH.REGISTER_COMPANY,
  key: "regitser-company",
  label: "Company Registration",
  element: <CompanyRegistration />,
};

export const COMPANY_LIST_ROUTE = {
  path: ROUTE_PATH.LIST_COMPANY,
  key: "company-list",
  label: "Company List",
  element: <CompanyList />,
};

export const ROUTES = [
    COMPANY_LIST_ROUTE,
    REGISTER_PIOLET_ROUTE,
    REGISTER_COMPANY_ROUTE,
    LOGIN_ROUTE
];
