pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-jenkins-php'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/muhananaufal/simple-notes-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${env.BUILD_NUMBER}", "./backend")
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    sh "docker push ${IMAGE_NAME}:${env.BUILD_NUMBER}"
                    sh "docker push ${IMAGE_NAME}:latest"
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh "docker stop ${IMAGE_NAME} || true"
                    sh "docker rm ${IMAGE_NAME} || true"
                    sh "docker run -d --name ${IMAGE_NAME} -p 3000:3000 ${IMAGE_NAME}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}
