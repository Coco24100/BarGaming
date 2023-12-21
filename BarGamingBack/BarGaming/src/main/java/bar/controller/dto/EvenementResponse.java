package bar.controller.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.beans.BeanUtils;

import bar.model.Evenement;


public class EvenementResponse {

	protected Integer id;

	protected String nom;

	protected LocalDate date;

	protected LocalTime horaireDebut;

	protected LocalTime horaireFin;

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



	public void fromEvenement(Evenement e) {
		BeanUtils.copyProperties(e, this);

	}

}
