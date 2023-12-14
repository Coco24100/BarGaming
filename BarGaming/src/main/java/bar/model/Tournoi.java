package bar.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;


@Entity
@DiscriminatorValue("tournoi")
public class Tournoi extends Evenement {

	
	public Tournoi() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tournoi(Integer id, String nom, LocalDate date, LocalTime horaireDebut, LocalTime horaireFin,
			List<Reservation> reservations) {
		super(id, nom, date, horaireDebut, horaireFin, reservations);
		// TODO Auto-generated constructor stub
	}

	public Tournoi(String nom, LocalDate date, LocalTime horaireDebut, LocalTime horaireFin,
			List<Reservation> reservations) {
		super(nom, date, horaireDebut, horaireFin, reservations);
		// TODO Auto-generated constructor stub
	}


}
