package vehicle_server_backend.demo;



import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;

@Component
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/**").authenticated()  // Secure API endpoints
                                .anyRequest().permitAll()  // Allow all other requests
                )
                .oauth2ResourceServer(oauth2 -> oauth2.jwt());  // Enable JWT authentication
        return http.build();
    }
}
