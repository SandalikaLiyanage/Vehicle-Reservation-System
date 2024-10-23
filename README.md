# Vehicle Reservation System

This project is a secure web application that allows users to log in, make vehicle service reservations, and manage their reservations. The application is built using **React** for the frontend and **Spring Boot** for the backend, integrated with **Asgardeo** for OAuth2-based authentication and deployed on **Tomcat Server**.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Environment Configuration](#environment-configuration)
- [Deploying to Tomcat](#deploying-to-tomcat)
- [Security Considerations](#security-considerations)

## Technologies Used
- **Frontend**: React, Material-UI (MUI)
- **Backend**: Spring Boot, MySQL, Spring Security, Asgardeo (OAuth2)
- **Authentication**: OAuth2 via Asgardeo Identity Provider (IDP)
- **Database**: MySQL
- **Deployment**: Apache Tomcat Server

## Features
- User login and registration with OAuth2 authentication via Asgardeo.
- Secure user profile management.
- Vehicle reservation functionality with detailed form submissions.
- Real-time validation of user inputs.
- Outlier detection and data cleaning during model training.
- API security using JWT tokens.

## Setup and Installation

### Prerequisites
Ensure the following tools are installed on your machine:
- Java 17+
- Maven
- Node.js & npm
- MySQL
- Apache Tomcat 9.x

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vehicle-reservation-system.git
cd vehicle-reservation-system
cd backend
mvn clean install
```sql
CREATE DATABASE vehicle_db;
```bash
cd frontend
mvn spring-boot:run
npm start

### Environment Configuration
You need to configure some environment variables for the application, particularly for database credentials and OAuth2 authentication.

Create a .env file in the root directory with the following content:
npm install
DATABASE_URL=jdbc:mysql://localhost:3306/vehicle_db
DB_USERNAME=root
DB_PASSWORD=yourpassword
OIDC_CLIENT_ID=your-client-id
OIDC_CLIENT_SECRET=your-client-secret

