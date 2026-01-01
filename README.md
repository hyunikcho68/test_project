# 컨테이너 모니터링 대시보드 (Container Monitoring Dashboard)

컨테이너 및 시스템 리소스(CPU, 메모리, 가동 시간)를 모니터링하기 위한 경량 실시간 대시보드입니다. Node.js로 구축되었으며 Kubernetes 배포를 위해 설계되었습니다.

![미리보기](https://via.placeholder.com/800x400?text=Dashboard+Preview)

## 주요 기능

- **실시간 모니터링**: 라이브 프로그레스 바를 통해 CPU 부하 및 메모리 사용량을 시각화합니다.
- **REST API**: `/api/metrics` 엔드포인트를 통해 메트릭 데이터를 제공합니다.
- **컨테이너 최적화**: Dockerfile 및 Kubernetes 매니페스트가 포함되어 있어 즉시 배포 가능합니다.
- **모던 UI**: Native CSS를 사용한 깔끔한 다크 모드 인터페이스를 제공합니다.

## 기술 스택

- **Backend**: Node.js, Express
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Infrastructure**: Docker, Kubernetes

## 시작하기 (Getting Started)

### 사전 요구 사항

- Node.js (v18+)
- Docker
- Kubernetes (Minikube, Docker Desktop, 또는 Cloud Provider)

### 로컬 개발 환경 실행

1. **의존성 설치:**
    ```bash
    npm install
    ```

2. **서버 시작:**
    ```bash
    npm start
    ```
    브라우저에서 `http://localhost:3000`으로 접속하여 대시보드를 확인합니다.

### Docker 배포

1. **이미지 빌드:**
    ```bash
    docker build -t monitoring-dashboard .
    ```

2. **컨테이너 실행:**
    ```bash
    docker run -p 3000:3000 monitoring-dashboard
    ```

### Kubernetes 배포

1. **매니페스트 적용:**
    ```bash
    kubectl apply -f k8s/
    ```

2. **서비스 접속:**
    - LoadBalancer 사용 시 (Docker Desktop/Cloud): `http://localhost` 또는 외부 IP로 접속
    - Minikube 사용 시:
        ```bash
        minikube service monitoring-dashboard
        ```

## 프로젝트 구조

```
├── public/             # 프론트엔드 리소스 (HTML, CSS, JS)
├── k8s/                # Kubernetes 매니페스트
│   ├── deployment.yaml
│   └── service.yaml
├── server.js           # Express 애플리케이션 및 메트릭 로직
├── Dockerfile          # 컨테이너 정의 파일
└── package.json
```

## 라이선스

ISC
