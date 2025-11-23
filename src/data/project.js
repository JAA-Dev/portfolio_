import  Image1  from "../assets/nutritrack.png";
import Image2  from "../assets/novatime.png";
import  Image3  from "../assets/puremeds.png";

export const projects = [
    {
        title: "NutriTrack",
        description: "A health monitoring system for undernourished children. NutriTrack is a digital platform designed to help healthcare workers and local agencies record and analyze data of undernourished children. It allows users to input essential information such as weight, height, and age, and instantly generates the child’s nutritional status based on the data provided.",
        tech: ["PHP", "Javascript", "Bootstrap", "MySql", "cPanel"],
        github: "https://github.com/JAA-Dev/NutriTrack",
        demo: "https://nutritrackbustos.com/",
        image: Image1,
        status: "Active",
        category: "Nutrition Tracking Web Application"
    },
    {
        title: "Nova Time",
        description: "Nova Timet is a modern e-commerce platform for selling watches. It features product filtering, real-time stock display, and a smooth checkout process. Built with XML and jQuery, the system offers user-friendly navigation for customers and a simple dashboard for admins to manage inventory and orders.",
        tech: ["PHP", "Javascript", "Bootstrap", "MySql"],
        github: "https://github.com/JAA-Dev/Nova_Time",
        demo: "https://nutritrackbustos.com/",
        image: Image2,
        status: "Active",
        category: "Watch E-commerce Website"
    },
    {
        title: "PureMeds Pharmacy",
        description: "PureMeds POS is a user-friendly Point of Sale system for pharmacies. It enables staff to manage inventory, record sales, and generate receipts with ease. With its clean interface, it streamlines operations and ensures accurate transaction tracking.",
        tech: ["Java", "MySql"],
        github: "https://github.com/JAA-Dev/Java_POS",
        demo: "https://nutritrackbustos.com/",
        image: Image3,
        status: "Not Active",
        category: "Pharmacy POS System"
    },
];