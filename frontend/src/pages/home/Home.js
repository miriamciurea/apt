import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Hero from "../../components/navbar/Hero";
import HomeProjects from "../../components/home-projects/HomeProjects";
import Slider from "../../components/slider-image/Slider";
import Loop from "../../components/loop/Loop";
import Domain from "../../components/domains/Domain";
import CompanyValues from "../../components/company-values/CompanyValues";
import Cta from "../../components/cta/Cta";
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsxs("div", { className: "container", children: [_jsx(Domain, {}), _jsx(HomeProjects, {}), _jsx(Loop, {}), _jsx(Slider, {}), _jsx(CompanyValues, {}), _jsx(Cta, {})] })] }));
};
export default Home;
