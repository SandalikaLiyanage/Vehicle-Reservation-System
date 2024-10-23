package vehicle_server_backend.demo.controller;


import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OAuth2Controller {

    @GetMapping("/oauth2/callback")
    public String handleOAuth2Callback(JwtAuthenticationToken token) {
        // Get user info from token
        String username = token.getToken().getClaim("username");
        String email = token.getToken().getClaim("email");

        return "Authenticated user: " + username + " (" + email + ")";
    }
}
