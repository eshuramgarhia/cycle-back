pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Jenkins > Global Tool Configuration ch NodeJS name
    }

    environment {
        NODE_ENV = 'node_18_LTS'
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
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

    }
  }
