package bar.model;

import java.time.LocalDateTime;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	@Column
	private Compte client;
	
	@Column(nullable = false)
	private LocalDateTime dateReservation;
	
	@Column
	@ManyToOne
	private Evenement evenement ;
	
	
	
	public Reservation() {
	}

	public Reservation(Compte client, LocalDateTime dateReservation, Evenement evenement) {
		super();
		this.client = client;
		this.dateReservation = dateReservation;
		this.evenement = evenement;
	}
	
	public Reservation(Integer id, Compte client, LocalDateTime dateReservation, Evenement evenement) {
		super();
		this.id = id;
		this.client = client;
		this.dateReservation = dateReservation;
		this.evenement = evenement;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Compte getClient() {
		return client;
	}

	public void setClient(Compte client) {
		this.client = client;
	}

	public LocalDateTime getDateReservation() {
		return dateReservation;
	}

	public void setDateReservation(LocalDateTime dateReservation) {
		this.dateReservation = dateReservation;
	}

	public Evenement getEvenement() {
		return evenement;
	}

	public void setEvenement(Evenement evenement) {
		this.evenement = evenement;
	}
	
	
	
	

}
