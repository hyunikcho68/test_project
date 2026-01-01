# Container Monitoring Dashboard

A lightweight, real-time dashboard for monitoring container or system resources (CPU, Memory, Uptime). Built with Node.js and designed to be deployed on Kubernetes.

![Preview](https://via.placeholder.com/800x400?text=Dashboard+Preview)

## Features

- **Real-time Monitoring**: Visualizes CPU load and Memory usage with live progress bars.
- **REST API**: Exposes metrics via `/api/metrics` endpoint.
- **Container Ready**: Includes Dockerfile and Kubernetes manifests for easy deployment.
- **Modern UI**: Clean, dark-mode interface using native CSS.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Infrastructure**: Docker, Kubernetes

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker
- Kubernetes (Minikube, Docker Desktop, or Cloud Provider)

### Local Development

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Start the server:**
    ```bash
    npm start
    ```
    Access the dashboard at `http://localhost:3000`.

### Docker Deployment

1. **Build the image:**
    ```bash
    docker build -t monitoring-dashboard .
    ```

2. **Run the container:**
    ```bash
    docker run -p 3000:3000 monitoring-dashboard
    ```

### Kubernetes Deployment

1. **Apply manifests:**
    ```bash
    kubectl apply -f k8s/
    ```

2. **Access the service:**
    - If using LoadBalancer (Docker Desktop/Cloud): Access via `http://localhost` or the external IP.
    - If using Minikube:
        ```bash
        minikube service monitoring-dashboard
        ```

## Project Structure

```
├── public/             # Frontend assets (HTML, CSS, JS)
├── k8s/                # Kubernetes manifests
│   ├── deployment.yaml
│   └── service.yaml
├── server.js           # Express application & Metrics logic
├── Dockerfile          # Container definition
└── package.json
```

## License

ISC
