package bar.model;

import jakarta.persistence.DiscriminatorValue;

@DiscriminatorValue("societe")
public class JeuxSociete extends Jeux{

	public JeuxSociete() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JeuxSociete(Integer id, String nom) {
		super(id, nom);
		// TODO Auto-generated constructor stub
	}

	public JeuxSociete(String nom) {
		super(nom);
		// TODO Auto-generated constructor stub
	}

	

	


}
