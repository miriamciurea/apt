import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import EarlyDays from "../../components/early-days/EarlyDays";
import AboutUsDescription from "../../components/AboutUsDescription/AboutUsDescription";
import Team from "../../components/Team/Team";
import AboutHeader from "../../components/about-header/aboutHeader";
import LeftHeader from "../../components/left-header/LeftHeader";
import Reviews from "../../components/reviews/Reviews";
import Cta from "../../components/cta/Cta";
const About = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container", children: [_jsx(AboutHeader, {}), _jsx(AboutUsDescription, {}), _jsx(EarlyDays, {}), _jsx(Team, {}), _jsx(LeftHeader, {}), _jsx(Reviews, {}), _jsx(Cta, {})] }) }));
};
export default About;
