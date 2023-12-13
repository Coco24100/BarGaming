package BarGaming.model;

public class Client {

	private Integer id;
	private String nom ;
	private String prenom ;
	
	
	
	public Client(Integer id, String nom, String prenom) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
	}
	
	public Client(String nom, String prenom) {
		super();
		
		this.nom = nom;
		this.prenom = prenom;
	}
	
	public Client() {
		// TODO Auto-generated constructor stub
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
	
	
	
	
	
	
}
