package BarGaming.model;

import java.time.LocalDateTime;

public class Reservation {
	
	protected Integer id;
	private Compte client;
	private LocalDateTime dateReservation;
	private Evenement evenement ;
	
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
