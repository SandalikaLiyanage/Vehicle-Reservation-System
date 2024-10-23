package vehicle_server_backend.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import vehicle_server_backend.demo.entity.Reservation;
import vehicle_server_backend.demo.repository.ReservationRepository;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping
    public List<Reservation> getUserReservations(JwtAuthenticationToken token) {
        String username = token.getToken().getClaim("username");
        return reservationRepository.findByUsername(username);
    }

    @PostMapping
    public Reservation createReservation(@RequestBody Reservation reservation, JwtAuthenticationToken token) {
        String username = token.getToken().getClaim("username");
        reservation.setUsername(username);
        return reservationRepository.save(reservation);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id, JwtAuthenticationToken token) {
        Reservation reservation = reservationRepository.findById(id).orElseThrow();
        if (reservation.getUsername().equals(token.getToken().getClaim("username"))) {
            reservationRepository.deleteById(id);
        }
    }
}