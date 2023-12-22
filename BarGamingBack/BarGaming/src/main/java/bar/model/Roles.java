package bar.model;

public enum Roles {
	CLIENT, ADMIN;
	
	public String authority() {
		return "ROLE_" + name();
	}
}

