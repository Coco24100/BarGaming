package bar.controller.dto;

import org.springframework.beans.BeanUtils;

import bar.model.Jeux;
import bar.model.Plateforme;

public class JeuxResponse {

	private Integer id;
	private String nom;
	private Plateforme plateforme;
	
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
	public Plateforme getPlateforme() {
		return plateforme;
	}
	public void setPlateforme(Plateforme plateforme) {
		this.plateforme = plateforme;
	}
	
	public void fromJeux(Jeux j)
	{
		BeanUtils.copyProperties(j, this);
	}
	
}
