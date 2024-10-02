# Nova Performance

## Overview

**Nova Performance** is an independent gym and strength sports facility. This project involved the redesign and rebuild of the website as a full-stack application to enhance user experience and engagement.

## Motivations

- **Freelance project opportunity**: Opportunity to redesign and rebuild the current Nova Performance website, and gain exposure to freelancing; collaborating with clients
- **Enhance User Engagement**: Create an interactive and engaging platform that reflects the vibrant community and services offered by Nova Performance.
- **Showcase Services**: Provide clear and accessible information about gym memberships, training programs, and events to attract new clients.
- **Streamline the Checkout Process**: Implement secure and efficient payment options to simplify the purchasing experience for users.
- **Utilize Modern Technologies**: Leverage contemporary web development technologies to ensure a fast, responsive, and visually appealing user experience.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: For type safety and improved development experience.
- **TailwindCSS**: A utility-first CSS framework for responsive design.
- **Framer Motion**: For animations and smooth transitions.
- **Stripe API**: To facilitate secure checkout sessions.
- **EmailJS SDK**: To send emails directly from form submissions.

## Project Description

This project aimed to create a functional and visually appealing website for Nova Performance, providing users with a seamless browsing and purchasing experience for gym memberships and services.

## Features

- **User-Friendly Interface**: A clean, intuitive design that enhances user interaction.
- **Responsive Design**: Fully responsive layout to ensure accessibility on all devices, thanks to TailwindCSS.
- **Smooth Animations**: Engaging user experience with animations powered by Framer Motion.
- **Secure Checkout**: Stripe API integration for safe and efficient payment processing.
- **Email Notifications**: Automated email responses upon form submissions using EmailJS.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/nova-performance.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd nova-performance
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables**: Create a `.env.local` file in the project root and add your environment variables as follows:
   ```bash
   STRIPE_API_KEY=<your_stripe_api_key>
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=<your_api_key>
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<your_api_key>
    NEXT_PUBLIC_EMAILJS_GENERAL_INQUIRY_TEMPLATE_ID=<your_api_key>
    NEXT_PUBLIC_EMAILJS_USER_ID=<your_api_key>
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! If you have suggestions for new features, improvements, or bug fixes, please submit a pull request or open an issue on GitHub.

### How to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [joshuaecapito22@gmail.com](mailto:joshuaecapito22@gmail.com).
