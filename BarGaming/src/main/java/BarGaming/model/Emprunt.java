package BarGaming.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;

@Entity
@Table(name="Location")
public class Emprunt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private LocalDate dateEmprunt;
	
	@Column
	@ManyToOne
	private Compte client;
	
	@Column
	@ManyToOne
	private JeuxSociete jeuxSociete;

	public Emprunt(LocalDate dateEmprunt, Compte client, JeuxSociete jeuxSociete) {
		super();
		this.dateEmprunt = dateEmprunt;
		this.client = client;
		this.jeuxSociete = jeuxSociete;
	}

	public Emprunt(Integer id, LocalDate dateEmprunt, Compte client, JeuxSociete jeuxSociete) {
		super();
		this.id = id;
		this.dateEmprunt = dateEmprunt;
		this.client = client;
		this.jeuxSociete = jeuxSociete;
	}

	public Emprunt() {
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDateEmprunt() {
		return dateEmprunt;
	}

	public void setDateEmprunt(LocalDate dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}

	public Compte getClient() {
		return client;
	}

	public void setClient(Compte client) {
		this.client = client;
	}

	public JeuxSociete getJeuxSociete() {
		return jeuxSociete;
	}

	public void setJeuxSociete(JeuxSociete jeuxSociete) {
		this.jeuxSociete = jeuxSociete;
	}

}
