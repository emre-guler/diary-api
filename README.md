# Diary API

A RESTful API for managing personal diaries with user authentication, friend tagging, and mood tracking capabilities.

## Features

- User authentication and authorization with JWT
- Personal diary entries with titles, content, and dates
- Mood tracking for each diary entry
- Custom book color selection for diary entries
- Friend system with tagging capabilities in diary entries
- User login history tracking
- Secure password storage with salt
- Logging system for application events

## Tech Stack

- Node.js with TypeScript
- Express.js for REST API
- PostgreSQL database
- TypeORM for database management
- JWT for authentication
- TSyringe for dependency injection

## Prerequisites

- Node.js
- PostgreSQL
- TypeScript

## Installation

1. Clone the repository:
```bash
git clone https://github.com/emre-guler/diary-api
cd diary-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure the database:
   - Create a PostgreSQL database
   - Update `ormconfig.json` with your database credentials

4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     JWT_KEY=your_jwt_secret_key
     ```

5. Start the server:
```bash
npm start
```

The server will run on `http://localhost:8080`

## Database Structure

The application uses the following main entities:

- Users: Store user information and authentication details
- Diaries: Store diary entries with mood and styling information
- UserFriends: Manage user's friend list
- DiaryTaggedFriends: Track friends tagged in diary entries
- UserLoginHistory: Track user login sessions
- Logs: System logging

## API Endpoints

- `/user`: User management routes
  - Authentication
  - Profile management
  - Friend management

## Development

To run the project in development mode:

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 