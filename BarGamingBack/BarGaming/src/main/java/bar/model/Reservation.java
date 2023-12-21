package bar.model;

import java.time.LocalDateTime;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	
	@JoinColumn
	@ManyToOne
	private Client client;
	
	@Column(nullable = false)
	private LocalDateTime dateReservation;
	
	@JoinColumn
	@ManyToOne
	private Evenement evenement ;
	
	
	
	public Reservation() {
	}

	public Reservation(Client client, LocalDateTime dateReservation, Evenement evenement) {
		super();
		this.client = client;
		this.dateReservation = dateReservation;
		this.evenement = evenement;
	}
	
	public Reservation(Integer id, Client client, LocalDateTime dateReservation, Evenement evenement) {
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

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
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
