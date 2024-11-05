# Project Starter Setups

This repository contains a collection of predefined setups using Docker, various programming languages, and corresponding databases. The goal is to streamline the setup process for new projects, so you can skip repetitive configurations and get started faster.

## Repository Structure

Each folder includes a specific setup for a programming language and its associated database environment. Inside each setup folder, you'll find all the necessary configuration files and instructions to launch the environment quickly.

Each folder contains:

- **Dockerfile**: The configuration file to build the environment.
- **docker-compose.yaml**: A preconfigured file to orchestrate services.
- **README.md**: Folder-specific documentation and instructions.
- **Other** files and folders for the setup of the various environment.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DanioFiore/projects-setups.git
   cd project-setups

2. **Navigate to the setup folder** for the environment you need, for example:
    ```bash
    cd node-express-postgress

3. **Run Docker Compose** to start the services:
    ```bash
    docker-compose up -d

4. **Access the environment** as documented in each folder's README.md file

## Contributing
Feel free to contribute additional setups or improve existing ones. Please make sure to follow the repository structure and add relevant documentation to help others use the setups effectively.


