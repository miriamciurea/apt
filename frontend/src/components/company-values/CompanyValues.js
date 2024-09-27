import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './CompanyValues.module.css';
const CompanyValues = () => {
    const values = [
        {
            title: 'Integrity',
            shortDescription: `We believe that integrity is the foundation of all our actions...`,
            fullDescription: `<p>We believe that <span class="${styles.highlight}">integrity</span> is the foundation of all our actions.
        We are committed to conducting our business with the highest <span class="${styles.highlight}">ethical standards</span>,
        being honest and accountable in every decision we make.</p>
        <p>Our dedication to <span class="${styles.highlight}">integrity</span> builds trust with clients, partners, and communities.
        We strive to maintain these values in all our interactions, fostering long-term relationships based on mutual respect.</p>`
        },
        {
            title: 'Safety',
            shortDescription: `Safety is our top priority. We create a safe work environment...`,
            fullDescription: `<p><span class="${styles.highlight}">Safety</span> is our top priority. We create a safe work environment for all employees, clients,
        and communities, with protocols designed to prevent accidents and injuries.</p>
        <p>We continuously invest in training and education to stay updated with the latest safety standards,
        fostering a culture of <span class="${styles.highlight}">safety</span> where employees actively maintain a secure workplace.</p>`
        },
        {
            title: 'Quality',
            shortDescription: `Quality is at the heart of everything we do. We are dedicated...`,
            fullDescription: `<p><span class="${styles.highlight}">Quality</span> is at the heart of everything we do. We are dedicated to delivering exceptional products
        and services that meet the highest standards of excellence, ensuring client satisfaction.</p>
        <p>We take pride in our attention to detail and our ability to exceed expectations,
        continuously seeking new ways to enhance the <span class="${styles.highlight}">quality</span> of our work.</p>`
        },
        {
            title: 'Innovation',
            shortDescription: `Innovation drives our success. We foster a culture of creativity...`,
            fullDescription: `<p><span class="${styles.highlight}">Innovation</span> drives our success. We foster a culture of creativity and forward-thinking
        to meet the evolving needs of our clients with innovative solutions.</p>
        <p>By embracing <span class="${styles.highlight}">innovation</span> and investing in cutting-edge technology,
        we provide efficient and effective solutions, encouraging fresh ideas and continuous improvement.</p>`
        }
    ];
    const [expanded, setExpanded] = useState(Array(values.length).fill(false));
    const toggleReadMore = (index) => {
        setExpanded((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.subtitle, children: "OUR COMPANY VALUES" }), _jsx("div", { className: styles.values, children: values.map((value, index) => (_jsxs("div", { className: `${styles.value} ${index % 2 === 0 ? styles.higher : styles.lower}`, children: [_jsx("h3", { className: styles.title, children: value.title }), _jsx("div", { dangerouslySetInnerHTML: { __html: expanded[index] ? value.fullDescription : value.shortDescription } }), _jsx("button", { className: styles.readMoreButton, onClick: () => toggleReadMore(index), children: expanded[index] ? 'Read Less' : 'Read More' })] }, index))) })] }));
};
export default CompanyValues;
