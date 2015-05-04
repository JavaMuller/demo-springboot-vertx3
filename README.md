# demo-springboot-vertx3
A poc of a multi module springboot application embedding vertx3 and using Apex as web server.

The structure of the project is the following:

```
parent
  |- backend
  |- web
  |- build
```

where:
- "backend" is the server side java part, it starts an Apex instance on port 8080;
- "web" contains a nodejs project to build the static html/css/js resources. Those resources are then added to the classpath through a dedicated jar file;
- "build" uses the springboot maven plugin to build a fat jar that contains the backend and the web dependencies

# Requirements
- jdk 1.8
- maven 3.2.x

# How to build and use it
From the parent folder
```
mvn clean package
```

This step performs also a complete build of the nodejs project and add the produced files in the classpath.


Finally, the springboot application can be started:
```
java -jar build/target/build-0.0.1-SNAPSHOT.jar
```

Open http://localhost:8080/index.html in your browser.
