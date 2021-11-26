pipeline {
    agent any
    stages{
        stage('Instalando Dependencias') {
            steps {
                echo '**********************'
                echo '** Building Project **'
                echo '**********************'
                bat 'npm install'
            }

        }
        stage('Suite Bogota Cancun') {
            steps {
                echo '*************************'
                echo '** Happy Path Test App **'
                echo '*************************'
                bat 'npm run test-naideth'
           }
		}
    }
}
