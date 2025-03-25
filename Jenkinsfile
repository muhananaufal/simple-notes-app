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
                // Mengambil kode sumber dari repositori
                git branch: 'main', url: 'https://github.com/muhananaufal/simple-notes-app.git'
            }
        }
        stage('Build Backend Image') {
            steps {
                dir(BACKEND_DIR) {
                    script {
                        // Membangun image Docker untuk backend
                        docker.build("${BACKEND_IMAGE}:latest")
                    }
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                dir(FRONTEND_DIR) {
                    script {
                        // Membangun image Docker untuk frontend
                        docker.build("${FRONTEND_IMAGE}:latest")
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Menjalankan container backend
                    docker.image("${BACKEND_IMAGE}:latest").run('-p 5000:5000')
                    // Menjalankan container frontend
                    docker.image("${FRONTEND_IMAGE}:latest").run('-p 3000:3000')
                }
            }
        }
    }
    post {
        always {
            // Membersihkan sumber daya setelah pipeline selesai
            sh 'docker system prune -f'
        }
    }
}
