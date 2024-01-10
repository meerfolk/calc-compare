FROM bellsoft/liberica-openjdk-alpine:17 

WORKDIR /workspace/app

COPY mvnw .

COPY .mvn .mvn

COPY pom.xml .

COPY src src

CMD ["/bin/sh", "/workspace/app/mvnw", "spring-boot:run"]
