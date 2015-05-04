package demo.config;

import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.apex.Router;
import io.vertx.ext.apex.handler.StaticHandler;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApexConfig {

	@Value("${server.port:8080}")
	private int port;

	@Bean
	public Router apexRouter(Vertx vertx) {
		HttpServer server = vertx.createHttpServer();
		Router router = Router.router(vertx);

		//The default static file directory is webroot
		router.route("/*").handler(StaticHandler.create());

		server.requestHandler(router::accept).listen(port);
		return router;
	}

}
