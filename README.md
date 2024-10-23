Vehicle Reservation System
This project is a secure web application that allows users to log in, make vehicle service reservations, and manage their reservations. The application is built using React for the frontend and Spring Boot for the backend, integrated with Asgardeo for OAuth2-based authentication and deployed on Tomcat Server.

Table of Contents
Technologies Used
Features
Setup and Installation
Running the Application
Environment Configuration
Deploying to Tomcat
Security Considerations
Technologies Used
Frontend: React, Material-UI (MUI)
Backend: Spring Boot, MySQL, Spring Security, Asgardeo (OAuth2)
Authentication: OAuth2 via Asgardeo Identity Provider (IDP)
Database: MySQL
Deployment: Apache Tomcat Server
Features
User login and registration with OAuth2 authentication via Asgardeo.
Secure user profile management.
Vehicle reservation functionality with detailed form submissions.
Real-time validation of user inputs.
Outlier detection and data cleaning during model training.
API security using JWT tokens.
Setup and Installation
Prerequisites
Ensure the following tools are installed on your machine:

Java 17+
Maven
Node.js & npm
MySQL
Apache Tomcat 9.x
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/vehicle-reservation-system.git
cd vehicle-reservation-system
2. Backend Setup (Spring Boot)
Navigate to the backend folder and run:
bash
Copy code
cd backend
mvn clean install
Set up your MySQL database:
sql
Copy code
CREATE DATABASE vehicle_db;
Update the application.properties with your database credentials.
3. Frontend Setup (React)
Navigate to the frontend folder and install dependencies:
bash
Copy code
cd frontend
npm install
Running the Application
1. Backend
To start the Spring Boot backend:

bash
Copy code
mvn spring-boot:run
2. Frontend
To run the React frontend:

bash
Copy code
npm start
Access the application by navigating to http://localhost:3000/ for the frontend, while the backend will run on http://localhost:8080/.

Environment Configuration
You need to configure some environment variables for the application, particularly for database credentials and OAuth2 authentication.

Create a .env file in the root directory with the following content:
plaintext
Copy code
DATABASE_URL=jdbc:mysql://localhost:3306/vehicle_db
DB_USERNAME=root
DB_PASSWORD=yourpassword
OIDC_CLIENT_ID=your-client-id
OIDC_CLIENT_SECRET=your-client-secret
Make sure to update the client ID and client secret obtained from Asgardeo when setting up your OAuth2 app.

Deploying to Tomcat
To deploy the Spring Boot application on Apache Tomcat, follow these steps:

Package the application into a .war file:
bash
Copy code
mvn clean package
Copy the generated .war file from the target directory to the webapps folder in your Tomcat installation.
Start the Tomcat server:
bash
Copy code
./catalina.sh start
Access the deployed application at http://localhost:8080/vehicle-reservation.
Security Considerations
Sensitive Data: Ensure that sensitive information such as database credentials and OIDC secrets are not hardcoded. Use environment variables instead.
JWT Tokens: All API requests are protected using JWT tokens, ensuring that only authenticated users can access secured endpoints.
OAuth2: Asgardeo is used for secure login and identity management via OAuth2 protocols.
License
This project is licensed under the MIT License. See the LICENSE file for details.

