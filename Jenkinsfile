pipeline {
    agent any
    environment {
        BACKEND_IMAGE = 'simple-notes-app-backend'
        FRONTEND_IMAGE = 'simple-notes-app-frontend'
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'frontend/simple-notes-app'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/loremrey/simple-notes-app.git'
            }
        }
        stage('Build Backend Image') {
            steps {
                dir(BACKEND_DIR) {
                    script {
                        docker.build("${BACKEND_IMAGE}:latest")
                    }
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                dir(FRONTEND_DIR) {
                    script {
                        docker.build("${FRONTEND_IMAGE}:latest")
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image("${BACKEND_IMAGE}:latest").run('-p 5000:5000')
                    docker.image("${FRONTEND_IMAGE}:latest").run('-p 3000:3000')
                }
            }
        }
    }
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
