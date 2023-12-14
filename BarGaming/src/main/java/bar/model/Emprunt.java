package bar.model;

import java.time.LocalDate;

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
	private JeuxSociete jeuxSociete;

	public Emprunt(LocalDate dateEmprunt, Client client, JeuxSociete jeuxSociete) {
		super();
		this.dateEmprunt = dateEmprunt;
		this.client = client;
		this.jeuxSociete = jeuxSociete;
	}

	public Emprunt(Integer id, LocalDate dateEmprunt, Client client, JeuxSociete jeuxSociete) {
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

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public JeuxSociete getJeuxSociete() {
		return jeuxSociete;
	}

	public void setJeuxSociete(JeuxSociete jeuxSociete) {
		this.jeuxSociete = jeuxSociete;
	}

}
