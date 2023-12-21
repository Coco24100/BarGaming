package bar.controller.dto;

import org.springframework.beans.BeanUtils;

import bar.model.Client;


public class ClientResponse {
	private Integer id;

	private String nom ;

	private String prenom ;

	public ClientResponse() {
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

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public void fromClient(Client client) {
		BeanUtils.copyProperties(client, this);
}
}
