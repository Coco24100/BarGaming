package bar.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;


@Entity
@DiscriminatorValue( "admin")
public class Admin extends Compte{
	
public Admin() {}

public Admin(Integer id, String nom, String prenom) {
	super(id, nom, prenom);
	// TODO Auto-generated constructor stub
}

public Admin(String nom, String prenom) {
	super(nom, prenom);
	// TODO Auto-generated constructor stub
}


}
