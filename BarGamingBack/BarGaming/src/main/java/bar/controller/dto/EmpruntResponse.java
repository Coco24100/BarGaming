package bar.controller.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import bar.model.Client;
import bar.model.Emprunt;
import bar.model.JeuxSociete;

public class EmpruntResponse {
	private Integer id;

	private LocalDate dateEmprunt;

	private ClientResponse client = new ClientResponse();

	private JeuxResponse jeu = new JeuxResponse();

	public EmpruntResponse() {
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

	public ClientResponse getClient() {
		return client;
	}

	public void setClient(ClientResponse client) {
		this.client = client;
	}

	public JeuxResponse getJeu() {
		return jeu;
	}

	public void setJeu(JeuxResponse jeu) {
		this.jeu = jeu;
	}

	public void fromEmprunt(Emprunt emprunt) {
		BeanUtils.copyProperties(emprunt, this);

		if (emprunt.getClient() != null) {
			client.fromClient(emprunt.getClient());
		}
		if(emprunt.getJeu() != null) {
		jeu.fromJeux(emprunt.getJeu());
		}
	}

}
