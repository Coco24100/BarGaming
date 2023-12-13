package BarGaming.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class Evenement {

	protected Integer id;
	protected List<Client> participants = new ArrayList<Client>();
	protected String nom;
	protected LocalDate date;
	protected LocalTime horaireDebut;
	protected LocalTime horaireFin;

	public Evenement(List<Client> participants, String nom, LocalDate date, LocalTime horaireDebut,
			LocalTime horaireFin) {
		super();
		this.participants = participants;
		this.nom = nom;
		this.date = date;
		this.horaireDebut = horaireDebut;
		this.horaireFin = horaireFin;
	}

	public Evenement(Integer id, List<Client> participants, String nom, LocalDate date, LocalTime horaireDebut,
			LocalTime horaireFin) {
		super();
		this.id = id;
		this.participants = participants;
		this.nom = nom;
		this.date = date;
		this.horaireDebut = horaireDebut;
		this.horaireFin = horaireFin;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Client> getParticipants() {
		return participants;
	}

	public void setParticipants(List<Client> participants) {
		this.participants = participants;
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

}
