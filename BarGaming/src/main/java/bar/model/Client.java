package bar.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("client")
public class Client extends Compte{
	public Client() {}

	public Client(Integer id, String nom, String prenom) {
		super(id, nom, prenom);
		// TODO Auto-generated constructor stub
	}

	public Client(String nom, String prenom) {
		super(nom, prenom);
		// TODO Auto-generated constructor stub
	}
	

}
