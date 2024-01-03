package bar.model;


import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
    @JsonSubTypes.Type(value = Admin.class, name = "admin"),
    @JsonSubTypes.Type(value = Client.class, name = "client"),
})

@Entity
@Table(name="compte")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type_compte",columnDefinition = "ENUM('client','admin')")
public class Compte {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "Le nom d'utilisateur est forcément obligatoire")
	private String username;
	
	@Column(length = 200, nullable = false)
	@NotBlank(message = "Un mot de passe doit être saisi")
	private String password;
	
	@Column(nullable = false, length = 50)
	private String nom ;
	
	@Column(nullable = false, length = 50)
	private String prenom ;
	
	/*@ElementCollection(fetch = FetchType.EAGER)
	@JoinTable(name = "compte_roles", joinColumns = @JoinColumn(name = "users_id"))
	@Column(name = "role", nullable = false)
	@Enumerated(EnumType.STRING)
	private Set<Roles> roles = new HashSet<>(); */
	
	public Compte() {
		// TODO Auto-generated constructor stub
	}

	public Compte(Integer id, String nom, String prenom) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
	}


	public Compte(String nom, String prenom) {
		super();
		
		this.nom = nom;
		this.prenom = prenom;
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
