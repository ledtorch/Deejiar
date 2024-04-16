# Deejair
Deejair is designed to help users easily find stores and locations using a map-based interface. The platform is comprised of three main components and a data directory, each tailored to enhance user and administrative experiences:

## App
> Vue 3.4 and Vite 5.2
This is Deejair's user-facing front end, created with Vue 3.4 and Vite 5.2 It serves as the main interface for users to interact with the map and is accessible at deejiar.com.

## Datacenter
> Vue 3.4 and Vite 5.2
This application provides a front-end UI for administrative tasks and management of the backend. It's available at deejiar.com/admin.

## Flask
This is the server-side component, developed with Python3 and Flask framework, using a PostgreSQL database. It handles the server logic and database operations for both the 'App' and the 'Datacenter'.

## Data directory
The directory that stores static files like stores.json

## Server
The entire system is set up on an Ubuntu 22.04.2 LTS server and 1.18 Nginx