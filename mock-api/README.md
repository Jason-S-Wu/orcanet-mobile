# Orcanet Mobile API

This is an Express app that serves as a mock API for Orcanet Mobile. It provides various routes to simulate different functionalities.

## Installation

1. Install dependencies: `npm install`

## Usage

Start the server by running `npm start`. The API will be available at `http://localhost:3000`.

### Routes

#### GET /hash/:filehash

Returns the file details along with their peers.

#### GET /getBalance

Returns the balance of the current user.

#### GET /getBalance/:userHash

Returns the balance of another user specified by `userHash`.

#### GET /getFile/:filehash

Downloads the file specified by `filehash`.

#### GET /getFileByChunk/:filehash/:chunksize/:chunkindex

Downloads a specific chunk of the file specified by `filehash`. The `chunksize` and `chunkindex` parameters determine the size and index of the chunk.
