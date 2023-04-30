import { Link } from "react-router-dom";
import "../AllCSSStyles/AboutUss.css";

const AboutUs=()=>{
    return <div id="About">
        <h1>About Us</h1>
        <p>Introducing "Webique", a modern and responsive website that incorporates all the essential features to create a smooth and efficient user experience. At the top of the page is a simple and elegant header that displays the website's logo and links, making it easy for users to access and navigate to any page on the website. On smaller screens, the navigation menu is accessible through a hamburger menu on the side, which helps to reduce clutter on the page and creates a sleek and streamlined design. In the main lead space, we have included a large and eye-catching image that draws the user's attention and sets the tone for the website. This space is perfect for showcasing the website's unique selling point or main message. The content on the website is organized in a clear and concise manner, making it easy for users to find the information they need. The content is presented in a visually appealing way, with a mix of text and engaging multimedia elements. At the bottom of the page, we have included a footer that provides important information, such as contact details, social media links, and copyright information. The footer is a great place to include any additional information that may be relevant to the user. Overall, Webique is a well-designed and user-friendly website that incorporates all the essential elements to create a great user experience. With its clean and modern design, users will find it easy to navigate and engage with the content, making it a great choice for any business or organization.
            <br/>
            <br/>
        If you have any queries or questions, please do not hesitate to <Link to="/contactus">contact us</Link>. We are always here to help and provide assistance in any way we can.
        </p>
    </div>
}

export default AboutUs;
