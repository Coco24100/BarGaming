package bar.controller.dto;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import bar.model.Client;
import bar.model.Emprunt;
import bar.model.JeuxSociete;

public class EmpruntResponse {
	private Integer id;

	private LocalDate dateEmprunt;
	
	private ClientResponse client;
	
	private JeuxResponse jeuxSociete;

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

	public JeuxResponse getJeuxSociete() {
		return jeuxSociete;
	}

	public void setJeuxSociete(JeuxResponse jeuxSociete) {
		this.jeuxSociete = jeuxSociete;
	}

	public void fromEmprunt(Emprunt emprunt) {
		BeanUtils.copyProperties(emprunt, this);
		
	}


	
	

}
