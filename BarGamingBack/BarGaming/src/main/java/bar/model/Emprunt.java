package bar.model;

import java.time.LocalDate;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;

@Entity
@Table(name="location")
public class Emprunt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false)
	private LocalDate dateEmprunt;
	
	@JoinColumn
	@ManyToOne
	private Client client;
	
	@JoinColumn
	@ManyToOne
	private Jeux jeu;

	public Emprunt(LocalDate dateEmprunt, Client client, Jeux jeu) {
		super();
		this.dateEmprunt = dateEmprunt;
		this.client = client;
		this.jeu = jeu;
	}

	public Emprunt(Integer id, LocalDate dateEmprunt, Client client, Jeux jeu) {
		super();
		this.id = id;
		this.dateEmprunt = dateEmprunt;
		this.client = client;
		this.jeu = jeu;
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

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Jeux getJeu() {
		return jeu;
	}

	public void setJeu(Jeux jeu) {
		this.jeu = jeu;
	}

}
