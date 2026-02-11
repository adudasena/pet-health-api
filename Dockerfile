# 1. Usar uma imagem do Java 21
FROM eclipse-temurin:21-jdk-jammy

# 2. Definir a pasta de trabalho dentro do container
WORKDIR /app

# 3. Copiar o arquivo JAR que o Maven gerou (na pasta target) para dentro do container
COPY target/*.jar app.jar

# 4. Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]