package BarGaming.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name="Evenement")
public class Evenement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;

	
	@Column
	protected String nom;
	@Column
	protected LocalDate date;
	@Column
	protected LocalTime horaireDebut;
	@Column
	protected LocalTime horaireFin;
	
	@OneToMany(mappedBy = "evenement")
	private List<Reservation> reservations ;
	
	


	public Evenement(String nom, LocalDate date, LocalTime horaireDebut, LocalTime horaireFin,
			List<Reservation> reservations) {
		super();
		this.nom = nom;
		this.date = date;
		this.horaireDebut = horaireDebut;
		this.horaireFin = horaireFin;
		this.reservations = reservations;
	}
	
	

	public Evenement(Integer id, String nom, LocalDate date, LocalTime horaireDebut, LocalTime horaireFin,
			List<Reservation> reservations) {
		super();
		this.id = id;
		this.nom = nom;
		this.date = date;
		this.horaireDebut = horaireDebut;
		this.horaireFin = horaireFin;
		this.reservations = reservations;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getHoraireDebut() {
		return horaireDebut;
	}

	public void setHoraireDebut(LocalTime horaireDebut) {
		this.horaireDebut = horaireDebut;
	}

	public LocalTime getHoraireFin() {
		return horaireFin;
	}

	public void setHoraireFin(LocalTime horaireFin) {
		this.horaireFin = horaireFin;
	}



	public List<Reservation> getReservations() {
		return reservations;
	}



	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}
	
	

}
