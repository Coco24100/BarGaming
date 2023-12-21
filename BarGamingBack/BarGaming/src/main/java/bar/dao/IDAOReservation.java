package bar.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import bar.model.Reservation;
import bar.model.Tournoi;

public interface IDAOReservation extends JpaRepository<Reservation,Integer>{

	@Query("from Tournoi")
	public List<Tournoi> findAllTournoi();
}
