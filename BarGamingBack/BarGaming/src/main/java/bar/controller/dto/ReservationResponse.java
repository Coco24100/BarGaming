package bar.controller.dto;

import java.time.LocalDateTime;

import org.springframework.beans.BeanUtils;


import bar.model.Reservation;


public class ReservationResponse {

	protected Integer id;
	private ClientResponse client;
	private LocalDateTime dateReservation;
	private EvenementResponse evenement;
	
	

	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}







	public ClientResponse getClient() {
		return client;
	}



	public void setClient(ClientResponse client) {
		this.client = client;
	}



	public LocalDateTime getDateReservation() {
		return dateReservation;
	}



	public void setDateReservation(LocalDateTime dateReservation) {
		this.dateReservation = dateReservation;
	}






	public EvenementResponse getEvenement() {
		return evenement;
	}



	public void setEvenement(EvenementResponse evenement) {
		this.evenement = evenement;
	}



	public void fromReservation(Reservation r) {
		
		BeanUtils.copyProperties(r, this);
		client.fromClient(r.getClient());
		evenement.fromEvenement(r.getEvenement());

	}
}
