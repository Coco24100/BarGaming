package bar.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;


@Entity
@DiscriminatorValue("video")
public class JeuxVideo extends Jeux{

	@Enumerated(EnumType.STRING)
	private Plateforme plateforme;

	public Plateforme getPlateforme() {
		return plateforme;
	}

	public void setPlateforme(Plateforme plateforme) {
		this.plateforme = plateforme;
	}

	public JeuxVideo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JeuxVideo(Integer id, String nom, Plateforme plateforme) {
		super(id, nom);
		// TODO Auto-generated constructor stub
		this.plateforme=plateforme;
	}

	public JeuxVideo(String nom, Plateforme plateforme) {
		super(nom);
		// TODO Auto-generated constructor stub
		this.plateforme=plateforme;
	}
	
	
}
