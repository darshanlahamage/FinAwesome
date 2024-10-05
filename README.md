# FinAwesome - Serverless Customer Experience App

### Description

**FinAwesome** is a serverless customer experience app built using React Native on the frontend and AWS Lambda with Node.js on the backend. The app allows customers to discover offers provided by their banks based on their geolocation and city. Users can:

- Sign up and log in to view available offers.
- Explore offers on a map, showing relevant stores and locations.
- Receive email notifications for personalized offers via AWS SNS.
- Schedule alerts for when a particular offer matches the user's criteria.
- Book store visits using a chatbot (implemented but not integrated due to version compatibility issues with AWS SDK in React Native).

This project aims to enhance customer engagement by delivering tailored banking offers and services based on user preferences and locations.

---

### Features

1. **User Authentication**:  
   Users can sign up and log in to the app using their email.

2. **Geolocation-based Offers**:  
   Users can view banking offers in their city and nearby stores on the map.

3. **Offer Notifications**:  
   The app sends real-time email notifications to users for offers they are interested in, leveraging AWS SNS.

4. **Chatbot**:  
   The app has a chatbot (powered by AWS Lambda) that allows users to:
   - Schedule alerts for specific offers.
   - Book store visits.
   *Note: The chatbot has been implemented but not integrated in the frontend due to React Native version limitations.*

5. **Serverless Backend**:  
   The backend is built using AWS Lambda functions to handle various features, including user creation, geolocation processing, and offer alert scheduling.

---

### Tech Stack

- **Frontend**: React Native
- **Backend**: AWS Lambda (Node.js)
- **Notifications**: AWS SNS (for email notifications)
- **Map Integration**: React Native Maps for showing offers on the map.
- **Chatbot**: AWS Lex bot (with Lambda backend to handle intents)

---

### Screenshots

1. **Login/Signup Screen**
2. **Home Screen**
3. **Offer Details**
4. **Map View**
5. **Profile Screen**
6.  **Cart**
7.  **Chatbot (not integrated)**

<div align="center">
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/loso.png" alt="Login Signup" width="300" height="550"/>
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/homescreen.png" alt="Home Screen" width="300" height="550"/>
</div>

<div align="center">
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/desc.png" alt="Offer Details" width="300" height="550"/>
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/map.png" alt="Map View" width="300" height="550"/>
</div>

<div align="center">
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/profile.png" alt="Profile Screen" width="300" height="550"/>
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/cart.png" alt="Chatbot" width="300" height="550"/>
</div>
<div align="center">
  <img src="https://github.com/darshanlahamage/FinAwesome/blob/main/FinAwesome-Frontend/assets/ss/bot.png" alt="Chatbot" width="300"/>
</div>

---

### AWS Architecture
![Screenshot 2024-09-01 223053](https://github.com/user-attachments/assets/1fbcbe01-0bd1-470b-9f18-f844ccac41b1)

1. **AWS Lambda**:  
   Handles the backend logic for the app, such as:
   - User management
   - Offer retrieval based on geolocation
   - Scheduling offer alerts
   - Booking store visits via chatbot

2. **AWS SNS**:  
   Manages email notifications for users based on the offers they are interested in.

3. **AWS Lex (Chatbot)**:  
   The chatbot interacts with users to allow them to:
   - Schedule offer alerts.
   - Book a visit to a store.
   *Note: The chatbot backend has been implemented using AWS Lambda but could not be integrated due to compatibility issues with the AWS SDK.*

---

### How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/darshanlahamage/FinAwesome.git
   cd FinAwesome
