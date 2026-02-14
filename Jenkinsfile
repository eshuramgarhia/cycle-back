pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/eshuramgarhia/cycle-back.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('BicycleRenterServer') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Server') {
            steps {
                dir('BicycleRenterServer') {
                    bat 'npm start'
                }
            }
        }
    }
}
