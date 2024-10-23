package vehicle_server_backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vehicle_server_backend.demo.entity.Reservation;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUsername(String username);
}
